// ===================================================================
// OG_RACE - SMOOTH, SOOTHING & SATISFYING CAR AUDIO ENGINE
// Designed for a refined, pleasant, warm automotive cruising feel
// ===================================================================

export class SoundManager {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem('og_race_muted') === 'true' || localStorage.getItem('truck_rush_muted') === 'true';
    this.isInitialized = false;

    // Master bus
    this.masterGain = null;

    // Smooth Engine Synthesizer Nodes
    this.engineGain = null;
    this.engineFilter = null;
    this.baseOsc = null;        // Warm fundamental triangle wave
    this.subOsc = null;         // Deep, smooth sub-harmonic sine
    this.midOsc = null;         // Silky 2nd harmonic sine
    this.highOsc = null;        // Subtle 3rd harmonic sheen
    this.turboOsc = null;       // Smooth turbo spool glide for boost
    this.turboGain = null;

    // Smooth Highway Road / Wind Ambience
    this.roadGain = null;
    this.roadFilter = null;

    // Dynamic smoothing state
    this.currentRPM = 900;       // Smooth idle RPM ~900
    this.targetPitch = 60;
    this.currentPitch = 60;
    this.vehicleType = 'truck'; // 'truck' | 'rickshaw' | 'cng'

    // Crash voice buffer ("এটা কি করলি মামা!")
    this.crashVoiceBuffer = null;

    this.bindUnlock();
  }

  setVehicleType(type) {
    this.vehicleType = type;
  }

  bindUnlock() {
    const unlock = () => {
      if (!this.ctx) {
        this.initAudio();
      } else if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      if (this.ctx && !this.crashVoiceBuffer) {
        this.loadCrashVoice();
      }
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
      window.removeEventListener('touchstart', unlock);
    };

    window.addEventListener('pointerdown', unlock);
    window.addEventListener('keydown', unlock);
    window.addEventListener('touchstart', unlock);
  }

  initAudio() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      // Master output - comfortable, non-fatiguing volume
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.45, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.setupSmoothCarSynth();
      this.setupRoadNoise();
      this.loadCrashVoice();

      this.isInitialized = true;
    } catch (e) {
      console.warn('Web Audio not supported or blocked:', e);
    }
  }

  loadCrashVoice() {
    if (!this.ctx) return;
    fetch('/audio/eta_ki_korli_mama.mp3')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.arrayBuffer();
      })
      .then((buf) => this.ctx.decodeAudioData(buf))
      .then((decoded) => {
        this.crashVoiceBuffer = decoded;
      })
      .catch((err) => {
        console.warn('Could not decode crash voice buffer:', err);
      });
  }

  // =================================================================
  // 1. SMOOTH & SOOTHING CAR ENGINE SYNTHESIZER
  // Rich, warm harmonic layers (triangle + sine) with Butterworth filter
  // =================================================================
  setupSmoothCarSynth() {
    const t = this.ctx.currentTime;

    // Master engine bus
    this.engineGain = this.ctx.createGain();
    this.engineGain.gain.setValueAtTime(0.001, t);

    // Warm Butterworth low-pass filter (Q=0.707 for smooth roll-off without harsh ringing)
    this.engineFilter = this.ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.setValueAtTime(320, t);
    this.engineFilter.Q.setValueAtTime(0.7, t);

    // 1. Warm Fundamental Oscillator (Triangle wave - mellow odd harmonics)
    this.baseOsc = this.ctx.createOscillator();
    this.baseOsc.type = 'triangle';
    this.baseOsc.frequency.setValueAtTime(58, t);

    const baseGain = this.ctx.createGain();
    baseGain.gain.setValueAtTime(0.42, t);
    this.baseOsc.connect(baseGain);
    baseGain.connect(this.engineFilter);

    // 2. Sub-bass purr (Pure Sine wave at 0.5x octave for deep, gentle warmth)
    this.subOsc = this.ctx.createOscillator();
    this.subOsc.type = 'sine';
    this.subOsc.frequency.setValueAtTime(29, t);

    const subGain = this.ctx.createGain();
    subGain.gain.setValueAtTime(0.24, t);
    this.subOsc.connect(subGain);
    subGain.connect(this.engineFilter);

    // 3. Smooth Mid-Range Body (Pure Sine wave at 2.0x frequency for multi-cylinder hum)
    this.midOsc = this.ctx.createOscillator();
    this.midOsc.type = 'sine';
    this.midOsc.frequency.setValueAtTime(116, t);

    const midGain = this.ctx.createGain();
    midGain.gain.setValueAtTime(0.14, t);
    this.midOsc.connect(midGain);
    midGain.connect(this.engineFilter);

    // 4. Subtle High Sheen (Pure Sine wave at 3.0x frequency, gentle presence)
    this.highOsc = this.ctx.createOscillator();
    this.highOsc.type = 'sine';
    this.highOsc.frequency.setValueAtTime(174, t);

    const highGain = this.ctx.createGain();
    highGain.gain.setValueAtTime(0.04, t);
    this.highOsc.connect(highGain);
    highGain.connect(this.engineFilter);

    // 5. Silky Turbo Spool (Smooth sine glide for boost acceleration)
    this.turboOsc = this.ctx.createOscillator();
    this.turboOsc.type = 'sine';
    this.turboOsc.frequency.setValueAtTime(280, t);

    this.turboGain = this.ctx.createGain();
    this.turboGain.gain.setValueAtTime(0.001, t);
    this.turboOsc.connect(this.turboGain);
    this.turboGain.connect(this.engineGain);

    // Connect filter to engine gain and master
    this.engineFilter.connect(this.engineGain);
    this.engineGain.connect(this.masterGain);

    this.baseOsc.start();
    this.subOsc.start();
    this.midOsc.start();
    this.highOsc.start();
    this.turboOsc.start();
  }

  // =================================================================
  // 2. SMOOTH HIGHWAY WIND & CABIN AMBIENCE
  // Soft, relaxing aerodynamic breeze (low-pass filtered pink noise)
  // =================================================================
  setupRoadNoise() {
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    // Filtered pink-like soft random noise
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.98 * b0 + white * 0.055;
      b1 = 0.95 * b1 + white * 0.075;
      b2 = 0.85 * b2 + white * 0.15;
      output[i] = (b0 + b1 + b2) * 0.45;
    }

    const roadNoise = this.ctx.createBufferSource();
    roadNoise.buffer = noiseBuffer;
    roadNoise.loop = true;

    this.roadFilter = this.ctx.createBiquadFilter();
    this.roadFilter.type = 'lowpass';
    this.roadFilter.frequency.setValueAtTime(220, this.ctx.currentTime);
    this.roadFilter.Q.setValueAtTime(0.6, this.ctx.currentTime);

    this.roadGain = this.ctx.createGain();
    this.roadGain.gain.setValueAtTime(0.001, this.ctx.currentTime);

    roadNoise.connect(this.roadFilter);
    this.roadFilter.connect(this.roadGain);
    this.roadGain.connect(this.masterGain);

    roadNoise.start();
  }

  // =================================================================
  // 3. SMOOTH BRAKE SOUND
  // Gentle, soft tire friction whisper instead of violent air blasts
  // =================================================================
  playAirBrake() {
    if (!this.ctx || this.isMuted) return;
    const t = this.ctx.currentTime;

    const bufferSize = Math.floor(this.ctx.sampleRate * 0.35);
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(500, t);
    filter.frequency.exponentialRampToValueAtTime(180, t + 0.35);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.07, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(t);
  }

  // =================================================================
  // 4. PLEASANT, CRISP & AUDIBLE VEHICLE HORN
  // Custom tones: Rickshaw Bell (Tring Tring!), CNG Beep, Heavy Truck Horn
  // =================================================================
  playTruckHorn(overrideType = null) {
    if (!this.ctx || this.isMuted) return;
    const type = overrideType || this.vehicleType || 'truck';
    const t = this.ctx.currentTime;

    if (type === 'rickshaw') {
      // Cheerful authentic Rickshaw Bell (*Tring Tring!*)
      const bellFreqs = [2093, 2637]; // High C7 & E7 bell harmonics
      [0, 0.09].forEach((delay) => {
        bellFreqs.forEach((freq) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, t + delay);

          gain.gain.setValueAtTime(0, t + delay);
          gain.gain.linearRampToValueAtTime(0.22, t + delay + 0.008);
          gain.gain.exponentialRampToValueAtTime(0.0001, t + delay + 0.18);

          osc.connect(gain);
          gain.connect(this.masterGain);

          osc.start(t + delay);
          osc.stop(t + delay + 0.2);
        });
      });
      return;
    }

    if (type === 'cng') {
      // Sharp Auto-Rickshaw / CNG Beep Horn
      const cngTones = [620, 780];
      cngTones.forEach((freq) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, t);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200, t);

        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.2, t + 0.02);
        gain.gain.setValueAtTime(0.2, t + 0.22);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc.start(t);
        osc.stop(t + 0.35);
      });
      return;
    }

    // Default: Heavy Truck Horn
    const notes = [330.0, 415.3, 523.25]; // Warm, full-bodied pleasant chord
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, t);

      const targetVol = idx === 0 ? 0.18 : 0.26;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(targetVol, t + 0.02);
      gain.gain.setValueAtTime(targetVol, t + 0.22);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.38);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.4);
    });
  }

  // =================================================================
  // 5. SMOOTH "TAN DE MAMA!" BOOST EFFECT
  // Satisfying futuristic turbo chord & clean speech shout
  // =================================================================
  shoutTanDeMama() {
    if (!this.ctx || this.isMuted) return;
    const t = this.ctx.currentTime;

    // 1. Silky ascending turbo glide chime
    const chord = [440, 554.37, 659.25]; // A Major triad
    chord.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * 0.8, t);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.25, t + 0.35);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.08, t + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.5);
    });

    // Voice shout turned off per user request (smooth turbo chime only)
  }

  // =================================================================
  // 6. FRAME-BY-FRAME SMOOTH ENGINE AUDIO UPDATE
  // Seamless pitch glide and volume curve that feels great to drive
  // =================================================================
  update(speedKmh, isBraking, isBoosting, delta) {
    if (!this.isInitialized || !this.ctx || this.isMuted) return;

    const t = this.ctx.currentTime;
    const normSpeed = Math.min(1.0, Math.max(0, speedKmh / 200));

    // Smooth RPM & Gear transition simulation
    // Simulates a smooth 6-speed transmission curve
    const gearProgress = (normSpeed * 5) % 1.0;
    const targetRPM = 900 + normSpeed * 1800 + gearProgress * 600 + (isBoosting ? 500 : 0);
    this.currentRPM += (targetRPM - this.currentRPM) * Math.min(1, delta * 5.0);

    // Base pitch: 55 Hz (soft idle purr) smoothly ramping to 160 Hz (spirited cruise)
    const baseFreq = 52 + (this.currentRPM / 3200) * 110;
    this.targetPitch = Math.max(45, baseFreq);
    this.currentPitch += (this.targetPitch - this.currentPitch) * Math.min(1, delta * 7.0);

    // Apply smoothly to oscillator harmonics
    this.baseOsc.frequency.setTargetAtTime(this.currentPitch, t, 0.05);
    this.subOsc.frequency.setTargetAtTime(this.currentPitch * 0.5, t, 0.05);
    this.midOsc.frequency.setTargetAtTime(this.currentPitch * 2.0, t, 0.05);
    this.highOsc.frequency.setTargetAtTime(this.currentPitch * 3.0, t, 0.05);

    // Smooth low-pass filter cutoff (opens gently with speed, max 580 Hz for warmth)
    const filterFreq = 300 + normSpeed * 280 + (isBoosting ? 120 : 0);
    this.engineFilter.frequency.setTargetAtTime(filterFreq, t, 0.06);

    // Smooth, pleasant engine volume curve (idle ~0.16, cruising ~0.26, boost ~0.32)
    const targetEngineVol = 0.16 + normSpeed * 0.12 + (isBoosting ? 0.06 : 0) - (isBraking ? 0.04 : 0);
    this.engineGain.gain.setTargetAtTime(Math.max(0.08, targetEngineVol), t, 0.06);

    // Turbo spool on boost
    if (isBoosting) {
      this.turboOsc.frequency.setTargetAtTime(380 + normSpeed * 350, t, 0.08);
      this.turboGain.gain.setTargetAtTime(0.05, t, 0.08);
    } else {
      this.turboGain.gain.setTargetAtTime(0.0001, t, 0.15);
    }

    // Smooth highway breeze / cabin wind noise
    const roadVol = Math.pow(normSpeed, 1.3) * 0.06;
    this.roadGain.gain.setTargetAtTime(roadVol, t, 0.08);
    this.roadFilter.frequency.setTargetAtTime(180 + normSpeed * 250, t, 0.08);
  }

  // =================================================================
  // 7. CLEAN & PLEASANT NEAR-MISS CHIME
  // Crystal clear bell ping (rewarding and pleasant to the ear)
  // =================================================================
  playNearMiss(combo = 1) {
    if (!this.ctx || this.isMuted) return;
    const t = this.ctx.currentTime;
    const baseFreq = 880; // A5 note
    const comboFactor = 1 + (combo - 1) * 0.08;

    [0, 0.06].forEach((delay, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime((idx === 0 ? baseFreq : baseFreq * 1.25) * comboFactor, t + delay);

      gain.gain.setValueAtTime(0.001, t + delay);
      gain.gain.linearRampToValueAtTime(0.12, t + delay + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + delay + 0.28);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t + delay);
      osc.stop(t + delay + 0.3);
    });
  }

  // =================================================================
  // 8. WARM CINEMATIC IMPACT (NO EAR-PIERCING CLIPPING)
  // =================================================================
  playCrash() {
    if (!this.ctx || this.isMuted) return;
    const t = this.ctx.currentTime;

    // Warm sub-bass drop
    const drop = this.ctx.createOscillator();
    const dropGain = this.ctx.createGain();
    drop.type = 'sine';
    drop.frequency.setValueAtTime(110, t);
    drop.frequency.exponentialRampToValueAtTime(28, t + 0.55);

    dropGain.gain.setValueAtTime(0.45, t);
    dropGain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

    drop.connect(dropGain);
    dropGain.connect(this.masterGain);
    drop.start(t);
    drop.stop(t + 0.65);

    // Soft diffused impact cushion
    const bufferSize = Math.floor(this.ctx.sampleRate * 0.45);
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.12));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, t);
    filter.frequency.exponentialRampToValueAtTime(120, t + 0.4);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    noise.start(t);
  }

  // =================================================================
  // AUTHENTIC ACCIDENT VOICE: "ETA KI KORLI MAMA!"
  // Accurate, realistic Bangladeshi young male voice
  // =================================================================
  playCrashVoice() {
    if (this.isMuted) return;

    // 1. Primary: High-fidelity preloaded AudioBuffer via Web Audio
    if (this.crashVoiceBuffer && this.ctx) {
      try {
        const source = this.ctx.createBufferSource();
        source.buffer = this.crashVoiceBuffer;

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(1.0, this.ctx.currentTime);

        source.connect(gain);
        gain.connect(this.masterGain);

        // Natural 180ms delay right after the crash impact thump
        source.start(this.ctx.currentTime + 0.18);
        return;
      } catch (e) {
        console.warn('Web Audio crash voice playback error:', e);
      }
    }

    // 2. Secondary: HTML5 Audio fallback
    try {
      const audio = new Audio('/audio/eta_ki_korli_mama.mp3');
      audio.volume = 1.0;
      setTimeout(() => {
        audio.play().catch(() => {});
      }, 180);
      return;
    } catch (e) {
      // 3. Tertiary: Web Speech fallback
      if ('speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel();
          const ut = new SpeechSynthesisUtterance("এটা কি করলি মামা!");
          ut.rate = 1.15;
          ut.pitch = 1.05;
          ut.volume = 1.0;
          const voices = window.speechSynthesis.getVoices();
          const bnVoice = voices.find((v) => v.lang.includes('bn') || v.lang.includes('hi'));
          if (bnVoice) ut.voice = bnVoice;
          window.speechSynthesis.speak(ut);
        } catch (err) {}
      }
    }
  }

  // =================================================================
  // 9. CLEAN UI CLICK
  // Soft, subtle droplet click
  // =================================================================
  playClick() {
    if (!this.ctx || this.isMuted) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, t);
    osc.frequency.exponentialRampToValueAtTime(260, t + 0.035);

    gain.gain.setValueAtTime(0.09, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.045);
  }

  // Clean Game Over Chime
  playGameOver() {
    if (!this.ctx || this.isMuted) return;
    const t = this.ctx.currentTime;
    [261.63, 220.00, 196.00, 164.81].forEach((freq, idx) => {
      const delay = idx * 0.18;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t + delay);

      gain.gain.setValueAtTime(0.001, t + delay);
      gain.gain.linearRampToValueAtTime(0.12, t + delay + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.32);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t + delay);
      osc.stop(t + delay + 0.35);
    });
  }

  // Mute Toggle
  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('og_race_muted', this.isMuted);

    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.45, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  // Stop Engine Sounds (on pause, crash, menu)
  stopAll() {
    if (this.engineGain && this.ctx) {
      this.engineGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.08);
    }
    if (this.roadGain && this.ctx) {
      this.roadGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.08);
    }
    if (this.turboGain && this.ctx) {
      this.turboGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.08);
    }
  }
}
