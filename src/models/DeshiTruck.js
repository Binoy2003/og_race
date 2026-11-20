// ==========================================
// BANGLADESH TRUCK RUSH - AUTHENTIC COW-LOADED TRUCK (OG_RACE)
// ==========================================

import * as THREE from 'three';
import { CONFIG } from '../config.js';

export class DeshiTruck {
  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'og_deshi_truck';

    // Wheels for spin & steering
    this.wheels = [];
    this.frontWheels = [];

    // Animated Cows inside truck bed
    this.cows = [];

    // Lights
    this.brakeLights = [];
    this.headlights = [];
    this.exhaustFires = [];

    // Dynamics state
    this.currentRoll = 0;
    this.currentPitch = 0;
    this.currentYaw = 0;
    this.wheelRotation = 0;
    this.hornTimer = 0;

    // Collision Bounding Box (tuned for loaded truck)
    this.box = new THREE.Box3();
    this.collisionSize = new THREE.Vector3(2.35, 3.1, 6.2);

    this.buildTruck();
  }

  buildTruck() {
    // ----------------------------------------------------
    // 1. Procedural Truck Art Textures via Canvas
    // ----------------------------------------------------

    // A. Front Grille Butterfly Art
    const grillCanvas = document.createElement('canvas');
    grillCanvas.width = 512;
    grillCanvas.height = 384;
    const gCtx = grillCanvas.getContext('2d');
    gCtx.fillStyle = '#f5b002'; // Yellow bonnet base
    gCtx.fillRect(0, 0, 512, 384);

    // Mesh grille frame
    gCtx.fillStyle = '#1e293b';
    gCtx.fillRect(80, 50, 352, 280);
    gCtx.strokeStyle = '#e2e8f0';
    gCtx.lineWidth = 6;
    gCtx.strokeRect(80, 50, 352, 280);

    // Butterfly Truck Art motif in grille center
    gCtx.fillStyle = '#3b82f6'; // Blue wings
    gCtx.beginPath();
    gCtx.ellipse(190, 180, 65, 90, -Math.PI / 6, 0, Math.PI * 2);
    gCtx.fill();
    gCtx.strokeStyle = '#ef4444';
    gCtx.lineWidth = 8;
    gCtx.stroke();

    gCtx.beginPath();
    gCtx.ellipse(322, 180, 65, 90, Math.PI / 6, 0, Math.PI * 2);
    gCtx.fill();
    gCtx.stroke();

    // Wing spots
    gCtx.fillStyle = '#fbbf24';
    gCtx.beginPath();
    gCtx.arc(180, 160, 20, 0, Math.PI * 2);
    gCtx.arc(332, 160, 20, 0, Math.PI * 2);
    gCtx.fill();

    // Butterfly body
    gCtx.fillStyle = '#ffffff';
    gCtx.fillRect(246, 110, 20, 140);
    gCtx.beginPath();
    gCtx.arc(256, 100, 16, 0, Math.PI * 2);
    gCtx.fill();

    const grillTexture = new THREE.CanvasTexture(grillCanvas);

    // B. Ornate Top Crown (Mukur / Taj) above Windshield
    const crownCanvas = document.createElement('canvas');
    crownCanvas.width = 1024;
    crownCanvas.height = 384;
    const cCtx = crownCanvas.getContext('2d');
    cCtx.fillStyle = '#f8fafc';
    cCtx.fillRect(0, 0, 1024, 384);

    cCtx.fillStyle = '#dc2626';
    cCtx.fillRect(0, 0, 1024, 36);
    cCtx.fillRect(0, 348, 1024, 36);

    // Center green dome
    cCtx.fillStyle = '#16a34a';
    cCtx.beginPath();
    cCtx.arc(512, 180, 110, Math.PI, 0);
    cCtx.fill();

    cCtx.fillStyle = '#f59e0b';
    cCtx.fillRect(472, 80, 80, 100);
    cCtx.beginPath();
    cCtx.moveTo(512, 20);
    cCtx.lineTo(460, 80);
    cCtx.lineTo(564, 80);
    cCtx.fill();

    // Floral motifs
    const drawFlower = (x, y) => {
      cCtx.fillStyle = '#dc2626';
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 3) {
        cCtx.beginPath();
        cCtx.arc(x + Math.cos(a) * 35, y + Math.sin(a) * 35, 24, 0, Math.PI * 2);
        cCtx.fill();
      }
      cCtx.fillStyle = '#fbbf24';
      cCtx.beginPath();
      cCtx.arc(x, y, 22, 0, Math.PI * 2);
      cCtx.fill();
    };

    drawFlower(220, 180);
    drawFlower(804, 180);

    // Calligraphy banner: "OG_RACE" & "মা বাবার দোয়া"
    cCtx.fillStyle = '#1e293b';
    cCtx.font = 'bold 54px serif';
    cCtx.textAlign = 'center';
    cCtx.fillText('মা বাবার দোয়া ★ OG_RACE', 512, 320);

    const crownTexture = new THREE.CanvasTexture(crownCanvas);

    // C. Wooden Cargo Dala Side Art (With "OG_RACE" & "মা বাবার দোয়া")
    const dalaCanvas = document.createElement('canvas');
    dalaCanvas.width = 1024;
    dalaCanvas.height = 512;
    const dCtx = dalaCanvas.getContext('2d');

    // Upper yellow floral rail
    dCtx.fillStyle = '#f59e0b';
    dCtx.fillRect(0, 0, 1024, 140);
    for (let x = 60; x < 1024; x += 110) {
      dCtx.fillStyle = '#dc2626';
      dCtx.beginPath();
      dCtx.arc(x, 70, 32, 0, Math.PI * 2);
      dCtx.fill();
      dCtx.fillStyle = '#22c55e';
      dCtx.beginPath();
      dCtx.arc(x, 70, 16, 0, Math.PI * 2);
      dCtx.fill();
    }

    // Lower green panel with bold truck art calligraphy
    dCtx.fillStyle = '#15803d';
    dCtx.fillRect(0, 140, 1024, 372);

    dCtx.strokeStyle = '#f8fafc';
    dCtx.lineWidth = 8;
    for (let x = 30; x < 1024; x += 138) {
      dCtx.strokeRect(x, 160, 116, 320);
    }

    // Truck Art Lettering: "OG_RACE" & "মা বাবার দোয়া"
    dCtx.fillStyle = '#ffffff';
    dCtx.font = '900 80px sans-serif';
    dCtx.textAlign = 'center';
    dCtx.fillText('OG_RACE ★ মা বাবার দোয়া', 512, 340);

    dCtx.fillStyle = '#dc2626';
    dCtx.fillRect(0, 140, 30, 372);
    dCtx.fillRect(994, 140, 30, 372);

    const dalaTexture = new THREE.CanvasTexture(dalaCanvas);

    // ----------------------------------------------------
    // 2. Base Materials
    // ----------------------------------------------------
    this.yellowPaint = new THREE.MeshStandardMaterial({
      color: 0xf5b002,
      roughness: 0.35,
      metalness: 0.4
    });

    this.cyanBluePaint = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.4,
      metalness: 0.3
    });

    this.redPaint = new THREE.MeshStandardMaterial({
      color: 0xdc2626,
      roughness: 0.4,
      metalness: 0.3
    });

    this.tealBumperMat = new THREE.MeshStandardMaterial({
      color: 0x0f766e,
      roughness: 0.5,
      metalness: 0.6
    });

    this.chassisMat = new THREE.MeshStandardMaterial({
      color: 0x1f242d,
      roughness: 0.8
    });

    this.woodPlankMat = new THREE.MeshStandardMaterial({
      color: 0x78350f,
      roughness: 0.9
    });

    this.tireMat = new THREE.MeshStandardMaterial({
      color: 0x1e2024,
      roughness: 0.9,
      metalness: 0.1
    });

    this.rimMat = new THREE.MeshStandardMaterial({
      color: 0xb91c1c,
      roughness: 0.35,
      metalness: 0.5
    });

    this.glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e293b,
      roughness: 0.1,
      metalness: 0.9,
      transmission: 0.4,
      transparent: true,
      opacity: 0.85
    });

    this.headlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.taillightMat = new THREE.MeshStandardMaterial({
      color: 0xcc0000,
      emissive: 0xcc0000,
      emissiveIntensity: 0.8
    });
    this.brakeActiveMat = new THREE.MeshStandardMaterial({
      color: 0xff1111,
      emissive: 0xff0000,
      emissiveIntensity: 3.8
    });

    // Materials for the Cows in the truck bed
    this.cowWhiteMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f0, roughness: 0.65 });
    this.cowBrownMat = new THREE.MeshStandardMaterial({ color: 0x8d5524, roughness: 0.7 });
    this.cowBlackMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.75 });
    this.cowFawnMat = new THREE.MeshStandardMaterial({ color: 0xb87333, roughness: 0.68 });
    this.hornMat = new THREE.MeshStandardMaterial({ color: 0x374151, roughness: 0.4 });
    this.snoutMat = new THREE.MeshStandardMaterial({ color: 0x1e2024, roughness: 0.8 });

    // ----------------------------------------------------
    // 3. Chassis & Frame
    // ----------------------------------------------------
    const bodyGroup = new THREE.Group();
    bodyGroup.name = 'truckBody';
    this.bodyGroup = bodyGroup;

    const frameGeo = new THREE.BoxGeometry(1.9, 0.4, 6.0);
    const frame = new THREE.Mesh(frameGeo, this.chassisMat);
    frame.position.set(0, 0.65, 0.2);
    frame.castShadow = true;
    bodyGroup.add(frame);

    // ----------------------------------------------------
    // 4. Heavy Front Bull-Bar / Master Guard Bumper
    // ----------------------------------------------------
    const bumperGroup = new THREE.Group();
    bumperGroup.position.set(0, 0.6, -2.85);

    [-0.3, 0.0, 0.3].forEach((y) => {
      const barGeo = new THREE.CylinderGeometry(0.06, 0.06, 2.3, 8);
      barGeo.rotateZ(Math.PI / 2);
      const bar = new THREE.Mesh(barGeo, this.tealBumperMat);
      bar.position.y = y;
      bar.castShadow = true;
      bumperGroup.add(bar);
    });

    [-0.95, -0.45, 0.45, 0.95].forEach((x) => {
      const vGeo = new THREE.BoxGeometry(0.08, 0.72, 0.08);
      const vBar = new THREE.Mesh(vGeo, this.tealBumperMat);
      vBar.position.x = x;
      bumperGroup.add(vBar);
    });

    [-1.08, 1.08].forEach((x) => {
      const postGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.9, 6);
      const post = new THREE.Mesh(postGeo, this.tealBumperMat);
      post.position.set(x, 0.35, 0);
      bumperGroup.add(post);

      const ballGeo = new THREE.SphereGeometry(0.07, 8, 8);
      const ball = new THREE.Mesh(ballGeo, this.redPaint);
      ball.position.set(x, 0.8, 0);
      bumperGroup.add(ball);
    });

    // License Plate (যশোর-ট ০২-০৯৬৯)
    const lpCanvas = document.createElement('canvas');
    lpCanvas.width = 256;
    lpCanvas.height = 80;
    const lpCtx = lpCanvas.getContext('2d');
    lpCtx.fillStyle = '#006633';
    lpCtx.fillRect(0, 0, 256, 80);
    lpCtx.strokeStyle = '#ffffff';
    lpCtx.lineWidth = 4;
    lpCtx.strokeRect(4, 4, 248, 72);
    lpCtx.fillStyle = '#ffffff';
    lpCtx.font = 'bold 26px sans-serif';
    lpCtx.textAlign = 'center';
    lpCtx.fillText('যশোর-ট', 128, 34);
    lpCtx.fillText('০২-০৯৬৯', 128, 64);

    const lpTexture = new THREE.CanvasTexture(lpCanvas);
    const lpGeo = new THREE.PlaneGeometry(0.65, 0.22);
    const lpMat = new THREE.MeshBasicMaterial({ map: lpTexture });
    const lpMesh = new THREE.Mesh(lpGeo, lpMat);
    lpMesh.position.set(0, -0.15, 0.08);
    bumperGroup.add(lpMesh);

    bodyGroup.add(bumperGroup);

    // ----------------------------------------------------
    // 5. Curved Yellow Bonnet / Engine Hood
    // ----------------------------------------------------
    const hoodGeo = new THREE.BoxGeometry(1.85, 0.95, 1.6);
    const hood = new THREE.Mesh(hoodGeo, this.yellowPaint);
    hood.position.set(0, 1.25, -2.05);
    hood.castShadow = true;
    bodyGroup.add(hood);

    // Front Grille with Butterfly Truck Art
    const grillFaceGeo = new THREE.PlaneGeometry(1.65, 0.85);
    const grillMat = new THREE.MeshStandardMaterial({ map: grillTexture });
    const grillFace = new THREE.Mesh(grillFaceGeo, grillMat);
    grillFace.position.set(0, 1.25, -2.86);
    bodyGroup.add(grillFace);

    // Round Headlights & Spotlights
    [-0.68, 0.68].forEach((x) => {
      const hlRingGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.06, 16);
      hlRingGeo.rotateX(Math.PI / 2);
      const ring = new THREE.Mesh(hlRingGeo, this.chassisMat);
      ring.position.set(x, 1.15, -2.87);
      bodyGroup.add(ring);

      const hlGeo = new THREE.CircleGeometry(0.13, 16);
      const hl = new THREE.Mesh(hlGeo, this.headlightMat);
      hl.position.set(x, 1.15, -2.89);
      bodyGroup.add(hl);
      this.headlights.push(hl);

      const spot = new THREE.SpotLight(0xffeedd, 2.5, 60, Math.PI / 5, 0.5, 1.2);
      spot.position.set(x, 1.15, -2.9);
      spot.target.position.set(x * 1.5, 0, -35);
      bodyGroup.add(spot);
      bodyGroup.add(spot.target);
    });

    [-0.98, 0.98].forEach((x) => {
      const archGeo = new THREE.BoxGeometry(0.24, 0.55, 1.4);
      const arch = new THREE.Mesh(archGeo, this.chassisMat);
      arch.position.set(x, 0.95, -1.95);
      arch.castShadow = true;
      bodyGroup.add(arch);
    });

    // ----------------------------------------------------
    // 6. Truck Driver Cabin & Doors
    // ----------------------------------------------------
    const cabinGeo = new THREE.BoxGeometry(2.1, 1.45, 1.55);
    const cabin = new THREE.Mesh(cabinGeo, this.yellowPaint);
    cabin.position.set(0, 1.75, -0.6);
    cabin.castShadow = true;
    bodyGroup.add(cabin);

    // Sky-Blue Painted Side Doors
    [-1.06, 1.06].forEach((x) => {
      const doorGeo = new THREE.BoxGeometry(0.04, 1.35, 1.4);
      const door = new THREE.Mesh(doorGeo, this.cyanBluePaint);
      door.position.set(x, 1.75, -0.6);
      bodyGroup.add(door);

      const winGeo = new THREE.PlaneGeometry(0.65, 0.55);
      const win = new THREE.Mesh(winGeo, this.glassMat);
      win.position.set(x > 0 ? x + 0.03 : x - 0.03, 1.95, -0.65);
      win.rotation.y = x > 0 ? Math.PI / 2 : -Math.PI / 2;
      bodyGroup.add(win);
    });

    // Windshield
    const windshieldGeo = new THREE.PlaneGeometry(1.85, 0.72);
    const windshield = new THREE.Mesh(windshieldGeo, this.glassMat);
    windshield.position.set(0, 1.92, -1.39);
    bodyGroup.add(windshield);

    // ----------------------------------------------------
    // 7. Ornate Top Crown (Mukur / Taj)
    // ----------------------------------------------------
    const crownGroup = new THREE.Group();
    crownGroup.position.set(0, 2.65, -0.85);

    const crownFaceGeo = new THREE.PlaneGeometry(2.15, 0.85);
    const crownMat = new THREE.MeshStandardMaterial({
      map: crownTexture,
      roughness: 0.4
    });
    const crownFace = new THREE.Mesh(crownFaceGeo, crownMat);
    crownFace.position.set(0, 0, -0.55);
    crownGroup.add(crownFace);

    const canopyGeo = new THREE.BoxGeometry(2.2, 0.15, 1.4);
    const canopy = new THREE.Mesh(canopyGeo, this.redPaint);
    canopy.position.set(0, 0.45, 0.1);
    canopy.castShadow = true;
    crownGroup.add(canopy);

    const ruffleGeo = new THREE.BoxGeometry(2.24, 0.18, 0.08);
    const ruffle = new THREE.Mesh(ruffleGeo, this.yellowPaint);
    ruffle.position.set(0, 0.38, -0.58);
    crownGroup.add(ruffle);

    bodyGroup.add(crownGroup);

    // ----------------------------------------------------
    // 8. Open Wooden Cargo Bed (Dala)
    // ----------------------------------------------------
    const dalaGroup = new THREE.Group();
    dalaGroup.position.set(0, 1.6, 1.6);

    const floorGeo = new THREE.BoxGeometry(2.2, 0.12, 3.4);
    const floor = new THREE.Mesh(floorGeo, this.woodPlankMat);
    floor.position.set(0, -0.4, 0);
    floor.receiveShadow = true;
    dalaGroup.add(floor);

    const dalaMat = new THREE.MeshStandardMaterial({
      map: dalaTexture,
      roughness: 0.45
    });

    [-1.12, 1.12].forEach((x) => {
      const sideGeo = new THREE.PlaneGeometry(3.4, 1.15);
      const side = new THREE.Mesh(sideGeo, dalaMat);
      side.position.set(x, 0.25, 0);
      side.rotation.y = x > 0 ? Math.PI / 2 : -Math.PI / 2;
      side.castShadow = true;
      dalaGroup.add(side);

      const railGeo = new THREE.BoxGeometry(0.12, 0.12, 3.4);
      const rail = new THREE.Mesh(railGeo, this.redPaint);
      rail.position.set(x, 0.85, 0);
      dalaGroup.add(rail);
    });

    const frontBoardGeo = new THREE.BoxGeometry(2.2, 1.15, 0.1);
    const frontBoard = new THREE.Mesh(frontBoardGeo, this.redPaint);
    frontBoard.position.set(0, 0.25, -1.68);
    dalaGroup.add(frontBoard);

    const tailBoardGeo = new THREE.BoxGeometry(2.2, 1.05, 0.1);
    const tailBoard = new THREE.Mesh(tailBoardGeo, this.yellowPaint);
    tailBoard.position.set(0, 0.2, 1.68);
    tailBoard.castShadow = true;
    dalaGroup.add(tailBoard);

    const rearBumperGeo = new THREE.BoxGeometry(2.25, 0.18, 0.15);
    const rearBumper = new THREE.Mesh(rearBumperGeo, this.chassisMat);
    rearBumper.position.set(0, -0.65, 1.72);
    dalaGroup.add(rearBumper);

    [-0.85, 0.85].forEach((x) => {
      const tlGeo = new THREE.BoxGeometry(0.32, 0.14, 0.05);
      const tl = new THREE.Mesh(tlGeo, this.taillightMat);
      tl.position.set(x, -0.65, 1.82);
      dalaGroup.add(tl);
      this.brakeLights.push(tl);
    });

    [-0.85, 0.85].forEach((x) => {
      const flapGeo = new THREE.BoxGeometry(0.4, 0.45, 0.04);
      const flap = new THREE.Mesh(flapGeo, this.tireMat);
      flap.position.set(x, -0.9, 1.74);
      dalaGroup.add(flap);
    });

    // ----------------------------------------------------
    // 9. 5 COWS LOADED INSIDE THE TRUCK CARGO BED! (গোরু-ভর্তি ট্রাক)
    // ----------------------------------------------------
    const cowConfigs = [
      { x: -0.55, z: -0.85, rotY: -0.25, mat: this.cowWhiteMat, scale: 0.95 },  // Front Left Cow
      { x: 0.55, z: -0.75, rotY: 0.35, mat: this.cowBrownMat, scale: 0.92 },   // Front Right Cow
      { x: 0.0, z: 0.05, rotY: 0.1, mat: this.cowBlackMat, scale: 1.0 },       // Center Big Cow
      { x: -0.55, z: 0.85, rotY: 0.4, mat: this.cowFawnMat, scale: 0.9 },      // Rear Left Cow
      { x: 0.55, z: 0.85, rotY: -0.35, mat: this.cowWhiteMat, scale: 0.94 }    // Rear Right Cow
    ];

    cowConfigs.forEach((cfg, idx) => {
      const cowMesh = this.createBedCow(cfg.mat, cfg.scale);
      cowMesh.position.set(cfg.x, 0.35, cfg.z);
      cowMesh.rotation.y = cfg.rotY;
      dalaGroup.add(cowMesh);

      this.cows.push({
        group: cowMesh,
        head: cowMesh.userData.head,
        baseRotX: cowMesh.userData.head.rotation.x,
        seed: idx * 1.5
      });
    });

    bodyGroup.add(dalaGroup);

    // Spare Tire mounted under chassis
    const spareTire = this.createTruckWheel(0.48, 0.26, false);
    spareTire.position.set(0, 0.42, 0.4);
    spareTire.rotation.x = Math.PI / 2;
    bodyGroup.add(spareTire);

    // Exhaust Pipe & Nitro Flame Jet
    const exhaustGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.6, 8);
    exhaustGeo.rotateZ(Math.PI / 2);
    const exhaust = new THREE.Mesh(exhaustGeo, this.chassisMat);
    exhaust.position.set(1.05, 0.48, -0.8);
    bodyGroup.add(exhaust);

    // Boost Jet Flame Cone
    const flameGeo = new THREE.ConeGeometry(0.22, 1.2, 12);
    flameGeo.rotateZ(-Math.PI / 2);
    const flameMat = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0.0
    });
    const flame = new THREE.Mesh(flameGeo, flameMat);
    flame.position.set(1.65, 0.48, -0.8);
    bodyGroup.add(flame);
    this.exhaustFires.push(flame);

    this.group.add(bodyGroup);

    // ----------------------------------------------------
    // 10. Heavy Truck Wheels (Single Front, Dual Rear)
    // ----------------------------------------------------
    const wheelY = 0.48;
    const wheelRadius = 0.52;
    const wheelWidth = 0.32;

    [-1.02, 1.02].forEach((x) => {
      const wheelAssembly = this.createTruckWheelAssembly(wheelRadius, wheelWidth, x > 0, false);
      wheelAssembly.position.set(x, wheelY, -1.95);
      this.group.add(wheelAssembly);
      this.wheels.push(wheelAssembly.userData.spinner);
      this.frontWheels.push(wheelAssembly);
    });

    [-1.02, 1.02].forEach((x) => {
      const wheelAssembly = this.createTruckWheelAssembly(wheelRadius, wheelWidth, x > 0, true);
      wheelAssembly.position.set(x, wheelY, 1.85);
      this.group.add(wheelAssembly);
      this.wheels.push(wheelAssembly.userData.spinner);
    });
  }

  // Helper: Create a Cow Model inside the truck's cargo bed
  createBedCow(bodyMat, scale = 1.0) {
    const cow = new THREE.Group();
    cow.scale.set(scale, scale, scale);

    // Cow Body (Barrel Torso visible above cargo floor)
    const bodyGeo = new THREE.BoxGeometry(0.85, 0.85, 1.35);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, 0.45, 0);
    body.castShadow = true;
    cow.add(body);

    // Iconic Zebu Dorsal Hump
    const humpGeo = new THREE.ConeGeometry(0.24, 0.38, 8);
    const hump = new THREE.Mesh(humpGeo, bodyMat);
    hump.position.set(0, 0.95, -0.32);
    hump.rotation.x = -0.2;
    cow.add(hump);

    // Neck & Head Pivot (bobbing with driving vibrations)
    const headPivot = new THREE.Group();
    headPivot.position.set(0, 0.75, -0.6);
    cow.userData.head = headPivot;

    // Head
    const headGeo = new THREE.BoxGeometry(0.42, 0.46, 0.62);
    const head = new THREE.Mesh(headGeo, bodyMat);
    head.position.set(0, 0.22, -0.35);
    headPivot.add(head);

    // Dark Snout / Muzzle
    const snoutGeo = new THREE.BoxGeometry(0.32, 0.25, 0.25);
    const snout = new THREE.Mesh(snoutGeo, this.snoutMat);
    snout.position.set(0, 0.12, -0.68);
    headPivot.add(snout);

    // Curved Horns & Drooping Ears
    [-0.18, 0.18].forEach((hx) => {
      const hornGeo = new THREE.ConeGeometry(0.05, 0.3, 6);
      const horn = new THREE.Mesh(hornGeo, this.hornMat);
      horn.position.set(hx, 0.46, -0.28);
      horn.rotation.z = hx > 0 ? -0.38 : 0.38;
      horn.rotation.x = 0.25;
      headPivot.add(horn);

      const earGeo = new THREE.BoxGeometry(0.18, 0.07, 0.08);
      const ear = new THREE.Mesh(earGeo, bodyMat);
      ear.position.set(hx > 0 ? 0.26 : -0.26, 0.32, -0.25);
      ear.rotation.z = hx > 0 ? -0.35 : 0.35;
      headPivot.add(ear);
    });

    cow.add(headPivot);
    return cow;
  }

  createTruckWheelAssembly(radius, width, isRightSide, isDualRear) {
    const assembly = new THREE.Group();
    const spinner = new THREE.Group();
    assembly.userData.spinner = spinner;
    assembly.add(spinner);

    if (isDualRear) {
      const wheel1 = this.createTruckWheel(radius, width * 0.75, isRightSide);
      wheel1.position.x = isRightSide ? 0.08 : -0.08;
      spinner.add(wheel1);

      const wheel2 = this.createTruckWheel(radius, width * 0.75, isRightSide);
      wheel2.position.x = isRightSide ? -0.16 : 0.16;
      spinner.add(wheel2);
    } else {
      const wheel = this.createTruckWheel(radius, width, isRightSide);
      spinner.add(wheel);
    }

    return assembly;
  }

  createTruckWheel(radius, width, isRightSide) {
    const group = new THREE.Group();

    const tireGeo = new THREE.CylinderGeometry(radius, radius, width, 24);
    tireGeo.rotateZ(Math.PI / 2);
    const tire = new THREE.Mesh(tireGeo, this.tireMat);
    group.add(tire);

    const rimGeo = new THREE.CylinderGeometry(radius * 0.65, radius * 0.65, width + 0.02, 18);
    rimGeo.rotateZ(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, this.rimMat);
    group.add(rim);

    const hubGeo = new THREE.CylinderGeometry(radius * 0.28, radius * 0.28, width + 0.05, 12);
    hubGeo.rotateZ(Math.PI / 2);
    const hub = new THREE.Mesh(hubGeo, this.chassisMat);
    group.add(hub);

    return group;
  }

  update(speedKmh, currentLaneX, targetLaneX, isBraking, isBoosting, delta) {
    // 1. Wheel spin proportional to road speed
    const speedMs = (speedKmh * 1000) / 3600;
    const wheelCircumference = 2 * Math.PI * 0.52;
    const rotSpeed = (speedMs / wheelCircumference) * (2 * Math.PI) * delta;
    this.wheelRotation -= rotSpeed;
    this.wheels.forEach((w) => {
      w.rotation.x = this.wheelRotation;
    });

    // 2. Front wheel steering angle
    const laneDeltaX = targetLaneX - this.group.position.x;
    const targetWheelYaw = -Math.max(-CONFIG.STEERING.WHEEL_TURN_ANGLE, Math.min(CONFIG.STEERING.WHEEL_TURN_ANGLE, laneDeltaX * 0.35));
    this.frontWheels.forEach((fw) => {
      fw.rotation.y += (targetWheelYaw - fw.rotation.y) * Math.min(1.0, delta * 12);
    });

    // 3. Truck body sway & banking
    const targetRoll = Math.max(-0.065, Math.min(0.065, laneDeltaX * 0.065));
    this.currentRoll += (targetRoll - this.currentRoll) * Math.min(1.0, delta * 10);
    this.bodyGroup.rotation.z = this.currentRoll;

    // 4. Body yaw turning
    const targetYaw = Math.max(-0.05, Math.min(0.05, laneDeltaX * 0.05));
    this.currentYaw += (targetYaw - this.currentYaw) * Math.min(1.0, delta * 10);
    this.bodyGroup.rotation.y = this.currentYaw;

    // 5. Pitch
    let targetPitch = 0;
    if (isBraking) {
      targetPitch = 0.045; // Dips down on braking
    } else if (isBoosting) {
      targetPitch = -0.035; // Rises on boost
    }
    this.currentPitch += (targetPitch - this.currentPitch) * Math.min(1.0, delta * 8);
    this.bodyGroup.rotation.x = this.currentPitch;

    // 6. Dynamic Brake Lights
    const targetMat = isBraking ? this.brakeActiveMat : this.taillightMat;
    this.brakeLights.forEach((lightMesh) => {
      lightMesh.material = targetMat;
    });

    // 7. Exhaust Jet Flame during Boost (Powerful flame)
    this.exhaustFires.forEach((flame) => {
      if (isBoosting) {
        flame.material.opacity = 0.95;
        flame.scale.set(
          1.2 + Math.random() * 0.5,
          1.2 + Math.random() * 0.6,
          1.2 + Math.random() * 0.5
        );
        flame.material.color.setHex(Math.random() > 0.4 ? 0xffbb00 : 0xff4400);
      } else {
        flame.material.opacity = 0;
      }
    });

    // Horn High-Beam Headlight Flash
    if (this.hornTimer > 0) {
      this.hornTimer -= delta;
      this.headlights.forEach((hl) => {
        hl.scale.set(1.4, 1.4, 1.4);
      });
    } else {
      this.headlights.forEach((hl) => {
        hl.scale.set(1.0, 1.0, 1.0);
      });
    }

    // 8. Animate the 5 Cows in the truck bed (Heads bobbing with road speed)
    const time = performance.now() * 0.001;
    this.cows.forEach((c) => {
      const bob = Math.sin(time * 6.5 + c.seed) * 0.08 + (isBoosting ? Math.sin(time * 14 + c.seed) * 0.05 : 0);
      c.head.rotation.x = c.baseRotX + bob;
      c.head.rotation.y = Math.sin(time * 2.2 + c.seed) * 0.12;
    });

    // 9. Update Bounding Box
    this.updateBoundingBox();
  }

  updateBoundingBox() {
    const center = this.group.position.clone();
    center.y += 1.45;
    this.box.setFromCenterAndSize(center, this.collisionSize);
  }

  triggerCrash() {
    this.bodyGroup.rotation.z = 0.28;
    this.bodyGroup.rotation.y = 0.38;
    this.bodyGroup.rotation.x = -0.14;
    this.bodyGroup.position.y = 0.35;
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
