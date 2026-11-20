// ===================================================================
// BANGLADESH GREEN CNG AUTO-RICKSHAW 3D MODEL (OG_RACE)
// Accurate Dhaka CNG 3-Wheeler Dimensions & Shape (from User Photos!)
// Featuring the iconic "আল্লাহ সর্বশক্তিমান" Top Hood Calligraphy,
// Multi-Colored Painted Cooling Louvers (Yellow, Red, Blue, White),
// "সাবধান, পিছনে ইঞ্জিন" & "থামুন" Warning Signs,
// Rear Window with Security Wire-Mesh Grill, Ad Posters,
// Protective Wire Cage Taillights, Tubular Bumper & Under-Chassis Exhaust Pipe!
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

    // Collision Bounding Box (tuned for authentic Dhaka CNG proportions)
    this.box = new THREE.Box3();
    this.collisionSize = new THREE.Vector3(1.38, 1.82, 2.65);

    this.buildCNG();

    // Scale 1:1 true authentic proportions
    this.group.scale.set(0.92, 0.92, 0.92);
  }

  buildCNG() {
    this.bodyGroup = new THREE.Group();
    this.group.add(this.bodyGroup);

    // ========================================================
    // 1. PROCEDURAL TEXTURES (Faithfully drawn from real Dhaka CNG photos!)
    // ========================================================

    // ----------------------------------------------------
    // A. AUTHENTIC REAR CNG FACE TEXTURE (Exact replica of media_1795204097747_5c06ece1.jpg!)
    // ----------------------------------------------------
    const rearCNGCanvas = document.createElement('canvas');
    rearCNGCanvas.width = 1024;
    rearCNGCanvas.height = 1024;
    const rCtx = rearCNGCanvas.getContext('2d');

    // 1. Upper Half (y: 0 to 480): Deep Charcoal / Forest Green Canvas Hood
    rCtx.fillStyle = '#18221b';
    rCtx.fillRect(0, 0, 1024, 480);

    // Canvas fabric weave texture
    rCtx.fillStyle = 'rgba(255, 255, 255, 0.025)';
    for (let x = 0; x < 1024; x += 4) {
      rCtx.fillRect(x, 0, 2, 480);
    }
    for (let y = 0; y < 480; y += 4) {
      rCtx.fillRect(0, y, 1024, 2);
    }

    // Top Arched Calligraphy: "আল্লাহ সর্বশক্তিমান" (from Image 1 & 2!)
    rCtx.fillStyle = '#fde047';
    rCtx.strokeStyle = '#dc2626';
    rCtx.lineWidth = 6;
    rCtx.font = '900 66px sans-serif';
    rCtx.textAlign = 'center';
    rCtx.textBaseline = 'middle';
    rCtx.shadowColor = 'rgba(0,0,0,0.85)';
    rCtx.shadowBlur = 8;
    rCtx.strokeText('আল্লাহ সর্বশক্তিমান', 512, 115);
    rCtx.fillText('আল্লাহ সর্বশক্তিমান', 512, 115);
    rCtx.shadowBlur = 0;

    // Contact number string below calligraphy: "P/01199806111/222/888"
    rCtx.fillStyle = '#ffffff';
    rCtx.font = 'bold 20px monospace';
    rCtx.fillText('P/01199806111/222/888', 512, 168);

    // Top Left: Yellow triangular flower sticker (from Image 1)
    rCtx.fillStyle = '#facc15';
    rCtx.beginPath();
    rCtx.moveTo(45, 120);
    rCtx.lineTo(135, 120);
    rCtx.lineTo(45, 210);
    rCtx.closePath();
    rCtx.fill();
    rCtx.strokeStyle = '#18181b';
    rCtx.lineWidth = 3;
    rCtx.stroke();
    rCtx.fillStyle = '#dc2626';
    rCtx.font = 'bold 18px sans-serif';
    rCtx.fillText('রোড', 75, 155);

    // Top Right: "AnyTolet.com" white/blue sticker (from Image 1)
    rCtx.fillStyle = '#ffffff';
    rCtx.fillRect(860, 135, 125, 48);
    rCtx.strokeStyle = '#0284c7';
    rCtx.lineWidth = 3;
    rCtx.strokeRect(860, 135, 125, 48);
    rCtx.fillStyle = '#0284c7';
    rCtx.font = 'bold 15px sans-serif';
    rCtx.fillText('AnyTolet.com', 922, 162);

    // 2. Rear Window Frame & Diamond Security Grill (from Image 1 & 2)
    const winX = 145, winY = 195, winW = 734, winH = 210, winR = 32;
    // Outer black rubber weatherstrip frame
    rCtx.fillStyle = '#0f172a';
    rCtx.beginPath();
    rCtx.roundRect(winX - 12, winY - 12, winW + 24, winH + 24, winR + 8);
    rCtx.fill();

    // Dark tinted glass interior
    rCtx.fillStyle = '#1e293b';
    rCtx.beginPath();
    rCtx.roundRect(winX, winY, winW, winH, winR);
    rCtx.fill();

    // Green Diamond Wire-Mesh Security Grill inside window (from Image 1 & 2!)
    rCtx.strokeStyle = '#16a34a';
    rCtx.lineWidth = 3.5;
    const meshStep = 28;
    for (let x = winX - winH; x <= winX + winW + winH; x += meshStep) {
      rCtx.beginPath();
      rCtx.moveTo(x, winY);
      rCtx.lineTo(x + winH, winY + winH);
      rCtx.stroke();

      rCtx.beginPath();
      rCtx.moveTo(x, winY + winH);
      rCtx.lineTo(x + winH, winY);
      rCtx.stroke();
    }

    // Heavy vertical steel safety bars
    rCtx.strokeStyle = '#15803d';
    rCtx.lineWidth = 6;
    for (let x = winX + 50; x <= winX + winW - 50; x += 75) {
      rCtx.beginPath();
      rCtx.moveTo(x, winY);
      rCtx.lineTo(x, winY + winH);
      rCtx.stroke();
    }

    // 3. Advertisements / Posters Pasted Below Rear Window (from Image 1!)
    // Left Poster: Red & White Bengali Promotional Ad
    rCtx.fillStyle = '#dc2626';
    rCtx.fillRect(165, 345, 335, 115);
    rCtx.strokeStyle = '#ffffff';
    rCtx.lineWidth = 3;
    rCtx.strokeRect(165, 345, 335, 115);

    rCtx.fillStyle = '#ffffff';
    rCtx.font = 'bold 22px sans-serif';
    rCtx.fillText('সি এন জি-তে চলি', 332, 385);
    rCtx.fillStyle = '#fef08a';
    rCtx.font = 'bold 18px sans-serif';
    rCtx.fillText('ভাড়া মিটারে দিন!', 332, 425);

    // Right Poster: Pran Mango Juice / Refreshing Drink Ad (from Image 1!)
    rCtx.fillStyle = '#f59e0b';
    rCtx.fillRect(525, 330, 345, 135);
    rCtx.strokeStyle = '#0284c7';
    rCtx.lineWidth = 3;
    rCtx.strokeRect(525, 330, 345, 135);

    // Floating mango juice bottle graphics
    rCtx.fillStyle = '#ea580c';
    rCtx.fillRect(815, 345, 32, 95);
    rCtx.fillStyle = '#fde047';
    rCtx.beginPath();
    rCtx.arc(600, 385, 28, 0, Math.PI * 2);
    rCtx.arc(660, 385, 32, 0, Math.PI * 2);
    rCtx.fill();

    rCtx.fillStyle = '#ffffff';
    rCtx.font = '900 24px sans-serif';
    rCtx.fillText('MANGO', 730, 375);
    rCtx.font = 'bold 16px sans-serif';
    rCtx.fillText('COOL FRESH JUICE', 730, 410);

    // White Star Decal on left canvas
    rCtx.fillStyle = '#f8fafc';
    rCtx.font = 'bold 48px sans-serif';
    rCtx.fillText('★', 170, 275);

    // 4. Lower Half (y: 480 to 1024): Authentic Green Sheet Metal Engine Hatch (Image 1 & 2)
    rCtx.fillStyle = '#15803d'; // Iconic Dhaka CNG Emerald Green
    rCtx.fillRect(0, 480, 1024, 544);

    // Horizontal metal seam line separating upper hood from metal hatch
    rCtx.fillStyle = '#14532d';
    rCtx.fillRect(0, 476, 1024, 10);
    rCtx.fillStyle = '#22c55e';
    rCtx.fillRect(0, 486, 1024, 3);

    // 5. Dual Columns of 4 Multi-Colored Painted Cooling Louvers (Yellow, Red, Blue, White - from Image 1!)
    // Left Column: x = 180 to 450; Right Column: x = 574 to 844
    const louverColors = [
      ['#f8fafc', '#facc15'], // Top: White & Yellow
      ['#dc2626', '#facc15'], // 2nd: Red & Yellow
      ['#0284c7', '#facc15'], // 3rd: Sky Blue & Yellow
      ['#16a34a', '#dc2626']  // 4th: Green & Red
    ];

    for (let r = 0; r < 4; r++) {
      const ly = 545 + r * 65;
      const c1 = louverColors[r][0];
      const c2 = louverColors[r][1];

      // Left Louver
      rCtx.fillStyle = '#14532d'; // Shadow slit
      rCtx.fillRect(175, ly - 4, 275, 46);
      rCtx.fillStyle = c1;
      rCtx.fillRect(180, ly, 135, 38);
      rCtx.fillStyle = c2;
      rCtx.fillRect(315, ly, 130, 38);
      rCtx.strokeStyle = '#18181b';
      rCtx.lineWidth = 2.5;
      rCtx.strokeRect(180, ly, 265, 38);

      // Right Louver
      rCtx.fillStyle = '#14532d';
      rCtx.fillRect(569, ly - 4, 275, 46);
      rCtx.fillStyle = c2;
      rCtx.fillRect(574, ly, 130, 38);
      rCtx.fillStyle = c1;
      rCtx.fillRect(704, ly, 135, 38);
      rCtx.strokeStyle = '#18181b';
      rCtx.lineWidth = 2.5;
      rCtx.strokeRect(574, ly, 265, 38);
    }

    // 6. Central Warning Banner: "সাবধান, পিছনে ইঞ্জিন" (Caution: Engine at rear - Image 1!)
    rCtx.fillStyle = '#14532d';
    rCtx.beginPath();
    rCtx.roundRect(240, 630, 544, 48, 8);
    rCtx.fill();
    rCtx.strokeStyle = '#facc15';
    rCtx.lineWidth = 3;
    rCtx.stroke();

    rCtx.fillStyle = '#ffffff';
    rCtx.font = 'bold 30px sans-serif';
    rCtx.fillText('সাবধান, পিছনে ইঞ্জিন', 512, 655);

    // 7. Bottom Left Sign: "থামুন" (STOP - from Image 1 & 2!)
    rCtx.fillStyle = '#ffffff';
    rCtx.beginPath();
    rCtx.roundRect(125, 835, 175, 75, 8);
    rCtx.fill();
    rCtx.strokeStyle = '#dc2626';
    rCtx.lineWidth = 5;
    rCtx.stroke();

    rCtx.fillStyle = '#dc2626';
    rCtx.font = '900 48px sans-serif';
    rCtx.fillText('থামুন', 212, 880);

    // 8. Bottom Right: Green Digital License Plate "ঢাকা মেট্রো-থ \n ১১-০৮২৬" (Image 1)
    rCtx.fillStyle = '#047857';
    rCtx.beginPath();
    rCtx.roundRect(724, 825, 175, 85, 8);
    rCtx.fill();
    rCtx.strokeStyle = '#ffffff';
    rCtx.lineWidth = 3.5;
    rCtx.stroke();

    rCtx.fillStyle = '#ffffff';
    rCtx.font = 'bold 22px sans-serif';
    rCtx.fillText('ঢাকা মেট্রো-থ', 811, 855);
    rCtx.font = 'bold 28px sans-serif';
    rCtx.fillText('১১-০৮২৬', 811, 890);

    // Center Metal Latch & Padlock (Image 1)
    rCtx.fillStyle = '#94a3b8';
    rCtx.fillRect(492, 530, 40, 45);
    rCtx.fillStyle = '#ca8a04';
    rCtx.fillRect(496, 565, 32, 35); // Brass padlock

    const rearCNGTexture = new THREE.CanvasTexture(rearCNGCanvas);

    // ----------------------------------------------------
    // B. AUTHENTIC SIDE PROFILE TEXTURE (from Image 2: "সি.এন.জি চালিত" Beltline & Iron Cage)
    // ----------------------------------------------------
    const sideCowlCanvas = document.createElement('canvas');
    sideCowlCanvas.width = 512;
    sideCowlCanvas.height = 512;
    const sCtx = sideCowlCanvas.getContext('2d');

    // Upper Half: Deep Charcoal / Green Canopy Hood
    sCtx.fillStyle = '#18221b';
    sCtx.fillRect(0, 0, 512, 230);

    // Middle Beltline: Crisp White Stripe with "সি.এন.জি চালিত" (Image 2!)
    sCtx.fillStyle = '#ffffff';
    sCtx.fillRect(0, 230, 512, 55);
    sCtx.strokeStyle = '#0284c7';
    sCtx.lineWidth = 3;
    sCtx.strokeRect(0, 230, 512, 55);

    sCtx.fillStyle = '#0284c7';
    sCtx.font = '900 36px sans-serif';
    sCtx.textAlign = 'center';
    sCtx.textBaseline = 'middle';
    sCtx.fillText('সি.এন.জি চালিত', 256, 258);

    // Lower Half: Green Sheet Metal Body with Yellow Pinstripe
    sCtx.fillStyle = '#15803d';
    sCtx.fillRect(0, 285, 512, 227);

    sCtx.fillStyle = '#facc15';
    sCtx.fillRect(20, 395, 472, 8); // Yellow accent stripe

    // Upper Side Passenger Iron Security Cage (Image 2)
    sCtx.strokeStyle = '#16a34a';
    sCtx.lineWidth = 3;
    for (let x = 30; x <= 480; x += 32) {
      sCtx.beginPath();
      sCtx.moveTo(x, 15);
      sCtx.lineTo(x, 225);
      sCtx.stroke();
    }
    sCtx.strokeStyle = '#14532d';
    sCtx.lineWidth = 6;
    for (let y = 35; y <= 215; y += 45) {
      sCtx.beginPath();
      sCtx.moveTo(20, y);
      sCtx.lineTo(492, y);
      sCtx.stroke();
    }

    const sideCowlTexture = new THREE.CanvasTexture(sideCowlCanvas);

    // ----------------------------------------------------
    // C. FRONT APRON MASK TEXTURE (Matte Black with Chrome Headlights)
    // ----------------------------------------------------
    const frontMaskCanvas = document.createElement('canvas');
    frontMaskCanvas.width = 512;
    frontMaskCanvas.height = 256;
    const fmCtx = frontMaskCanvas.getContext('2d');

    fmCtx.fillStyle = '#1e293b';
    fmCtx.fillRect(0, 0, 512, 256);

    // Dual Round Headlights
    const drawHL = (cx, cy, r) => {
      fmCtx.fillStyle = '#94a3b8';
      fmCtx.beginPath();
      fmCtx.arc(cx, cy, r + 5, 0, Math.PI * 2);
      fmCtx.fill();

      const grad = fmCtx.createRadialGradient(cx, cy, 4, cx, cy, r);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.5, '#e2e8f0');
      grad.addColorStop(1, '#64748b');
      fmCtx.fillStyle = grad;
      fmCtx.beginPath();
      fmCtx.arc(cx, cy, r, 0, Math.PI * 2);
      fmCtx.fill();
    };
    drawHL(105, 140, 52);
    drawHL(407, 140, 52);

    // Dhaka Metro License Plate below windshield
    fmCtx.fillStyle = '#047857';
    fmCtx.beginPath();
    fmCtx.roundRect(165, 20, 182, 54, 6);
    fmCtx.fill();
    fmCtx.strokeStyle = '#ffffff';
    fmCtx.lineWidth = 2.5;
    fmCtx.stroke();

    fmCtx.fillStyle = '#ffffff';
    fmCtx.font = 'bold 22px sans-serif';
    fmCtx.textAlign = 'center';
    fmCtx.textBaseline = 'middle';
    fmCtx.fillText('ঢাকা মেট্রো', 256, 47);

    // Amber marker lights
    fmCtx.fillStyle = '#f59e0b';
    fmCtx.fillRect(75, 30, 48, 22);
    fmCtx.fillRect(389, 30, 48, 22);

    const frontMaskTexture = new THREE.CanvasTexture(frontMaskCanvas);

    // ========================================================
    // 2. SHARED 3D MATERIALS
    // ========================================================
    const cngGreenMat = new THREE.MeshStandardMaterial({
      color: 0x15803d, // Authentic Dhaka CNG Emerald Green
      metalness: 0.25,
      roughness: 0.35
    });
    const blackCanvasMat = new THREE.MeshStandardMaterial({
      color: 0x18221b,
      roughness: 0.88,
      metalness: 0.05
    });
    const matteBlackMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.7
    });
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      metalness: 0.92,
      roughness: 0.12
    });
    const tireRubberMat = new THREE.MeshStandardMaterial({
      color: 0x1f2421,
      roughness: 0.92
    });
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.65,
      roughness: 0.28
    });
    const windshieldGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      transparent: true,
      opacity: 0.52,
      roughness: 0.08,
      transmission: 0.6
    });

    const rearCNGMat = new THREE.MeshStandardMaterial({
      map: rearCNGTexture,
      roughness: 0.45,
      metalness: 0.12
    });
    const sideCowlMat = new THREE.MeshStandardMaterial({
      map: sideCowlTexture,
      roughness: 0.42
    });
    const frontMaskMat = new THREE.MeshStandardMaterial({
      map: frontMaskTexture,
      roughness: 0.4
    });

    // ========================================================
    // 3. AUTHENTIC 3-WHEELER CHASSIS & FLOOR
    // ========================================================
    const floorGeo = new THREE.BoxGeometry(1.36, 0.32, 2.52);
    const floor = new THREE.Mesh(floorGeo, cngGreenMat);
    floor.position.set(0, 0.38, 0);
    floor.receiveShadow = true;
    this.bodyGroup.add(floor);

    // ========================================================
    // 4. CURVED CANOPY HOOD & BODY CABIN (Dhaka Rounded Dome)
    // ========================================================
    const cabinGroup = new THREE.Group();

    // Curved Dark Canvas Dome Roof
    const roofCurveGeo = new THREE.CylinderGeometry(0.72, 0.72, 2.15, 24, 1, true, Math.PI * 0.14, Math.PI * 0.72);
    roofCurveGeo.rotateZ(Math.PI / 2);
    const roofMesh = new THREE.Mesh(roofCurveGeo, blackCanvasMat);
    roofMesh.position.set(0, 1.68, 0.12);
    cabinGroup.add(roofMesh);

    // Left and Right Side Body Panels with "সি.এন.জি চালিত" White Beltline & Iron Cage (Image 2)
    [-0.69, 0.69].forEach((sx, idx) => {
      const sMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2.05, 1.25),
        sideCowlMat
      );
      sMesh.position.set(sx, 1.15, 0.18);
      sMesh.rotation.y = idx === 0 ? -Math.PI / 2 : Math.PI / 2;
      cabinGroup.add(sMesh);
    });

    this.bodyGroup.add(cabinGroup);

    // ========================================================
    // 5. EXACT REAR VIEW ASSEMBLY (from User Images 1 & 2!)
    // ========================================================
    const rearGroup = new THREE.Group();
    rearGroup.position.set(0, 0, 1.26);

    // High-Resolution Authentic Rear Face Mesh (Facing +Z directly towards player camera!)
    const rearFaceMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1.36, 1.45),
      rearCNGMat
    );
    rearFaceMesh.position.set(0, 1.08, 0.02);
    rearFaceMesh.rotation.y = Math.PI; // Face rearwards
    rearGroup.add(rearFaceMesh);

    // 3D Taillights with Protective Iron Wire Cage Guards (Image 1 & 2!)
    [-0.56, 0.56].forEach((tx) => {
      // Red Brake Light Lens (Illuminates bright red when braking!)
      const redLens = new THREE.Mesh(
        new THREE.BoxGeometry(0.10, 0.14, 0.04),
        new THREE.MeshBasicMaterial({ color: 0xef4444 })
      );
      redLens.position.set(tx, 0.88, 0.05);
      rearGroup.add(redLens);
      this.brakeLights.push(redLens);

      // Amber / White Lower Lens
      const amberLens = new THREE.Mesh(
        new THREE.BoxGeometry(0.10, 0.09, 0.04),
        new THREE.MeshBasicMaterial({ color: 0xf59e0b })
      );
      amberLens.position.set(tx, 0.74, 0.05);
      rearGroup.add(amberLens);

      // Protective Iron Wire-Cage Guard (Wrapping around taillight box - Image 1 & 2!)
      const cageWireMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.3 });
      [-0.05, 0.05].forEach((wx) => {
        const vWire = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.28, 6), cageWireMat);
        vWire.position.set(tx + wx, 0.81, 0.08);
        rearGroup.add(vWire);
      });
      [0.72, 0.81, 0.92].forEach((wy) => {
        const hWire = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.14, 6), cageWireMat);
        hWire.rotateZ(Math.PI / 2);
        hWire.position.set(tx, wy, 0.08);
        rearGroup.add(hWire);
      });
    });

    // ----------------------------------------------------
    // TUBULAR STEEL CRASH GUARD BUMPER & UNDER-CHASSIS EXHAUST (Image 1 & 2!)
    // ----------------------------------------------------
    const bumperGroup = new THREE.Group();

    // Main Green Tubular Bumper Crossbar
    const bBarGeo = new THREE.CylinderGeometry(0.032, 0.032, 1.48, 12);
    bBarGeo.rotateZ(Math.PI / 2);
    const bBar = new THREE.Mesh(bBarGeo, cngGreenMat);
    bBar.position.set(0, 0.34, 0.12);
    bumperGroup.add(bBar);

    // Corner Wrap-Around Loops (Image 1 & 2)
    [-0.72, 0.72].forEach((bx, idx) => {
      const loopGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.26, 10);
      loopGeo.rotateX(Math.PI / 2);
      const loop = new THREE.Mesh(loopGeo, cngGreenMat);
      loop.position.set(bx, 0.34, 0.01);
      bumperGroup.add(loop);

      // Reinforcement upright strut
      const strutGeo = new THREE.CylinderGeometry(0.024, 0.024, 0.22, 8);
      const strut = new THREE.Mesh(strutGeo, cngGreenMat);
      strut.position.set(bx * 0.82, 0.42, 0.08);
      bumperGroup.add(strut);
    });

    // Authentic Silver Horizontal Exhaust Muffler Pipe underneath chassis (from Image 1!)
    const mufflerPipe = new THREE.Mesh(
      new THREE.CylinderGeometry(0.045, 0.045, 0.65, 12),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.85, roughness: 0.25 })
    );
    mufflerPipe.rotateZ(Math.PI / 2);
    mufflerPipe.position.set(-0.25, 0.22, 0.06); // Exactly as seen in Image 1!
    bumperGroup.add(mufflerPipe);

    // Heavy Black Rubber Mudflaps (from Image 1 & 2)
    [-0.56, 0.56].forEach((mx) => {
      const flap = new THREE.Mesh(
        new THREE.BoxGeometry(0.24, 0.22, 0.02),
        tireRubberMat
      );
      flap.position.set(mx, 0.18, 0.04);
      bumperGroup.add(flap);
    });

    rearGroup.add(bumperGroup);
    this.bodyGroup.add(rearGroup);

    // ========================================================
    // 6. FRONT END, WINDSHIELD & HEADLIGHTS (Image 2)
    // ========================================================
    const frontGroup = new THREE.Group();

    // Curved green nose cowl
    const noseCurvedGeo = new THREE.CylinderGeometry(0.48, 0.70, 0.78, 16, 1, false, -Math.PI / 2, Math.PI);
    noseCurvedGeo.rotateX(Math.PI / 2);
    const noseCurved = new THREE.Mesh(noseCurvedGeo, cngGreenMat);
    noseCurved.position.set(0, 0.65, -1.15);
    frontGroup.add(noseCurved);

    // Matte Black Apron Mask with Dual Headlights
    const apronMaskMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.88, 0.44),
      frontMaskMat
    );
    apronMaskMesh.position.set(0, 0.76, -1.48);
    frontGroup.add(apronMaskMesh);

    // 3D Chrome Headlight Bezels
    [-0.26, 0.26].forEach((hx) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.10, 0.02, 10, 20), chromeMat);
      ring.position.set(hx, 0.72, -1.49);
      frontGroup.add(ring);

      const lens = new THREE.Mesh(
        new THREE.SphereGeometry(0.09, 12, 12, 0, Math.PI * 2, 0, Math.PI * 0.4),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      lens.rotateX(-Math.PI / 2);
      lens.position.set(hx, 0.72, -1.49);
      frontGroup.add(lens);
      this.headlights.push(lens);
    });

    // Windshield & Wiper
    const wsFrame = new THREE.Mesh(
      new THREE.BoxGeometry(1.32, 0.66, 0.04),
      new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.85 })
    );
    wsFrame.position.set(0, 1.34, -0.84);
    wsFrame.rotation.x = -0.26;
    frontGroup.add(wsFrame);

    const wsGlass = new THREE.Mesh(
      new THREE.PlaneGeometry(1.24, 0.58),
      windshieldGlassMat
    );
    wsGlass.position.set(0, 1.34, -0.86);
    wsGlass.rotation.x = -0.26;
    frontGroup.add(wsGlass);

    // Diagonal Wiper Blade
    const wiperArm = new THREE.Mesh(
      new THREE.BoxGeometry(0.018, 0.38, 0.015),
      matteBlackMat
    );
    wiperArm.position.set(0.10, 1.34, -0.88);
    wiperArm.rotation.x = -0.26;
    wiperArm.rotation.z = 0.52;
    frontGroup.add(wiperArm);

    // Dual Round Rear-View Mirrors on tall stalks
    [-0.72, 0.72].forEach((mx, idx) => {
      const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.30, 6), matteBlackMat);
      stalk.rotateZ(idx === 0 ? 0.65 : -0.65);
      stalk.position.set(mx, 1.50, -0.80);
      frontGroup.add(stalk);

      const mHead = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.02, 12), matteBlackMat);
      mHead.rotateX(Math.PI / 2);
      mHead.position.set(idx === 0 ? mx - 0.14 : mx + 0.14, 1.58, -0.80);
      frontGroup.add(mHead);
    });

    this.bodyGroup.add(frontGroup);

    // ========================================================
    // 7. INTERIOR CABIN & DRIVER
    // ========================================================
    const interiorGroup = new THREE.Group();

    // Driver Seat
    const drvSeat = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.22, 0.40), matteBlackMat);
    drvSeat.position.set(0, 0.78, -0.38);
    interiorGroup.add(drvSeat);

    // Motorbike Handlebars
    const hbBar = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.58, 8), chromeMat);
    hbBar.rotateZ(Math.PI / 2);
    hbBar.position.set(0, 1.02, -0.62);
    interiorGroup.add(hbBar);

    // Driver Figure (Sky blue shirt)
    const driverTorso = new THREE.Mesh(
      new THREE.BoxGeometry(0.36, 0.45, 0.22),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.8 })
    );
    driverTorso.position.set(0, 1.15, -0.36);
    interiorGroup.add(driverTorso);

    const driverHead = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0x8d5524, roughness: 0.7 })
    );
    driverHead.position.set(0, 1.48, -0.36);
    interiorGroup.add(driverHead);

    // Rear Passenger Bench Seat
    const passSeat = new THREE.Mesh(
      new THREE.BoxGeometry(1.24, 0.25, 0.52),
      new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.65 })
    );
    passSeat.position.set(0, 0.78, 0.65);
    interiorGroup.add(passSeat);

    this.bodyGroup.add(interiorGroup);

    // ========================================================
    // 8. 3-WHEELER WHEELS SYSTEM (1 Front Centered, 2 Rear)
    // ========================================================

    // Front Wheel (radius 0.28m, z = -1.25m)
    this.frontWheel = this.createCNGWheel(0.28, tireRubberMat, rimMat);
    this.frontWheel.position.set(0, 0.28, -1.25);
    this.bodyGroup.add(this.frontWheel);
    this.wheels.push(this.frontWheel);

    // Front Curved Green Mudguard
    const fMudGeo = new THREE.CylinderGeometry(0.33, 0.33, 0.20, 16, 1, true, 0, Math.PI);
    fMudGeo.rotateZ(Math.PI / 2);
    const fMud = new THREE.Mesh(fMudGeo, cngGreenMat);
    fMud.position.set(0, 0.32, -1.25);
    this.bodyGroup.add(fMud);

    // Chrome Steering Fork
    const fork = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.48, 8), chromeMat);
    fork.position.set(0, 0.58, -1.25);
    this.bodyGroup.add(fork);

    // Rear Wheels (radius 0.30m, x = ±0.62m, z = 0.75m)
    [-0.62, 0.62].forEach((rx) => {
      const rw = this.createCNGWheel(0.30, tireRubberMat, rimMat);
      rw.position.set(rx, 0.30, 0.75);
      this.bodyGroup.add(rw);
      this.wheels.push(rw);

      // Curved rear wheel arch
      const rArchGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.22, 16, 1, true, 0, Math.PI);
      rArchGeo.rotateZ(Math.PI / 2);
      const rArch = new THREE.Mesh(rArchGeo, cngGreenMat);
      rArch.position.set(rx, 0.34, 0.75);
      this.bodyGroup.add(rArch);
    });

    // ========================================================
    // 9. BOOST JET FLAMES (Under rear bumper)
    // ========================================================
    [-0.28, 0.28].forEach((bx) => {
      const flameGeo = new THREE.ConeGeometry(0.11, 0.72, 8);
      flameGeo.rotateX(-Math.PI / 2);
      const flameMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0
      });
      const flame = new THREE.Mesh(flameGeo, flameMat);
      flame.position.set(bx, 0.36, 1.38);
      this.bodyGroup.add(flame);
      this.exhaustFires.push(flame);
    });
  }

  createCNGWheel(radius, tireMat, rimMat) {
    const wheelGroup = new THREE.Group();

    // Tire
    const tireGeo = new THREE.CylinderGeometry(radius, radius, 0.18, 18);
    tireGeo.rotateZ(Math.PI / 2);
    const tire = new THREE.Mesh(tireGeo, tireMat);
    wheelGroup.add(tire);

    // Silver Rim
    const rimGeo = new THREE.CylinderGeometry(radius * 0.65, radius * 0.65, 0.19, 14);
    rimGeo.rotateZ(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, rimMat);
    wheelGroup.add(rim);

    // Black Center Hub
    const hubGeo = new THREE.CylinderGeometry(radius * 0.26, radius * 0.26, 0.20, 10);
    hubGeo.rotateZ(Math.PI / 2);
    const hub = new THREE.Mesh(
      hubGeo,
      new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.6 })
    );
    wheelGroup.add(hub);

    return wheelGroup;
  }

  update(speedKmh, currentLaneX, targetLaneX, isBraking, isBoosting, delta) {
    const forwardMs = (speedKmh * 1000) / 3600;

    // 1. Wheel Rotation (Negative for forward movement down -Z)
    const wheelRotDelta = (forwardMs / 0.28) * delta;
    this.wheelRotation -= wheelRotDelta;
    this.wheels.forEach((w) => {
      w.rotation.x = this.wheelRotation;
    });

    // 2. Agile 3-Wheeler Banking Roll on steering
    const laneOffset = targetLaneX - currentLaneX;
    const targetRoll = -laneOffset * 0.15;
    this.currentRoll += (targetRoll - this.currentRoll) * Math.min(1.0, delta * 8.5);
    this.bodyGroup.rotation.z = this.currentRoll;

    // 3. Chassis Yaw turning angle
    const targetYaw = -laneOffset * 0.10;
    this.currentYaw += (targetYaw - this.currentYaw) * Math.min(1.0, delta * 7.5);
    this.bodyGroup.rotation.y = this.currentYaw;

    // 4. Pitch dynamics
    let targetPitch = 0;
    if (isBraking) {
      targetPitch = 0.05;
    } else if (isBoosting) {
      targetPitch = -0.045;
    }
    this.currentPitch += (targetPitch - this.currentPitch) * Math.min(1.0, delta * 8.0);
    this.bodyGroup.rotation.x = this.currentPitch;

    // 5. Dynamic Brake Lights
    this.brakeLights.forEach((bl) => {
      bl.material.color.setHex(isBraking ? 0xff0000 : 0xef4444);
    });

    // 6. Boost Jet Flames
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

    // 7. Horn Flash
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
    center.y += 0.90;
    this.box.setFromCenterAndSize(center, this.collisionSize);
  }

  triggerCrash() {
    this.bodyGroup.rotation.z = 0.45;
    this.bodyGroup.rotation.y = 0.50;
    this.bodyGroup.rotation.x = -0.18;
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
