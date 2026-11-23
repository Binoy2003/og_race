// ==========================================
// SUPRA RUSH - GAME STATE & SCORING MANAGER
// ==========================================

import { CONFIG } from '../config.js';

export const STATES = {
  MENU: 'MENU',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  GAMEOVER: 'GAMEOVER'
};

export class GameState {
  constructor() {
    this.state = STATES.MENU;

    // Core Metrics
    this.speedKmh = CONFIG.SPEED.BASE;
    this.distanceMeters = 0;
    this.score = 0;
    this.bestScore = parseInt(localStorage.getItem('supra_rush_best_score') || '0', 10);
    this.bestDistance = parseInt(localStorage.getItem('supra_rush_best_dist') || '0', 10);

    // Near-Miss & Combo System
    this.nearMissCount = 0;
    this.combo = 1;
    this.comboTimer = 0;

    // Nitro Boost Meter
    this.nitro = 70; // starts with a healthy tank
    this.isBoosting = false;

    // Active Lane: 0 (Left), 1 (Center), 2 (Right)
    this.currentLaneIndex = 1; // starts in center lane
    this.currentLaneX = CONFIG.LANES[1];
    this.targetLaneX = CONFIG.LANES[1];

    // Crash sequence timer
    this.crashTimer = 0;
  }

  startNewGame() {
    this.state = STATES.PLAYING;
    this.speedKmh = CONFIG.SPEED.BASE_START;
    this.distanceMeters = 0;
    this.score = 0;
    this.nearMissCount = 0;
    this.combo = 1;
    this.comboTimer = 0;
    this.nitro = 60;
    this.isBoosting = false;
    this.currentLaneIndex = 1;
    this.currentLaneX = CONFIG.LANES[1];
    this.targetLaneX = CONFIG.LANES[1];
    this.crashTimer = 0;
  }

  // Request lane switch (-1 for left, 1 for right)
  switchLane(direction) {
    if (this.state !== STATES.PLAYING) return;

    const newIndex = this.currentLaneIndex + direction;
    if (newIndex >= 0 && newIndex < CONFIG.LANES.length) {
      this.currentLaneIndex = newIndex;
      this.targetLaneX = CONFIG.LANES[newIndex];
    }
  }

  // Near miss bonus registered
  addNearMiss() {
    this.nearMissCount++;
    this.combo = Math.min(CONFIG.SCORING.MAX_COMBO, this.combo + 1);
    this.comboTimer = CONFIG.SCORING.COMBO_TIMEOUT;

    const bonus = CONFIG.SCORING.NEAR_MISS_POINTS * this.combo;
    this.score += bonus;

    // Boost nitro tank
    this.nitro = Math.min(CONFIG.NITRO.MAX, this.nitro + CONFIG.NITRO.NEAR_MISS_BONUS);

    return { bonus, combo: this.combo };
  }

  update(delta, input) {
    if (this.state !== STATES.PLAYING) return;

    // 1. Process Lane Change requests
    const laneReq = input.consumeLaneChange();
    if (laneReq !== 0) {
      this.switchLane(laneReq);
    }

    // Continuous smooth steering when holding Left or Right (even while holding Spacebar/Shift Boost!)
    if (input.keys.left && !input.keys.right) {
      this.steerHoldTimer = (this.steerHoldTimer || 0) + delta;
      if (this.steerHoldTimer > 0.22) {
        this.switchLane(-1);
        this.steerHoldTimer = 0.08;
      }
    } else if (input.keys.right && !input.keys.left) {
      this.steerHoldTimer = (this.steerHoldTimer || 0) + delta;
      if (this.steerHoldTimer > 0.22) {
        this.switchLane(1);
        this.steerHoldTimer = 0.08;
      }
    } else {
      this.steerHoldTimer = 0;
    }

    // Smooth lane position interpolation
    this.currentLaneX += (this.targetLaneX - this.currentLaneX) * Math.min(1.0, delta * CONFIG.STEERING.LANE_CHANGE_SPEED);

    // 2. Combo Timer countdown
    if (this.comboTimer > 0) {
      this.comboTimer -= delta;
      if (this.comboTimer <= 0) {
        this.combo = 1;
      }
    }

    // 3. Accelerate / Brake / Nitro Logic with Progressive Race Speed Increase
    const isBraking = input.keys.brake;
    const wantsAccelerate = input.keys.accelerate;
    const wantsBoost = input.keys.boost;

    // As distance increases, base cruising speed and maximum speed gradually climb!
    const kmTraveled = this.distanceMeters / 1000;
    const progressiveBonus = Math.min(
      CONFIG.SPEED.MAX_PROGRESSIVE_BONUS,
      kmTraveled * CONFIG.SPEED.PROGRESSIVE_RATE
    );

    const currentBaseSpeed = CONFIG.SPEED.BASE_START + progressiveBonus;
    const currentMaxNormal = currentBaseSpeed + 45; // When pressing Up Arrow / W, goes fast!
    const currentBoostTarget = CONFIG.SPEED.BOOST + progressiveBonus * 0.4; // When Spacebar is pressed, rockets!

    // Nitro BOOST / GAS activation when Spacebar (desktop) or Center Boost/Gas button (mobile) is pressed
    if (wantsBoost) {
      if (this.nitro > 5) {
        this.isBoosting = true;
        this.nitro = Math.max(0, this.nitro - CONFIG.NITRO.CONSUMPTION_RATE * delta);

        // Accelerate towards dynamic BOOST speed
        this.speedKmh = Math.min(
          currentBoostTarget,
          this.speedKmh + CONFIG.SPEED.BOOST_ACCEL * delta
        );
      } else {
        // When nitro tank is depleted, center button seamlessly acts as Gas (maximum normal acceleration)
        this.isBoosting = false;
        this.speedKmh = Math.min(
          currentMaxNormal,
          this.speedKmh + CONFIG.SPEED.ACCELERATION * 1.6 * delta
        );
      }
    } else {
      this.isBoosting = false;

      // Passive recharge
      this.nitro = Math.min(
        CONFIG.NITRO.MAX,
        this.nitro + CONFIG.NITRO.RECHARGE_RATE * delta
      );

      if (isBraking) {
        // Hard braking: Down Arrow / S / Mobile Brake button
        this.speedKmh = Math.max(
          CONFIG.SPEED.MIN,
          this.speedKmh - CONFIG.SPEED.BRAKING * delta
        );
      } else if (wantsAccelerate) {
        // Up Arrow / W / Mobile Gas button: Accelerates car fast forward ("jore jabe gari")
        this.speedKmh = Math.min(
          currentMaxNormal,
          this.speedKmh + CONFIG.SPEED.ACCELERATION * 1.6 * delta
        );
      } else {
        // Natural cruising / settle towards progressive cruise speed
        if (this.speedKmh < currentBaseSpeed) {
          this.speedKmh = Math.min(
            currentBaseSpeed,
            this.speedKmh + CONFIG.SPEED.ACCELERATION * delta
          );
        } else if (this.speedKmh > currentBaseSpeed) {
          // Smooth deceleration after accelerating/boosting back to cruising speed
          this.speedKmh = Math.max(
            currentBaseSpeed,
            this.speedKmh - CONFIG.SPEED.NATURAL_DECEL * delta
          );
        }
      }
    }

    // 4. Distance & Score accumulation
    const speedMs = (this.speedKmh * 1000) / 3600;
    const distanceDelta = speedMs * delta;
    this.distanceMeters += distanceDelta;

    // Score increases with distance, scaled by current combo multiplier
    this.score += Math.round(distanceDelta * CONFIG.SCORING.DISTANCE_MULTIPLIER * this.combo);

    // Real-time best score check
    if (this.score > this.bestScore) {
      this.bestScore = this.score;
      localStorage.setItem('supra_rush_best_score', this.bestScore);
    }

    if (this.distanceMeters > this.bestDistance) {
      this.bestDistance = Math.floor(this.distanceMeters);
      localStorage.setItem('supra_rush_best_dist', this.bestDistance);
    }
  }

  // Crash event
  triggerGameOver() {
    this.state = STATES.GAMEOVER;
    this.isBoosting = false;

    if (this.score > this.bestScore) {
      this.bestScore = this.score;
      localStorage.setItem('supra_rush_best_score', this.bestScore);
    }
    if (this.distanceMeters > this.bestDistance) {
      this.bestDistance = Math.floor(this.distanceMeters);
      localStorage.setItem('supra_rush_best_dist', this.bestDistance);
    }
  }
}
