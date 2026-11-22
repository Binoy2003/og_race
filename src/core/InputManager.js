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
    // Keyboard keydown with full cross-layout & multi-key boost support
    window.addEventListener('keydown', (e) => {
      // Prevent browser scroll for game controls
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Space'].includes(e.key) || e.code === 'Space') {
        e.preventDefault();
      }

      // Check both e.code and e.key to guarantee compatibility across all keyboard layouts (including Bangla Avro/Bijoy)
      const code = e.code;
      const key = e.key;

      // 1. STEER LEFT (ArrowLeft, A)
      if (code === 'ArrowLeft' || code === 'KeyA' || key === 'ArrowLeft' || key === 'a' || key === 'A') {
        // Immediate lane switch on first press or repeat
        if (!this.keys.left || e.repeat) {
          this.laneChangeRequested = -1;
        }
        this.keys.left = true;
      }

      // 2. STEER RIGHT (ArrowRight, D)
      else if (code === 'ArrowRight' || code === 'KeyD' || key === 'ArrowRight' || key === 'd' || key === 'D') {
        // Immediate lane switch on first press or repeat
        if (!this.keys.right || e.repeat) {
          this.laneChangeRequested = 1;
        }
        this.keys.right = true;
      }

      // 3. ACCELERATE (ArrowUp, W)
      if (code === 'ArrowUp' || code === 'KeyW' || key === 'ArrowUp' || key === 'w' || key === 'W') {
        this.keys.accelerate = true;
      }

      // 4. NITRO BOOST (Spacebar, ShiftLeft, ShiftRight, N, X)
      // Supporting Shift alongside Space solves hardware keyboard ghosting on membrane keyboards!
      if (
        code === 'Space' ||
        code === 'ShiftLeft' ||
        code === 'ShiftRight' ||
        code === 'KeyN' ||
        code === 'KeyX' ||
        key === ' ' ||
        key === 'Shift' ||
        key === 'n' ||
        key === 'N' ||
        key === 'x' ||
        key === 'X'
      ) {
        this.keys.boost = true;
      }

      // 5. BRAKE (ArrowDown, S)
      if (code === 'ArrowDown' || code === 'KeyS' || key === 'ArrowDown' || key === 's' || key === 'S') {
        this.keys.brake = true;
      }

      // 6. HORN (H, E, F)
      if (code === 'KeyH' || code === 'KeyE' || code === 'KeyF' || key === 'h' || key === 'H' || key === 'e' || key === 'E' || key === 'f' || key === 'F') {
        this.keys.horn = true;
        if (this.onHorn) this.onHorn();
      }

      // 7. PAUSE / RESUME (P, Escape)
      if (code === 'KeyP' || code === 'Escape' || key === 'p' || key === 'P' || key === 'Escape') {
        if (this.onPauseToggle) this.onPauseToggle();
      }

      // 8. RESTART (R)
      if (code === 'KeyR' || key === 'r' || key === 'R') {
        if (this.onRestart) this.onRestart();
      }
    });

    // Keyboard keyup
    window.addEventListener('keyup', (e) => {
      const code = e.code;
      const key = e.key;

      if (code === 'ArrowLeft' || code === 'KeyA' || key === 'ArrowLeft' || key === 'a' || key === 'A') {
        this.keys.left = false;
      }

      if (code === 'ArrowRight' || code === 'KeyD' || key === 'ArrowRight' || key === 'd' || key === 'D') {
        this.keys.right = false;
      }

      if (code === 'ArrowUp' || code === 'KeyW' || key === 'ArrowUp' || key === 'w' || key === 'W') {
        this.keys.accelerate = false;
      }

      if (
        code === 'Space' ||
        code === 'ShiftLeft' ||
        code === 'ShiftRight' ||
        code === 'KeyN' ||
        code === 'KeyX' ||
        key === ' ' ||
        key === 'Shift' ||
        key === 'n' ||
        key === 'N' ||
        key === 'x' ||
        key === 'X'
      ) {
        this.keys.boost = false;
      }

      if (code === 'ArrowDown' || code === 'KeyS' || key === 'ArrowDown' || key === 's' || key === 'S') {
        this.keys.brake = false;
      }

      if (code === 'KeyH' || code === 'KeyE' || code === 'KeyF' || key === 'h' || key === 'H' || key === 'e' || key === 'E' || key === 'f' || key === 'F') {
        this.keys.horn = false;
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
