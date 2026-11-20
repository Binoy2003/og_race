// ===================================================================
// BANGLADESH GREEN CNG AUTO-RICKSHAW 3D MODEL (OG_RACE)
// Accurate Bajaj RE 4-Stroke Shape, Authentic Emerald Green Finish,
// Side Wire-Mesh Safety Gates, Scalloped Canopy Roof & Folk Calligraphy Art
// Faithfully created from authentic Bangladeshi reference photos!
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
    this.headlightRays = [];
    this.brakeLights = [];
    this.exhaustFires = [];

    // Dynamics state
    this.currentRoll = 0;
    this.currentPitch = 0;
    this.currentYaw = 0;
    this.wheelRotation = 0;
    this.hornTimer = 0;

    // Collision Bounding Box (tuned for agile 3-wheeler)
    this.box = new THREE.Box3();
    this.collisionSize = new THREE.Vector3(1.55, 1.9, 2.9);

    this.buildCNG();

    // Perfectly balanced proportional scale: road ahead is wide and unobstructed!
    this.group.scale.set(0.85, 0.85, 0.85);
  }

  buildCNG() {
    this.bodyGroup = new THREE.Group();
    this.group.add(this.bodyGroup);

    // ========================================================
    // 1. PROCEDURAL TEXTURES (Faithfully drawn from reference images)
    // ========================================================

    // ----------------------------------------------------
    // A. Side Canopy Hood Art ("মায়ের দোয়া" & Scalloped Fringe Trim - from Image 1)
    // ----------------------------------------------------
    const hoodArtCanvas = document.createElement('canvas');
    hoodArtCanvas.width = 512;
    hoodArtCanvas.height = 256;
    const hCtx = hoodArtCanvas.getContext('2d');

    // Deep Charcoal / Black Canvas Texture
    hCtx.fillStyle = '#181a1b';
    hCtx.fillRect(0, 0, 512, 256);

    // Subtle canvas weave texture
    hCtx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    for (let x = 0; x < 512; x += 4) {
      hCtx.fillRect(x, 0, 2, 256);
    }
    for (let y = 0; y < 256; y += 4) {
      hCtx.fillRect(0, y, 512, 2);
    }

    // Authentic Scalloped White/Silver Piping Trim along bottom edge (from Image 1)
    hCtx.fillStyle = '#f1f5f9';
    hCtx.strokeStyle = '#94a3b8';
    hCtx.lineWidth = 1.5;
    for (let x = 0; x < 512; x += 32) {
      hCtx.beginPath();
      hCtx.arc(x + 16, 238, 14, 0, Math.PI, false);
      hCtx.fill();
      hCtx.stroke();
    }
    // Decorative red dots inside scallops
    hCtx.fillStyle = '#dc2626';
    for (let x = 0; x < 512; x += 32) {
      hCtx.beginPath();
      hCtx.arc(x + 16, 244, 3, 0, Math.PI * 2);
      hCtx.fill();
    }

    // Arched Yellow Calligraphy Banner: "মায়ের দোয়া" (Mother's Blessing - Image 1)
    const bx = 320, by = 110;
    // Arched banner ribbon background
    hCtx.fillStyle = '#b91c1c';
    hCtx.beginPath();
    hCtx.roundRect(bx - 120, by - 45, 240, 80, 16);
    hCtx.fill();
    hCtx.strokeStyle = '#facc15';
    hCtx.lineWidth = 4;
    hCtx.stroke();

    // Inner gold pinstripe
    hCtx.strokeStyle = '#fde047';
    hCtx.lineWidth = 2;
    hCtx.strokeRect(bx - 112, by - 38, 224, 66);

    // Beautiful Calligraphy Lettering: "মায়ের দোয়া"
    hCtx.fillStyle = '#ffffff';
    hCtx.font = '900 38px sans-serif';
    hCtx.textAlign = 'center';
    hCtx.textBaseline = 'middle';
    hCtx.shadowColor = 'rgba(0,0,0,0.85)';
    hCtx.shadowBlur = 6;
    hCtx.fillText('মায়ের দোয়া', bx, by - 4);
    hCtx.shadowBlur = 0;

    // Decorative Folk Floral ornaments flanking the banner
    const drawFlower = (fx, fy) => {
      const petals = 6;
      for (let p = 0; p < petals; p++) {
        const ang = (p * Math.PI * 2) / petals;
        hCtx.fillStyle = '#facc15';
        hCtx.beginPath();
        hCtx.arc(fx + Math.cos(ang) * 12, fy + Math.sin(ang) * 12, 7, 0, Math.PI * 2);
        hCtx.fill();
      }
      hCtx.fillStyle = '#dc2626';
      hCtx.beginPath();
      hCtx.arc(fx, fy, 6, 0, Math.PI * 2);
      hCtx.fill();
    };
    drawFlower(bx - 145, by - 5);
    drawFlower(bx + 145, by - 5);

    const hoodArtTexture = new THREE.CanvasTexture(hoodArtCanvas);

    // ----------------------------------------------------
    // B. Side Safety Wire-Mesh Gate & Door Banner (from Image 1)
    // ----------------------------------------------------
    const sideDoorCanvas = document.createElement('canvas');
    sideDoorCanvas.width = 512;
    sideDoorCanvas.height = 512;
    const dCtx = sideDoorCanvas.getContext('2d');

    // Clear transparent background
    dCtx.clearRect(0, 0, 512, 512);

    // 1. Top Section (y: 0 to 270): Authentic Iron Security Cage / Wire-Mesh Grille
    // Outer green steel frame
    dCtx.fillStyle = '#166534';
    dCtx.fillRect(10, 10, 492, 260);
    dCtx.clearRect(22, 22, 468, 236);

    // Diamond Criss-Cross Wire Lattice Mesh (Security Grill from Image 1)
    dCtx.strokeStyle = '#15803d';
    dCtx.lineWidth = 3.5;
    const gridStep = 28;
    for (let x = -260; x <= 512 + 260; x += gridStep) {
      dCtx.beginPath();
      dCtx.moveTo(x, 22);
      dCtx.lineTo(x + 236, 258);
      dCtx.stroke();

      dCtx.beginPath();
      dCtx.moveTo(x, 258);
      dCtx.lineTo(x + 236, 22);
      dCtx.stroke();
    }

    // Heavy vertical steel safety bars
    dCtx.strokeStyle = '#166534';
    dCtx.lineWidth = 7;
    for (let x = 60; x <= 460; x += 70) {
      dCtx.beginPath();
      dCtx.moveTo(x, 15);
      dCtx.lineTo(x, 265);
      dCtx.stroke();
    }

    // Horizontal center tie bar & door lock latch
    dCtx.fillStyle = '#334155';
    dCtx.fillRect(15, 135, 482, 12);
    dCtx.fillStyle = '#facc15';
    dCtx.fillRect(235, 128, 42, 26);
    dCtx.fillStyle = '#0f172a';
    dCtx.fillRect(248, 135, 16, 12);

    // 2. Bottom Section (y: 270 to 512): Solid Green Sheet Metal Door Panel
    dCtx.fillStyle = '#16a34a'; // Vibrant emerald CNG body green
    dCtx.fillRect(10, 270, 492, 236);

    // Door bevel borders
    dCtx.strokeStyle = '#14532d';
    dCtx.lineWidth = 5;
    dCtx.strokeRect(12, 272, 488, 232);

    // Upper White Ribbon: "সি এন জি চালিত" (CNG Powered - Image 1)
    dCtx.fillStyle = '#ffffff';
    dCtx.beginPath();
    dCtx.roundRect(24, 288, 464, 95, 8);
    dCtx.fill();
    dCtx.strokeStyle = '#0284c7';
    dCtx.lineWidth = 4;
    dCtx.stroke();

    // Red decorative corner stars
    dCtx.fillStyle = '#dc2626';
    dCtx.font = 'bold 28px sans-serif';
    dCtx.fillText('★', 42, 342);
    dCtx.fillText('★', 470, 342);

    // "সি এন জি চালিত" bold text
    dCtx.fillStyle = '#0284c7';
    dCtx.font = '900 48px sans-serif';
    dCtx.textAlign = 'center';
    dCtx.textBaseline = 'middle';
    dCtx.fillText('সি এন জি চালিত', 256, 335);

    // Lower Golden-Yellow Ribbon: "ভাই বোন পরিবহন" (from Image 1)
    dCtx.fillStyle = '#f59e0b';
    dCtx.beginPath();
    dCtx.roundRect(24, 396, 464, 98, 8);
    dCtx.fill();
    dCtx.strokeStyle = '#b91c1c';
    dCtx.lineWidth = 4;
    dCtx.stroke();

    // Red inner border
    dCtx.strokeStyle = '#dc2626';
    dCtx.lineWidth = 2;
    dCtx.strokeRect(32, 404, 448, 82);

    // "ভাই বোন পরিবহন" bold crimson text
    dCtx.fillStyle = '#b91c1c';
    dCtx.font = '900 46px sans-serif';
    dCtx.fillText('ভাই বোন পরিবহন', 256, 445);

    const sideDoorTexture = new THREE.CanvasTexture(sideDoorCanvas);

    // ----------------------------------------------------
    // C. Front Cowl Side Speed Stripes & "CNG" Decal (Image 1 & 2)
    // ----------------------------------------------------
    const cowlSideCanvas = document.createElement('canvas');
    cowlSideCanvas.width = 256;
    cowlSideCanvas.height = 160;
    const csCtx = cowlSideCanvas.getContext('2d');

    csCtx.fillStyle = '#16a34a';
    csCtx.fillRect(0, 0, 256, 160);

    // Bold Tri-Color Racing Stripes: Blue, Yellow, Red (from Image 1)
    const stripeColors = ['#0284c7', '#facc15', '#dc2626'];
    for (let s = 0; s < 3; s++) {
      csCtx.fillStyle = stripeColors[s];
      csCtx.beginPath();
      csCtx.roundRect(15, 20 + s * 24, 226, 18, 4);
      csCtx.fill();
    }

    // Bold White "CNG" Decal (from Image 2)
    csCtx.fillStyle = '#ffffff';
    csCtx.font = '900 48px sans-serif';
    csCtx.textAlign = 'center';
    csCtx.textBaseline = 'middle';
    csCtx.shadowColor = 'rgba(0,0,0,0.5)';
    csCtx.shadowBlur = 6;
    csCtx.fillText('CNG', 128, 122);
    csCtx.shadowBlur = 0;

    const cowlSideTexture = new THREE.CanvasTexture(cowlSideCanvas);

    // ----------------------------------------------------
    // D. Front Apron Mask & Faceted Headlight Texture (Image 2 & 3)
    // ----------------------------------------------------
    const frontMaskCanvas = document.createElement('canvas');
    frontMaskCanvas.width = 512;
    frontMaskCanvas.height = 256;
    const fmCtx = frontMaskCanvas.getContext('2d');

    // Matte Black Apron Mask
    fmCtx.fillStyle = '#1e293b';
    fmCtx.fillRect(0, 0, 512, 256);

    // Dual Faceted Circular Headlights (from Image 2 & 3)
    const drawHeadlight = (cx, cy, r) => {
      // Outer Chrome Trim Ring
      fmCtx.fillStyle = '#94a3b8';
      fmCtx.beginPath();
      fmCtx.arc(cx, cy, r + 6, 0, Math.PI * 2);
      fmCtx.fill();

      // Mirror Reflector Dish
      const grad = fmCtx.createRadialGradient(cx, cy, 4, cx, cy, r);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.4, '#e2e8f0');
      grad.addColorStop(0.85, '#94a3b8');
      grad.addColorStop(1, '#475569');
      fmCtx.fillStyle = grad;
      fmCtx.beginPath();
      fmCtx.arc(cx, cy, r, 0, Math.PI * 2);
      fmCtx.fill();

      // Glass Fluting / Concentric Rings
      fmCtx.strokeStyle = 'rgba(255,255,255,0.6)';
      fmCtx.lineWidth = 1.8;
      for (let cr = 10; cr < r; cr += 10) {
        fmCtx.beginPath();
        fmCtx.arc(cx, cy, cr, 0, Math.PI * 2);
        fmCtx.stroke();
      }

      // Bulb filament center
      fmCtx.fillStyle = '#fef08a';
      fmCtx.beginPath();
      fmCtx.arc(cx, cy, 6, 0, Math.PI * 2);
      fmCtx.fill();
    };
    drawHeadlight(105, 140, 52);
    drawHeadlight(407, 140, 52);

    // Center Vertical Cooling / Horn Grille Slots
    fmCtx.fillStyle = '#0f172a';
    for (let x = 200; x <= 312; x += 16) {
      fmCtx.fillRect(x, 105, 7, 75);
    }

    // Dhaka Metro License Plate below windshield (Image 3)
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

    // Red/Amber Marker Lights flanking license plate
    fmCtx.fillStyle = '#ef4444';
    fmCtx.fillRect(75, 30, 48, 22);
    fmCtx.fillStyle = '#f59e0b';
    fmCtx.fillRect(389, 30, 48, 22);

    const frontMaskTexture = new THREE.CanvasTexture(frontMaskCanvas);

    // ----------------------------------------------------
    // E. Authentic Rear Engine Hatch Texture (from Image 1 & 2)
    // ----------------------------------------------------
    const rearHatchCanvas = document.createElement('canvas');
    rearHatchCanvas.width = 512;
    rearHatchCanvas.height = 360;
    const rhCtx = rearHatchCanvas.getContext('2d');

    // Rich Green metal background
    rhCtx.fillStyle = '#16a34a';
    rhCtx.fillRect(0, 0, 512, 360);

    // Sheet metal bevel outline
    rhCtx.strokeStyle = '#14532d';
    rhCtx.lineWidth = 4;
    rhCtx.strokeRect(6, 6, 500, 348);

    // Horizontal cooling louvers / ventilation slits (from Image 1)
    for (let y = 55; y <= 220; y += 22) {
      // Left louvers
      rhCtx.fillStyle = '#14532d';
      rhCtx.fillRect(25, y, 105, 8);
      rhCtx.fillStyle = '#22c55e';
      rhCtx.fillRect(25, y + 8, 105, 2);

      // Right louvers
      rhCtx.fillStyle = '#14532d';
      rhCtx.fillRect(382, y, 105, 8);
      rhCtx.fillStyle = '#22c55e';
      rhCtx.fillRect(382, y + 8, 105, 2);

      // Middle louvers
      if (y >= 165) {
        rhCtx.fillStyle = '#14532d';
        rhCtx.fillRect(145, y, 222, 7);
        rhCtx.fillStyle = '#22c55e';
        rhCtx.fillRect(145, y + 7, 222, 2);
      }
    }

    // Upper Left Badge: "উত্তরা" (Uttara)
    rhCtx.fillStyle = '#b91c1c';
    rhCtx.beginPath();
    rhCtx.roundRect(24, 18, 95, 26, 6);
    rhCtx.fill();
    rhCtx.strokeStyle = '#fde047';
    rhCtx.lineWidth = 2;
    rhCtx.stroke();
    rhCtx.fillStyle = '#ffffff';
    rhCtx.font = 'bold 16px sans-serif';
    rhCtx.textAlign = 'center';
    rhCtx.textBaseline = 'middle';
    rhCtx.fillText('উত্তরা', 71, 31);

    // Upper Right Badge: "RE CNG FOUR STROKE"
    rhCtx.fillStyle = '#065f46';
    rhCtx.beginPath();
    rhCtx.roundRect(390, 18, 98, 26, 6);
    rhCtx.fill();
    rhCtx.strokeStyle = '#fde047';
    rhCtx.lineWidth = 2;
    rhCtx.stroke();
    rhCtx.fillStyle = '#fde047';
    rhCtx.font = 'bold 12px sans-serif';
    rhCtx.fillText('RE CNG', 439, 26);
    rhCtx.fillStyle = '#ffffff';
    rhCtx.font = '9px sans-serif';
    rhCtx.fillText('FOUR STROKE', 439, 37);

    // Center Bangladesh Digital License Plate: "ঢাকা মেট্রো-থ \n ১১-৫০৫১"
    rhCtx.fillStyle = '#047857';
    rhCtx.beginPath();
    rhCtx.roundRect(176, 18, 160, 72, 8);
    rhCtx.fill();
    rhCtx.strokeStyle = '#ffffff';
    rhCtx.lineWidth = 3;
    rhCtx.stroke();

    rhCtx.fillStyle = '#ffffff';
    rhCtx.font = 'bold 19px sans-serif';
    rhCtx.fillText('ঢাকা মেট্রো-থ', 256, 40);
    rhCtx.font = 'bold 24px sans-serif';
    rhCtx.fillText('১১-৫০৫১', 256, 70);

    // Bold Yellow "🔴 UTTARA 🔴" Banner
    rhCtx.fillStyle = '#facc15';
    rhCtx.beginPath();
    rhCtx.roundRect(138, 104, 236, 44, 6);
    rhCtx.fill();
    rhCtx.strokeStyle = '#dc2626';
    rhCtx.lineWidth = 3;
    rhCtx.stroke();

    rhCtx.fillStyle = '#dc2626';
    rhCtx.beginPath();
    rhCtx.arc(158, 126, 9, 0, Math.PI * 2);
    rhCtx.arc(354, 126, 9, 0, Math.PI * 2);
    rhCtx.fill();

    rhCtx.fillStyle = '#1c1917';
    rhCtx.font = '900 24px sans-serif';
    rhCtx.fillText('UTTARA', 256, 126);

    // Semicircular Sunburst Fan / Rainbow Decals (Under taillights on left & right)
    const drawSunburst = (cx, cy, radius) => {
      const fanColors = ['#0284c7', '#10b981', '#f59e0b', '#ef4444', '#ec4899'];
      const slice = Math.PI / fanColors.length;
      for (let i = 0; i < fanColors.length; i++) {
        rhCtx.fillStyle = fanColors[i];
        rhCtx.beginPath();
        rhCtx.moveTo(cx, cy);
        rhCtx.arc(cx, cy, radius, Math.PI + i * slice, Math.PI + (i + 1) * slice);
        rhCtx.closePath();
        rhCtx.fill();
      }
      rhCtx.strokeStyle = '#ffffff';
      rhCtx.lineWidth = 2;
      rhCtx.stroke();
    };
    drawSunburst(65, 305, 46);
    drawSunburst(447, 305, 46);

    const rearHatchTexture = new THREE.CanvasTexture(rearHatchCanvas);

    // ----------------------------------------------------
    // F. Bumper Yellow Diamond Mesh Texture (from Image 1)
    // ----------------------------------------------------
    const diamondCanvas = document.createElement('canvas');
    diamondCanvas.width = 128;
    diamondCanvas.height = 64;
    const dmCtx = diamondCanvas.getContext('2d');
    dmCtx.fillStyle = '#facc15';
    dmCtx.fillRect(0, 0, 128, 64);
    dmCtx.strokeStyle = '#1c1917';
    dmCtx.lineWidth = 4;
    for (let i = -64; i < 192; i += 16) {
      dmCtx.beginPath();
      dmCtx.moveTo(i, 0);
      dmCtx.lineTo(i + 32, 64);
      dmCtx.stroke();

      dmCtx.beginPath();
      dmCtx.moveTo(i + 32, 0);
      dmCtx.lineTo(i, 64);
      dmCtx.stroke();
    }
    const diamondTexture = new THREE.CanvasTexture(diamondCanvas);

    // ========================================================
    // 2. SHARED 3D MATERIALS
    // ========================================================
    const cngGreenMat = new THREE.MeshStandardMaterial({
      color: 0x16a34a,
      metalness: 0.25,
      roughness: 0.35
    });
    const cngDarkGreenMat = new THREE.MeshStandardMaterial({
      color: 0x15803d,
      roughness: 0.45
    });
    const blackCanvasMat = new THREE.MeshStandardMaterial({
      color: 0x181a1b,
      roughness: 0.9,
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
    const rearGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
      roughness: 0.08,
      transmission: 0.7
    });
    const rubberBezelMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      roughness: 0.85
    });

    const hoodArtMat = new THREE.MeshStandardMaterial({ map: hoodArtTexture, roughness: 0.85 });
    const sideDoorMat = new THREE.MeshStandardMaterial({
      map: sideDoorTexture,
      transparent: true,
      opacity: 0.96,
      side: THREE.DoubleSide
    });
    const cowlSideMat = new THREE.MeshStandardMaterial({ map: cowlSideTexture, roughness: 0.35 });
    const frontMaskMat = new THREE.MeshStandardMaterial({ map: frontMaskTexture, roughness: 0.4 });
    const rearHatchMat = new THREE.MeshStandardMaterial({ map: rearHatchTexture, roughness: 0.4, metalness: 0.1 });

    // ========================================================
    // 3. 3D CHASSIS & LOWER FLOOR PAN
    // ========================================================
    const floorGeo = new THREE.BoxGeometry(1.52, 0.36, 2.65);
    const floor = new THREE.Mesh(floorGeo, cngGreenMat);
    floor.position.set(0, 0.44, 0);
    floor.receiveShadow = true;
    this.bodyGroup.add(floor);

    // Lower underside mechanical casing
    const underPan = new THREE.Mesh(
      new THREE.BoxGeometry(1.35, 0.18, 2.4),
      matteBlackMat
    );
    underPan.position.set(0, 0.22, 0.05);
    this.bodyGroup.add(underPan);

    // ========================================================
    // 4. SCULPTED FRONT NOSE & MATTE BLACK APRON (Image 2 & 3)
    // ========================================================
    const noseGroup = new THREE.Group();
    noseGroup.position.set(0, 0, 0);

    // Aerodynamic curved green front cowl tapering to front wheel
    const noseCurvedGeo = new THREE.CylinderGeometry(0.52, 0.78, 0.85, 18, 1, false, -Math.PI / 2, Math.PI);
    noseCurvedGeo.rotateX(Math.PI / 2);
    const noseCurved = new THREE.Mesh(noseCurvedGeo, cngGreenMat);
    noseCurved.position.set(0, 0.70, -1.22);
    noseGroup.add(noseCurved);

    // Front Cowl Side Decals (Tri-color stripes & "CNG" - Image 1 & 2)
    [-0.72, 0.72].forEach((cx, idx) => {
      const cSideGeo = new THREE.PlaneGeometry(0.72, 0.42);
      const cSide = new THREE.Mesh(cSideGeo, cowlSideMat);
      cSide.position.set(cx, 0.68, -0.92);
      cSide.rotation.y = idx === 0 ? -Math.PI / 2 : Math.PI / 2;
      noseGroup.add(cSide);
    });

    // Matte Black Front Apron Mask (Housing dual headlights & grille - Image 2 & 3)
    const apronMaskMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.96, 0.48),
      frontMaskMat
    );
    apronMaskMesh.position.set(0, 0.82, -1.58);
    noseGroup.add(apronMaskMesh);

    // 3D Chrome Headlight Bezel Rings protruding from apron (Image 2 & 3)
    [-0.28, 0.28].forEach((hx) => {
      // Chrome Ring Bezel
      const ringGeo = new THREE.TorusGeometry(0.12, 0.022, 10, 24);
      const ring = new THREE.Mesh(ringGeo, chromeMat);
      ring.position.set(hx, 0.76, -1.59);
      noseGroup.add(ring);

      // Glowing Faceted Headlight Lens
      const lensGeo = new THREE.SphereGeometry(0.11, 14, 14, 0, Math.PI * 2, 0, Math.PI * 0.4);
      lensGeo.rotateX(-Math.PI / 2);
      const lensMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const lens = new THREE.Mesh(lensGeo, lensMat);
      lens.position.set(hx, 0.76, -1.59);
      noseGroup.add(lens);
      this.headlights.push(lens);
    });

    // Amber Turn Indicator Lenses on Front Mask
    [-0.42, 0.42].forEach((ix) => {
      const indGeo = new THREE.BoxGeometry(0.12, 0.05, 0.03);
      const indMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
      const ind = new THREE.Mesh(indGeo, indMat);
      ind.position.set(ix, 0.98, -1.52);
      noseGroup.add(ind);
    });

    this.bodyGroup.add(noseGroup);

    // ========================================================
    // 5. WINDSHIELD, A-PILLARS & DUAL SIDE MIRRORS (Image 2 & 3)
    // ========================================================
    const wsGroup = new THREE.Group();

    // Windshield outer rubber frame
    const wsFrame = new THREE.Mesh(
      new THREE.BoxGeometry(1.48, 0.72, 0.04),
      rubberBezelMat
    );
    wsFrame.position.set(0, 1.42, -0.90);
    wsFrame.rotation.x = -0.26; // Raked backwards 15°
    wsGroup.add(wsFrame);

    // Tinted Windshield Glass
    const wsGlass = new THREE.Mesh(
      new THREE.PlaneGeometry(1.38, 0.64),
      windshieldGlassMat
    );
    wsGlass.position.set(0, 1.42, -0.92);
    wsGlass.rotation.x = -0.26;
    wsGroup.add(wsGlass);

    // Single 3D Diagonal Wiper Blade (from Image 2 & 3)
    const wiperArm = new THREE.Mesh(
      new THREE.BoxGeometry(0.02, 0.42, 0.015),
      matteBlackMat
    );
    wiperArm.position.set(0.12, 1.42, -0.94);
    wiperArm.rotation.x = -0.26;
    wiperArm.rotation.z = 0.52; // Tilted diagonally across windshield
    wsGroup.add(wiperArm);

    // Left & Right Green Windshield A-Pillars
    [-0.72, 0.72].forEach((px) => {
      const pillarGeo = new THREE.CylinderGeometry(0.035, 0.04, 0.82, 8);
      const pillar = new THREE.Mesh(pillarGeo, cngGreenMat);
      pillar.position.set(px, 1.40, -0.90);
      pillar.rotation.x = -0.26;
      wsGroup.add(pillar);
    });

    // Dual High-Mounted Round Rear-View Mirrors on Curved Stalks (Image 2 & 3)
    [-0.78, 0.78].forEach((mx, idx) => {
      // Curved Stalk
      const stalkGeo = new THREE.CylinderGeometry(0.014, 0.014, 0.32, 6);
      stalkGeo.rotateZ(idx === 0 ? 0.65 : -0.65);
      const stalk = new THREE.Mesh(stalkGeo, matteBlackMat);
      stalk.position.set(mx, 1.58, -0.86);
      wsGroup.add(stalk);

      // Round Mirror Head
      const mHeadGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.025, 14);
      mHeadGeo.rotateX(Math.PI / 2);
      const mHead = new THREE.Mesh(mHeadGeo, matteBlackMat);
      mHead.position.set(idx === 0 ? mx - 0.16 : mx + 0.16, 1.66, -0.86);
      wsGroup.add(mHead);

      // Reflective Glass Face
      const mGlass = new THREE.Mesh(
        new THREE.CircleGeometry(0.072, 14),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.1 })
      );
      mGlass.position.set(idx === 0 ? mx - 0.16 : mx + 0.16, 1.66, -0.84);
      wsGroup.add(mGlass);
    });

    this.bodyGroup.add(wsGroup);

    // ========================================================
    // 6. CANOPY ROOF WITH SCALLOPED EDGES & CALLIGRAPHY ART (Image 1 & 2)
    // ========================================================
    const canopyGroup = new THREE.Group();

    // Curved 3D Charcoal Canvas Roof
    const roofCurveGeo = new THREE.CylinderGeometry(0.82, 0.82, 2.22, 24, 1, true, Math.PI * 0.12, Math.PI * 0.76);
    roofCurveGeo.rotateZ(Math.PI / 2);
    const roofMesh = new THREE.Mesh(roofCurveGeo, blackCanvasMat);
    roofMesh.position.set(0, 1.80, 0.16);
    canopyGroup.add(roofMesh);

    // Left and Right Side Canopy Quarter Panels with "মায়ের দোয়া" & Scalloped Trim (Image 1)
    [-0.78, 0.78].forEach((rx, idx) => {
      const sideHoodMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(1.65, 0.52),
        hoodArtMat
      );
      sideHoodMesh.position.set(rx, 1.66, 0.42);
      sideHoodMesh.rotation.y = idx === 0 ? -Math.PI / 2 : Math.PI / 2;
      canopyGroup.add(sideHoodMesh);
    });

    // Center B-Pillars & Rear C-Pillars
    [-0.75, 0.75].forEach((bx) => {
      // Center B-Pillar
      const bPil = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.92, 0.05), cngGreenMat);
      bPil.position.set(bx, 1.15, -0.22);
      canopyGroup.add(bPil);

      // Rear C-Pillar
      const cPil = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.92, 0.05), cngGreenMat);
      cPil.position.set(bx, 1.15, 1.20);
      canopyGroup.add(cPil);
    });

    this.bodyGroup.add(canopyGroup);

    // ========================================================
    // 7. SIDE DOORS WITH WIRE-MESH SAFETY GATES (Image 1)
    // ========================================================
    // Left & Right Doors featuring vertical safety bars, diamond lattice & Bengali ribbons!
    [-0.77, 0.77].forEach((dx, idx) => {
      const doorMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(1.36, 1.05),
        sideDoorMat
      );
      doorMesh.position.set(dx, 1.08, 0.28);
      doorMesh.rotation.y = idx === 0 ? -Math.PI / 2 : Math.PI / 2;
      this.bodyGroup.add(doorMesh);
    });

    // ========================================================
    // 8. INTERIOR CABIN (Driver & Passenger Compartments)
    // ========================================================
    const interiorGroup = new THREE.Group();

    // Dark ribbed rubber floor mat
    const floorMatMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1.42, 2.2),
      new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.95 })
    );
    floorMatMesh.rotation.x = -Math.PI / 2;
    floorMatMesh.position.set(0, 0.63, 0.1);
    interiorGroup.add(floorMatMesh);

    // Driver Bucket Seat with dark upholstery
    const drvSeat = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 0.25, 0.45),
      matteBlackMat
    );
    drvSeat.position.set(0, 0.85, -0.42);
    interiorGroup.add(drvSeat);

    // Handlebar Steering with Grips & Instrument Cluster
    const hbGroup = new THREE.Group();
    hbGroup.position.set(0, 1.08, -0.68);

    const hbBar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 0.64, 8),
      chromeMat
    );
    hbBar.rotateZ(Math.PI / 2);
    hbGroup.add(hbBar);

    // Handlebar rubber grips
    [-0.30, 0.30].forEach((gx) => {
      const grip = new THREE.Mesh(
        new THREE.CylinderGeometry(0.028, 0.028, 0.12, 8),
        matteBlackMat
      );
      grip.rotateZ(Math.PI / 2);
      grip.position.set(gx, 0, 0);
      hbGroup.add(grip);
    });

    // Central Speedometer Console
    const consoleBox = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.08, 0.12),
      matteBlackMat
    );
    consoleBox.position.set(0, 0.04, 0.02);
    hbGroup.add(consoleBox);

    interiorGroup.add(hbGroup);

    // Driver Silhouette (Sky blue shirt + dark head)
    const driverTorso = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 0.48, 0.24),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.8 })
    );
    driverTorso.position.set(0, 1.20, -0.40);
    interiorGroup.add(driverTorso);

    const driverHead = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0x8d5524, roughness: 0.7 })
    );
    driverHead.position.set(0, 1.54, -0.40);
    interiorGroup.add(driverHead);

    // Rear Passenger Bench Seat (Comfortable dark leather cushion)
    const passSeat = new THREE.Mesh(
      new THREE.BoxGeometry(1.38, 0.26, 0.58),
      new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.65 })
    );
    passSeat.position.set(0, 0.85, 0.72);
    interiorGroup.add(passSeat);

    // Rear Passenger Backrest
    const passBack = new THREE.Mesh(
      new THREE.BoxGeometry(1.38, 0.48, 0.12),
      new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.65 })
    );
    passBack.position.set(0, 1.18, 0.98);
    interiorGroup.add(passBack);

    this.bodyGroup.add(interiorGroup);

    // ========================================================
    // 9. REAR CANVAS WALL, WINDOW & ENGINE HATCH (Image 1 & 2)
    // ========================================================
    const rearGroup = new THREE.Group();

    // Upper Charcoal Canvas Rear Wall
    const rearCanvasWall = new THREE.Mesh(
      new THREE.PlaneGeometry(1.52, 0.72),
      blackCanvasMat
    );
    rearCanvasWall.position.set(0, 1.62, 1.26);
    rearCanvasWall.rotation.y = Math.PI;
    rearGroup.add(rearCanvasWall);

    // Black Rubber Weatherstrip Window Frame (Image 1 & 2)
    const rearWinFrame = new THREE.Mesh(
      new THREE.BoxGeometry(1.18, 0.52, 0.04),
      rubberBezelMat
    );
    rearWinFrame.position.set(0, 1.62, 1.28);
    rearGroup.add(rearWinFrame);

    // Clear Tinted Rear Window Glass (Visible passenger interior from behind!)
    const rearWinGlass = new THREE.Mesh(
      new THREE.PlaneGeometry(1.10, 0.44),
      rearGlassMat
    );
    rearWinGlass.position.set(0, 1.62, 1.305);
    rearWinGlass.rotation.y = Math.PI;
    rearGroup.add(rearWinGlass);

    // Authentic Lower Green Metal Rear Engine Hatch (louvers, UTTARA, number plate - Image 1)
    const rearHatchMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1.52, 0.94),
      rearHatchMat
    );
    rearHatchMesh.position.set(0, 0.88, 1.33);
    rearHatchMesh.rotation.y = Math.PI;
    rearGroup.add(rearHatchMesh);

    // Combination Vertical Taillights (Red Brake + Amber Turn + White Reverse)
    [-0.64, 0.64].forEach((tx) => {
      // Housing Bezel
      const tBezel = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 0.28, 0.05),
        rubberBezelMat
      );
      tBezel.position.set(tx, 0.82, 1.35);
      rearGroup.add(tBezel);

      // Upper Red Brake Light Lens
      const redLens = new THREE.Mesh(
        new THREE.BoxGeometry(0.10, 0.12, 0.04),
        new THREE.MeshBasicMaterial({ color: 0xef4444 })
      );
      redLens.position.set(tx, 0.88, 1.37);
      rearGroup.add(redLens);
      this.brakeLights.push(redLens);

      // Lower Clear White / Amber Lens
      const whiteLens = new THREE.Mesh(
        new THREE.BoxGeometry(0.10, 0.08, 0.04),
        new THREE.MeshBasicMaterial({ color: 0xf8fafc })
      );
      whiteLens.position.set(tx, 0.76, 1.37);
      rearGroup.add(whiteLens);
    });

    this.bodyGroup.add(rearGroup);

    // ========================================================
    // 10. REAR CRASH GUARD BUMPER & MUDFLAPS (Image 1)
    // ========================================================
    const bumperGroup = new THREE.Group();

    // Main Green Tubular Bumper Crossbar
    const bBarGeo = new THREE.CylinderGeometry(0.035, 0.035, 1.65, 12);
    bBarGeo.rotateZ(Math.PI / 2);
    const bBar = new THREE.Mesh(bBarGeo, cngGreenMat);
    bBar.position.set(0, 0.38, 1.42);
    bumperGroup.add(bBar);

    // Curved Bumper Corners wrapping into wheel arches
    [-0.81, 0.81].forEach((bx) => {
      const cornerGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.24, 10);
      cornerGeo.rotateX(Math.PI / 2);
      const corner = new THREE.Mesh(cornerGeo, cngGreenMat);
      corner.position.set(bx, 0.38, 1.32);
      bumperGroup.add(corner);
    });

    // Central Yellow Diamond Wire Mesh Insert (from Image 1)
    const diamondMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.42, 0.12),
      new THREE.MeshStandardMaterial({ map: diamondTexture, roughness: 0.4 })
    );
    diamondMesh.position.set(0, 0.38, 1.46);
    diamondMesh.rotation.y = Math.PI;
    bumperGroup.add(diamondMesh);

    // Lower Chrome Step Under-Guard Bar
    const lowBarGeo = new THREE.CylinderGeometry(0.022, 0.022, 1.42, 10);
    lowBarGeo.rotateZ(Math.PI / 2);
    const lowBar = new THREE.Mesh(lowBarGeo, chromeMat);
    lowBar.position.set(0, 0.26, 1.41);
    bumperGroup.add(lowBar);

    // Black Rubber Mudflaps behind rear wheels
    [-0.64, 0.64].forEach((mx) => {
      const flap = new THREE.Mesh(
        new THREE.BoxGeometry(0.24, 0.18, 0.02),
        tireRubberMat
      );
      flap.position.set(mx, 0.22, 1.34);
      bumperGroup.add(flap);
    });

    this.bodyGroup.add(bumperGroup);

    // ========================================================
    // 11. 3-WHEELER SYSTEM (1 Front Centered, 2 Rear)
    // ========================================================

    // A. Front Wheel (radius 0.30m, z = -1.35m)
    this.frontWheel = this.createCNGWheel(0.30, tireRubberMat, rimMat);
    this.frontWheel.position.set(0, 0.30, -1.35);
    this.bodyGroup.add(this.frontWheel);
    this.wheels.push(this.frontWheel);

    // Front Curved Green Mudguard / Fender (covering top half of wheel)
    const fMudGeo = new THREE.CylinderGeometry(0.36, 0.36, 0.22, 16, 1, true, 0, Math.PI);
    fMudGeo.rotateZ(Math.PI / 2);
    const fMud = new THREE.Mesh(fMudGeo, cngGreenMat);
    fMud.position.set(0, 0.34, -1.35);
    this.bodyGroup.add(fMud);

    // Chrome Steering Fork Column
    const forkGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.52, 8);
    const fork = new THREE.Mesh(forkGeo, chromeMat);
    fork.position.set(0, 0.62, -1.35);
    this.bodyGroup.add(fork);

    // B. Rear Wheels (radius 0.33m, x = ±0.70m, z = 0.82m)
    [-0.70, 0.70].forEach((rx) => {
      const rw = this.createCNGWheel(0.33, tireRubberMat, rimMat);
      rw.position.set(rx, 0.33, 0.82);
      this.bodyGroup.add(rw);
      this.wheels.push(rw);

      // Green curved rear wheel arch
      const rArchGeo = new THREE.CylinderGeometry(0.39, 0.39, 0.24, 16, 1, true, 0, Math.PI);
      rArchGeo.rotateZ(Math.PI / 2);
      const rArch = new THREE.Mesh(rArchGeo, cngDarkGreenMat);
      rArch.position.set(rx, 0.36, 0.82);
      this.bodyGroup.add(rArch);
    });

    // ========================================================
    // 12. BOOST JET FLAMES (Under rear bumper)
    // ========================================================
    [-0.32, 0.32].forEach((bx) => {
      const flameGeo = new THREE.ConeGeometry(0.12, 0.75, 8);
      flameGeo.rotateX(-Math.PI / 2);
      const flameMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0
      });
      const flame = new THREE.Mesh(flameGeo, flameMat);
      flame.position.set(bx, 0.40, 1.46);
      this.bodyGroup.add(flame);
      this.exhaustFires.push(flame);
    });
  }

  // Helper: Detailed Auto-Rickshaw Wheel (Black rubber tire with silver hub)
  createCNGWheel(radius, tireMat, rimMat) {
    const wheelGroup = new THREE.Group();

    // Outer Tire
    const tireGeo = new THREE.CylinderGeometry(radius, radius, 0.20, 20);
    tireGeo.rotateZ(Math.PI / 2);
    const tire = new THREE.Mesh(tireGeo, tireMat);
    wheelGroup.add(tire);

    // Silver Steel Rim
    const rimGeo = new THREE.CylinderGeometry(radius * 0.65, radius * 0.65, 0.21, 16);
    rimGeo.rotateZ(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, rimMat);
    wheelGroup.add(rim);

    // Center Black Hub & Lug Nuts
    const hubGeo = new THREE.CylinderGeometry(radius * 0.28, radius * 0.28, 0.22, 10);
    hubGeo.rotateZ(Math.PI / 2);
    const hub = new THREE.Mesh(
      hubGeo,
      new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.6 })
    );
    wheelGroup.add(hub);

    // Chrome Center Axle Nut
    const nutGeo = new THREE.CylinderGeometry(radius * 0.12, radius * 0.12, 0.23, 8);
    nutGeo.rotateZ(Math.PI / 2);
    const nut = new THREE.Mesh(
      nutGeo,
      new THREE.MeshStandardMaterial({ color: 0xf1f5f9, metalness: 0.9 })
    );
    wheelGroup.add(nut);

    return wheelGroup;
  }

  // Update CNG movement, agile 3-wheeler banking, wheel rotation & VFX
  update(speedKmh, currentLaneX, targetLaneX, isBraking, isBoosting, delta) {
    const forwardMs = (speedKmh * 1000) / 3600;

    // 1. Wheel Rotation (Negative for forward movement down -Z)
    const wheelRotDelta = (forwardMs / 0.30) * delta;
    this.wheelRotation -= wheelRotDelta;
    this.wheels.forEach((w) => {
      w.rotation.x = this.wheelRotation;
    });

    // 2. Agile 3-Wheeler Banking Roll on lane steering
    const laneOffset = targetLaneX - currentLaneX;
    const targetRoll = -laneOffset * 0.15;
    this.currentRoll += (targetRoll - this.currentRoll) * Math.min(1.0, delta * 8.5);
    this.bodyGroup.rotation.z = this.currentRoll;

    // 3. Chassis Yaw turning angle
    const targetYaw = -laneOffset * 0.10;
    this.currentYaw += (targetYaw - this.currentYaw) * Math.min(1.0, delta * 7.5);
    this.bodyGroup.rotation.y = this.currentYaw;

    // 4. Pitch dynamics (nose dips on brake, raises on boost acceleration)
    let targetPitch = 0;
    if (isBraking) {
      targetPitch = 0.05;
    } else if (isBoosting) {
      targetPitch = -0.045;
    }
    this.currentPitch += (targetPitch - this.currentPitch) * Math.min(1.0, delta * 8.0);
    this.bodyGroup.rotation.x = this.currentPitch;

    // 5. Brake Lights Illumination
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
    center.y += 0.95;
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
