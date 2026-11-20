// ==========================================
// BANGLADESH TRUCK RUSH - MULTI-PLATFORM INPUT
// ==========================================

export class InputManager {
  constructor() {
    this.keys = {
      left: false,
      right: false,
      brake: false,
      accelerate: false,
      boost: false,
      horn: false,
      pause: false,
      restart: false
    };

    // Discrete lane shift requests
    this.laneChangeRequested = 0; // -1 for left, 1 for right

    // Mobile touch state
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchStartTime = 0;
    this.isTouchDevice = false;

    // Callbacks
    this.onPauseToggle = null;
    this.onRestart = null;
    this.onHorn = null;

    this.bindEvents();
  }

  bindEvents() {
    // Keyboard keydown
    window.addEventListener('keydown', (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.code) {
        case 'ArrowLeft':
        case 'KeyA':
          if (!this.keys.left) {
            this.laneChangeRequested = -1;
          }
          this.keys.left = true;
          break;

        case 'ArrowRight':
        case 'KeyD':
          if (!this.keys.right) {
            this.laneChangeRequested = 1;
          }
          this.keys.right = true;
          break;

        case 'ArrowUp':
        case 'KeyW':
          this.keys.accelerate = true;
          break;

        case 'Space':
          this.keys.boost = true;
          break;

        case 'ArrowDown':
        case 'KeyS':
          this.keys.brake = true;
          break;

        case 'KeyH':
        case 'KeyE':
        case 'KeyF':
        case 'KeyB':
          this.keys.horn = true;
          if (this.onHorn) this.onHorn();
          break;

        case 'KeyP':
        case 'Escape':
          if (this.onPauseToggle) this.onPauseToggle();
          break;

        case 'KeyR':
          if (this.onRestart) this.onRestart();
          break;
      }
    });

    // Keyboard keyup
    window.addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'ArrowLeft':
        case 'KeyA':
          this.keys.left = false;
          break;

        case 'ArrowRight':
        case 'KeyD':
          this.keys.right = false;
          break;

        case 'ArrowUp':
        case 'KeyW':
          this.keys.accelerate = false;
          break;

        case 'Space':
          this.keys.boost = false;
          break;

        case 'ArrowDown':
        case 'KeyS':
          this.keys.brake = false;
          break;

        case 'KeyH':
        case 'KeyE':
        case 'KeyF':
        case 'KeyB':
          this.keys.horn = false;
          break;
      }
    });

    // Touch Swipe Gestures
    window.addEventListener('touchstart', (e) => {
      this.isTouchDevice = true;
      if (e.touches.length > 0) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
        this.touchStartTime = Date.now();
      }
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      if (e.changedTouches.length > 0) {
        const deltaX = e.changedTouches[0].clientX - this.touchStartX;
        const deltaY = e.changedTouches[0].clientY - this.touchStartY;
        const deltaTime = Date.now() - this.touchStartTime;

        if (deltaTime < 350 && Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
          if (deltaX < 0) {
            this.laneChangeRequested = -1;
          } else {
            this.laneChangeRequested = 1;
          }
        }
      }
    }, { passive: true });
  }

  consumeLaneChange() {
    const req = this.laneChangeRequested;
    this.laneChangeRequested = 0;
    return req;
  }

  triggerSteerLeft() {
    this.laneChangeRequested = -1;
  }

  triggerSteerRight() {
    this.laneChangeRequested = 1;
  }

  setBrake(active) {
    this.keys.brake = active;
  }

  setAccelerate(active) {
    this.keys.accelerate = active;
  }

  setNitro(active) {
    this.keys.boost = active;
  }

  setBoost(active) {
    this.keys.boost = active;
  }

  reset() {
    this.keys.left = false;
    this.keys.right = false;
    this.keys.brake = false;
    this.keys.accelerate = false;
    this.keys.boost = false;
    this.keys.horn = false;
    this.laneChangeRequested = 0;
  }
}
