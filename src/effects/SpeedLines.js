// ==========================================
// SUPRA RUSH - HIGH SPEED MOTION WARP STREAKS
// ==========================================

import * as THREE from 'three';
import { isMobileDevice } from '../config.js';

export class SpeedLines {
  constructor(scene) {
    this.scene = scene;
    const isMobile = isMobileDevice();
    this.linesCount = isMobile ? 25 : 60;
    this.group = new THREE.Group();

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x99ddff,
      transparent: true,
      opacity: 0.0
    });
    this.lineMat = lineMat;

    this.lines = [];
    for (let i = 0; i < this.linesCount; i++) {
      const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 6 + Math.random() * 8)];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geo, lineMat);

      this.resetLinePos(line);
      this.group.add(line);
      this.lines.push(line);
    }

    this.scene.add(this.group);
  }

  resetLinePos(line) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 3.5 + Math.random() * 6.5;
    line.position.set(
      Math.cos(angle) * radius,
      1.5 + Math.sin(angle) * (radius * 0.6),
      -10 - Math.random() * 35
    );
  }

  update(playerCar, speedKmh, isBoosting, delta) {
    // Only visible above 175 km/h or when boosting
    const intensity = isBoosting ? 1.0 : Math.max(0, (speedKmh - 160) / 100);
    this.lineMat.opacity = intensity * 0.65;

    if (this.lineMat.opacity <= 0.01) {
      this.group.visible = false;
      return;
    }

    this.group.visible = true;
    const playerZ = playerCar.group.position.z;
    const playerX = playerCar.group.position.x;
    this.group.position.set(playerX, 0, playerZ);

    const speedOffset = (speedKmh / 60) * delta * 50;
    this.lines.forEach((line) => {
      line.position.z += speedOffset;
      if (line.position.z > 5) {
        this.resetLinePos(line);
      }
    });
  }
}
