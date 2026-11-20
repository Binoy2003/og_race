// ===================================================================
// BANGLADESH GREEN CNG AUTO-RICKSHAW 3D MODEL (OG_RACE)
// Authentic 3-Wheeler with Real CNG Art, Safety Wire Mesh Gates & OK Sign
// Based on real Bangladeshi Highway CNGs!
// ===================================================================

import * as THREE from 'three';
import { CONFIG } from '../config.js';

export class DeshiCNG {
  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'og_deshi_cng';

    // Wheels for spinning
    this.wheels = [];
    this.frontWheel = null;

    // Lights
    this.headlights = [];
    this.brakeLights = [];
    this.exhaustFires = [];

    // Dynamics state
    this.currentRoll = 0;
    this.currentPitch = 0;
    this.currentYaw = 0;
    this.wheelRotation = 0;
    this.hornTimer = 0;

    // Collision Bounding Box (tuned for CNG 3-wheeler)
    this.box = new THREE.Box3();
    this.collisionSize = new THREE.Vector3(1.6, 1.95, 3.1);

    this.buildCNG();

    // Balanced proportional size so highway in front is clearly visible
    this.group.scale.set(0.86, 0.86, 0.86);
  }

  buildCNG() {
    this.bodyGroup = new THREE.Group();
    this.group.add(this.bodyGroup);

    // ----------------------------------------------------
    // 1. Procedural CNG Truck Art Textures via Canvas
    // ----------------------------------------------------

    // A. Curved Black Roof Texture ("সি.এন.জি চালিত" & Balloons Art)
    const roofCanvas = document.createElement('canvas');
    roofCanvas.width = 512;
    roofCanvas.height = 384;
    const rCtx = roofCanvas.getContext('2d');

    rCtx.fillStyle = '#18181b'; // Black canvas roof
    rCtx.fillRect(0, 0, 512, 384);

    // Arched Bengali Lettering: "সি.এন.জি চালিত"
    rCtx.fillStyle = '#fde047';
    rCtx.strokeStyle = '#dc2626';
    rCtx.lineWidth = 5;
    rCtx.font = 'bold 38px sans-serif';
    rCtx.textAlign = 'center';
    rCtx.strokeText('সি.এন.জি চালিত', 256, 95);
    rCtx.fillText('সি.এন.জি চালিত', 256, 95);

    // Colorful Balloons Motif (Blue, Red, Yellow with white strings)
    const balloonColors = ['#0284c7', '#ef4444', '#f59e0b', '#10b981'];
    const bPos = [
      { x: 195, y: 220, r: 24, c: 0 },
      { x: 256, y: 195, r: 26, c: 1 },
      { x: 317, y: 220, r: 24, c: 2 },
      { x: 256, y: 260, r: 22, c: 3 }
    ];

    bPos.forEach((b) => {
      rCtx.fillStyle = balloonColors[b.c];
      rCtx.beginPath();
      rCtx.ellipse(b.x, b.y, b.r, b.r * 1.25, 0, 0, Math.PI * 2);
      rCtx.fill();
      rCtx.strokeStyle = '#ffffff';
      rCtx.lineWidth = 2;
      rCtx.stroke();

      // Balloon string
      rCtx.strokeStyle = '#e2e8f0';
      rCtx.lineWidth = 2;
      rCtx.beginPath();
      rCtx.moveTo(b.x, b.y + b.r * 1.25);
      rCtx.lineTo(256, 340);
      rCtx.stroke();
    });

    const roofTexture = new THREE.CanvasTexture(roofCanvas);

    // B. Lower Side Art Banner ("সি.এন.জি চালিত" & "মা বাবার দোয়া" exactly from reference image)
    const sideCanvas = document.createElement('canvas');
    sideCanvas.width = 512;
    sideCanvas.height = 160;
    const sCtx = sideCanvas.getContext('2d');

    sCtx.fillStyle = '#15803d'; // Green CNG body
    sCtx.fillRect(0, 0, 512, 160);

    // 1. Upper White Ribbon: "সি.এন.জি চালিত"
    sCtx.fillStyle = '#ffffff';
    sCtx.fillRect(20, 15, 472, 58);
    sCtx.strokeStyle = '#0284c7';
    sCtx.lineWidth = 3;
    sCtx.strokeRect(20, 15, 472, 58);

    sCtx.fillStyle = '#0284c7';
    sCtx.font = 'bold 32px sans-serif';
    sCtx.textAlign = 'center';
    sCtx.fillText('সি.এন.জি চালিত', 256, 56);

    // 2. Lower Yellow Ribbon: "মা বাবার দোয়া"
    sCtx.fillStyle = '#f59e0b';
    sCtx.fillRect(20, 85, 472, 60);
    sCtx.strokeStyle = '#dc2626';
    sCtx.lineWidth = 3;
    sCtx.strokeRect(20, 85, 472, 60);

    sCtx.fillStyle = '#b91c1c';
    sCtx.font = 'bold 34px sans-serif';
    sCtx.fillText('মা বাবার দোয়া', 256, 128);

    const sideTexture = new THREE.CanvasTexture(sideCanvas);

    // C. Wire Mesh Side Gates with "OK" Stencil Sign
    const gateCanvas = document.createElement('canvas');
    gateCanvas.width = 384;
    gateCanvas.height = 384;
    const gCtx = gateCanvas.getContext('2d');

    // Transparent green backing
    gCtx.fillStyle = 'rgba(21, 128, 61, 0.4)';
    gCtx.fillRect(0, 0, 384, 384);

    // Iron wire mesh square grid
    gCtx.strokeStyle = '#15803d';
    gCtx.lineWidth = 4;
    for (let i = 0; i < 384; i += 28) {
      gCtx.beginPath();
      gCtx.moveTo(i, 0);
      gCtx.lineTo(i, 384);
      gCtx.stroke();

      gCtx.beginPath();
      gCtx.moveTo(0, i);
      gCtx.lineTo(384, i);
      gCtx.stroke();
    }

    // Bold "OK" Stencil Sign in the center
    gCtx.fillStyle = '#fef08a';
    gCtx.strokeStyle = '#dc2626';
    gCtx.lineWidth = 6;
    gCtx.font = '900 85px sans-serif';
    gCtx.textAlign = 'center';
    gCtx.strokeText('OK', 192, 225);
    gCtx.fillText('OK', 192, 225);

    const gateTexture = new THREE.CanvasTexture(gateCanvas);

    // D. Front Grille with Tri-Color Racing Stripes (Red, Yellow, Blue)
    const grillCanvas = document.createElement('canvas');
    grillCanvas.width = 256;
    grillCanvas.height = 128;
    const grCtx = grillCanvas.getContext('2d');

    grCtx.fillStyle = '#15803d';
    grCtx.fillRect(0, 0, 256, 128);

    // 3 Aerodynamic stripes
    const sColors = ['#ef4444', '#f59e0b', '#0284c7'];
    for (let i = 0; i < 3; i++) {
      grCtx.fillStyle = sColors[i];
      grCtx.fillRect(35, 25 + i * 26, 186, 18);
    }

    // Chrome Bajaj emblem in center
    grCtx.fillStyle = '#ffffff';
    grCtx.strokeStyle = '#334155';
    grCtx.lineWidth = 3;
    grCtx.beginPath();
    grCtx.arc(128, 64, 18, 0, Math.PI * 2);
    grCtx.fill();
    grCtx.stroke();

    const grillTexture = new THREE.CanvasTexture(grillCanvas);

    // ----------------------------------------------------
    // 2. Shared Materials
    // ----------------------------------------------------
    const cngGreenMat = new THREE.MeshStandardMaterial({ color: 0x15803d, metalness: 0.45, roughness: 0.35 });
    const cngYellowMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.4 });
    const blackCanvasMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.9 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.9, roughness: 0.15 });
    const blackRubberMat = new THREE.MeshStandardMaterial({ color: 0x1f2421, roughness: 0.9 });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.6, roughness: 0.3 });
    const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x0f172a, transparent: true, opacity: 0.55, roughness: 0.1 });

    const roofArtMat = new THREE.MeshStandardMaterial({ map: roofTexture, roughness: 0.85 });
    const sideArtMat = new THREE.MeshStandardMaterial({ map: sideTexture, roughness: 0.5 });
    const gateMat = new THREE.MeshStandardMaterial({ map: gateTexture, transparent: true, opacity: 0.92, side: THREE.DoubleSide });
    const grillMat = new THREE.MeshStandardMaterial({ map: grillTexture, roughness: 0.4 });

    // ----------------------------------------------------
    // 3. Main Cabin Body Structure
    // ----------------------------------------------------

    // Lower green chassis / floor pan
    const floorGeo = new THREE.BoxGeometry(1.65, 0.45, 2.7);
    const floor = new THREE.Mesh(floorGeo, cngGreenMat);
    floor.position.set(0, 0.48, 0);
    this.bodyGroup.add(floor);

    // Lower Side Art Panels
    [-0.83, 0.83].forEach((x, idx) => {
      const spGeo = new THREE.PlaneGeometry(2.35, 0.42);
      const sp = new THREE.Mesh(spGeo, sideArtMat);
      sp.position.set(x, 0.48, 0.05);
      sp.rotation.y = idx === 0 ? -Math.PI / 2 : Math.PI / 2;
      this.bodyGroup.add(sp);
    });

    // Aerodynamic Pointed Front Cowl / Nose
    const noseGeo = new THREE.CylinderGeometry(0.55, 0.82, 0.85, 16, 1, false, -Math.PI / 2, Math.PI);
    noseGeo.rotateX(Math.PI / 2);
    const nose = new THREE.Mesh(noseGeo, cngGreenMat);
    nose.position.set(0, 0.72, -1.25);
    this.bodyGroup.add(nose);

    // Front Tri-Color Grille
    const fgGeo = new THREE.PlaneGeometry(0.85, 0.38);
    const fg = new THREE.Mesh(fgGeo, grillMat);
    fg.position.set(0, 0.85, -1.58);
    this.bodyGroup.add(fg);

    // Front Windshield
    const wsGeo = new THREE.PlaneGeometry(1.45, 0.68);
    const ws = new THREE.Mesh(wsGeo, glassMat);
    ws.position.set(0, 1.45, -0.92);
    ws.rotation.x = -0.25; // Sleek backward slope
    this.bodyGroup.add(ws);

    // Black Canvas Curved Roof
    const roofGeo = new THREE.CylinderGeometry(0.85, 0.85, 2.25, 24, 1, true, Math.PI * 0.1, Math.PI * 0.8);
    roofGeo.rotateZ(Math.PI / 2);
    const roof = new THREE.Mesh(roofGeo, blackCanvasMat);
    roof.position.set(0, 1.82, 0.15);
    this.bodyGroup.add(roof);

    // Roof Art Panel on back of roof
    const rpGeo = new THREE.PlaneGeometry(1.5, 0.75);
    const rp = new THREE.Mesh(rpGeo, roofArtMat);
    rp.position.set(0, 1.62, 1.28);
    rp.rotation.y = Math.PI; // Faces oncoming traffic from rear!
    this.bodyGroup.add(rp);

    // Side Roof Art Panels on left and right canvas roof (Balloons & "সি.এন.জি চালিত" from photo)
    [-0.84, 0.84].forEach((x, idx) => {
      const srpGeo = new THREE.PlaneGeometry(1.2, 0.55);
      const srp = new THREE.Mesh(srpGeo, roofArtMat);
      srp.position.set(x, 1.76, 0.42);
      srp.rotation.y = idx === 0 ? -Math.PI / 2 : Math.PI / 2;
      this.bodyGroup.add(srp);
    });

    // ----------------------------------------------------
    // 4. Wire Mesh Safety Gates (Left & Right Doors with "OK")
    // ----------------------------------------------------
    [-0.83, 0.83].forEach((x, idx) => {
      const gateGeo = new THREE.PlaneGeometry(1.2, 0.85);
      const gate = new THREE.Mesh(gateGeo, gateMat);
      gate.position.set(x, 1.25, 0.1);
      gate.rotation.y = idx === 0 ? -Math.PI / 2 : Math.PI / 2;
      this.bodyGroup.add(gate);
    });

    // ----------------------------------------------------
    // 5. Wheels (1 Front inside green mudguard, 2 Rear)
    // ----------------------------------------------------

    // Front Wheel (z = -1.42)
    this.frontWheel = this.createCNGWheel(0.32, blackRubberMat, rimMat);
    this.frontWheel.position.set(0, 0.32, -1.42);
    this.bodyGroup.add(this.frontWheel);
    this.wheels.push(this.frontWheel);

    // Green curved front mudguard
    const fMudGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.22, 16, 1, true, 0, Math.PI);
    fMudGeo.rotateZ(Math.PI / 2);
    const fMud = new THREE.Mesh(fMudGeo, cngGreenMat);
    fMud.position.set(0, 0.35, -1.42);
    this.bodyGroup.add(fMud);

    // Front fork column
    const forkColGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.55, 8);
    const forkCol = new THREE.Mesh(forkColGeo, chromeMat);
    forkCol.position.set(0, 0.65, -1.42);
    this.bodyGroup.add(forkCol);

    // Rear Wheels (x = ±0.75, z = 0.85)
    [-0.75, 0.75].forEach((x) => {
      const rw = this.createCNGWheel(0.35, blackRubberMat, rimMat);
      rw.position.set(x, 0.35, 0.85);
      this.bodyGroup.add(rw);
      this.wheels.push(rw);
    });

    // ----------------------------------------------------
    // 6. Lights, Horn & Tubular Crash Guards
    // ----------------------------------------------------

    // Chrome tubular bracket mounting headlight to front fender (from photo)
    const hlBracketGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.35, 8);
    hlBracketGeo.rotateX(0.4);
    const hlBracket = new THREE.Mesh(hlBracketGeo, chromeMat);
    hlBracket.position.set(0, 0.76, -1.55);
    this.bodyGroup.add(hlBracket);

    // Single Large Chrome Headlight on front bracket
    const hlGeo = new THREE.SphereGeometry(0.12, 16, 16);
    hlGeo.scale(1, 1, 0.65);
    const hlMesh = new THREE.Mesh(hlGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    hlMesh.position.set(0, 0.95, -1.62);
    this.bodyGroup.add(hlMesh);
    this.headlights.push(hlMesh);

    // Rear Taillights
    [-0.62, 0.62].forEach((x) => {
      const tlGeo = new THREE.BoxGeometry(0.14, 0.12, 0.06);
      const tl = new THREE.Mesh(tlGeo, new THREE.MeshBasicMaterial({ color: 0xdc2626 }));
      tl.position.set(x, 0.62, 1.36);
      this.bodyGroup.add(tl);
      this.brakeLights.push(tl);
    });

    // Rear Chrome Tubular Crash Guard Bumper
    const bBarGeo = new THREE.CylinderGeometry(0.035, 0.035, 1.68, 12);
    bBarGeo.rotateZ(Math.PI / 2);
    const bBar = new THREE.Mesh(bBarGeo, chromeMat);
    bBar.position.set(0, 0.38, 1.42);
    this.bodyGroup.add(bBar);

    // Rear License Plate (ঢাকা মেট্রো-থ ১১-২৪৮২)
    const lpCanvas = document.createElement('canvas');
    lpCanvas.width = 256;
    lpCanvas.height = 80;
    const lpCtx = lpCanvas.getContext('2d');
    lpCtx.fillStyle = '#065f46';
    lpCtx.fillRect(0, 0, 256, 80);
    lpCtx.strokeStyle = '#ffffff';
    lpCtx.lineWidth = 4;
    lpCtx.strokeRect(4, 4, 248, 72);
    lpCtx.fillStyle = '#ffffff';
    lpCtx.font = 'bold 24px sans-serif';
    lpCtx.textAlign = 'center';
    lpCtx.fillText('ঢাকা মেট্রো-থ', 128, 34);
    lpCtx.fillText('১১-২৪৮২', 128, 64);

    const lpTexture = new THREE.CanvasTexture(lpCanvas);
    const lpGeo = new THREE.PlaneGeometry(0.65, 0.22);
    const lp = new THREE.Mesh(lpGeo, new THREE.MeshBasicMaterial({ map: lpTexture }));
    lp.position.set(0, 0.38, 1.45);
    this.bodyGroup.add(lp);

    // ----------------------------------------------------
    // 7. Driver Silhouette inside Front Cabin
    // ----------------------------------------------------
    const driverGroup = new THREE.Group();
    const skinMat = new THREE.MeshStandardMaterial({ color: 0x8d5524, roughness: 0.7 });
    const shirtMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.8 });

    const driverTorso = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.45, 0.22), shirtMat);
    driverTorso.position.set(0, 1.15, -0.42);
    driverGroup.add(driverTorso);

    const driverHead = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), skinMat);
    driverHead.position.set(0, 1.48, -0.42);
    driverGroup.add(driverHead);

    this.bodyGroup.add(driverGroup);

    // ----------------------------------------------------
    // 8. Boost Exhaust Flames
    // ----------------------------------------------------
    [-0.35, 0.35].forEach((x) => {
      const flameGeo = new THREE.ConeGeometry(0.12, 0.7, 8);
      flameGeo.rotateX(-Math.PI / 2);
      const flameMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0
      });
      const flame = new THREE.Mesh(flameGeo, flameMat);
      flame.position.set(x, 0.42, 1.45);
      this.bodyGroup.add(flame);
      this.exhaustFires.push(flame);
    });
  }

  createCNGWheel(radius, tireMat, rimMat) {
    const wheelGroup = new THREE.Group();

    // Tire
    const tireGeo = new THREE.CylinderGeometry(radius, radius, 0.22, 18);
    tireGeo.rotateZ(Math.PI / 2);
    const tire = new THREE.Mesh(tireGeo, tireMat);
    wheelGroup.add(tire);

    // Steel Rim
    const rimGeo = new THREE.CylinderGeometry(radius * 0.65, radius * 0.65, 0.23, 14);
    rimGeo.rotateZ(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, rimMat);
    wheelGroup.add(rim);

    return wheelGroup;
  }

  update(speedKmh, currentLaneX, targetLaneX, isBraking, isBoosting, delta) {
    const forwardMs = (speedKmh * 1000) / 3600;

    // 1. Wheel Rotation
    const wheelRotDelta = (forwardMs / 0.32) * delta;
    this.wheelRotation -= wheelRotDelta;
    this.wheels.forEach((w) => {
      w.rotation.x = this.wheelRotation;
    });

    // 2. 3-Wheeler Agile Banking Roll on lane steering
    const laneOffset = targetLaneX - currentLaneX;
    const targetRoll = -laneOffset * 0.14;
    this.currentRoll += (targetRoll - this.currentRoll) * Math.min(1.0, delta * 8);
    this.bodyGroup.rotation.z = this.currentRoll;

    // 3. Chassis Yaw turning angle
    const targetYaw = -laneOffset * 0.09;
    this.currentYaw += (targetYaw - this.currentYaw) * Math.min(1.0, delta * 7);
    this.bodyGroup.rotation.y = this.currentYaw;

    // 4. Pitch dynamics
    let targetPitch = 0;
    if (isBraking) {
      targetPitch = 0.045;
    } else if (isBoosting) {
      targetPitch = -0.04;
    }
    this.currentPitch += (targetPitch - this.currentPitch) * Math.min(1.0, delta * 8);
    this.bodyGroup.rotation.x = this.currentPitch;

    // 5. Boost Exhaust Jet Flames
    this.exhaustFires.forEach((flame) => {
      if (isBoosting) {
        flame.material.opacity = 0.95;
        flame.scale.set(
          1.2 + Math.random() * 0.4,
          1.2 + Math.random() * 0.5,
          1.2 + Math.random() * 0.4
        );
        flame.material.color.setHex(Math.random() > 0.4 ? 0x06b6d4 : 0x38bdf8);
      } else {
        flame.material.opacity = 0;
      }
    });

    // 6. Horn Flash
    if (this.hornTimer > 0) {
      this.hornTimer -= delta;
      this.headlights.forEach((hl) => hl.scale.set(1.4, 1.4, 1.4));
    } else {
      this.headlights.forEach((hl) => hl.scale.set(1.0, 1.0, 1.0));
    }

    this.updateBoundingBox();
  }

  updateBoundingBox() {
    const center = this.group.position.clone();
    center.y += 1.05;
    this.box.setFromCenterAndSize(center, this.collisionSize);
  }

  triggerCrash() {
    this.bodyGroup.rotation.z = 0.4;
    this.bodyGroup.rotation.y = 0.45;
    this.bodyGroup.rotation.x = -0.15;
    this.bodyGroup.position.y = 0.3;
  }

  flashHorn() {
    this.hornTimer = 0.35;
  }

  reset() {
    this.group.position.set(0, 0, 0);
    this.bodyGroup.rotation.set(0, 0, 0);
    this.bodyGroup.position.set(0, 0, 0);
    this.currentRoll = 0;
    this.currentPitch = 0;
    this.currentYaw = 0;
    this.updateBoundingBox();
  }
}
