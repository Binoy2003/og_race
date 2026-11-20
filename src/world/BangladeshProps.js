// ==========================================
// SUPRA RUSH - AUTHENTIC RURAL BANGLADESH 3D PROPS
// ==========================================

import * as THREE from 'three';

export class BangladeshProps {
  constructor() {
    this.initMaterials();
    this.animatedAnimals = []; // Cows, ducks, goats for frame updates
    this.smokeEmitters = [];    // Tea stall smoke
  }

  initMaterials() {
    // 1. Corrugated Tin Roof Material (Dheutin)
    const tinCanvas = document.createElement('canvas');
    tinCanvas.width = 128;
    tinCanvas.height = 128;
    const tinCtx = tinCanvas.getContext('2d');
    tinCtx.fillStyle = '#9ca3af';
    tinCtx.fillRect(0, 0, 128, 128);
    for (let x = 0; x < 128; x += 8) {
      tinCtx.fillStyle = '#6b7280';
      tinCtx.fillRect(x, 0, 4, 128);
      tinCtx.fillStyle = '#d1d5db';
      tinCtx.fillRect(x + 4, 0, 4, 128);
    }
    const tinTexture = new THREE.CanvasTexture(tinCanvas);
    tinTexture.wrapS = THREE.RepeatWrapping;
    tinTexture.wrapT = THREE.RepeatWrapping;
    tinTexture.repeat.set(4, 4);

    this.tinRoofMat = new THREE.MeshStandardMaterial({
      map: tinTexture,
      metalness: 0.8,
      roughness: 0.35,
      color: 0x9ca3af
    });

    // Weathered Rust Tin Roof Variant
    this.rustedTinMat = new THREE.MeshStandardMaterial({
      map: tinTexture,
      metalness: 0.65,
      roughness: 0.6,
      color: 0x8a523a
    });

    // 2. Bamboo Wall / Fence Material (Bera)
    const beraCanvas = document.createElement('canvas');
    beraCanvas.width = 128;
    beraCanvas.height = 128;
    const beraCtx = beraCanvas.getContext('2d');
    beraCtx.fillStyle = '#c8a165';
    beraCtx.fillRect(0, 0, 128, 128);
    beraCtx.strokeStyle = '#8c6239';
    beraCtx.lineWidth = 3;
    for (let i = 0; i <= 128; i += 16) {
      beraCtx.beginPath();
      beraCtx.moveTo(0, i);
      beraCtx.lineTo(128, i);
      beraCtx.stroke();
      beraCtx.beginPath();
      beraCtx.moveTo(i, 0);
      beraCtx.lineTo(i, 128);
      beraCtx.stroke();
    }
    const beraTexture = new THREE.CanvasTexture(beraCanvas);
    beraTexture.wrapS = THREE.RepeatWrapping;
    beraTexture.wrapT = THREE.RepeatWrapping;
    beraTexture.repeat.set(2, 2);

    this.bambooWallMat = new THREE.MeshStandardMaterial({
      map: beraTexture,
      roughness: 0.85,
      color: 0xd4a373
    });

    this.woodMat = new THREE.MeshStandardMaterial({
      color: 0x5c4033,
      roughness: 0.85
    });

    this.mudPlinthMat = new THREE.MeshStandardMaterial({
      color: 0x7c5e42,
      roughness: 0.95
    });

    this.brickMat = new THREE.MeshStandardMaterial({
      color: 0x9c3d2e,
      roughness: 0.9
    });

    // 3. Foliage & Plants
    this.palmLeafMat = new THREE.MeshStandardMaterial({
      color: 0x2e7d32,
      roughness: 0.6,
      side: THREE.DoubleSide
    });

    this.bananaLeafMat = new THREE.MeshStandardMaterial({
      color: 0x43a047,
      roughness: 0.5,
      side: THREE.DoubleSide
    });

    this.treeCrownMat = new THREE.MeshStandardMaterial({
      color: 0x1b5e20,
      roughness: 0.85
    });

    this.bambooTrunkMat = new THREE.MeshStandardMaterial({
      color: 0x66bb6a,
      roughness: 0.4
    });

    this.palmTrunkMat = new THREE.MeshStandardMaterial({
      color: 0x6d4c41,
      roughness: 0.9
    });

    // 4. Agricultural / Rural
    this.hayMat = new THREE.MeshStandardMaterial({
      color: 0xd4a017,
      roughness: 0.95
    });

    this.paddyFieldMat = new THREE.MeshStandardMaterial({
      color: 0x388e3c,
      roughness: 0.8
    });

    this.waterMat = new THREE.MeshStandardMaterial({
      color: 0x1e6f5c,
      metalness: 0.2,
      roughness: 0.15,
      transparent: true,
      opacity: 0.88
    });

    this.concreteMat = new THREE.MeshStandardMaterial({
      color: 0x9e9e9e,
      roughness: 0.7
    });

    // 5. Animals
    this.cowWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xf5f5f0,
      roughness: 0.6
    });

    this.cowBrownMat = new THREE.MeshStandardMaterial({
      color: 0x8d5524,
      roughness: 0.65
    });

    this.cowBlackPatchMat = new THREE.MeshStandardMaterial({
      color: 0x212121,
      roughness: 0.7
    });

    this.hornMat = new THREE.MeshStandardMaterial({
      color: 0x374151,
      roughness: 0.4
    });

    this.ropeMat = new THREE.MeshBasicMaterial({
      color: 0xc2a649
    });

    this.duckMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.5
    });

    this.beakMat = new THREE.MeshStandardMaterial({
      color: 0xff9800,
      roughness: 0.4
    });

    this.smokeMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.35
    });
  }

  // ========================================================
  // 1. AUTHENTIC BANGLADESHI COW (Deshi Goru with Hump & Rope)
  // ========================================================
  createCow(colorType = 'brown') {
    const cow = new THREE.Group();
    cow.name = 'deshi_cow';

    const bodyMat = colorType === 'white' ? this.cowWhiteMat : (colorType === 'black' ? this.cowBlackPatchMat : this.cowBrownMat);

    // Main Torso / Barrel
    const bodyGeo = new THREE.BoxGeometry(0.9, 0.95, 1.7);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, 1.05, 0);
    body.castShadow = true;
    cow.add(body);

    // Zebu Dorsal Hump (Iconic Bangladeshi Deshi Cow Feature)
    const humpGeo = new THREE.ConeGeometry(0.3, 0.45, 8);
    const hump = new THREE.Mesh(humpGeo, bodyMat);
    hump.position.set(0, 1.62, -0.45);
    hump.rotation.x = -0.2;
    hump.castShadow = true;
    cow.add(hump);

    // Dewlap (Skin flap hanging under the neck)
    const dewlapGeo = new THREE.BoxGeometry(0.12, 0.45, 0.5);
    const dewlap = new THREE.Mesh(dewlapGeo, bodyMat);
    dewlap.position.set(0, 0.85, -0.85);
    cow.add(dewlap);

    // Neck & Head Pivot Group (For animated grazing / looking)
    const headPivot = new THREE.Group();
    headPivot.position.set(0, 1.25, -0.85);

    // Neck
    const neckGeo = new THREE.BoxGeometry(0.45, 0.55, 0.6);
    const neck = new THREE.Mesh(neckGeo, bodyMat);
    neck.position.set(0, 0.15, -0.2);
    neck.rotation.x = 0.35;
    headPivot.add(neck);

    // Head
    const headGeo = new THREE.BoxGeometry(0.48, 0.52, 0.7);
    const head = new THREE.Mesh(headGeo, bodyMat);
    head.position.set(0, 0.28, -0.55);
    headPivot.add(head);

    // Snout / Muzzle
    const snoutMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8 });
    const snoutGeo = new THREE.BoxGeometry(0.36, 0.3, 0.3);
    const snout = new THREE.Mesh(snoutGeo, snoutMat);
    snout.position.set(0, 0.18, -0.92);
    headPivot.add(snout);

    // Curved Horns
    [-0.22, 0.22].forEach((x) => {
      const hornGeo = new THREE.ConeGeometry(0.06, 0.35, 6);
      const horn = new THREE.Mesh(hornGeo, this.hornMat);
      horn.position.set(x, 0.56, -0.48);
      horn.rotation.z = x > 0 ? -0.4 : 0.4;
      horn.rotation.x = 0.3;
      headPivot.add(horn);

      // Drooping Ears
      const earGeo = new THREE.BoxGeometry(0.22, 0.08, 0.1);
      const ear = new THREE.Mesh(earGeo, bodyMat);
      ear.position.set(x > 0 ? 0.32 : -0.32, 0.38, -0.45);
      ear.rotation.z = x > 0 ? -0.35 : 0.35;
      headPivot.add(ear);
    });

    cow.add(headPivot);

    // 4 Slender Legs
    const legPositions = [
      { x: -0.32, z: -0.55 },
      { x: 0.32, z: -0.55 },
      { x: -0.32, z: 0.55 },
      { x: 0.32, z: 0.55 }
    ];

    legPositions.forEach((pos) => {
      const legGeo = new THREE.BoxGeometry(0.2, 0.75, 0.2);
      const leg = new THREE.Mesh(legGeo, bodyMat);
      leg.position.set(pos.x, 0.38, pos.z);
      leg.castShadow = true;
      cow.add(leg);

      // Hoof
      const hoofGeo = new THREE.BoxGeometry(0.22, 0.1, 0.22);
      const hoof = new THREE.Mesh(hoofGeo, this.hornMat);
      hoof.position.set(pos.x, 0.05, pos.z);
      cow.add(hoof);
    });

    // Swishing Tail
    const tailPivot = new THREE.Group();
    tailPivot.position.set(0, 1.35, 0.85);

    const tailGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.85, 6);
    tailGeo.translate(0, -0.42, 0);
    const tail = new THREE.Mesh(tailGeo, bodyMat);
    tailPivot.add(tail);

    // Tail Hair Brush
    const brushGeo = new THREE.ConeGeometry(0.08, 0.25, 6);
    brushGeo.translate(0, -0.9, 0);
    const brush = new THREE.Mesh(brushGeo, this.hornMat);
    tailPivot.add(brush);

    cow.add(tailPivot);

    // Wooden Tether Post (Khuti) tied with rope
    const postGeo = new THREE.CylinderGeometry(0.08, 0.1, 1.2, 8);
    const post = new THREE.Mesh(postGeo, this.woodMat);
    post.position.set(0.9, 0.6, -1.2);
    cow.add(post);

    // Rope connecting cow neck to post
    const ropePoints = [
      new THREE.Vector3(0, 1.2, -0.8),
      new THREE.Vector3(0.45, 0.75, -1.0),
      new THREE.Vector3(0.9, 0.85, -1.2)
    ];
    const ropeCurve = new THREE.CatmullRomCurve3(ropePoints);
    const ropeGeo = new THREE.TubeGeometry(ropeCurve, 8, 0.02, 4, false);
    const rope = new THREE.Mesh(ropeGeo, this.ropeMat);
    cow.add(rope);

    // Save references for animation
    const animData = {
      type: 'cow',
      head: headPivot,
      tail: tailPivot,
      seed: Math.random() * 10
    };
    this.animatedAnimals.push(animData);

    return cow;
  }

  // ========================================================
  // 2. TRADITIONAL BANGLADESHI VILLAGE HOUSE (Tin er Ghor)
  // ========================================================
  createVillageHouse(isRusted = false) {
    const house = new THREE.Group();
    house.name = 'village_house';

    const roofMat = isRusted ? this.rustedTinMat : this.tinRoofMat;

    // Raised Mud/Brick Plinth (Bhiti)
    const plinthGeo = new THREE.BoxGeometry(6.6, 0.45, 5.2);
    const plinth = new THREE.Mesh(plinthGeo, this.mudPlinthMat);
    plinth.position.set(0, 0.22, 0);
    plinth.receiveShadow = true;
    house.add(plinth);

    // Main House Walls (Bamboo Bera or pastel tin)
    const wallGeo = new THREE.BoxGeometry(5.8, 2.6, 3.8);
    const walls = new THREE.Mesh(wallGeo, this.bambooWallMat);
    walls.position.set(0, 1.75, -0.4);
    walls.castShadow = true;
    walls.receiveShadow = true;
    house.add(walls);

    // Wooden Door
    const doorGeo = new THREE.BoxGeometry(0.85, 1.8, 0.08);
    const door = new THREE.Mesh(doorGeo, this.woodMat);
    door.position.set(0.6, 1.35, 1.52);
    house.add(door);

    // Windows with wooden shutters
    [-1.6, -0.6].forEach((x) => {
      const winGeo = new THREE.BoxGeometry(0.7, 0.8, 0.08);
      const win = new THREE.Mesh(winGeo, this.woodMat);
      win.position.set(x, 1.8, 1.52);
      house.add(win);
    });

    // Pitch Corrugated Tin Roof (Dheutin Chaal)
    const roofLeftGeo = new THREE.BoxGeometry(6.6, 0.1, 2.8);
    const roofLeft = new THREE.Mesh(roofLeftGeo, roofMat);
    roofLeft.position.set(0, 3.65, -0.9);
    roofLeft.rotation.x = -0.52;
    roofLeft.castShadow = true;
    house.add(roofLeft);

    const roofRightGeo = new THREE.BoxGeometry(6.6, 0.1, 3.4);
    const roofRight = new THREE.Mesh(roofRightGeo, roofMat);
    roofRight.position.set(0, 3.5, 0.8);
    roofRight.rotation.x = 0.46; // Extends forward over veranda
    roofRight.castShadow = true;
    house.add(roofRight);

    // Front Veranda (Baranda) Wooden Support Pillars
    [-2.5, -0.8, 0.8, 2.5].forEach((x) => {
      const pillarGeo = new THREE.CylinderGeometry(0.08, 0.08, 2.3, 8);
      const pillar = new THREE.Mesh(pillarGeo, this.woodMat);
      pillar.position.set(x, 1.6, 2.1);
      pillar.castShadow = true;
      house.add(pillar);
    });

    return house;
  }

  // ========================================================
  // 3. VILLAGE TEA STALL (Cha er Tong)
  // ========================================================
  createTeaStall() {
    const stall = new THREE.Group();
    stall.name = 'cha_er_tong';

    // Wooden stall frame & counter
    const counterGeo = new THREE.BoxGeometry(3.2, 1.0, 1.8);
    const counter = new THREE.Mesh(counterGeo, this.woodMat);
    counter.position.set(0, 0.5, 0);
    stall.add(counter);

    // Corrugated Tin Awning / Roof
    const roofGeo = new THREE.BoxGeometry(3.8, 0.08, 2.8);
    const roof = new THREE.Mesh(roofGeo, this.tinRoofMat);
    roof.position.set(0, 2.3, 0.2);
    roof.rotation.x = 0.2;
    roof.castShadow = true;
    stall.add(roof);

    // Wooden Posts
    [-1.6, 1.6].forEach((x) => {
      const postGeo = new THREE.CylinderGeometry(0.07, 0.07, 2.2, 6);
      const post = new THREE.Mesh(postGeo, this.woodMat);
      post.position.set(x, 1.1, 1.2);
      stall.add(post);
    });

    // Long Wooden Bench (Tong er Bench)
    const benchGeo = new THREE.BoxGeometry(3.0, 0.08, 0.45);
    const bench = new THREE.Mesh(benchGeo, this.woodMat);
    bench.position.set(0, 0.45, 1.8);
    stall.add(bench);

    [-1.2, 1.2].forEach((x) => {
      const bLegGeo = new THREE.BoxGeometry(0.08, 0.45, 0.4);
      const bLeg = new THREE.Mesh(bLegGeo, this.woodMat);
      bLeg.position.set(x, 0.22, 1.8);
      stall.add(bLeg);
    });

    // Aluminum Tea Kettle (Cha er Ketli)
    const kettleMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.9, roughness: 0.2 });
    const kettleGeo = new THREE.CylinderGeometry(0.18, 0.22, 0.35, 10);
    const kettle = new THREE.Mesh(kettleGeo, kettleMat);
    kettle.position.set(-0.6, 1.18, 0.2);
    stall.add(kettle);

    // Tea Glasses & Biscuit Jars
    const jarMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transmission: 0.7, roughness: 0.1 });
    const jarGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.28, 8);
    const jar = new THREE.Mesh(jarGeo, jarMat);
    jar.position.set(0.6, 1.15, 0.1);
    stall.add(jar);

    // Kettle Smoke particles
    const smokeGroup = new THREE.Group();
    smokeGroup.position.set(-0.6, 1.45, 0.2);
    stall.add(smokeGroup);

    for (let i = 0; i < 4; i++) {
      const pGeo = new THREE.SphereGeometry(0.08, 6, 6);
      const pMesh = new THREE.Mesh(pGeo, this.smokeMat);
      pMesh.position.y = i * 0.25;
      smokeGroup.add(pMesh);
    }
    this.smokeEmitters.push(smokeGroup);

    return stall;
  }

  // ========================================================
  // 4. GOLDEN HAYSTACK (Khorer Gada)
  // ========================================================
  createHaystack() {
    const haystack = new THREE.Group();
    haystack.name = 'khorer_gada';

    // Tiered golden cones resembling stacked rice straw
    const baseGeo = new THREE.CylinderGeometry(1.6, 1.9, 1.4, 12);
    const base = new THREE.Mesh(baseGeo, this.hayMat);
    base.position.y = 0.7;
    base.castShadow = true;
    haystack.add(base);

    const midGeo = new THREE.CylinderGeometry(1.0, 1.6, 1.2, 12);
    const mid = new THREE.Mesh(midGeo, this.hayMat);
    mid.position.y = 2.0;
    mid.castShadow = true;
    haystack.add(mid);

    const topGeo = new THREE.ConeGeometry(1.0, 1.5, 12);
    const top = new THREE.Mesh(topGeo, this.hayMat);
    top.position.y = 3.35;
    top.castShadow = true;
    haystack.add(top);

    // Central Bamboo Pole protruding from top
    const poleGeo = new THREE.CylinderGeometry(0.04, 0.05, 4.8, 6);
    const pole = new THREE.Mesh(poleGeo, this.bambooTrunkMat);
    pole.position.y = 2.4;
    haystack.add(pole);

    return haystack;
  }

  // ========================================================
  // 4B. AUTHENTIC BANGLADESHI JATRI CHAWNI (যাত্রী ছাউনি / BUS STOP)
  // Features Seating Arrangement & Romantic Teenage Couple Holding Hands + Red Rose!
  // ========================================================
  createJatriChawni(side = 1) {
    const chawni = new THREE.Group();
    chawni.name = 'jatri_chawni';

    // 1. Raised Concrete Platform (Safely set on roadside verge)
    const platformGeo = new THREE.BoxGeometry(5.0, 0.35, 2.3);
    const platform = new THREE.Mesh(platformGeo, this.concreteMat);
    platform.position.set(0, 0.175, 0);
    platform.receiveShadow = true;
    chawni.add(platform);

    // Platform step curb (red/white roadside warning)
    const curbGeo = new THREE.BoxGeometry(5.2, 0.14, 0.22);
    const curb = new THREE.Mesh(curbGeo, this.brickMat);
    curb.position.set(0, 0.07, -1.1);
    chawni.add(curb);

    // 2. Back Brick Wall
    const wallGeo = new THREE.BoxGeometry(4.8, 2.5, 0.18);
    const wall = new THREE.Mesh(wallGeo, this.brickMat);
    wall.position.set(0, 1.45, 1.02);
    wall.castShadow = true;
    chawni.add(wall);

    // Whitewashed inner surface of back wall
    const innerWallGeo = new THREE.PlaneGeometry(4.6, 2.3);
    const innerWall = new THREE.Mesh(innerWallGeo, this.culvertRailingMaterial);
    innerWall.position.set(0, 1.45, 0.92);
    chawni.add(innerWall);

    // 3. Four Concrete / Steel Support Pillars
    const pillarPositions = [
      [-2.1, -0.92],
      [2.1, -0.92],
      [-2.1, 0.92],
      [2.1, 0.92]
    ];
    pillarPositions.forEach(([px, pz]) => {
      const pGeo = new THREE.CylinderGeometry(0.08, 0.09, 2.6, 12);
      const pillar = new THREE.Mesh(pGeo, this.culvertRailingMaterial);
      pillar.position.set(px, 1.45, pz);
      pillar.castShadow = true;
      chawni.add(pillar);

      // Dark green base collar
      const collarGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.35, 12);
      const collar = new THREE.Mesh(collarGeo, new THREE.MeshStandardMaterial({ color: 0x15803d }));
      collar.position.set(px, 0.45, pz);
      chawni.add(collar);
    });

    // 4. Curved Tin / Corrugated Green Roof
    const roofGeo = new THREE.CylinderGeometry(2.4, 2.4, 5.2, 24, 1, true, Math.PI * 0.2, Math.PI * 0.6);
    roofGeo.rotateZ(Math.PI / 2);
    const roof = new THREE.Mesh(roofGeo, this.tinRoofMat);
    roof.position.set(0, 2.75, 0.05);
    roof.castShadow = true;
    chawni.add(roof);

    // Roof Trusses (Metal beams supporting the roof)
    [-1.8, 0, 1.8].forEach((tx) => {
      const trussGeo = new THREE.BoxGeometry(0.06, 0.06, 2.1);
      const truss = new THREE.Mesh(trussGeo, new THREE.MeshStandardMaterial({ color: 0x334155 }));
      truss.position.set(tx, 2.55, 0);
      chawni.add(truss);
    });

    // Warm Lantern / Lamp under roof (illuminating the couple romantically!)
    const lamp = new THREE.PointLight(0xffedd5, 3.5, 16);
    lamp.position.set(0, 2.45, 0.25);
    chawni.add(lamp);

    // Vintage black lantern cage & glowing bulb
    const cageGeo = new THREE.CylinderGeometry(0.14, 0.18, 0.28, 8, 1, true);
    const cage = new THREE.Mesh(cageGeo, new THREE.MeshStandardMaterial({ color: 0x1e293b, wireframe: true }));
    cage.position.set(0, 2.48, 0.25);
    chawni.add(cage);

    const bulbMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xffedd5 })
    );
    bulbMesh.position.set(0, 2.48, 0.25);
    chawni.add(bulbMesh);

    // ----------------------------------------------------
    // 5A. HEADER SIGNBOARD: "BUS STOP" | যাত্রী ছাউনি
    // ----------------------------------------------------
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 1024;
    signCanvas.height = 256;
    const sCtx = signCanvas.getContext('2d');

    // Deep Green background
    sCtx.fillStyle = '#15803d';
    sCtx.fillRect(0, 0, 1024, 256);

    // Gold reflective border
    sCtx.strokeStyle = '#f59e0b';
    sCtx.lineWidth = 14;
    sCtx.strokeRect(10, 10, 1004, 236);

    // Inner gold pinstripe
    sCtx.strokeStyle = '#fde047';
    sCtx.lineWidth = 4;
    sCtx.strokeRect(24, 24, 976, 208);

    // Bus Icon on left and right
    const drawMiniBus = (bx, by) => {
      sCtx.fillStyle = '#fde047';
      sCtx.beginPath();
      sCtx.roundRect(bx, by, 76, 44, 8);
      sCtx.fill();
      sCtx.fillStyle = '#0284c7';
      sCtx.fillRect(bx + 8, by + 6, 20, 18);
      sCtx.fillRect(bx + 34, by + 6, 20, 18);
      sCtx.fillRect(bx + 58, by + 6, 12, 18);
      sCtx.fillStyle = '#18181b';
      sCtx.beginPath();
      sCtx.arc(bx + 20, by + 44, 9, 0, Math.PI * 2);
      sCtx.arc(bx + 56, by + 44, 9, 0, Math.PI * 2);
      sCtx.fill();
    };
    drawMiniBus(42, 105);
    drawMiniBus(906, 105);

    // BOLD "BUS STOP" IN ENGLISH (Top line - High Visibility!)
    sCtx.fillStyle = '#ffffff';
    sCtx.font = '900 86px sans-serif';
    sCtx.textAlign = 'center';
    sCtx.textBaseline = 'middle';
    sCtx.shadowColor = 'rgba(0,0,0,0.9)';
    sCtx.shadowBlur = 12;
    sCtx.fillText('BUS STOP', 512, 85);

    // "বাস স্টপ | যাত্রী ছাউনি" IN BENGALI (Bottom line)
    sCtx.fillStyle = '#fde047';
    sCtx.font = 'bold 54px sans-serif';
    sCtx.shadowColor = 'rgba(0,0,0,0.8)';
    sCtx.shadowBlur = 8;
    sCtx.fillText('বাস স্টপ  |  যাত্রী ছাউনি', 512, 185);
    sCtx.shadowBlur = 0;

    const signTexture = new THREE.CanvasTexture(signCanvas);

    // Signboard assembly with frame and unmirrored front/back faces
    const signGroup = new THREE.Group();
    signGroup.position.set(0, 2.65, -1.02);

    const signFrameGeo = new THREE.BoxGeometry(4.24, 0.84, 0.07);
    const signFrameMat = new THREE.MeshStandardMaterial({ color: 0x14532d, roughness: 0.5 });
    const signFrame = new THREE.Mesh(signFrameGeo, signFrameMat);
    signGroup.add(signFrame);

    const signFaceMat = new THREE.MeshStandardMaterial({
      map: signTexture,
      roughness: 0.35,
      emissive: 0x15803d,
      emissiveIntensity: 0.15
    });

    // Front face (facing -Z unmirrored)
    const frontSignGeo = new THREE.PlaneGeometry(4.18, 0.78);
    frontSignGeo.rotateY(Math.PI);
    const frontSign = new THREE.Mesh(frontSignGeo, signFaceMat);
    frontSign.position.set(0, 0, -0.038);
    signGroup.add(frontSign);

    // Back face (facing +Z unmirrored)
    const backSignGeo = new THREE.PlaneGeometry(4.18, 0.78);
    const backSign = new THREE.Mesh(backSignGeo, signFaceMat);
    backSign.position.set(0, 0, 0.038);
    signGroup.add(backSign);

    chawni.add(signGroup);

    // ----------------------------------------------------
    // 5B. ROADSIDE "BUS STOP" POLE SIGN BOARD (রাস্তার পাশের সাইন পোস্ট)
    // Always positioned on roadside corner facing oncoming traffic!
    // ----------------------------------------------------
    const poleGroup = new THREE.Group();
    const poleX = side > 0 ? -2.25 : 2.25;
    poleGroup.position.set(poleX, 0, -1.15);

    // Concrete base block
    const baseBlock = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.22, 0.3, 12),
      this.concreteMat
    );
    baseBlock.position.set(0, 0.15, 0);
    poleGroup.add(baseBlock);

    // Striped Metal Pole (Yellow & Black caution stripes)
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8, roughness: 0.2 });
    const poleMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 3.1, 12), poleMat);
    poleMesh.position.set(0, 1.55, 0);
    poleGroup.add(poleMesh);

    // High-visibility Circular/Rounded Roadside "BUS STOP" Signboard
    const poleSignCanvas = document.createElement('canvas');
    poleSignCanvas.width = 512;
    poleSignCanvas.height = 512;
    const psCtx = poleSignCanvas.getContext('2d');

    // Highway Blue background
    psCtx.fillStyle = '#0284c7';
    psCtx.beginPath();
    psCtx.roundRect(16, 16, 480, 480, 48);
    psCtx.fill();

    // Yellow border
    psCtx.strokeStyle = '#facc15';
    psCtx.lineWidth = 20;
    psCtx.stroke();

    // Inner white border
    psCtx.strokeStyle = '#ffffff';
    psCtx.lineWidth = 4;
    psCtx.beginPath();
    psCtx.roundRect(36, 36, 440, 440, 36);
    psCtx.stroke();

    // Bus Graphic
    psCtx.fillStyle = '#ffffff';
    psCtx.beginPath();
    psCtx.roundRect(135, 75, 242, 130, 24);
    psCtx.fill();

    psCtx.fillStyle = '#0284c7';
    psCtx.fillRect(155, 95, 60, 50);
    psCtx.fillRect(230, 95, 60, 50);
    psCtx.fillRect(305, 95, 52, 50);

    psCtx.fillStyle = '#18181b';
    psCtx.beginPath();
    psCtx.arc(190, 205, 22, 0, Math.PI * 2);
    psCtx.arc(320, 205, 22, 0, Math.PI * 2);
    psCtx.fill();

    // Bold "BUS STOP" text
    psCtx.fillStyle = '#ffffff';
    psCtx.font = '900 72px sans-serif';
    psCtx.textAlign = 'center';
    psCtx.textBaseline = 'middle';
    psCtx.shadowColor = 'rgba(0,0,0,0.85)';
    psCtx.shadowBlur = 8;
    psCtx.fillText('BUS STOP', 256, 310);

    // Bengali "বাস স্টপ"
    psCtx.fillStyle = '#fde047';
    psCtx.font = 'bold 56px sans-serif';
    psCtx.fillText('বাস স্টপ', 256, 405);
    psCtx.shadowBlur = 0;

    const poleSignTexture = new THREE.CanvasTexture(poleSignCanvas);
    const poleSignMat = new THREE.MeshStandardMaterial({
      map: poleSignTexture,
      roughness: 0.35,
      emissive: 0x0284c7,
      emissiveIntensity: 0.12
    });

    const poleSignGroup = new THREE.Group();
    poleSignGroup.position.set(0, 2.7, 0);

    // Pole sign frame
    const poleSignFrame = new THREE.Mesh(
      new THREE.BoxGeometry(0.96, 0.96, 0.06),
      new THREE.MeshStandardMaterial({ color: 0x0369a1, roughness: 0.4 })
    );
    poleSignGroup.add(poleSignFrame);

    // Front face (unmirrored facing -Z)
    const poleFrontGeo = new THREE.PlaneGeometry(0.92, 0.92);
    poleFrontGeo.rotateY(Math.PI);
    const poleFront = new THREE.Mesh(poleFrontGeo, poleSignMat);
    poleFront.position.set(0, 0, -0.032);
    poleSignGroup.add(poleFront);

    // Back face (unmirrored facing +Z)
    const poleBackGeo = new THREE.PlaneGeometry(0.92, 0.92);
    const poleBack = new THREE.Mesh(poleBackGeo, poleSignMat);
    poleBack.position.set(0, 0, 0.032);
    poleSignGroup.add(poleBack);

    // Angle pole sign slightly towards oncoming traffic
    poleSignGroup.rotation.y = side > 0 ? 0.35 : -0.35;
    poleGroup.add(poleSignGroup);

    chawni.add(poleGroup);

    // ----------------------------------------------------
    // 5C. SIDE WALL ENAMELED SIGNBOARD: "BUS STOP"
    // Mounted on the side wall directly visible to oncoming cars!
    // ----------------------------------------------------
    const sideSignCanvas = document.createElement('canvas');
    sideSignCanvas.width = 512;
    sideSignCanvas.height = 320;
    const ssCtx = sideSignCanvas.getContext('2d');

    // Clean off-white enamel sign plate
    ssCtx.fillStyle = '#f8fafc';
    ssCtx.fillRect(0, 0, 512, 320);

    // Red and Green border (Bangladesh colors)
    ssCtx.strokeStyle = '#15803d';
    ssCtx.lineWidth = 14;
    ssCtx.strokeRect(8, 8, 496, 304);
    ssCtx.strokeStyle = '#dc2626';
    ssCtx.lineWidth = 4;
    ssCtx.strokeRect(22, 22, 468, 276);

    // Header: BRTC / Highway Stop
    ssCtx.fillStyle = '#15803d';
    ssCtx.font = 'bold 30px sans-serif';
    ssCtx.textAlign = 'center';
    ssCtx.textBaseline = 'middle';
    ssCtx.fillText('বাংলাদেশ সড়ক পরিবহন (BRTC)', 256, 55);

    // Center BOLD "BUS STOP"
    ssCtx.fillStyle = '#dc2626';
    ssCtx.font = '900 68px sans-serif';
    ssCtx.shadowColor = 'rgba(0,0,0,0.3)';
    ssCtx.shadowBlur = 4;
    ssCtx.fillText('BUS STOP', 256, 140);

    // Bengali "বাস স্টপ"
    ssCtx.fillStyle = '#1e293b';
    ssCtx.font = 'bold 50px sans-serif';
    ssCtx.shadowBlur = 0;
    ssCtx.fillText('বাস স্টপ', 256, 220);

    // Bottom subtitle
    ssCtx.fillStyle = '#64748b';
    ssCtx.font = 'bold 24px sans-serif';
    ssCtx.fillText('HIGHWAY PASSENGER SHELTER', 256, 275);

    const sideSignTexture = new THREE.CanvasTexture(sideSignCanvas);
    const sideSignMat = new THREE.MeshStandardMaterial({
      map: sideSignTexture,
      roughness: 0.35,
      emissive: 0xffffff,
      emissiveIntensity: 0.08
    });

    const sideSignMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.75), sideSignMat);
    const sideWallX = side > 0 ? -2.12 : 2.12;
    sideSignMesh.position.set(sideWallX, 1.85, 0);
    sideSignMesh.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
    chawni.add(sideSignMesh);

    // ----------------------------------------------------
    // 6. SEATING ARRANGEMENT (বসার ব্যবস্থা - Long Passenger Waiting Bench)
    // ----------------------------------------------------
    const benchGroup = new THREE.Group();
    benchGroup.position.set(0, 0, 0);

    // Polished teak wood seat bench
    const seatGeo = new THREE.BoxGeometry(4.4, 0.12, 0.7);
    const seat = new THREE.Mesh(seatGeo, this.woodMat);
    seat.position.set(0, 0.65, 0.5);
    seat.castShadow = true;
    benchGroup.add(seat);

    // Ergonomic wooden backrest supporting passengers
    const backrestGeo = new THREE.BoxGeometry(4.4, 0.42, 0.1);
    const backrest = new THREE.Mesh(backrestGeo, this.woodMat);
    backrest.position.set(0, 1.12, 0.82);
    backrest.castShadow = true;
    benchGroup.add(backrest);

    // Sturdy concrete & iron bench supports / armrests
    [-1.9, 0, 1.9].forEach((bx) => {
      // Leg support
      const legGeo = new THREE.BoxGeometry(0.12, 0.35, 0.58);
      const leg = new THREE.Mesh(legGeo, this.concreteMat);
      leg.position.set(bx, 0.45, 0.5);
      benchGroup.add(leg);

      // Backrest bracket
      const bktGeo = new THREE.BoxGeometry(0.08, 0.55, 0.08);
      const bkt = new THREE.Mesh(bktGeo, new THREE.MeshStandardMaterial({ color: 0x334155 }));
      bkt.position.set(bx, 0.95, 0.82);
      benchGroup.add(bkt);
    });

    chawni.add(benchGroup);

    // ----------------------------------------------------
    // 7. CUTE TEENAGE COUPLE IN LOVE (প্রেম করতেছে - রোমান্টিক জুটি!)
    // Seated on the bench holding hands + Girl holding a Red Rose!
    // ----------------------------------------------------
    const coupleGroup = new THREE.Group();
    coupleGroup.scale.set(1.35, 1.35, 1.35); // Prominently sized so clearly visible!
    coupleGroup.position.set(0, 0.72, 0.48);

    const skinMat = new THREE.MeshStandardMaterial({ color: 0xf5c396, roughness: 0.6 });
    const boyShirtMat = new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.7 }); // Trendy bright sky-blue shirt
    const boyPantsMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 }); // Navy denim jeans
    const boyHairMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.5 }); // Dark teenager fade haircut

    const girlDressMat = new THREE.MeshStandardMaterial({ color: 0xdb2777, roughness: 0.6 }); // Romantic magenta kurti
    const girlDupattaMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.7 }); // Sunshine yellow orna
    const girlPantsMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 }); // White salwar
    const girlHairMat = new THREE.MeshStandardMaterial({ color: 0x0f0e0e, roughness: 0.4 });

    // A. Boy (sitting close on left, leaning affectionately towards girl)
    const boy = new THREE.Group();
    boy.position.set(-0.26, 0, 0);

    const boyTorso = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.46, 0.24), boyShirtMat);
    boyTorso.position.set(0, 0.25, 0);
    boyTorso.rotation.y = 0.35; // turned toward girl
    boyTorso.rotation.z = -0.12; // affectionate romantic lean
    boy.add(boyTorso);

    const boyHead = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 14), skinMat);
    boyHead.position.set(0.04, 0.58, 0.02);
    boyHead.rotation.y = 0.45; // looking lovingly into girl's eyes
    boyHead.rotation.z = -0.12;
    boy.add(boyHead);

    const boyHair = new THREE.Mesh(new THREE.SphereGeometry(0.13, 14, 14), boyHairMat);
    boyHair.scale.set(1.02, 1.05, 1.02);
    boyHair.position.set(0.04, 0.61, 0.01);
    boy.add(boyHair);

    // Boy sitting legs
    const boyLegs = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.16, 0.44), boyPantsMat);
    boyLegs.position.set(0, -0.02, -0.15);
    boy.add(boyLegs);

    // Boy lower legs dropping down
    [-0.1, 0.1].forEach((lx) => {
      const calve = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.38, 8), boyPantsMat);
      calve.position.set(lx, -0.22, -0.32);
      boy.add(calve);
    });

    // Boy arm reaching right holding girl's hand tight
    const boyArm = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.04, 0.34, 8), boyShirtMat);
    boyArm.position.set(0.18, 0.14, -0.05);
    boyArm.rotation.z = -Math.PI / 4;
    boyArm.rotation.x = -0.18;
    boy.add(boyArm);

    coupleGroup.add(boy);

    // B. Girl (sitting close on right, head leaning sweetly on boy's shoulder!)
    const girl = new THREE.Group();
    girl.position.set(0.26, 0, 0);

    const girlTorso = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.42, 0.22), girlDressMat);
    girlTorso.position.set(0, 0.23, 0);
    girlTorso.rotation.y = -0.32; // turned toward boy
    girlTorso.rotation.z = 0.14;  // resting gently towards boy
    girl.add(girlTorso);

    // Yellow Orna draped over shoulder
    const dupatta = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.36, 0.24), girlDupattaMat);
    dupatta.position.set(0, 0.24, 0.02);
    girl.add(dupatta);

    // Girl Head resting gently on boy's shoulder (Classic Romantic Touch!)
    const girlHead = new THREE.Mesh(new THREE.SphereGeometry(0.115, 14, 14), skinMat);
    girlHead.position.set(-0.06, 0.54, 0.02);
    girlHead.rotation.y = -0.38;
    girlHead.rotation.z = 0.22; // sweet head tilt on boy's shoulder
    girl.add(girlHead);

    const girlHair = new THREE.Mesh(new THREE.SphereGeometry(0.125, 14, 14), girlHairMat);
    girlHair.scale.set(1.04, 1.06, 1.08);
    girlHair.position.set(-0.06, 0.57, 0);
    girl.add(girlHair);

    // Ponytail trailing down
    const ponytail = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.02, 0.36, 8), girlHairMat);
    ponytail.position.set(-0.04, 0.42, 0.16);
    ponytail.rotation.x = -0.35;
    girl.add(ponytail);

    // Girl sitting legs
    const girlLegs = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.42), girlPantsMat);
    girlLegs.position.set(0, -0.02, -0.15);
    girl.add(girlLegs);

    [-0.08, 0.08].forEach((lx) => {
      const calve = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.038, 0.38, 8), girlPantsMat);
      calve.position.set(lx, -0.22, -0.32);
      girl.add(calve);
    });

    // Girl left arm reaching left holding boy's hand
    const girlArm = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.035, 0.32, 8), girlDressMat);
    girlArm.position.set(-0.16, 0.14, -0.05);
    girlArm.rotation.z = Math.PI / 4;
    girlArm.rotation.x = -0.18;
    girl.add(girlArm);

    // ----------------------------------------------------
    // RED ROSE IN GIRL'S HAND (একটি লাল গোলাপ - User Request!)
    // Scaled & Layered so it's vividly visible from approaching cars!
    // ----------------------------------------------------
    const roseGroup = new THREE.Group();
    roseGroup.position.set(0.22, 0.22, -0.2); // Held gracefully upright near her chest
    roseGroup.rotation.x = -0.25;
    roseGroup.rotation.z = -0.15;

    // Green Flower Stem
    const stemGeo = new THREE.CylinderGeometry(0.016, 0.018, 0.38, 8);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8 });
    const stem = new THREE.Mesh(stemGeo, stemMat);
    roseGroup.add(stem);

    // Green Rose Leaves
    const leafGeo = new THREE.PlaneGeometry(0.12, 0.06);
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.6, side: THREE.DoubleSide });
    [-1, 1].forEach((ls) => {
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.position.set(ls * 0.06, -0.04, 0);
      leaf.rotation.z = ls * 0.55;
      roseGroup.add(leaf);
    });

    // Green Sepals / Calyx
    const sepalGeo = new THREE.ConeGeometry(0.07, 0.09, 5);
    sepalGeo.rotateX(Math.PI);
    const sepal = new THREE.Mesh(sepalGeo, leafMat);
    sepal.position.set(0, 0.18, 0);
    roseGroup.add(sepal);

    // Ruby Red Rose Bloom (Vivid Red Layered Petals!)
    const roseMat = new THREE.MeshStandardMaterial({
      color: 0xdc2626,
      roughness: 0.35,
      metalness: 0.1
    });
    const roseBudGeo = new THREE.SphereGeometry(0.09, 14, 14);
    roseBudGeo.scale(1.15, 1.35, 1.15);
    const roseBud = new THREE.Mesh(roseBudGeo, roseMat);
    roseBud.position.set(0, 0.26, 0);
    roseGroup.add(roseBud);

    // Outer blooming petal collar
    const outerPetalGeo = new THREE.TorusGeometry(0.08, 0.035, 8, 16);
    outerPetalGeo.rotateX(Math.PI / 2);
    const outerPetals = new THREE.Mesh(outerPetalGeo, roseMat);
    outerPetals.position.set(0, 0.23, 0);
    roseGroup.add(outerPetals);

    girl.add(roseGroup);

    coupleGroup.add(girl);

    // ----------------------------------------------------
    // C. CLASPED HANDS ON THE BENCH (HOLDING HANDS ROMANTICALLY IN THE CENTER!)
    // ----------------------------------------------------
    const claspedHands = new THREE.Mesh(new THREE.SphereGeometry(0.065, 12, 12), skinMat);
    claspedHands.scale.set(1.6, 0.95, 1.2);
    claspedHands.position.set(0, 0.1, -0.06);
    coupleGroup.add(claspedHands);

    // ----------------------------------------------------
    // D. GLOWING FLOATING ROMANTIC 3D HEART ("প্রেম করতেছে" INDICATOR)
    // ----------------------------------------------------
    const heartGroup = new THREE.Group();
    heartGroup.position.set(0, 1.38, 0.05);

    const heartMat = new THREE.MeshBasicMaterial({ color: 0xff2d55 });
    // Left lobe
    const leftLobe = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 10), heartMat);
    leftLobe.position.set(-0.05, 0.04, 0);
    heartGroup.add(leftLobe);
    // Right lobe
    const rightLobe = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 10), heartMat);
    rightLobe.position.set(0.05, 0.04, 0);
    heartGroup.add(rightLobe);
    // Bottom point cone
    const pointGeo = new THREE.ConeGeometry(0.11, 0.14, 12);
    pointGeo.rotateZ(Math.PI);
    const heartPoint = new THREE.Mesh(pointGeo, heartMat);
    heartPoint.position.set(0, -0.04, 0);
    heartGroup.add(heartPoint);

    coupleGroup.add(heartGroup);

    chawni.add(coupleGroup);

    // Register animated couple for subtle romantic breathing and heart pulse
    this.animatedAnimals.push({
      type: 'couple',
      mesh: coupleGroup,
      heart: heartGroup,
      seed: Math.random() * 10
    });

    return chawni;
  }

  // ========================================================
  // 5. BANGLADESHI FLORA (Coconut Palm, Banana, Bamboo)
  // ========================================================

  // Tall Coconut Tree (Narkel Gach)
  createCoconutTree() {
    const palm = new THREE.Group();
    palm.name = 'coconut_tree';

    // Curved slender trunk with segments
    const trunkCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.4, 3.5, 0.2),
      new THREE.Vector3(0.9, 7.5, 0.5),
      new THREE.Vector3(1.1, 10.5, 0.7)
    ]);
    const trunkGeo = new THREE.TubeGeometry(trunkCurve, 12, 0.24, 8, false);
    const trunk = new THREE.Mesh(trunkGeo, this.palmTrunkMat);
    trunk.castShadow = true;
    palm.add(trunk);

    // Crown of arching palm fronds
    const crownPos = new THREE.Vector3(1.1, 10.5, 0.7);
    const frondCount = 10;
    for (let i = 0; i < frondCount; i++) {
      const angle = (i * Math.PI * 2) / frondCount;
      const frondGeo = new THREE.PlaneGeometry(0.8, 3.4);
      frondGeo.translate(0, 1.7, 0);

      const frond = new THREE.Mesh(frondGeo, this.palmLeafMat);
      frond.position.copy(crownPos);
      frond.rotation.y = angle;
      frond.rotation.x = 0.85; // arching down
      frond.castShadow = true;
      palm.add(frond);
    }

    // Cluster of green coconuts
    for (let c = 0; c < 5; c++) {
      const nutGeo = new THREE.SphereGeometry(0.2, 8, 8);
      const nut = new THREE.Mesh(nutGeo, this.palmLeafMat);
      nut.position.set(
        crownPos.x + (Math.random() - 0.5) * 0.4,
        crownPos.y - 0.25,
        crownPos.z + (Math.random() - 0.5) * 0.4
      );
      palm.add(nut);
    }

    return palm;
  }

  // Banana Tree (Kola Gach)
  createBananaTree() {
    const banana = new THREE.Group();
    banana.name = 'banana_tree';

    // Succulent green trunk
    const trunkGeo = new THREE.CylinderGeometry(0.18, 0.28, 2.8, 8);
    const trunk = new THREE.Mesh(trunkGeo, this.bambooTrunkMat);
    trunk.position.y = 1.4;
    banana.add(trunk);

    // Broad drooping paddle leaves
    const leafCount = 6;
    for (let i = 0; i < leafCount; i++) {
      const angle = (i * Math.PI * 2) / leafCount;
      const leafGeo = new THREE.PlaneGeometry(0.75, 2.4);
      leafGeo.translate(0, 1.2, 0);

      const leaf = new THREE.Mesh(leafGeo, this.bananaLeafMat);
      leaf.position.set(0, 2.7, 0);
      leaf.rotation.y = angle;
      leaf.rotation.x = 0.95; // droops down gracefully
      leaf.castShadow = true;
      banana.add(leaf);
    }

    return banana;
  }

  // Bamboo Grove Cluster (Bash Jhar)
  createBambooGrove() {
    const grove = new THREE.Group();
    grove.name = 'bamboo_grove';

    const culmCount = 8;
    for (let i = 0; i < culmCount; i++) {
      const h = 5.5 + Math.random() * 3.5;
      const culmGeo = new THREE.CylinderGeometry(0.06, 0.08, h, 6);
      const culm = new THREE.Mesh(culmGeo, this.bambooTrunkMat);
      culm.position.set(
        (Math.random() - 0.5) * 1.5,
        h * 0.5,
        (Math.random() - 0.5) * 1.5
      );
      culm.rotation.z = (Math.random() - 0.5) * 0.15;
      culm.rotation.x = (Math.random() - 0.5) * 0.15;
      grove.add(culm);

      // Delicate top bamboo foliage
      const puffGeo = new THREE.SphereGeometry(0.8 + Math.random() * 0.5, 6, 6);
      const puff = new THREE.Mesh(puffGeo, this.palmLeafMat);
      puff.position.set(culm.position.x, h - 0.3, culm.position.z);
      grove.add(puff);
    }

    return grove;
  }

  // ========================================================
  // 6. RURAL ELECTRIC POLE (Palli Bidyut Pole)
  // ========================================================
  createElectricPole() {
    const pole = new THREE.Group();
    pole.name = 'electric_pole';

    // Concrete Pole
    const postGeo = new THREE.CylinderGeometry(0.14, 0.18, 8.5, 8);
    const post = new THREE.Mesh(postGeo, this.concreteMat);
    post.position.y = 4.25;
    post.castShadow = true;
    pole.add(post);

    // Crossarm
    const armGeo = new THREE.BoxGeometry(2.2, 0.12, 0.12);
    const arm = new THREE.Mesh(armGeo, this.concreteMat);
    arm.position.y = 7.8;
    pole.add(arm);

    // Porcelain Insulators & Sagging Overhead Wire representation
    [-0.9, 0, 0.9].forEach((x) => {
      const insGeo = new THREE.CylinderGeometry(0.04, 0.05, 0.2, 6);
      const ins = new THREE.Mesh(insGeo, this.tinRoofMat);
      ins.position.set(x, 7.95, 0);
      pole.add(ins);
    });

    return pole;
  }

  // ========================================================
  // 7. VILLAGE POND (Pukur) WITH SWIMMING DUCKS
  // ========================================================
  createPond(width = 14, length = 24) {
    const pondGroup = new THREE.Group();
    pondGroup.name = 'village_pond';

    // Water Surface Plane
    const waterGeo = new THREE.PlaneGeometry(width, length);
    waterGeo.rotateX(-Math.PI / 2);
    const water = new THREE.Mesh(waterGeo, this.waterMat);
    water.position.y = 0.05;
    pondGroup.add(water);

    // Mud Banks surrounding the pond
    const bankMat = this.mudPlinthMat;
    const bankThickness = 1.2;

    // Ducks floating on the water
    const duckCount = 3;
    for (let d = 0; d < duckCount; d++) {
      const duck = new THREE.Group();
      duck.position.set(
        (Math.random() - 0.5) * (width * 0.6),
        0.1,
        (Math.random() - 0.5) * (length * 0.6)
      );

      // Duck Body
      const bodyGeo = new THREE.SphereGeometry(0.24, 8, 8);
      bodyGeo.scale(1.0, 0.7, 1.4);
      const dBody = new THREE.Mesh(bodyGeo, this.duckMat);
      duck.add(dBody);

      // Duck Head
      const headGeo = new THREE.SphereGeometry(0.14, 8, 8);
      const dHead = new THREE.Mesh(headGeo, this.duckMat);
      dHead.position.set(0, 0.22, -0.22);
      duck.add(dHead);

      // Orange Beak
      const beakGeo = new THREE.ConeGeometry(0.06, 0.16, 6);
      beakGeo.rotateX(-Math.PI / 2);
      const beak = new THREE.Mesh(beakGeo, this.beakMat);
      beak.position.set(0, 0.2, -0.34);
      duck.add(beak);

      pondGroup.add(duck);

      this.animatedAnimals.push({
        type: 'duck',
        mesh: duck,
        startX: duck.position.x,
        startZ: duck.position.z,
        seed: Math.random() * 10
      });
    }

    return pondGroup;
  }

  // ========================================================
  // 8. BAMBOO FENCE (Bash er Bera)
  // ========================================================
  createBambooFence(length = 20) {
    const fence = new THREE.Group();
    fence.name = 'bamboo_fence';

    // Horizontal split-bamboo rails
    [0.3, 0.65, 1.0].forEach((y) => {
      const railGeo = new THREE.CylinderGeometry(0.04, 0.04, length, 6);
      railGeo.rotateX(Math.PI / 2);
      const rail = new THREE.Mesh(railGeo, this.bambooTrunkMat);
      rail.position.y = y;
      fence.add(rail);
    });

    // Vertical Bamboo Stakes
    const stakes = Math.floor(length / 1.4);
    for (let i = 0; i <= stakes; i++) {
      const z = -length * 0.5 + i * 1.4;
      const stakeGeo = new THREE.CylinderGeometry(0.05, 0.06, 1.25, 6);
      const stake = new THREE.Mesh(stakeGeo, this.woodMat);
      stake.position.set(0, 0.62, z);
      stake.castShadow = true;
      fence.add(stake);
    }

    return fence;
  }

  // Update animal animations and environmental motion every frame
  update(time) {
    // 1. Animals (Cows chewing/grazing, tails swishing, ducks paddling)
    this.animatedAnimals.forEach((anim) => {
      if (anim.type === 'cow') {
        // Natural head grazing / nodding
        const nod = Math.sin(time * 1.8 + anim.seed) * 0.15;
        anim.head.rotation.x = 0.2 + Math.max(0, nod);

        // Tail swishing occasionally
        const swish = Math.sin(time * 4.2 + anim.seed);
        anim.tail.rotation.z = Math.abs(swish) > 0.4 ? swish * 0.35 : 0;
      } else if (anim.type === 'duck') {
        // Gentle water bobbing and slow paddling
        anim.mesh.position.y = 0.1 + Math.sin(time * 2.5 + anim.seed) * 0.03;
        anim.mesh.position.x = anim.startX + Math.sin(time * 0.8 + anim.seed) * 0.6;
        anim.mesh.position.z = anim.startZ + Math.cos(time * 0.8 + anim.seed) * 0.6;
        anim.mesh.rotation.y = time * 0.8 + anim.seed;
      } else if (anim.type === 'couple') {
        // Subtle romantic breathing and head tilt
        const breath = Math.sin(time * 2.2 + anim.seed) * 0.015;
        anim.mesh.position.y = 0.72 + breath;
        if (anim.heart) {
          const pulse = 1.0 + Math.sin(time * 3.8 + anim.seed) * 0.14;
          anim.heart.scale.set(pulse, pulse, pulse);
        }
      }
    });

    // 2. Tea Stall Smoke Emitters
    this.smokeEmitters.forEach((group) => {
      group.children.forEach((p, idx) => {
        p.position.y += 0.015;
        p.position.x += Math.sin(time * 3 + idx) * 0.005;
        if (p.position.y > 1.4) {
          p.position.y = 0;
        }
      });
    });
  }
}
