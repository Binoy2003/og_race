// ==========================================
// SUPRA RUSH - DYNAMIC CHASE CAMERA SYSTEM
// ==========================================

import * as THREE from 'three';
import { CONFIG } from '../config.js';

export class CameraController {
  constructor(camera) {
    this.camera = camera;

    // Offsets
    this.defaultOffset = new THREE.Vector3(
      CONFIG.CAMERA.DEFAULT_OFFSET.x,
      CONFIG.CAMERA.DEFAULT_OFFSET.y,
      CONFIG.CAMERA.DEFAULT_OFFSET.z
    );

    this.lookOffset = new THREE.Vector3(
      CONFIG.CAMERA.LOOK_OFFSET.x,
      CONFIG.CAMERA.LOOK_OFFSET.y,
      CONFIG.CAMERA.LOOK_OFFSET.z
    );

    // Current camera position smoothing
    this.currentPos = new THREE.Vector3();
    this.currentLook = new THREE.Vector3();

    // Camera shake
    this.shakeIntensity = 0;
    this.shakeDuration = 0;

    // Speed FOV
    this.targetFOV = CONFIG.CAMERA.BASE_FOV;
  }

  init(playerVehicle) {
    const p = playerVehicle.group.position;
    this.currentPos.set(
      p.x + this.defaultOffset.x,
      p.y + this.defaultOffset.y,
      p.z + this.defaultOffset.z
    );
    this.currentLook.set(
      p.x + this.lookOffset.x,
      p.y + this.lookOffset.y,
      p.z + this.lookOffset.z
    );

    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(this.currentLook);
    this.camera.fov = CONFIG.CAMERA.BASE_FOV;
    this.camera.updateProjectionMatrix();
  }

  shake(intensity = 0.5, duration = 0.6) {
    this.shakeIntensity = intensity;
    this.shakeDuration = duration;
  }

  update(playerVehicle, speedKmh, isBoosting, delta) {
    const p = playerVehicle.group.position;

    // 1. Dynamic FOV based on speed
    const normSpeed = Math.min(1.0, speedKmh / CONFIG.SPEED.MAX_NORMAL);
    this.targetFOV = CONFIG.CAMERA.BASE_FOV + normSpeed * 10 + (isBoosting ? 8 : 0);
    this.camera.fov += (this.targetFOV - this.camera.fov) * Math.min(1.0, delta * CONFIG.CAMERA.FOV_LERP_SPEED);
    this.camera.updateProjectionMatrix();

    // 2. Camera target positions
    const targetX = p.x + this.defaultOffset.x;
    const targetY = p.y + this.defaultOffset.y;
    const targetZ = p.z + this.defaultOffset.z + (isBoosting ? 0.8 : 0);

    const lerpX = Math.min(1.0, delta * 10);
    const lerpY = Math.min(1.0, delta * 12);

    this.currentPos.x += (targetX - this.currentPos.x) * lerpX;
    this.currentPos.y += (targetY - this.currentPos.y) * lerpY;
    this.currentPos.z = targetZ;

    // 3. Look-at target
    const targetLookX = p.x + this.lookOffset.x;
    const targetLookY = p.y + this.lookOffset.y;
    const targetLookZ = p.z + this.lookOffset.z;

    this.currentLook.x += (targetLookX - this.currentLook.x) * lerpX;
    this.currentLook.y += (targetLookY - this.currentLook.y) * lerpY;
    this.currentLook.z = targetLookZ;

    // 4. Subtle diesel engine vibration
    let rumbleX = 0;
    let rumbleY = 0;
    if (speedKmh > 70) {
      const rumbleAmt = (speedKmh / 280) * 0.03;
      rumbleX = (Math.random() - 0.5) * rumbleAmt;
      rumbleY = (Math.random() - 0.5) * rumbleAmt;
    }

    // 5. Collision Impact Shake
    let shakeX = 0;
    let shakeY = 0;
    let shakeZ = 0;
    if (this.shakeDuration > 0) {
      this.shakeDuration -= delta;
      const decay = Math.max(0, this.shakeDuration / 0.6);
      const amp = this.shakeIntensity * decay;
      shakeX = (Math.random() - 0.5) * amp;
      shakeY = (Math.random() - 0.5) * amp;
      shakeZ = (Math.random() - 0.5) * amp;
    }

    // Apply final matrix
    this.camera.position.set(
      this.currentPos.x + rumbleX + shakeX,
      this.currentPos.y + rumbleY + shakeY,
      this.currentPos.z + shakeZ
    );

    this.camera.lookAt(
      this.currentLook.x + rumbleX * 0.5,
      this.currentLook.y + rumbleY * 0.5,
      this.currentLook.z
    );
  }

  // Showcase orbit camera during Main Menu (adjusted for Deshi Truck)
  orbitMenu(time) {
    const radius = 8.5;
    const height = 2.8 + Math.sin(time * 0.5) * 0.4;
    const angle = time * 0.35;

    this.camera.position.set(
      Math.sin(angle) * radius,
      height,
      Math.cos(angle) * radius
    );
    this.camera.lookAt(0, 1.4, 0);
  }
}
