// ==========================================
// BANGLADESH TRUCK RUSH - UI & SCREEN MANAGER
// ==========================================

import { STATES } from '../core/GameState.js';

export class UIManager {
  constructor(soundManager) {
    this.soundManager = soundManager;

    // Screens
    this.menuScreen = document.getElementById('menu-screen');
    this.pauseScreen = document.getElementById('pause-screen');
    this.gameOverScreen = document.getElementById('gameover-screen');
    this.hudLayer = document.getElementById('hud-layer');
    this.mobileControls = document.getElementById('mobile-controls');

    // HUD Elements
    this.scoreVal = document.getElementById('hud-score');
    this.distVal = document.getElementById('hud-dist');
    this.speedVal = document.getElementById('hud-speed');
    this.nitroBar = document.getElementById('nitro-bar-fill');
    this.menuBestScore = document.getElementById('menu-best-score');
    this.nearMissBanner = document.getElementById('near-miss-banner');
    this.nearMissCombo = document.getElementById('near-miss-combo');

    // TAN DE MAMA! Banner
    this.tanDeBanner = document.getElementById('tan-de-banner');
    this.tanDeTimeout = null;

    // Game Over Elements
    this.goScore = document.getElementById('go-score');
    this.goDist = document.getElementById('go-dist');
    this.goBest = document.getElementById('go-best');
    this.goNearMiss = document.getElementById('go-near-miss');
    this.goNewRecord = document.getElementById('go-new-record');

    // Action buttons
    this.soundToggles = document.querySelectorAll('.sound-toggle-btn');
    this.fullscreenBtn = document.getElementById('btn-fullscreen');
    this.hornBtn = document.getElementById('btn-hud-horn');

    // DOM Update Throttling Caches (Prevents forced layout reflows at 60 FPS)
    this._lastScore = -1;
    this._lastDistKm = '';
    this._lastSpeed = -1;
    this._lastNitro = -1;
    this._lastBoosting = null;

    // Banner animation timeout
    this.bannerTimeout = null;

    // Event Callbacks
    this.onStart = null;
    this.onResume = null;
    this.onRestart = null;
    this.onMainMenu = null;
    this.onSteerLeft = null;
    this.onSteerRight = null;
    this.onAccelerate = null;
    this.onBrake = null;
    this.onNitro = null;
    this.onHorn = null;
    this.onSelectVehicle = null;

    this.initListeners();
    this.updateSoundButtons();
  }

  initListeners() {
    // Start Game
    const startBtn = document.getElementById('btn-start');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        this.soundManager.playClick();
        if (this.onStart) this.onStart();
      });
    }

    // Resume
    const resumeBtn = document.getElementById('btn-resume');
    if (resumeBtn) {
      resumeBtn.addEventListener('click', () => {
        this.soundManager.playClick();
        if (this.onResume) this.onResume();
      });
    }

    // Pause button in HUD
    const hudPauseBtn = document.getElementById('btn-hud-pause');
    if (hudPauseBtn) {
      hudPauseBtn.addEventListener('click', () => {
        this.soundManager.playClick();
        if (this.onPauseToggle) this.onPauseToggle();
      });
    }

    // Horn button in HUD
    if (this.hornBtn) {
      this.hornBtn.addEventListener('click', () => {
        if (this.onHorn) this.onHorn();
        else this.soundManager.playTruckHorn();
      });
    }

    // Restart buttons
    const restartBtn = document.getElementById('btn-restart');
    const goRestartBtn = document.getElementById('btn-gameover-restart');
    [restartBtn, goRestartBtn].forEach((btn) => {
      if (btn) {
        btn.addEventListener('click', () => {
          this.soundManager.playClick();
          if (this.onRestart) this.onRestart();
        });
      }
    });

    // Main Menu buttons
    const pauseMenuBtn = document.getElementById('btn-pause-menu');
    const goMenuBtn = document.getElementById('btn-gameover-menu');
    [pauseMenuBtn, goMenuBtn].forEach((btn) => {
      if (btn) {
        btn.addEventListener('click', () => {
          this.soundManager.playClick();
          if (this.onMainMenu) this.onMainMenu();
        });
      }
    });

    // Sound Toggles
    this.soundToggles.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.soundManager.toggleMute();
        this.soundManager.playClick();
        this.updateSoundButtons();
      });
    });

    // Fullscreen Toggle
    if (this.fullscreenBtn) {
      this.fullscreenBtn.addEventListener('click', () => {
        this.toggleFullscreen();
      });
    }

    // How-to-Play Modal Controls
    const modalHowToPlay = document.getElementById('modal-how-to-play');
    const btnHowToPlay = document.getElementById('btn-how-to-play');
    const btnModalClose = document.getElementById('btn-modal-close');

    if (btnHowToPlay && modalHowToPlay) {
      btnHowToPlay.addEventListener('click', () => {
        this.soundManager.playClick();
        modalHowToPlay.classList.add('active');
      });
    }

    if (btnModalClose && modalHowToPlay) {
      btnModalClose.addEventListener('click', () => {
        this.soundManager.playClick();
        modalHowToPlay.classList.remove('active');
      });
    }

    if (modalHowToPlay) {
      modalHowToPlay.addEventListener('click', (e) => {
        if (e.target === modalHowToPlay) {
          modalHowToPlay.classList.remove('active');
        }
      });
    }

    // 3-Vehicle Mode Selector
    const vehButtons = document.querySelectorAll('.veh-btn');
    vehButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        vehButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.soundManager.playClick();
        if (this.onSelectVehicle) {
          this.onSelectVehicle(btn.dataset.veh);
        }
      });
    });

    // Developer Portfolio Links
    document.querySelectorAll('.developer-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    });

    // Mobile Virtual Touch Buttons
    this.setupMobileTouchButtons();
  }

  setSelectedVehicle(type) {
    const vehButtons = document.querySelectorAll('.veh-btn');
    vehButtons.forEach((btn) => {
      if (btn.dataset.veh === type) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  setupMobileTouchButtons() {
    const btnLeft = document.getElementById('btn-touch-left');
    const btnRight = document.getElementById('btn-touch-right');
    const btnBrake = document.getElementById('btn-touch-brake');
    const btnAccel = document.getElementById('btn-touch-accel');
    const btnNitro = document.getElementById('btn-touch-nitro');

    // Prevent context menu and text selection on touch buttons
    document.querySelectorAll('.touch-btn, .hud-icon-btn').forEach((btn) => {
      btn.addEventListener('contextmenu', (e) => e.preventDefault());
    });

    // Helper to safely bind multi-touch buttons with isolated pointer tracking
    const bindHoldableBtn = (btn, onActiveChange, onSound = null) => {
      if (!btn) return;

      const activePointers = new Set();

      const activate = (pointerId, e) => {
        if (e && e.cancelable) e.preventDefault();
        if (e) e.stopPropagation();
        document.body.classList.add('touch-active');

        const wasEmpty = activePointers.size === 0;
        activePointers.add(pointerId);
        btn.classList.add('active');

        if (wasEmpty) {
          onActiveChange(true);
          if (onSound) onSound();
        }
      };

      const deactivate = (pointerId, e) => {
        if (e && e.cancelable) e.preventDefault();
        if (e) e.stopPropagation();

        if (activePointers.has(pointerId)) {
          activePointers.delete(pointerId);
          if (activePointers.size === 0) {
            btn.classList.remove('active');
            onActiveChange(false);
          }
        }
      };

      if (window.PointerEvent) {
        btn.addEventListener('pointerdown', (e) => {
          activate(e.pointerId, e);
          try {
            if (btn.setPointerCapture) btn.setPointerCapture(e.pointerId);
          } catch (_) {}
        }, { passive: false });

        btn.addEventListener('pointerup', (e) => {
          try {
            if (btn.releasePointerCapture) btn.releasePointerCapture(e.pointerId);
          } catch (_) {}
          deactivate(e.pointerId, e);
        }, { passive: false });

        btn.addEventListener('pointercancel', (e) => {
          try {
            if (btn.releasePointerCapture) btn.releasePointerCapture(e.pointerId);
          } catch (_) {}
          deactivate(e.pointerId, e);
        }, { passive: false });

        btn.addEventListener('lostpointercapture', (e) => {
          deactivate(e.pointerId, e);
        }, { passive: false });

        // Global safety: if pointer is released anywhere in window
        window.addEventListener('pointerup', (e) => {
          deactivate(e.pointerId, e);
        }, { passive: true });
        window.addEventListener('pointercancel', (e) => {
          deactivate(e.pointerId, e);
        }, { passive: true });
      } else {
        // Fallback for older legacy browsers without PointerEvent
        btn.addEventListener('touchstart', (e) => {
          if (e.cancelable) e.preventDefault();
          e.stopPropagation();
          for (let i = 0; i < e.changedTouches.length; i++) {
            activate(e.changedTouches[i].identifier, e);
          }
        }, { passive: false });

        btn.addEventListener('touchend', (e) => {
          if (e.cancelable) e.preventDefault();
          e.stopPropagation();
          for (let i = 0; i < e.changedTouches.length; i++) {
            deactivate(e.changedTouches[i].identifier, e);
          }
        }, { passive: false });

        btn.addEventListener('touchcancel', (e) => {
          for (let i = 0; i < e.changedTouches.length; i++) {
            deactivate(e.changedTouches[i].identifier, e);
          }
        }, { passive: false });
      }
    };

    // Steer Left Button (Instant tap lane-shift + continuous hold)
    if (btnLeft) {
      bindHoldableBtn(btnLeft, (active) => {
        if (this.onSteerLeft) this.onSteerLeft(active);
      });
    }

    // Steer Right Button (Instant tap lane-shift + continuous hold)
    if (btnRight) {
      bindHoldableBtn(btnRight, (active) => {
        if (this.onSteerRight) this.onSteerRight(active);
      });
    }

    // Dedicated BRAKE button on mobile -> Slows down (if present)
    if (btnBrake) {
      bindHoldableBtn(btnBrake, (active) => {
        if (this.onBrake) this.onBrake(active);
      }, () => this.soundManager.playAirBrake());
    }

    // Dedicated GAS / ACCEL button on mobile -> Goes fast forward (if present)
    if (btnAccel) {
      bindHoldableBtn(btnAccel, (active) => {
        if (this.onAccelerate) this.onAccelerate(active);
      });
    }

    // Dedicated BOOST / GAS button in center -> Triggers Rocket Speed!
    if (btnNitro) {
      bindHoldableBtn(btnNitro, (active) => {
        if (this.onNitro) this.onNitro(active);
      });
    }

    // Instant Mobile Touch Detection on Android & iPhone
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      document.body.classList.add('touch-active');
    }
    window.addEventListener('touchstart', () => document.body.classList.add('touch-active'), { once: true, passive: true });
    window.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch') document.body.classList.add('touch-active');
    }, { once: true, passive: true });
  }

  showHornEffect() {
    if (this.hornBtn) {
      this.hornBtn.classList.add('honking');
      setTimeout(() => this.hornBtn.classList.remove('honking'), 300);
    }
    const touchHorn = document.getElementById('btn-touch-horn');
    if (touchHorn) {
      touchHorn.classList.add('honking');
      setTimeout(() => touchHorn.classList.remove('honking'), 300);
    }
  }

  // Display animated "TAN DE MAMA!" banner on braking
  showTanDeMama() {
    if (!this.tanDeBanner) return;

    this.tanDeBanner.classList.add('active');

    if (this.tanDeTimeout) clearTimeout(this.tanDeTimeout);
    this.tanDeTimeout = setTimeout(() => {
      this.tanDeBanner.classList.remove('active');
    }, 1100);
  }

  updateSoundButtons() {
    const isMuted = this.soundManager.isMuted;
    this.soundToggles.forEach((btn) => {
      btn.innerHTML = isMuted ? '🔇' : '🔊';
      btn.title = isMuted ? 'Unmute Sound' : 'Mute Sound';
    });
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => console.log(err));
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  setScreen(state, gameState = null) {
    this.menuScreen.classList.add('hidden');
    this.pauseScreen.classList.add('hidden');
    this.gameOverScreen.classList.add('hidden');
    this.hudLayer.classList.add('hidden');

    // Manage mobile virtual touch controls visibility
    if (this.mobileControls) {
      if (state === STATES.PLAYING) {
        this.mobileControls.classList.remove('hidden');
        document.body.classList.add('game-playing');
      } else {
        this.mobileControls.classList.add('hidden');
        document.body.classList.remove('game-playing');
      }
    }

    const modalHowToPlay = document.getElementById('modal-how-to-play');
    if (modalHowToPlay) {
      modalHowToPlay.classList.remove('active');
    }

    if (this.tanDeBanner) {
      this.tanDeBanner.classList.remove('active');
    }

    switch (state) {
      case STATES.MENU:
        this.menuScreen.classList.remove('hidden');
        if (gameState && this.menuBestScore) {
          this.menuBestScore.innerText = gameState.bestScore.toLocaleString();
        }
        break;

      case STATES.PLAYING:
        this.hudLayer.classList.remove('hidden');
        break;

      case STATES.PAUSED:
        this.hudLayer.classList.remove('hidden');
        this.pauseScreen.classList.remove('hidden');
        break;

      case STATES.GAMEOVER:
        this.gameOverScreen.classList.remove('hidden');
        if (gameState) {
          this.goScore.innerText = gameState.score.toLocaleString();
          this.goDist.innerText = `${Math.floor(gameState.distanceMeters)} m`;
          this.goBest.innerText = gameState.bestScore.toLocaleString();
          this.goNearMiss.innerText = gameState.nearMissCount;

          if (gameState.score >= gameState.bestScore && gameState.score > 0) {
            this.goNewRecord.classList.remove('hidden');
          } else {
            this.goNewRecord.classList.add('hidden');
          }
        }
        break;
    }
  }

  updateHUD(gameState) {
    // Only touch DOM nodes when values change, and use textContent to prevent synchronous layout reflows
    const score = Math.floor(gameState.score);
    if (this._lastScore !== score && this.scoreVal) {
      this._lastScore = score;
      this.scoreVal.textContent = score.toLocaleString();
    }

    const distKm = `${(gameState.distanceMeters / 1000).toFixed(2)} km`;
    if (this._lastDistKm !== distKm && this.distVal) {
      this._lastDistKm = distKm;
      this.distVal.textContent = distKm;
    }

    const speed = Math.round(gameState.speedKmh);
    if (this._lastSpeed !== speed && this.speedVal) {
      this._lastSpeed = speed;
      this.speedVal.textContent = speed;
    }

    const nitro = Math.round(gameState.nitro);
    if (this._lastNitro !== nitro && this.nitroBar) {
      this._lastNitro = nitro;
      this.nitroBar.style.width = `${nitro}%`;
    }

    if (this._lastBoosting !== gameState.isBoosting && this.nitroBar) {
      this._lastBoosting = gameState.isBoosting;
      if (gameState.isBoosting) {
        this.nitroBar.classList.add('boosting');
      } else {
        this.nitroBar.classList.remove('boosting');
      }
    }
  }

  showNearMiss(bonus, combo) {
    if (!this.nearMissBanner) return;

    if (this.nearMissCombo) {
      this.nearMissCombo.innerText = `x${combo}`;
    }
    this.nearMissBanner.classList.add('active');

    if (this.bannerTimeout) clearTimeout(this.bannerTimeout);
    this.bannerTimeout = setTimeout(() => {
      this.nearMissBanner.classList.remove('active');
    }, 1200);
  }
}
