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

    // Mobile touch state: Track swipe touches independently by touch identifier
    this.activeSwipes = new Map();
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

    // Touch Swipe Gestures (Only for touches directly on gameplay canvas, ignoring UI buttons & controls)
    window.addEventListener('touchstart', (e) => {
      this.isTouchDevice = true;
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        // Safely ignore touches on HUD, on-screen controls, modals, or buttons
        if (t.target && t.target.closest && t.target.closest('#mobile-controls, #hud-layer, .screen, button, .touch-btn, .hud-icon-btn, .modal-overlay')) {
          continue;
        }
        this.activeSwipes.set(t.identifier, {
          startX: t.clientX,
          startY: t.clientY,
          startTime: Date.now()
        });
      }
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        const start = this.activeSwipes.get(t.identifier);
        if (!start) continue;
        this.activeSwipes.delete(t.identifier);

        const deltaX = t.clientX - start.startX;
        const deltaY = t.clientY - start.startY;
        const deltaTime = Date.now() - start.startTime;

        if (deltaTime < 350 && Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
          if (deltaX < 0) {
            this.laneChangeRequested = -1;
          } else {
            this.laneChangeRequested = 1;
          }
        }
      }
    }, { passive: true });

    window.addEventListener('touchcancel', (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        this.activeSwipes.delete(e.changedTouches[i].identifier);
      }
    }, { passive: true });
  }

  consumeLaneChange() {
    const req = this.laneChangeRequested;
    this.laneChangeRequested = 0;
    return req;
  }

  setSteerLeft(active) {
    if (active && !this.keys.left) {
      this.laneChangeRequested = -1;
    }
    this.keys.left = !!active;
  }

  setSteerRight(active) {
    if (active && !this.keys.right) {
      this.laneChangeRequested = 1;
    }
    this.keys.right = !!active;
  }

  triggerSteerLeft() {
    this.setSteerLeft(true);
    setTimeout(() => {
      if (this.keys.left) this.setSteerLeft(false);
    }, 120);
  }

  triggerSteerRight() {
    this.setSteerRight(true);
    setTimeout(() => {
      if (this.keys.right) this.setSteerRight(false);
    }, 120);
  }

  setBrake(active) {
    this.keys.brake = !!active;
  }

  setAccelerate(active) {
    this.keys.accelerate = !!active;
  }

  setNitro(active) {
    this.keys.boost = !!active;
  }

  setBoost(active) {
    this.keys.boost = !!active;
  }

  reset() {
    this.keys.left = false;
    this.keys.right = false;
    this.keys.brake = false;
    this.keys.accelerate = false;
    this.keys.boost = false;
    this.keys.horn = false;
    this.laneChangeRequested = 0;
    this.activeSwipes.clear();
  }
}
