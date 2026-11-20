// ==========================================
// BANGLADESH TRUCK RUSH - MAIN GAME ENGINE
// ==========================================

import * as THREE from 'three';
import { CONFIG } from './config.js';
import { GameState, STATES } from './core/GameState.js';
import { InputManager } from './core/InputManager.js';
import { CameraController } from './core/CameraController.js';
import { SoundManager } from './audio/SoundManager.js';
import { DeshiTruck } from './models/DeshiTruck.js';
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

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.container.appendChild(this.renderer.domElement);

    // 3. Rural Bangladesh World Entities
    this.environment = new Environment(this.scene);
    this.roadManager = new RoadManager(this.scene);

    // Authentic Bangladeshi Bedford/Tata Heavy Commercial Truck
    this.playerTruck = new DeshiTruck();
    this.scene.add(this.playerTruck.group);

    this.trafficManager = new TrafficManager(this.scene);
    this.particleSystem = new ParticleSystem(this.scene);
    this.speedLines = new SpeedLines(this.scene);
    this.cameraController = new CameraController(this.camera);

    // Timing & State
    this.clock = new THREE.Clock();
    this.menuTime = 0;
    this.wasBoosting = false;
    this.wasBoosting = false;
    this.wasBraking = false;

    this.bindEvents();
    this.initGame();
  }

  initGame() {
    this.cameraController.init(this.playerTruck);
    this.uiManager.setScreen(STATES.MENU, this.gameState);

    // Start Master Render Loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  bindEvents() {
    // Window Resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // UI Callbacks
    this.uiManager.onStart = () => this.startGame();
    this.uiManager.onResume = () => this.resumeGame();
    this.uiManager.onRestart = () => this.restartGame();
    this.uiManager.onMainMenu = () => this.returnToMenu();

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
    this.playerTruck.reset();
    this.roadManager.reset();
    this.trafficManager.reset();
    this.particleSystem.reset();
    this.cameraController.init(this.playerTruck);
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
    this.playerTruck.reset();
    this.roadManager.reset();
    this.trafficManager.reset();
    this.particleSystem.reset();
    this.uiManager.setScreen(STATES.MENU, this.gameState);
  }

  triggerHorn() {
    this.soundManager.playTruckHorn();
    this.playerTruck.flashHorn();
    this.trafficManager.onPlayerHorn(this.playerTruck);
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
    const crashPos = this.playerTruck.group.position.clone();
    crashPos.z -= 1.5;
    this.particleSystem.emitCrashEffect(crashPos);

    // Visually knock the truck
    this.playerTruck.triggerCrash();

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
      // Menu showcase orbit around Deshi Truck
      this.menuTime += delta;
      this.cameraController.orbitMenu(this.menuTime);
      this.playerTruck.update(0, 0, 0, false, false, delta);

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

      // 3. Move Truck forward along -Z and handle smooth lane shifting
      const speedMs = (this.gameState.speedKmh * 1000) / 3600;
      this.playerTruck.group.position.z -= speedMs * delta;
      this.playerTruck.group.position.x = this.gameState.currentLaneX;

      // Update truck animations (wheels, banking, lights, boost flames)
      this.playerTruck.update(
        this.gameState.speedKmh,
        this.gameState.currentLaneX,
        this.gameState.targetLaneX,
        isBraking,
        this.gameState.isBoosting,
        delta
      );

      // Emit tire smoke on heavy braking
      if (isBraking && this.gameState.speedKmh > 50) {
        const leftRear = this.playerTruck.group.position.clone();
        leftRear.x -= 1.05;
        leftRear.z += 1.85;
        const rightRear = this.playerTruck.group.position.clone();
        rightRear.x += 1.05;
        rightRear.z += 1.85;

        this.particleSystem.emitTireSmoke(leftRear);
        this.particleSystem.emitTireSmoke(rightRear);
      }

      // 4. Update Rural Bangladesh Road, Props, Animals & Infinite Chunks
      this.roadManager.update(this.playerTruck.group.position.z, elapsedTime);

      // 5. Update Distant Bengali Environment & Birds
      this.environment.update(this.playerTruck.group.position.z, elapsedTime);

      // 6. Update Traffic Vehicles (including cow-loaded trucks) & Near-Miss Detection
      this.trafficManager.update(
        this.playerTruck,
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
      const hitCar = this.trafficManager.checkCollision(this.playerTruck);
      if (hitCar) {
        this.onCrash(hitCar);
      }

      // 8. Update Speed Lines & Camera
      this.speedLines.update(
        this.playerTruck,
        this.gameState.speedKmh,
        this.gameState.isBoosting,
        delta
      );

      this.cameraController.update(
        this.playerTruck,
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
        this.playerTruck,
        0,
        false,
        delta
      );
      this.roadManager.props.update(elapsedTime);
      this.environment.update(this.playerTruck.group.position.z, elapsedTime);
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
