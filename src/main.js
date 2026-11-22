// ==========================================
// BANGLADESH TRUCK RUSH - MAIN GAME ENGINE
// ==========================================

import * as THREE from 'three';
import { CONFIG, isMobileDevice } from './config.js';
import { GameState, STATES } from './core/GameState.js';
import { InputManager } from './core/InputManager.js';
import { CameraController } from './core/CameraController.js';
import { SoundManager } from './audio/SoundManager.js';
import { DeshiTruck } from './models/DeshiTruck.js';
import { DeshiRickshaw } from './models/DeshiRickshaw.js';
import { DeshiCNG } from './models/DeshiCNG.js';
import { RoadManager } from './world/RoadManager.js';
import { Environment } from './world/Environment.js';
import { TrafficManager } from './world/TrafficManager.js';
import { ParticleSystem } from './effects/ParticleSystem.js';
import { SpeedLines } from './effects/SpeedLines.js';
import { UIManager } from './ui/UIManager.js';

class BangladeshTruckGame {
  constructor() {
    this.container = document.getElementById('canvas-container');

    // 1. Core Subsystems
    this.gameState = new GameState();
    this.inputManager = new InputManager();
    this.soundManager = new SoundManager();
    this.uiManager = new UIManager(this.soundManager);

    // 2. Three.js Scene Setup
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      CONFIG.CAMERA.BASE_FOV,
      window.innerWidth / window.innerHeight,
      0.1,
      900
    );

    this.isMobile = isMobileDevice();

    this.renderer = new THREE.WebGLRenderer({
      antialias: !this.isMobile, // Disable MSAA on mobile for huge fillrate saving
      powerPreference: 'high-performance',
      precision: this.isMobile ? 'mediump' : 'highp',
      stencil: false,
      depth: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Dynamic DPR clamping: 1.35 on mobile (crystal-clear on AMOLED/Retina, 50%+ less fragment load), 2.0 on desktop
    const initialDpr = this.isMobile
      ? Math.min(window.devicePixelRatio, 1.35)
      : Math.min(window.devicePixelRatio, 2.0);
    this.renderer.setPixelRatio(initialDpr);

    this.renderer.shadowMap.enabled = true;
    // Fast 1-tap hardware PCF on mobile; multi-tap PCFSoft on desktop
    this.renderer.shadowMap.type = this.isMobile ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.container.appendChild(this.renderer.domElement);

    // 3. Rural Bangladesh World Entities
    this.environment = new Environment(this.scene);
    this.roadManager = new RoadManager(this.scene);

    // 4. Authentic Bangladeshi Player Vehicles (Truck, Rickshaw, CNG)
    this.vehicles = {
      truck: new DeshiTruck(),
      rickshaw: new DeshiRickshaw(),
      cng: new DeshiCNG()
    };

    Object.values(this.vehicles).forEach((v) => {
      this.scene.add(v.group);
      v.group.visible = false;
    });

    this.currentVehicleType = localStorage.getItem('og_race_vehicle') || 'truck';
    if (!this.vehicles[this.currentVehicleType]) {
      this.currentVehicleType = 'truck';
    }

    this.playerVehicle = this.vehicles[this.currentVehicleType];
    this.playerVehicle.group.visible = true;
    this.playerTruck = this.playerVehicle;

    this.soundManager.setVehicleType(this.currentVehicleType);
    this.uiManager.setSelectedVehicle(this.currentVehicleType);

    this.trafficManager = new TrafficManager(this.scene);
    this.particleSystem = new ParticleSystem(this.scene);
    this.speedLines = new SpeedLines(this.scene);
    this.cameraController = new CameraController(this.camera);
    this.cameraController.setVehicleType(this.currentVehicleType);

    // Timing & State
    this.clock = new THREE.Clock();
    this.menuTime = 0;
    this.wasBoosting = false;
    this.wasBraking = false;

    // Pre-allocated vectors for 60 FPS zero-GC tire smoke
    this._leftRearPos = new THREE.Vector3();
    this._rightRearPos = new THREE.Vector3();

    this.bindEvents();
    this.initGame();
  }

  setVehicle(type) {
    if (!this.vehicles[type]) return;
    this.currentVehicleType = type;
    localStorage.setItem('og_race_vehicle', type);

    Object.entries(this.vehicles).forEach(([k, v]) => {
      v.group.visible = (k === type);
    });

    this.playerVehicle = this.vehicles[type];
    this.playerTruck = this.playerVehicle;
    this.soundManager.setVehicleType(type);
    this.cameraController.setVehicleType(type);
    this.cameraController.init(this.playerVehicle);
  }

  initGame() {
    this.cameraController.init(this.playerVehicle);
    this.uiManager.setScreen(STATES.MENU, this.gameState);

    // Start Master Render Loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  bindEvents() {
    // Dynamic Window Resize & Mobile Orientation Handling
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
      this.isMobile = isMobileDevice();
      const dpr = this.isMobile
        ? Math.min(window.devicePixelRatio, 1.35)
        : Math.min(window.devicePixelRatio, 2.0);
      this.renderer.setPixelRatio(dpr);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', () => {
      setTimeout(handleResize, 120);
    });

    // UI Callbacks
    this.uiManager.onStart = () => this.startGame();
    this.uiManager.onResume = () => this.resumeGame();
    this.uiManager.onRestart = () => this.restartGame();
    this.uiManager.onMainMenu = () => this.returnToMenu();
    this.uiManager.onSelectVehicle = (type) => this.setVehicle(type);

    // Pause toggle via UI or keyboard
    const togglePause = () => {
      if (this.gameState.state === STATES.PLAYING) {
        this.gameState.state = STATES.PAUSED;
        this.soundManager.stopAll();
        this.uiManager.setScreen(STATES.PAUSED, this.gameState);
      } else if (this.gameState.state === STATES.PAUSED) {
        this.resumeGame();
      }
    };
    this.uiManager.onPauseToggle = togglePause;
    this.inputManager.onPauseToggle = togglePause;
    this.inputManager.onRestart = () => {
      if (this.gameState.state === STATES.GAMEOVER || this.gameState.state === STATES.PAUSED) {
        this.restartGame();
      }
    };

    // Car Horn (Keyboard H, E, F, B or HUD/Touch buttons)
    this.inputManager.onHorn = () => this.triggerHorn();
    this.uiManager.onHorn = () => this.triggerHorn();

    // Mobile Virtual Touch Controls
    this.uiManager.onSteerLeft = () => this.inputManager.triggerSteerLeft();
    this.uiManager.onSteerRight = () => this.inputManager.triggerSteerRight();
    this.uiManager.onAccelerate = (active) => this.inputManager.setAccelerate(active);
    this.uiManager.onBrake = (active) => this.inputManager.setBrake(active);
    this.uiManager.onNitro = (active) => this.inputManager.setNitro(active);
  }

  startGame() {
    this.gameState.startNewGame();
    this.playerVehicle.reset();
    this.roadManager.reset();
    this.trafficManager.reset();
    this.particleSystem.reset();
    this.cameraController.init(this.playerVehicle);
    this.wasBoosting = false;
    this.wasBraking = false;

    this.uiManager.setScreen(STATES.PLAYING, this.gameState);
  }

  resumeGame() {
    if (this.gameState.state === STATES.PAUSED) {
      this.gameState.state = STATES.PLAYING;
      this.uiManager.setScreen(STATES.PLAYING, this.gameState);
    }
  }

  restartGame() {
    this.startGame();
  }

  returnToMenu() {
    this.gameState.state = STATES.MENU;
    this.soundManager.stopAll();
    this.playerVehicle.reset();
    this.roadManager.reset();
    this.trafficManager.reset();
    this.particleSystem.reset();
    this.uiManager.setScreen(STATES.MENU, this.gameState);
  }

  triggerHorn() {
    this.soundManager.playTruckHorn();
    this.playerVehicle.flashHorn();
    this.trafficManager.onPlayerHorn(this.playerVehicle);
    this.uiManager.showHornEffect();
  }

  onCrash(collidedVehicle) {
    this.gameState.triggerGameOver();
    this.soundManager.playCrash();
    this.soundManager.playCrashVoice(); // Realistic Bangladeshi male voice: "এটা কি করলি মামা!"
    this.soundManager.stopAll();

    // Camera violent shake
    this.cameraController.shake(1.3, 0.95);

    // Particle explosion at collision point
    const crashPos = this.playerVehicle.group.position.clone();
    crashPos.z -= 1.5;
    this.particleSystem.emitCrashEffect(crashPos);

    // Visually knock the vehicle
    this.playerVehicle.triggerCrash();

    // Show Game Over UI after brief impact shock
    setTimeout(() => {
      this.uiManager.setScreen(STATES.GAMEOVER, this.gameState);
    }, 750);
  }

  // Master Game Loop
  animate() {
    requestAnimationFrame(this.animate);

    const rawDelta = this.clock.getDelta();
    const delta = Math.min(rawDelta, 0.08);
    const elapsedTime = this.clock.getElapsedTime();

    if (this.gameState.state === STATES.MENU) {
      // Menu showcase orbit around selected Deshi vehicle
      this.menuTime += delta;
      this.cameraController.orbitMenu(this.menuTime);
      this.playerVehicle.update(0, 0, 0, false, false, delta);

      // Animate roadside cows, ducks, and environment in menu background
      this.roadManager.props.update(elapsedTime);
      this.environment.update(0, elapsedTime);
    } else if (this.gameState.state === STATES.PLAYING) {
      // 1. Process Boost interaction (Triggered on Spacebar or Mobile Boost button)
      const isBoostingNow = this.gameState.isBoosting;
      if (isBoostingNow && !this.wasBoosting) {
        this.uiManager.showTanDeMama();
        this.soundManager.shoutTanDeMama();
      }
      this.wasBoosting = isBoostingNow;

      // Air brake sound when braking
      const isBraking = this.inputManager.keys.brake;
      if (isBraking && !this.wasBraking) {
        this.soundManager.playAirBrake();
      }
      this.wasBraking = isBraking;

      // 2. Update Game Physics & State
      this.gameState.update(delta, this.inputManager);

      // 3. Move Vehicle forward along -Z and handle smooth lane shifting
      const speedMs = (this.gameState.speedKmh * 1000) / 3600;
      this.playerVehicle.group.position.z -= speedMs * delta;
      this.playerVehicle.group.position.x = this.gameState.currentLaneX;

      // Update vehicle animations (wheels, banking, lights, boost flames)
      this.playerVehicle.update(
        this.gameState.speedKmh,
        this.gameState.currentLaneX,
        this.gameState.targetLaneX,
        isBraking,
        this.gameState.isBoosting,
        delta
      );

      // Emit tire smoke on heavy braking (zero GC allocations)
      if (isBraking && this.gameState.speedKmh > 50) {
        this._leftRearPos.copy(this.playerVehicle.group.position);
        this._leftRearPos.x -= 0.85;
        this._leftRearPos.z += 1.6;
        this._rightRearPos.copy(this.playerVehicle.group.position);
        this._rightRearPos.x += 0.85;
        this._rightRearPos.z += 1.6;

        this.particleSystem.emitTireSmoke(this._leftRearPos);
        this.particleSystem.emitTireSmoke(this._rightRearPos);
      }

      // 4. Update Rural Bangladesh Road, Props, Animals & Infinite Chunks
      this.roadManager.update(this.playerVehicle.group.position.z, elapsedTime);

      // 5. Update Distant Bengali Environment & Birds
      this.environment.update(this.playerVehicle.group.position.z, elapsedTime);

      // 6. Update Traffic Vehicles (including cow-loaded trucks) & Near-Miss Detection
      this.trafficManager.update(
        this.playerVehicle,
        this.gameState.speedKmh,
        this.gameState.distanceMeters,
        delta,
        (vehicle) => {
          // Near Miss / Close Call Callback!
          const result = this.gameState.addNearMiss();
          this.soundManager.playNearMiss(result.combo);
          this.uiManager.showNearMiss(result.bonus, result.combo);
        }
      );

      // 7. Check Vehicle Collision
      const hitCar = this.trafficManager.checkCollision(this.playerVehicle);
      if (hitCar) {
        this.onCrash(hitCar);
      }

      // 8. Update Speed Lines & Camera
      this.speedLines.update(
        this.playerVehicle,
        this.gameState.speedKmh,
        this.gameState.isBoosting,
        delta
      );

      this.cameraController.update(
        this.playerVehicle,
        this.gameState.speedKmh,
        this.gameState.isBoosting,
        delta
      );

      // 9. Update Heavy Diesel Sound & Rural Ambience
      this.soundManager.update(
        this.gameState.speedKmh,
        isBraking,
        this.gameState.isBoosting,
        delta
      );

      // 10. Update UI HUD
      this.uiManager.updateHUD(this.gameState);
    } else if (this.gameState.state === STATES.GAMEOVER) {
      // Continue updating particles and slow camera settle
      this.cameraController.update(
        this.playerVehicle,
        0,
        false,
        delta
      );
      this.roadManager.props.update(elapsedTime);
      this.environment.update(this.playerVehicle.group.position.z, elapsedTime);
    }

    // Always update active particles
    this.particleSystem.update(delta);

    // Render Scene
    this.renderer.render(this.scene, this.camera);
  }
}

// Bootstrap game when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  new BangladeshTruckGame();
});
