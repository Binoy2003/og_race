// ==========================================
// SUPRA RUSH - VISUAL PARTICLE EFFECTS
// ==========================================

import * as THREE from 'three';
import { isMobileDevice } from '../config.js';

export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.isMobile = isMobileDevice();

    this.particles = [];
    this.poolSize = this.isMobile ? 70 : 180;
    this._smokeThrottle = false;

    // Materials
    this.smokeMat = new THREE.MeshBasicMaterial({
      color: 0xdddddd,
      transparent: true,
      opacity: 0.45
    });

    this.sparkMat = new THREE.MeshBasicMaterial({
      color: 0xffaa22,
      transparent: true,
      opacity: 0.95
    });

    this.debrisMat = new THREE.MeshStandardMaterial({
      color: 0x222228,
      roughness: 0.7
    });

    this.initPool();
  }

  initPool() {
    for (let i = 0; i < this.poolSize; i++) {
      const geo = new THREE.BoxGeometry(0.14, 0.14, 0.14);
      const mesh = new THREE.Mesh(geo, this.smokeMat);
      mesh.visible = false;
      this.scene.add(mesh);

      this.particles.push({
        mesh,
        active: false,
        vel: new THREE.Vector3(),
        rotVel: new THREE.Vector3(),
        life: 0,
        maxLife: 1.0,
        scaleSpeed: 1.0,
        type: 'smoke'
      });
    }
  }

  getFreeParticle() {
    return this.particles.find((p) => !p.active) || null;
  }

  // Tire smoke on hard braking
  emitTireSmoke(pos) {
    if (this.isMobile) {
      this._smokeThrottle = !this._smokeThrottle;
      if (this._smokeThrottle) return;
    }
    const p = this.getFreeParticle();
    if (!p) return;

    p.active = true;
    p.type = 'smoke';
    p.mesh.material = this.smokeMat;
    p.mesh.visible = true;
    p.mesh.scale.set(0.6, 0.6, 0.6);
    p.mesh.position.copy(pos);
    p.mesh.position.y = 0.2;

    p.vel.set(
      (Math.random() - 0.5) * 1.5,
      0.8 + Math.random() * 0.8,
      2.0 + Math.random() * 2.0
    );
    p.rotVel.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);

    p.life = 0;
    p.maxLife = 0.45;
    p.scaleSpeed = 3.5;
  }

  // Crash impact sparks & vehicle debris
  emitCrashEffect(pos) {
    const sparkCount = this.isMobile ? 18 : 35;
    const debrisCount = this.isMobile ? 10 : 20;
    const smokeCount = this.isMobile ? 14 : 25;

    // 1. Bright sparks
    for (let i = 0; i < sparkCount; i++) {
      const p = this.getFreeParticle();
      if (!p) break;

      p.active = true;
      p.type = 'spark';
      p.mesh.material = this.sparkMat;
      p.mesh.visible = true;
      p.mesh.scale.set(0.12, 0.12, 0.12);
      p.mesh.position.copy(pos);

      const angle = Math.random() * Math.PI * 2;
      const speed = 6 + Math.random() * 14;
      p.vel.set(
        Math.cos(angle) * speed,
        3 + Math.random() * 10,
        Math.sin(angle) * speed
      );
      p.rotVel.set(Math.random() * 8, Math.random() * 8, Math.random() * 8);

      p.life = 0;
      p.maxLife = 0.7 + Math.random() * 0.5;
      p.scaleSpeed = -0.5;
    }

    // 2. Flying mechanical debris pieces
    for (let i = 0; i < debrisCount; i++) {
      const p = this.getFreeParticle();
      if (!p) break;

      p.active = true;
      p.type = 'debris';
      p.mesh.material = this.debrisMat;
      p.mesh.visible = true;
      p.mesh.scale.set(0.25 + Math.random() * 0.3, 0.15, 0.3 + Math.random() * 0.3);
      p.mesh.position.copy(pos);

      p.vel.set(
        (Math.random() - 0.5) * 16,
        4 + Math.random() * 8,
        (Math.random() - 0.5) * 16
      );
      p.rotVel.set(Math.random() * 12, Math.random() * 12, Math.random() * 12);

      p.life = 0;
      p.maxLife = 1.2;
      p.scaleSpeed = 0;
    }

    // 3. Thick black crash smoke
    for (let i = 0; i < smokeCount; i++) {
      const p = this.getFreeParticle();
      if (!p) break;

      p.active = true;
      p.type = 'smoke';
      p.mesh.material = this.smokeMat;
      p.mesh.visible = true;
      p.mesh.scale.set(0.8, 0.8, 0.8);
      p.mesh.position.set(
        pos.x + (Math.random() - 0.5) * 1.5,
        pos.y + 0.5,
        pos.z + (Math.random() - 0.5) * 1.5
      );

      p.vel.set(
        (Math.random() - 0.5) * 2,
        2.5 + Math.random() * 3,
        (Math.random() - 0.5) * 2
      );
      p.rotVel.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);

      p.life = 0;
      p.maxLife = 1.4;
      p.scaleSpeed = 4.0;
    }
  }

  update(delta) {
    this.particles.forEach((p) => {
      if (!p.active) return;

      p.life += delta;
      if (p.life >= p.maxLife) {
        p.active = false;
        p.mesh.visible = false;
        return;
      }

      // Physics integration
      p.mesh.position.addScaledVector(p.vel, delta);
      p.mesh.rotation.x += p.rotVel.x * delta;
      p.mesh.rotation.y += p.rotVel.y * delta;
      p.mesh.rotation.z += p.rotVel.z * delta;

      // Gravity on sparks & debris
      if (p.type === 'spark' || p.type === 'debris') {
        p.vel.y -= 16 * delta; // gravity
        // Bounce off ground
        if (p.mesh.position.y < 0.1) {
          p.mesh.position.y = 0.1;
          p.vel.y = -p.vel.y * 0.35;
          p.vel.x *= 0.65;
          p.vel.z *= 0.65;
        }
      }

      // Scale expansion
      if (p.scaleSpeed !== 0) {
        const s = Math.max(0.01, p.mesh.scale.x + p.scaleSpeed * delta);
        p.mesh.scale.set(s, s, s);
      }
    });
  }

  reset() {
    this.particles.forEach((p) => {
      p.active = false;
      p.mesh.visible = false;
    });
  }
}
