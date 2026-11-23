// ==========================================
// SUPRA RUSH - AUTHENTIC RURAL BANGLADESH 3D PROPS
// ==========================================

import * as THREE from 'three';
import { isMobileDevice } from '../config.js';

export class BangladeshProps {
  constructor() {
    this.isMobile = isMobileDevice();
    this.initMaterials();
    this.animatedAnimals = []; // Cows, ducks, goats for frame updates
    this.smokeEmitters = [];    // Tea stall smoke
    this.policeStrobes = [];    // Police checkpost flashing emergency strobes
  }

  // Optimize mobile GPUs by disabling dynamic shadow passes on roadside background props
  applyShadow(mesh) {
    if (!this.isMobile) {
      mesh.castShadow = true;
    }
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

    // 6. Authentic Bangladeshi River Bridge Materials (User Photos)
    this.bridgeRedMat = new THREE.MeshStandardMaterial({
      color: 0xdc2626, // Vibrant red for vertical posts, piers & side girders
      roughness: 0.55
    });

    this.bridgeWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc, // Clean off-white for horizontal concrete rails & caps
      roughness: 0.5
    });

    // 45-degree diagonal red-and-white hazard striped curb texture
    const curbCanvas = document.createElement('canvas');
    curbCanvas.width = 256;
    curbCanvas.height = 128;
    const cCtx = curbCanvas.getContext('2d');
    cCtx.fillStyle = '#ffffff';
    cCtx.fillRect(0, 0, 256, 128);
    cCtx.fillStyle = '#dc2626';
    const stripeW = 32;
    for (let x = -128; x < 384; x += stripeW * 2) {
      cCtx.beginPath();
      cCtx.moveTo(x, 0);
      cCtx.lineTo(x + stripeW, 0);
      cCtx.lineTo(x + stripeW - 128, 128);
      cCtx.lineTo(x - 128, 128);
      cCtx.closePath();
      cCtx.fill();
    }
    const curbTex = new THREE.CanvasTexture(curbCanvas);
    curbTex.wrapS = THREE.RepeatWrapping;
    curbTex.wrapT = THREE.RepeatWrapping;
    curbTex.repeat.set(24, 1);

    this.bridgeCurbMat = new THREE.MeshStandardMaterial({
      map: curbTex,
      roughness: 0.6
    });

    // Galvanized utility pipeline running along bridge railing
    this.pipelineMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.8,
      roughness: 0.25
    });

    // Deep tranquil river water (Nodi)
    this.riverWaterMat = new THREE.MeshStandardMaterial({
      color: 0x155e75,
      roughness: 0.12,
      metalness: 0.35,
      transparent: true,
      opacity: 0.92
    });

    // Striped Guide Post / Bollard Material (Photo 2)
    const bollardCanvas = document.createElement('canvas');
    bollardCanvas.width = 64;
    bollardCanvas.height = 128;
    const bCtx = bollardCanvas.getContext('2d');
    bCtx.fillStyle = '#dc2626'; // Red
    bCtx.fillRect(0, 0, 64, 128);
    bCtx.fillStyle = '#ffffff'; // White stripes
    bCtx.fillRect(0, 24, 64, 30);
    bCtx.fillRect(0, 78, 64, 30);
    const bollardTex = new THREE.CanvasTexture(bollardCanvas);
    this.bollardMat = new THREE.MeshStandardMaterial({
      map: bollardTex,
      roughness: 0.5
    });

    // 7. Authentic Cultural Open-Air Amphitheater Stage & Park Materials (User Reference Photo)
    const blueTinCanvas = document.createElement('canvas');
    blueTinCanvas.width = 128;
    blueTinCanvas.height = 128;
    const btCtx = blueTinCanvas.getContext('2d');
    btCtx.fillStyle = '#1e40af';
    btCtx.fillRect(0, 0, 128, 128);
    for (let x = 0; x < 128; x += 8) {
      btCtx.fillStyle = '#1d4ed8';
      btCtx.fillRect(x, 0, 4, 128);
      btCtx.fillStyle = '#3b82f6';
      btCtx.fillRect(x + 4, 0, 4, 128);
    }
    const blueTinTex = new THREE.CanvasTexture(blueTinCanvas);
    blueTinTex.wrapS = THREE.RepeatWrapping;
    blueTinTex.wrapT = THREE.RepeatWrapping;
    blueTinTex.repeat.set(6, 2);

    this.stageBlueRoofMat = new THREE.MeshStandardMaterial({
      map: blueTinTex,
      metalness: 0.4,
      roughness: 0.45,
      color: 0x1d4ed8,
      side: THREE.DoubleSide
    });

    this.stageTrussMat = new THREE.MeshStandardMaterial({
      color: 0x334155, // Dark slate steel tubular truss
      metalness: 0.75,
      roughness: 0.35
    });

    this.stageBaseYellowMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15, // Warm golden yellow stage base (Image)
      roughness: 0.65
    });

    this.stageBorderBlueMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7, // Sky blue border trim & railings (Image)
      roughness: 0.45
    });

    this.stageFloorMat = new THREE.MeshStandardMaterial({
      color: 0x9ca3af, // Smooth concrete stage floor
      roughness: 0.7
    });

    this.stageTerracottaMat = new THREE.MeshStandardMaterial({
      color: 0xc2410c, // Warm terracotta sculpted folk art backdrop
      roughness: 0.85
    });

    this.stageGoldEmblemMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24, // Golden crest & cultural emblem
      metalness: 0.65,
      roughness: 0.25
    });

    this.hillGreenMat = new THREE.MeshStandardMaterial({
      color: 0x2e7d32, // Lush tropical hill slope
      roughness: 0.92,
      flatShading: true
    });

    this.hillDarkGreenMat = new THREE.MeshStandardMaterial({
      color: 0x14532d, // Background rolling ridge
      roughness: 0.95,
      flatShading: true
    });

    this.pavingPlazaMat = new THREE.MeshStandardMaterial({
      color: 0xd6d3d1, // Paved sand / courtyard tiles
      roughness: 0.9
    });

    // 8. Authentic UIU Permanent Campus Materials (United International University - 1024x1024 HD Textures)
    // A. Multi-Story Concrete Window Grid Facade Texture with White Sunshades
    const uiuGridCanvas = document.createElement('canvas');
    uiuGridCanvas.width = 1024;
    uiuGridCanvas.height = 1024;
    const uCtx = uiuGridCanvas.getContext('2d');
    // Warm architectural stone grey concrete frame (Exact photo color!)
    uCtx.fillStyle = '#8c867e';
    uCtx.fillRect(0, 0, 1024, 1024);

    const floors = 10;
    const bays = 8;
    const floorH = 1024 / floors;
    const bayW = 1024 / bays;
    for (let f = 0; f < floors; f++) {
      for (let b = 0; b < bays; b++) {
        const wx = b * bayW + 12;
        const wy = f * floorH + 18;
        const ww = bayW - 24;
        const wh = floorH - 26;

        // Dark reflective tinted glass window bay
        uCtx.fillStyle = '#0f172a';
        uCtx.fillRect(wx, wy, ww, wh);

        // Sky reflection gradient
        const wGrad = uCtx.createLinearGradient(wx, wy, wx, wy + wh);
        wGrad.addColorStop(0, '#38bdf8');
        wGrad.addColorStop(0.35, '#1e293b');
        wGrad.addColorStop(1, '#090d16');
        uCtx.fillStyle = wGrad;
        uCtx.fillRect(wx + 3, wy + 6, ww - 6, wh - 9);

        // Vertical and horizontal window mullions
        uCtx.strokeStyle = 'rgba(226, 232, 240, 0.45)';
        uCtx.lineWidth = 2.0;
        uCtx.beginPath();
        uCtx.moveTo(wx + ww * 0.5, wy + 6);
        uCtx.lineTo(wx + ww * 0.5, wy + wh - 3);
        uCtx.moveTo(wx + 3, wy + wh * 0.5);
        uCtx.lineTo(wx + ww - 3, wy + wh * 0.5);
        uCtx.stroke();

        // Horizontal white sunshades / louvers / chajja above window (signature UIU photo detail!)
        uCtx.fillStyle = '#ffffff';
        uCtx.fillRect(wx - 4, wy - 5, ww + 8, 8);
        uCtx.fillStyle = 'rgba(0, 0, 0, 0.35)';
        uCtx.fillRect(wx - 4, wy + 3, ww + 8, 3);
      }
    }
    const uiuGridTex = new THREE.CanvasTexture(uiuGridCanvas);
    uiuGridTex.wrapS = THREE.RepeatWrapping;
    uiuGridTex.wrapT = THREE.RepeatWrapping;
    uiuGridTex.repeat.set(2, 4);

    this.uiuFacadeMat = new THREE.MeshStandardMaterial({
      map: uiuGridTex,
      metalness: 0.25,
      roughness: 0.55
    });

    // B. Iconic UIU Logo Tower Top Facade Texture (Photo: Glowing Neon Red-Orange "UIU" Logo - 1024x1024 HD!)
    const uiuLogoCanvas = document.createElement('canvas');
    uiuLogoCanvas.width = 1024;
    uiuLogoCanvas.height = 1024;
    const lCtx = uiuLogoCanvas.getContext('2d');
    lCtx.drawImage(uiuGridCanvas, 0, 0);

    // Upper facade architectural fascia area for the glowing red-orange UIU logo (Exact match from photo!)
    lCtx.fillStyle = '#141416';
    lCtx.fillRect(40, 30, 944, 320);

    // Architectural stone frame border
    lCtx.strokeStyle = '#8c867e';
    lCtx.lineWidth = 12;
    lCtx.strokeRect(36, 24, 952, 332);

    // Glowing Neon Red-Orange "UIU" Logo (Double-tube neon effect as seen in photo)
    lCtx.font = '900 240px "Montserrat", sans-serif';
    lCtx.textAlign = 'center';
    lCtx.textBaseline = 'middle';

    // Deep outer neon crimson aura
    lCtx.shadowColor = '#ef4444';
    lCtx.shadowBlur = 48;
    lCtx.strokeStyle = 'rgba(239, 68, 68, 0.95)';
    lCtx.lineWidth = 44;
    lCtx.lineCap = 'round';
    lCtx.lineJoin = 'round';
    lCtx.strokeText('UIU', 512, 190);

    // Main vibrant neon scarlet-red stroke
    lCtx.strokeStyle = '#dc2626';
    lCtx.lineWidth = 26;
    lCtx.strokeText('UIU', 512, 190);

    // Hot neon orange-red inner stroke
    lCtx.strokeStyle = '#f97316';
    lCtx.lineWidth = 14;
    lCtx.strokeText('UIU', 512, 190);

    // Inner bright white-hot core
    lCtx.shadowBlur = 0;
    lCtx.fillStyle = '#fff1f2';
    lCtx.fillText('UIU', 512, 190);

    const uiuLogoTex = new THREE.CanvasTexture(uiuLogoCanvas);
    this.uiuLogoMat = new THREE.MeshStandardMaterial({
      map: uiuLogoTex,
      metalness: 0.2,
      roughness: 0.35,
      emissive: 0xdc2626,
      emissiveIntensity: 0.9
    });

    // C. Central Glass Atrium Facade (1024x1024 HD Dark Reflective Glass Curtain Wall)
    const atriumCanvas = document.createElement('canvas');
    atriumCanvas.width = 1024;
    atriumCanvas.height = 1024;
    const aCtx = atriumCanvas.getContext('2d');
    // Dark reflective glass curtain wall
    aCtx.fillStyle = '#090d16';
    aCtx.fillRect(0, 0, 1024, 1024);

    // Subtle sky reflection across atrium glass
    const aGrad = aCtx.createLinearGradient(0, 0, 0, 1024);
    aGrad.addColorStop(0, '#1e293b');
    aGrad.addColorStop(0.3, '#0f172a');
    aGrad.addColorStop(1, '#020617');
    aCtx.fillStyle = aGrad;
    aCtx.fillRect(0, 0, 1024, 1024);

    // Fine glass panel grid
    for (let y = 0; y < 1024; y += 64) {
      aCtx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
      aCtx.lineWidth = 2.0;
      aCtx.beginPath();
      aCtx.moveTo(0, y);
      aCtx.lineTo(1024, y);
      aCtx.stroke();
    }
    for (let x = 0; x < 1024; x += 64) {
      aCtx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
      aCtx.lineWidth = 2.0;
      aCtx.beginPath();
      aCtx.moveTo(x, 0);
      aCtx.lineTo(x, 1024);
      aCtx.stroke();
    }

    // MASSIVE STRUCTURAL STEEL DIAGONAL X-BRACING (UIU Photo signature feature!)
    aCtx.strokeStyle = '#cbd5e1';
    aCtx.lineWidth = 14;
    aCtx.lineCap = 'square';
    const xSegments = 4;
    const segH = 1024 / xSegments;
    for (let s = 0; s < xSegments; s++) {
      const topY = s * segH;
      const botY = (s + 1) * segH;

      // Diagonal 1
      aCtx.beginPath();
      aCtx.moveTo(32, topY);
      aCtx.lineTo(992, botY);
      aCtx.stroke();

      // Diagonal 2
      aCtx.beginPath();
      aCtx.moveTo(992, topY);
      aCtx.lineTo(32, botY);
      aCtx.stroke();

      // Horizontal floor tie beam
      aCtx.lineWidth = 18;
      aCtx.strokeStyle = '#94a3b8';
      aCtx.beginPath();
      aCtx.moveTo(0, botY);
      aCtx.lineTo(1024, botY);
      aCtx.stroke();
      aCtx.lineWidth = 14;
      aCtx.strokeStyle = '#cbd5e1';
    }
    const atriumTex = new THREE.CanvasTexture(atriumCanvas);
    this.uiuAtriumMat = new THREE.MeshStandardMaterial({
      map: atriumTex,
      metalness: 0.6,
      roughness: 0.25
    });

    // D. Terracotta Brick Red Flanks & Pillars (Photo!)
    this.uiuBrickFlankMat = new THREE.MeshStandardMaterial({
      color: 0xb45309,
      roughness: 0.8
    });

    // E. Rooftop Gardens Green Vegetation (Photo!)
    this.uiuRoofGardenMat = new THREE.MeshStandardMaterial({
      color: 0x15803d,
      roughness: 0.9
    });

    // F. Sideline Spectator Marquee Tents (সাদা তাঁবু / শামিয়ানা - Photo!)
    this.uiuTentMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.45
    });

    // G. Campus Entrance Arch Sign Plate
    const gateSignCanvas = document.createElement('canvas');
    gateSignCanvas.width = 512;
    gateSignCanvas.height = 128;
    const gsCtx = gateSignCanvas.getContext('2d');
    gsCtx.fillStyle = '#0f172a';
    gsCtx.fillRect(0, 0, 512, 128);
    gsCtx.strokeStyle = '#f59e0b';
    gsCtx.lineWidth = 6;
    gsCtx.strokeRect(8, 8, 496, 112);
    gsCtx.fillStyle = '#ef4444';
    gsCtx.font = '900 48px sans-serif';
    gsCtx.textAlign = 'center';
    gsCtx.textBaseline = 'middle';
    gsCtx.fillText('UIU', 256, 42);
    gsCtx.fillStyle = '#ffffff';
    gsCtx.font = 'bold 18px sans-serif';
    gsCtx.fillText('UNITED INTERNATIONAL UNIVERSITY', 256, 90);
    const gateSignTex = new THREE.CanvasTexture(gateSignCanvas);
    this.uiuGateSignMat = new THREE.MeshStandardMaterial({
      map: gateSignTex,
      roughness: 0.4
    });

    // H. Campus Football Ground / Green Lawn (রেক্টেঙ্গুলার চারকোনা মাঠ, গোল করা সার্কেল টাইপের)
    const lawnCanvas = document.createElement('canvas');
    lawnCanvas.width = 1024;
    lawnCanvas.height = 1024;
    const lwCtx = lawnCanvas.getContext('2d');
    // Base lush grass
    lwCtx.fillStyle = '#15803d';
    lwCtx.fillRect(0, 0, 1024, 1024);

    // Alternating mowed stripes (Lime green and deep emerald green from aerial photo!)
    lwCtx.fillStyle = '#65a30d';
    for (let y = 0; y < 1024; y += 80) {
      lwCtx.fillRect(0, y, 1024, 40);
    }

    // Outer pitch boundary line (Crisp white)
    lwCtx.strokeStyle = '#ffffff';
    lwCtx.lineWidth = 12;
    lwCtx.strokeRect(48, 40, 928, 944);

    // Halfway dividing line
    lwCtx.beginPath();
    lwCtx.moveTo(48, 512);
    lwCtx.lineTo(976, 512);
    lwCtx.stroke();

    // PROMINENT BOLD WHITE CENTER CIRCLE (User: একদম গোল করা সার্কেল টাইপের)
    lwCtx.beginPath();
    lwCtx.arc(512, 512, 136, 0, Math.PI * 2);
    lwCtx.stroke();

    // Center kickoff spot
    lwCtx.fillStyle = '#ffffff';
    lwCtx.beginPath();
    lwCtx.arc(512, 512, 16, 0, Math.PI * 2);
    lwCtx.fill();

    // Penalty Areas (North & South - 18-yard boxes)
    lwCtx.strokeRect(292, 40, 440, 184);
    lwCtx.strokeRect(292, 800, 440, 184);

    // Goal Areas (6-yard boxes)
    lwCtx.strokeRect(392, 40, 240, 76);
    lwCtx.strokeRect(392, 908, 240, 76);

    // Penalty Arcs
    lwCtx.beginPath();
    lwCtx.arc(512, 170, 72, 0, Math.PI);
    lwCtx.stroke();
    lwCtx.beginPath();
    lwCtx.arc(512, 854, 72, Math.PI, 0);
    lwCtx.stroke();

    // Corner Arcs
    const rCorner = 32;
    lwCtx.beginPath();
    lwCtx.arc(48, 40, rCorner, 0, Math.PI * 0.5);
    lwCtx.stroke();
    lwCtx.beginPath();
    lwCtx.arc(976, 40, rCorner, Math.PI * 0.5, Math.PI);
    lwCtx.stroke();
    lwCtx.beginPath();
    lwCtx.arc(48, 984, rCorner, Math.PI * 1.5, Math.PI * 2);
    lwCtx.stroke();
    lwCtx.beginPath();
    lwCtx.arc(976, 984, rCorner, Math.PI, Math.PI * 1.5);
    lwCtx.stroke();

    const lawnTex = new THREE.CanvasTexture(lawnCanvas);
    lawnTex.anisotropy = 4;
    this.uiuLawnMat = new THREE.MeshStandardMaterial({
      map: lawnTex,
      roughness: 0.85
    });

    this.uiuConcreteMat = new THREE.MeshStandardMaterial({
      color: 0x8c867e,
      roughness: 0.7
    });

    this.uiuGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.8,
      roughness: 0.15
    });

    this.goalPostMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.4
    });

    // 9. OVERHEAD HIGHWAY SIGN GANTRY (User Photo 1: টাঙ্গাইল ৯৮ কিমি, ইউআইইউ ১ কিমি, বিয়ে ∞)
    // Deep dark expressway green with bright luminous white & yellow Bengali typography
    const gantryCanvas = document.createElement('canvas');
    gantryCanvas.width = 2048;
    gantryCanvas.height = 512;
    const gCtx = gantryCanvas.getContext('2d');

    // Deep, rich dark expressway green (Exact photo match!)
    gCtx.fillStyle = '#023c27';
    gCtx.fillRect(0, 0, 2048, 512);

    // Three Destination Panels in Bengali
    const panels = [
      { exit: 'প্রস্থান ০১', bng: 'টাঙ্গাইল', dist: '৯৮ কিমি', x: 36, w: 620 },
      { exit: 'প্রস্থান ০২', bng: 'ইউআইইউ', dist: '১ কিমি', x: 714, w: 620 },
      { exit: 'প্রস্থান ∞', bng: 'বিয়ে', dist: '∞ কিমি', x: 1392, w: 620 }
    ];

    panels.forEach((p) => {
      // Outer Clean White Border
      gCtx.strokeStyle = '#ffffff';
      gCtx.lineWidth = 8;
      gCtx.strokeRect(p.x, 24, p.w, 464);

      // Header Box for Exit code
      gCtx.fillStyle = '#045438';
      gCtx.fillRect(p.x + 8, 32, p.w - 16, 84);
      gCtx.strokeStyle = '#ffffff';
      gCtx.lineWidth = 4;
      gCtx.strokeRect(p.x + 8, 32, p.w - 16, 84);

      gCtx.fillStyle = '#ffffff';
      gCtx.font = 'bold 36px "Montserrat", sans-serif';
      gCtx.textAlign = 'center';
      gCtx.textBaseline = 'middle';
      gCtx.fillText(p.exit, p.x + p.w * 0.5, 74);

      // Inner Decorative Thin Border
      gCtx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      gCtx.lineWidth = 3;
      gCtx.strokeRect(p.x + 16, 128, p.w - 32, 350);

      // Upward Lane Arrow (↑) on left
      const ax = p.x + 80;
      gCtx.fillStyle = '#ffffff';
      gCtx.beginPath();
      gCtx.moveTo(ax, 200);
      gCtx.lineTo(ax - 36, 255);
      gCtx.lineTo(ax - 16, 255);
      gCtx.lineTo(ax - 16, 400);
      gCtx.lineTo(ax + 16, 400);
      gCtx.lineTo(ax + 16, 255);
      gCtx.lineTo(ax + 36, 255);
      gCtx.closePath();
      gCtx.fill();

      // Destination Name (Bengali, Large, Pure White, Luminous & Bold)
      gCtx.textAlign = 'left';
      gCtx.fillStyle = '#ffffff';
      gCtx.font = '900 76px "Montserrat", sans-serif';
      gCtx.shadowColor = 'rgba(255, 255, 255, 0.4)';
      gCtx.shadowBlur = 8;
      gCtx.fillText(p.bng, p.x + 150, 248);
      gCtx.shadowBlur = 0;

      // Distance (Luminous Bright Yellow, Very Clear & Legible)
      gCtx.fillStyle = '#fde047';
      gCtx.font = 'bold 58px "Montserrat", sans-serif';
      gCtx.shadowColor = 'rgba(253, 224, 71, 0.35)';
      gCtx.shadowBlur = 6;
      gCtx.fillText(p.dist, p.x + 150, 360);
      gCtx.shadowBlur = 0;
    });

    const gantryTex = new THREE.CanvasTexture(gantryCanvas);
    this.highwayGantrySignMat = new THREE.MeshStandardMaterial({
      map: gantryTex,
      roughness: 0.25,
      emissive: 0x032818,
      emissiveIntensity: 0.4
    });

    // Pylon Base Red & White Hazard Stripes
    const hazardCanvas = document.createElement('canvas');
    hazardCanvas.width = 128;
    hazardCanvas.height = 128;
    const hzCtx = hazardCanvas.getContext('2d');
    hzCtx.fillStyle = '#dc2626'; // Red
    hzCtx.fillRect(0, 0, 128, 128);
    hzCtx.fillStyle = '#ffffff'; // White 45-deg stripes
    for (let x = -128; x < 256; x += 32) {
      hzCtx.beginPath();
      hzCtx.moveTo(x, 0);
      hzCtx.lineTo(x + 16, 0);
      hzCtx.lineTo(x + 16 - 128, 128);
      hzCtx.lineTo(x - 128, 128);
      hzCtx.closePath();
      hzCtx.fill();
    }
    const hazardTex = new THREE.CanvasTexture(hazardCanvas);
    hazardTex.wrapS = THREE.RepeatWrapping;
    hazardTex.wrapT = THREE.RepeatWrapping;
    hazardTex.repeat.set(2, 3);
    this.gantryHazardMat = new THREE.MeshStandardMaterial({
      map: hazardTex,
      roughness: 0.5
    });

    // 10. AUTHENTIC PUTHIA SHIVA TEMPLE (User Reference Photo 2 - ৫-রত্ন শিব মন্দির)
    const templeCanvas = document.createElement('canvas');
    templeCanvas.width = 512;
    templeCanvas.height = 512;
    const tCtx = templeCanvas.getContext('2d');
    // Aged creamy whitewash plaster with terracotta undertone
    tCtx.fillStyle = '#f1f5f9';
    tCtx.fillRect(0, 0, 512, 512);

    // Weathered brick layers peeking through
    tCtx.fillStyle = 'rgba(180, 83, 9, 0.15)';
    for (let y = 0; y < 512; y += 16) {
      tCtx.fillRect(0, y, 512, 4);
    }

    // Bengal Terracotta Cusped Arches & Floral Panels
    tCtx.strokeStyle = '#64748b';
    tCtx.lineWidth = 4;
    for (let x = 64; x < 512; x += 128) {
      // Arched niche
      tCtx.beginPath();
      tCtx.moveTo(x - 44, 460);
      tCtx.lineTo(x - 44, 280);
      tCtx.arc(x, 280, 44, Math.PI, 0, false);
      tCtx.lineTo(x + 44, 460);
      tCtx.stroke();

      // Inner cusped arch
      tCtx.fillStyle = '#1e293b';
      tCtx.beginPath();
      tCtx.moveTo(x - 36, 460);
      tCtx.lineTo(x - 36, 290);
      tCtx.arc(x, 290, 36, Math.PI, 0, false);
      tCtx.lineTo(x + 36, 460);
      tCtx.fill();

      // Terracotta floral spandrel
      tCtx.fillStyle = '#b45309';
      tCtx.beginPath();
      tCtx.arc(x, 235, 14, 0, Math.PI * 2);
      tCtx.fill();
    }

    // Upper decorative cornice frieze
    tCtx.fillStyle = '#cbd5e1';
    tCtx.fillRect(0, 60, 512, 28);
    tCtx.fillStyle = '#94a3b8';
    for (let x = 0; x < 512; x += 24) {
      tCtx.fillRect(x, 64, 12, 20);
    }
    const templeTex = new THREE.CanvasTexture(templeCanvas);
    templeTex.wrapS = THREE.RepeatWrapping;
    templeTex.wrapT = THREE.RepeatWrapping;
    this.templeWallMat = new THREE.MeshStandardMaterial({
      map: templeTex,
      roughness: 0.82
    });

    // Tiered beehive corbelled shikhara texture
    const shikharaCanvas = document.createElement('canvas');
    shikharaCanvas.width = 256;
    shikharaCanvas.height = 512;
    const sCtx = shikharaCanvas.getContext('2d');
    sCtx.fillStyle = '#e2e8f0';
    sCtx.fillRect(0, 0, 256, 512);

    // Corbelled tiers of miniature cornices / amalaka ridges
    for (let y = 0; y < 512; y += 14) {
      sCtx.fillStyle = y % 28 === 0 ? '#475569' : '#94a3b8';
      sCtx.fillRect(0, y, 256, 4);
      sCtx.fillStyle = 'rgba(180, 83, 9, 0.2)';
      sCtx.fillRect(0, y + 4, 256, 4);
    }
    const shikharaTex = new THREE.CanvasTexture(shikharaCanvas);
    shikharaTex.wrapT = THREE.RepeatWrapping;
    shikharaTex.repeat.set(1, 4);
    this.templeShikharaMat = new THREE.MeshStandardMaterial({
      map: shikharaTex,
      roughness: 0.88
    });

    // Marigold Flower Garlands (গাঁদা ফুলের মালা - User Photo Decor!)
    this.marigoldOrangeMat = new THREE.MeshStandardMaterial({
      color: 0xea580c,
      roughness: 0.65
    });
    this.marigoldYellowMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      roughness: 0.65
    });

    // Temple Brass / Gold Kalasa Finial
    this.templeBrassMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.85,
      roughness: 0.25
    });

    this.templePlinthMat = new THREE.MeshStandardMaterial({
      color: 0xd6d3d1,
      roughness: 0.9
    });

    this.skinMat = new THREE.MeshStandardMaterial({ color: 0xf5c396, roughness: 0.65 });
    this.hairMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.45 });
    this.panjabiMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.7 });
    this.lungiPlaidMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.8 });
    this.shirtTealMat = new THREE.MeshStandardMaterial({ color: 0x0d9488, roughness: 0.7 });
    this.shirtRedMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.7 });

    // ========================================================
    // Authentic Bangladesh Police Checkpost & Highway Materials
    // ========================================================
    this.policePantsMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // Bangladesh Police dark navy blue
      roughness: 0.8
    });

    this.policeVestMat = new THREE.MeshStandardMaterial({
      color: 0x84cc16, // High-visibility fluorescent neon lime patrol vest
      roughness: 0.45
    });

    this.policeShirtMat = new THREE.MeshStandardMaterial({
      color: 0x475569, // BD Police steel blue duty shirt
      roughness: 0.7
    });

    this.policeSilverMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9, // Retro-reflective silver strips
      roughness: 0.2
    });

    this.policeCapMat = new THREE.MeshStandardMaterial({
      color: 0x090d16, // Navy blue peak cap
      roughness: 0.5
    });

    this.goldBadgeMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b, // Gold cap badge & buckle
      metalness: 0.85,
      roughness: 0.2
    });

    this.gunMetalMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b, // Gunmetal dark blued steel
      metalness: 0.85,
      roughness: 0.25
    });

    this.gunWoodMat = new THREE.MeshStandardMaterial({
      color: 0x78350f, // Walnut wooden rifle furniture
      roughness: 0.6
    });

    this.strobeRedMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xff0000,
      emissiveIntensity: 2.2,
      roughness: 0.2
    });

    this.strobeBlueMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      emissive: 0x0066ff,
      emissiveIntensity: 2.2,
      roughness: 0.2
    });

    // Signboard: "পুলিশ চেকপোস্ট" (POLICE CHECK POST)
    const policeSignCanvas = document.createElement('canvas');
    policeSignCanvas.width = 512;
    policeSignCanvas.height = 320;
    const psCtx = policeSignCanvas.getContext('2d');
    psCtx.fillStyle = '#0b192c';
    psCtx.fillRect(0, 0, 512, 320);

    // Thick retro-reflective yellow hazard border
    psCtx.strokeStyle = '#f59e0b';
    psCtx.lineWidth = 14;
    psCtx.strokeRect(10, 10, 492, 300);

    // Inner fine white accent line
    psCtx.strokeStyle = '#ffffff';
    psCtx.lineWidth = 3;
    psCtx.strokeRect(22, 22, 468, 276);

    // Top sub-banner
    psCtx.fillStyle = '#1e3a8a';
    psCtx.fillRect(26, 26, 460, 56);

    // Top header text
    psCtx.fillStyle = '#f59e0b';
    psCtx.font = 'bold 24px sans-serif';
    psCtx.textAlign = 'center';
    psCtx.textBaseline = 'middle';
    psCtx.fillText('★ বাংলাদেশ পুলিশ ★', 256, 54);

    // Center MAIN TEXT (পুলিশ চেকপোস্ট)
    psCtx.fillStyle = '#ffffff';
    psCtx.font = '900 52px sans-serif';
    psCtx.fillText('পুলিশ চেকপোস্ট', 256, 146);

    // Subtitle in English
    psCtx.fillStyle = '#38bdf8';
    psCtx.font = 'bold 22px sans-serif';
    psCtx.fillText('POLICE CHECK POST', 256, 202);

    // Bottom warning stripe
    psCtx.fillStyle = '#dc2626';
    psCtx.fillRect(26, 235, 460, 58);
    psCtx.fillStyle = '#ffffff';
    psCtx.font = '900 24px sans-serif';
    psCtx.fillText('গতি কমান • SLOW DOWN', 256, 264);

    const policeSignTex = new THREE.CanvasTexture(policeSignCanvas);
    policeSignTex.anisotropy = 4;
    this.policeSignMat = new THREE.MeshStandardMaterial({
      map: policeSignTex,
      roughness: 0.35
    });

    // Authentic Bangladesh Police Box Signboard ("পুলিশ বক্স • POLICE BOX")
    const pboxCanvas = document.createElement('canvas');
    pboxCanvas.width = 512;
    pboxCanvas.height = 192;
    const pboxCtx = pboxCanvas.getContext('2d');
    pboxCtx.fillStyle = '#0b192c'; // Bangladesh Police deep navy
    pboxCtx.fillRect(0, 0, 512, 192);

    pboxCtx.strokeStyle = '#f59e0b';
    pboxCtx.lineWidth = 10;
    pboxCtx.strokeRect(6, 6, 500, 180);

    pboxCtx.fillStyle = '#fde047';
    pboxCtx.font = 'bold 20px sans-serif';
    pboxCtx.textAlign = 'center';
    pboxCtx.textBaseline = 'middle';
    pboxCtx.fillText('★ বাংলাদেশ পুলিশ ★', 256, 36);

    pboxCtx.fillStyle = '#ffffff';
    pboxCtx.font = '900 48px sans-serif';
    pboxCtx.fillText('পুলিশ বক্স', 256, 96);

    pboxCtx.fillStyle = '#38bdf8';
    pboxCtx.font = 'bold 22px sans-serif';
    pboxCtx.fillText('HIGHWAY POLICE BOX', 256, 150);

    const pboxTex = new THREE.CanvasTexture(pboxCanvas);
    pboxTex.anisotropy = 4;
    this.policeBoxSignMat = new THREE.MeshStandardMaterial({
      map: pboxTex,
      roughness: 0.35
    });

    // UIU Shuttle Bus Stand Roadside Signboard
    const bsSignCanvas = document.createElement('canvas');
    bsSignCanvas.width = 512;
    bsSignCanvas.height = 192;
    const bssCtx = bsSignCanvas.getContext('2d');
    bssCtx.fillStyle = '#ea580c'; // UIU Orange
    bssCtx.fillRect(0, 0, 512, 192);

    bssCtx.strokeStyle = '#ffffff';
    bssCtx.lineWidth = 8;
    bssCtx.strokeRect(6, 6, 500, 180);

    bssCtx.fillStyle = '#0b192c';
    bssCtx.fillRect(16, 16, 480, 50);

    bssCtx.fillStyle = '#fde047';
    bssCtx.font = 'bold 22px sans-serif';
    bssCtx.textAlign = 'center';
    bssCtx.textBaseline = 'middle';
    bssCtx.fillText('UNITED INTERNATIONAL UNIVERSITY', 256, 41);

    bssCtx.fillStyle = '#ffffff';
    bssCtx.font = '900 36px sans-serif';
    bssCtx.fillText('UIU SHUTTLE BUS STAND', 256, 105);

    bssCtx.fillStyle = '#0b192c';
    bssCtx.font = 'bold 20px sans-serif';
    bssCtx.fillText('ছাত্র-ছাত্রী পরিবহন • QUEST FOR EXCELLENCE', 256, 155);

    const bsSignTex = new THREE.CanvasTexture(bsSignCanvas);
    bsSignTex.anisotropy = 4;
    this.uiuBusStandSignMat = new THREE.MeshStandardMaterial({
      map: bsSignTex,
      roughness: 0.35
    });

    // Checkpoint barricade texture
    const pbarCanvas = document.createElement('canvas');
    pbarCanvas.width = 512;
    pbarCanvas.height = 128;
    const pbarCtx = pbarCanvas.getContext('2d');
    pbarCtx.fillStyle = '#ffffff';
    pbarCtx.fillRect(0, 0, 512, 128);

    // Diagonal red hazard stripes
    pbarCtx.fillStyle = '#dc2626';
    for (let x = -128; x < 640; x += 64) {
      pbarCtx.beginPath();
      pbarCtx.moveTo(x, 0);
      pbarCtx.lineTo(x + 40, 0);
      pbarCtx.lineTo(x - 24, 128);
      pbarCtx.lineTo(x - 64, 128);
      pbarCtx.fill();
    }

    // Center navy badge
    pbarCtx.fillStyle = '#0f172a';
    pbarCtx.fillRect(160, 24, 192, 80);
    pbarCtx.strokeStyle = '#f59e0b';
    pbarCtx.lineWidth = 4;
    pbarCtx.strokeRect(164, 28, 184, 72);

    pbarCtx.fillStyle = '#ffffff';
    pbarCtx.font = '900 28px sans-serif';
    pbarCtx.textAlign = 'center';
    pbarCtx.textBaseline = 'middle';
    pbarCtx.fillText('POLICE', 256, 52);
    pbarCtx.fillStyle = '#f59e0b';
    pbarCtx.font = 'bold 20px sans-serif';
    pbarCtx.fillText('থামুন', 256, 82);

    const barTex = new THREE.CanvasTexture(pbarCanvas);
    this.policeBarricadeMat = new THREE.MeshStandardMaterial({
      map: barTex,
      roughness: 0.5
    });

    // Striped black/white concrete curb
    const bwCurbCanvas = document.createElement('canvas');
    bwCurbCanvas.width = 256;
    bwCurbCanvas.height = 64;
    const bwCurbCtx = bwCurbCanvas.getContext('2d');
    bwCurbCtx.fillStyle = '#ffffff';
    bwCurbCtx.fillRect(0, 0, 256, 64);
    bwCurbCtx.fillStyle = '#1e293b';
    for (let x = 0; x < 256; x += 64) {
      bwCurbCtx.fillRect(x, 0, 32, 64);
    }
    const bwCurbTex = new THREE.CanvasTexture(bwCurbCanvas);
    bwCurbTex.wrapS = THREE.RepeatWrapping;
    bwCurbTex.repeat.set(8, 1);
    this.curbStripeMat = new THREE.MeshStandardMaterial({
      map: bwCurbTex,
      roughness: 0.8
    });

    // ========================================================
    // Authentic UIU Shuttle Bus Materials (Photo Reference!)
    // ========================================================
    this.uiuBusOrangeMat = new THREE.MeshStandardMaterial({
      color: 0xea580c, // Official UIU Shuttle Bus vibrant orange
      roughness: 0.35,
      metalness: 0.1
    });

    this.uiuBusGlassMat = new THREE.MeshStandardMaterial({
      color: 0x090d16, // Dark tinted panoramic bus windows
      roughness: 0.12,
      metalness: 0.85
    });

    this.uiuBusBumperMat = new THREE.MeshStandardMaterial({
      color: 0x1f2937, // Charcoal bumper
      roughness: 0.65
    });

    this.tireMat = new THREE.MeshStandardMaterial({
      color: 0x111827, // Rubber tires
      roughness: 0.9
    });

    this.rimMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8, // Silver alloy rims
      metalness: 0.8,
      roughness: 0.3
    });

    // Side livery decal canvas (1024x256 HD)
    const busSideCanvas = document.createElement('canvas');
    busSideCanvas.width = 1024;
    busSideCanvas.height = 256;
    const bsCtx = busSideCanvas.getContext('2d');
    // Base vibrant orange
    bsCtx.fillStyle = '#ea580c';
    bsCtx.fillRect(0, 0, 1024, 256);

    // Aerodynamic curved white swoosh wave along lower body
    bsCtx.fillStyle = '#ffffff';
    bsCtx.beginPath();
    bsCtx.moveTo(0, 190);
    bsCtx.bezierCurveTo(300, 190, 600, 160, 1024, 130);
    bsCtx.lineTo(1024, 150);
    bsCtx.bezierCurveTo(600, 180, 300, 210, 0, 210);
    bsCtx.closePath();
    bsCtx.fill();

    // Secondary silver-grey accent swoosh wave
    bsCtx.fillStyle = '#cbd5e1';
    bsCtx.beginPath();
    bsCtx.moveTo(0, 205);
    bsCtx.bezierCurveTo(320, 205, 620, 175, 1024, 145);
    bsCtx.lineTo(1024, 162);
    bsCtx.bezierCurveTo(620, 192, 320, 222, 0, 222);
    bsCtx.closePath();
    bsCtx.fill();

    // UIU Emblem Shield Crest (at x = 440, y = 136)
    bsCtx.fillStyle = '#ffffff';
    bsCtx.beginPath();
    bsCtx.arc(440, 136, 22, 0, Math.PI * 2);
    bsCtx.fill();
    bsCtx.strokeStyle = '#dc2626';
    bsCtx.lineWidth = 4;
    bsCtx.stroke();
    bsCtx.fillStyle = '#dc2626';
    bsCtx.font = '900 16px sans-serif';
    bsCtx.textAlign = 'center';
    bsCtx.textBaseline = 'middle';
    bsCtx.fillText('UIU', 440, 136);

    // Text: UNITED INTERNATIONAL UNIVERSITY (Photo Match!)
    bsCtx.fillStyle = '#ffffff';
    bsCtx.font = 'bold 24px sans-serif';
    bsCtx.textAlign = 'left';
    bsCtx.fillText('UNITED INTERNATIONAL UNIVERSITY', 475, 130);

    // Text: QUEST FOR EXCELLENCE
    bsCtx.fillStyle = '#fde047';
    bsCtx.font = 'bold 15px sans-serif';
    bsCtx.fillText('QUEST FOR EXCELLENCE • UIU SHUTTLE BUS', 475, 154);

    const busSideTex = new THREE.CanvasTexture(busSideCanvas);
    busSideTex.anisotropy = 4;
    this.uiuBusSideMat = new THREE.MeshStandardMaterial({
      map: busSideTex,
      roughness: 0.35
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
    this.applyShadow(body);
    cow.add(body);

    // Zebu Dorsal Hump (Iconic Bangladeshi Deshi Cow Feature)
    const humpGeo = new THREE.ConeGeometry(0.3, 0.45, 8);
    const hump = new THREE.Mesh(humpGeo, bodyMat);
    hump.position.set(0, 1.62, -0.45);
    hump.rotation.x = -0.2;
    this.applyShadow(hump);
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
      this.applyShadow(leg);
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
    this.applyShadow(walls);
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
    this.applyShadow(roofLeft);
    house.add(roofLeft);

    const roofRightGeo = new THREE.BoxGeometry(6.6, 0.1, 3.4);
    const roofRight = new THREE.Mesh(roofRightGeo, roofMat);
    roofRight.position.set(0, 3.5, 0.8);
    roofRight.rotation.x = 0.46; // Extends forward over veranda
    this.applyShadow(roofRight);
    house.add(roofRight);

    // Front Veranda (Baranda) Wooden Support Pillars
    [-2.5, -0.8, 0.8, 2.5].forEach((x) => {
      const pillarGeo = new THREE.CylinderGeometry(0.08, 0.08, 2.3, 8);
      const pillar = new THREE.Mesh(pillarGeo, this.woodMat);
      pillar.position.set(x, 1.6, 2.1);
      this.applyShadow(pillar);
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
    this.applyShadow(roof);
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
    this.applyShadow(base);
    haystack.add(base);

    const midGeo = new THREE.CylinderGeometry(1.0, 1.6, 1.2, 12);
    const mid = new THREE.Mesh(midGeo, this.hayMat);
    mid.position.y = 2.0;
    this.applyShadow(mid);
    haystack.add(mid);

    const topGeo = new THREE.ConeGeometry(1.0, 1.5, 12);
    const top = new THREE.Mesh(topGeo, this.hayMat);
    top.position.y = 3.35;
    this.applyShadow(top);
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
    this.applyShadow(wall);
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
      this.applyShadow(pillar);
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
    this.applyShadow(roof);
    chawni.add(roof);

    // Roof Trusses (Metal beams supporting the roof)
    [-1.8, 0, 1.8].forEach((tx) => {
      const trussGeo = new THREE.BoxGeometry(0.06, 0.06, 2.1);
      const truss = new THREE.Mesh(trussGeo, new THREE.MeshStandardMaterial({ color: 0x334155 }));
      truss.position.set(tx, 2.55, 0);
      chawni.add(truss);
    });

    // Warm Lantern / Lamp under roof (illuminating the couple romantically!)
    if (!this.isMobile) {
      const lamp = new THREE.PointLight(0xffedd5, 3.0, 14);
      lamp.position.set(0, 2.45, 0.25);
      chawni.add(lamp);
    }

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
    this.applyShadow(seat);
    benchGroup.add(seat);

    // Ergonomic wooden backrest supporting passengers
    const backrestGeo = new THREE.BoxGeometry(4.4, 0.42, 0.1);
    const backrest = new THREE.Mesh(backrestGeo, this.woodMat);
    backrest.position.set(0, 1.12, 0.82);
    this.applyShadow(backrest);
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
    this.applyShadow(trunk);
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
      this.applyShadow(frond);
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
      this.applyShadow(leaf);
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
    this.applyShadow(post);
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
      this.applyShadow(stake);
      fence.add(stake);
    }

    return fence;
  }

  // ========================================================
  // 9. HIGHWAY CAFE ("HIGHWAY CAFE" / "ক্যাফে ও রেস্তোরাঁ")
  // Warm Brick Facade, Storefront Glazing, Striped Awning & Patio Tables
  // ========================================================
  createHighwayCafe(side = 1) {
    const cafe = new THREE.Group();
    cafe.name = 'highway_cafe';

    // 1. Raised Terrace Platform (Paved stone tile)
    const platformGeo = new THREE.BoxGeometry(6.6, 0.28, 4.4);
    const platformMat = new THREE.MeshStandardMaterial({ color: 0x8d6e63, roughness: 0.85 });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.set(0, 0.14, 0);
    platform.receiveShadow = true;
    cafe.add(platform);

    // Front curb step
    const curbGeo = new THREE.BoxGeometry(6.8, 0.14, 0.25);
    const curb = new THREE.Mesh(curbGeo, this.concreteMat);
    curb.position.set(0, 0.07, -2.15);
    cafe.add(curb);

    // 2. Main Cafe Building
    const buildingGeo = new THREE.BoxGeometry(5.6, 3.2, 3.0);
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x5d4037, roughness: 0.8 }); // rich warm espresso brick
    const building = new THREE.Mesh(buildingGeo, wallMat);
    building.position.set(0, 1.74, 0.6);
    this.applyShadow(building);
    cafe.add(building);

    // Modern roof cornice / trim
    const corniceGeo = new THREE.BoxGeometry(5.9, 0.22, 3.3);
    const corniceMat = new THREE.MeshStandardMaterial({ color: 0x3e2723, roughness: 0.6 });
    const cornice = new THREE.Mesh(corniceGeo, corniceMat);
    cornice.position.set(0, 3.42, 0.6);
    cafe.add(cornice);

    // 3. Storefront Glass Windows & Entrance Door
    const windowMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.15,
      transparent: true,
      opacity: 0.65
    });

    // Left panoramic picture window
    const winLeft = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.8, 0.1), windowMat);
    winLeft.position.set(-1.6, 1.7, -0.92);
    cafe.add(winLeft);

    // Right panoramic picture window
    const winRight = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.8, 0.1), windowMat);
    winRight.position.set(1.6, 1.7, -0.92);
    cafe.add(winRight);

    // Center Entrance Glass Door with Brass Push Bar
    const door = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.3, 0.1), windowMat);
    door.position.set(0, 1.45, -0.92);
    cafe.add(door);

    const brassBarMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9, roughness: 0.2 });
    const pushBar = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.7, 8), brassBarMat);
    pushBar.position.set(0.42, 1.35, -0.98);
    cafe.add(pushBar);

    // Warm Interior Ambient Light & Cozy Glow
    if (!this.isMobile) {
      const cafeWarmLight = new THREE.PointLight(0xffedd5, 3.2, 9.0);
      cafeWarmLight.position.set(0, 2.2, 0.2);
      cafe.add(cafeWarmLight);
    }

    // Interior Cafe Counter Silhouette
    const intCounterGeo = new THREE.BoxGeometry(3.6, 1.0, 0.8);
    const intCounter = new THREE.Mesh(intCounterGeo, new THREE.MeshStandardMaterial({ color: 0x27160c }));
    intCounter.position.set(0, 0.8, 0.4);
    cafe.add(intCounter);

    // 4. Striped Fabric Awning (Canopy) over Patio
    // Rich burgundy & warm biscuit stripes
    const awningCanvas = document.createElement('canvas');
    awningCanvas.width = 256;
    awningCanvas.height = 256;
    const aCtx = awningCanvas.getContext('2d');
    const stripeW = 32;
    for (let x = 0; x < 256; x += stripeW * 2) {
      aCtx.fillStyle = '#831843'; // Deep Burgundy Red
      aCtx.fillRect(x, 0, stripeW, 256);
      aCtx.fillStyle = '#fef3c7'; // Warm Biscuit Cream
      aCtx.fillRect(x + stripeW, 0, stripeW, 256);
    }
    const awningTex = new THREE.CanvasTexture(awningCanvas);
    awningTex.wrapS = THREE.RepeatWrapping;
    awningTex.wrapT = THREE.RepeatWrapping;
    awningTex.repeat.set(4, 1);
    const awningMat = new THREE.MeshStandardMaterial({ map: awningTex, roughness: 0.7, side: THREE.DoubleSide });

    const awningGroup = new THREE.Group();
    awningGroup.position.set(0, 2.65, -0.9);

    const awningSlopeGeo = new THREE.PlaneGeometry(4.8, 1.5);
    awningSlopeGeo.rotateX(Math.PI * 0.4); // Slanted down towards front
    const awningSlope = new THREE.Mesh(awningSlopeGeo, awningMat);
    awningSlope.position.set(0, -0.22, -0.65);
    awningGroup.add(awningSlope);

    // Front Valance Flap
    const valanceGeo = new THREE.PlaneGeometry(4.8, 0.26);
    const valance = new THREE.Mesh(valanceGeo, awningMat);
    valance.position.set(0, -0.55, -1.25);
    awningGroup.add(valance);

    // Iron support brackets
    [-2.2, 2.2].forEach((bx) => {
      const strutGeo = new THREE.CylinderGeometry(0.02, 0.02, 1.4, 6);
      strutGeo.rotateX(-Math.PI * 0.25);
      const strut = new THREE.Mesh(strutGeo, new THREE.MeshStandardMaterial({ color: 0x1e293b }));
      strut.position.set(bx, -0.35, -0.6);
      awningGroup.add(strut);
    });

    cafe.add(awningGroup);

    // 5. SIGNBOARD: "HIGHWAY CAFE" | ক্যাফে ও রেস্তোরাঁ
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 1024;
    signCanvas.height = 256;
    const sCtx = signCanvas.getContext('2d');

    // Rich Dark Roast Espresso background
    sCtx.fillStyle = '#1c120c';
    sCtx.fillRect(0, 0, 1024, 256);

    // Gold borders
    sCtx.strokeStyle = '#d97706';
    sCtx.lineWidth = 12;
    sCtx.strokeRect(10, 10, 1004, 236);

    sCtx.strokeStyle = '#fde047';
    sCtx.lineWidth = 4;
    sCtx.strokeRect(22, 22, 980, 212);

    // Steaming Coffee Cup Icon on Left and Right
    const drawCoffeeCup = (cx, cy) => {
      // Saucer
      sCtx.fillStyle = '#fde047';
      sCtx.beginPath();
      sCtx.ellipse(cx, cy + 32, 42, 12, 0, 0, Math.PI * 2);
      sCtx.fill();

      // Cup body
      sCtx.fillStyle = '#ffffff';
      sCtx.beginPath();
      sCtx.moveTo(cx - 30, cy - 18);
      sCtx.lineTo(cx + 30, cy - 18);
      sCtx.quadraticCurveTo(cx + 28, cy + 24, cx + 18, cy + 28);
      sCtx.lineTo(cx - 18, cy + 28);
      sCtx.quadraticCurveTo(cx - 28, cy + 24, cx - 30, cy - 18);
      sCtx.closePath();
      sCtx.fill();

      // Handle
      sCtx.strokeStyle = '#ffffff';
      sCtx.lineWidth = 8;
      sCtx.beginPath();
      sCtx.arc(cx + 32, cy + 4, 14, -Math.PI * 0.4, Math.PI * 0.6);
      sCtx.stroke();

      // Steam swirls
      sCtx.strokeStyle = '#fef08a';
      sCtx.lineWidth = 4;
      sCtx.beginPath();
      sCtx.moveTo(cx - 12, cy - 24);
      sCtx.quadraticCurveTo(cx - 18, cy - 38, cx - 10, cy - 48);
      sCtx.moveTo(cx + 8, cy - 24);
      sCtx.quadraticCurveTo(cx + 2, cy - 38, cx + 12, cy - 50);
      sCtx.stroke();
    };

    drawCoffeeCup(70, 128);
    drawCoffeeCup(954, 128);

    // Top BOLD English "HIGHWAY CAFE"
    sCtx.fillStyle = '#fef08a';
    sCtx.font = '900 82px sans-serif';
    sCtx.textAlign = 'center';
    sCtx.textBaseline = 'middle';
    sCtx.shadowColor = 'rgba(0,0,0,0.95)';
    sCtx.shadowBlur = 14;
    sCtx.fillText('HIGHWAY CAFE', 512, 80);

    // Bengali "ক্যাফে ও রেস্তোরাঁ"
    sCtx.fillStyle = '#ffffff';
    sCtx.font = 'bold 54px sans-serif';
    sCtx.shadowColor = 'rgba(0,0,0,0.85)';
    sCtx.shadowBlur = 8;
    sCtx.fillText('ক্যাফে ও রেস্তোরাঁ', 512, 172);

    // Subtitle
    sCtx.fillStyle = '#f59e0b';
    sCtx.font = 'bold 26px sans-serif';
    sCtx.shadowBlur = 0;
    sCtx.fillText('FRESH COFFEE • TEA • BURGERS & SNACKS', 512, 226);

    const signTexture = new THREE.CanvasTexture(signCanvas);
    const signMat = new THREE.MeshStandardMaterial({
      map: signTexture,
      roughness: 0.35,
      emissive: 0x3d2010,
      emissiveIntensity: 0.18
    });

    const signGroup = new THREE.Group();
    signGroup.position.set(0, 3.4, -0.95);

    const signFrame = new THREE.Mesh(
      new THREE.BoxGeometry(4.7, 0.92, 0.08),
      new THREE.MeshStandardMaterial({ color: 0x27160c, roughness: 0.5 })
    );
    signGroup.add(signFrame);

    const signFaceGeo = new THREE.PlaneGeometry(4.62, 0.84);
    signFaceGeo.rotateY(Math.PI); // Facing -Z towards oncoming traffic
    const signFace = new THREE.Mesh(signFaceGeo, signMat);
    signFace.position.set(0, 0, -0.045);
    signGroup.add(signFace);

    // Spotlight fixtures shining down on signboard
    [-1.6, 1.6].forEach((sx) => {
      const lampArm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.02, 0.02, 0.35, 6),
        brassBarMat
      );
      lampArm.position.set(sx, 0.52, -0.15);
      lampArm.rotation.x = Math.PI * 0.3;
      signGroup.add(lampArm);

      const lampHead = new THREE.Mesh(
        new THREE.ConeGeometry(0.08, 0.14, 8),
        brassBarMat
      );
      lampHead.position.set(sx, 0.42, -0.28);
      lampHead.rotation.x = Math.PI * 0.8;
      signGroup.add(lampHead);

      const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0xffedd5 })
      );
      bulb.position.set(sx, 0.38, -0.28);
      signGroup.add(bulb);
    });

    cafe.add(signGroup);

    // 6. Outdoor Patio Furniture: 2 Bistro Tables & 4 Chairs
    const tablePositions = [-1.7, 1.7];
    tablePositions.forEach((tx) => {
      const tableGroup = new THREE.Group();
      tableGroup.position.set(tx, 0.28, -1.35);

      // Cast iron pedestal base
      const tBase = new THREE.Mesh(
        new THREE.CylinderGeometry(0.035, 0.22, 0.75, 12),
        new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8 })
      );
      tBase.position.y = 0.375;
      tableGroup.add(tBase);

      // Round wooden table top
      const tTop = new THREE.Mesh(
        new THREE.CylinderGeometry(0.55, 0.55, 0.05, 16),
        this.woodMat
      );
      tTop.position.y = 0.75;
      tableGroup.add(tTop);

      // 2 Coffee Cups on the table
      [-0.18, 0.18].forEach((cx, idx) => {
        const mug = new THREE.Mesh(
          new THREE.CylinderGeometry(0.05, 0.045, 0.08, 8),
          new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 })
        );
        mug.position.set(cx, 0.81, idx === 0 ? 0.1 : -0.1);
        tableGroup.add(mug);

        // Dark coffee surface inside mug
        const coffee = new THREE.Mesh(
          new THREE.CircleGeometry(0.04, 8),
          new THREE.MeshBasicMaterial({ color: 0x27160c })
        );
        coffee.rotation.x = -Math.PI / 2;
        coffee.position.set(cx, 0.85, idx === 0 ? 0.1 : -0.1);
        tableGroup.add(coffee);
      });

      // 2 Wooden Chairs
      [-0.65, 0.65].forEach((cx) => {
        const chair = new THREE.Group();
        chair.position.set(cx, 0, 0);

        // Chair legs
        [-0.14, 0.14].forEach((clx) => {
          [-0.14, 0.14].forEach((clz) => {
            const leg = new THREE.Mesh(
              new THREE.CylinderGeometry(0.02, 0.02, 0.45, 6),
              this.woodMat
            );
            leg.position.set(clx, 0.225, clz);
            chair.add(leg);
          });
        });

        // Seat
        const cSeat = new THREE.Mesh(
          new THREE.BoxGeometry(0.36, 0.04, 0.36),
          this.woodMat
        );
        cSeat.position.y = 0.45;
        chair.add(cSeat);

        // Backrest
        const cBack = new THREE.Mesh(
          new THREE.BoxGeometry(0.36, 0.35, 0.04),
          this.woodMat
        );
        cBack.position.set(0, 0.68, cx > 0 ? 0.16 : -0.16);
        chair.add(cBack);

        tableGroup.add(chair);
      });

      cafe.add(tableGroup);
    });

    // 7. Patio Flower Planters on outer edges
    [-2.9, 2.9].forEach((px) => {
      const planter = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.42, 1.6),
        this.woodMat
      );
      planter.position.set(px, 0.49, -1.2);
      cafe.add(planter);

      // Shrub greenery inside planter
      for (let s = -0.55; s <= 0.55; s += 0.5) {
        const bush = new THREE.Mesh(
          new THREE.SphereGeometry(0.24, 8, 8),
          this.palmLeafMat
        );
        bush.position.set(px, 0.8, -1.2 + s);
        cafe.add(bush);

        // Tiny red/yellow flowers
        const flower = new THREE.Mesh(
          new THREE.SphereGeometry(0.06, 6, 6),
          new THREE.MeshBasicMaterial({ color: s < 0 ? 0xdc2626 : 0xf59e0b })
        );
        flower.position.set(px, 0.95, -1.2 + s);
        cafe.add(flower);
      }
    });

    return cafe;
  }

  // ========================================================
  // 10. HIGHWAY BAR ("HIGHWAY BAR" / "মদের বার" / LIQUOR LOUNGE)
  // Dark Industrial Exterior, Backlit Liquor Shelves, Bar Stools & Glowing Neon Sign
  // ========================================================
  createHighwayBar(side = -1) {
    const bar = new THREE.Group();
    bar.name = 'highway_bar';

    // 1. Raised Dark Slate Platform
    const platformGeo = new THREE.BoxGeometry(6.6, 0.28, 4.4);
    const platformMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.set(0, 0.14, 0);
    platform.receiveShadow = true;
    bar.add(platform);

    // Front curb step
    const curbGeo = new THREE.BoxGeometry(6.8, 0.14, 0.25);
    const curb = new THREE.Mesh(curbGeo, new THREE.MeshStandardMaterial({ color: 0x0f172a }));
    curb.position.set(0, 0.07, -2.15);
    bar.add(curb);

    // 2. Main Bar Building (Industrial Dark Style with Timber Slats)
    const buildingGeo = new THREE.BoxGeometry(5.6, 3.2, 3.0);
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.7 });
    const building = new THREE.Mesh(buildingGeo, wallMat);
    building.position.set(0, 1.74, 0.6);
    this.applyShadow(building);
    bar.add(building);

    // Dark walnut wood vertical slats on facade side pillars
    [-2.5, 2.5].forEach((wx) => {
      const slatPillar = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 3.2, 0.2),
        new THREE.MeshStandardMaterial({ color: 0x3e2723, roughness: 0.6 })
      );
      slatPillar.position.set(wx, 1.74, -0.9);
      bar.add(slatPillar);
    });

    // Sleek black roof cornice
    const corniceGeo = new THREE.BoxGeometry(5.9, 0.22, 3.3);
    const cornice = new THREE.Mesh(corniceGeo, new THREE.MeshStandardMaterial({ color: 0x020617, roughness: 0.4 }));
    cornice.position.set(0, 3.42, 0.6);
    bar.add(cornice);

    // 3. Open Bar Lounge & Counter
    // Polished Black Granite Bar Counter
    const counterTopGeo = new THREE.BoxGeometry(3.6, 0.12, 0.7);
    const counterTopMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.15, metalness: 0.8 });
    const counterTop = new THREE.Mesh(counterTopGeo, counterTopMat);
    counterTop.position.set(0, 1.05, -0.6);
    bar.add(counterTop);

    const counterBaseGeo = new THREE.BoxGeometry(3.4, 0.98, 0.6);
    const counterBaseMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 });
    const counterBase = new THREE.Mesh(counterBaseGeo, counterBaseMat);
    counterBase.position.set(0, 0.5, -0.6);
    bar.add(counterBase);

    // Cyan LED under-counter glow strip
    const ledStripGeo = new THREE.BoxGeometry(3.4, 0.04, 0.04);
    const ledStripMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
    const ledStrip = new THREE.Mesh(ledStripGeo, ledStripMat);
    ledStrip.position.set(0, 0.98, -0.93);
    bar.add(ledStrip);

    // 4. Backlit Tiered Bottle Display Shelves
    const shelfBackdropGeo = new THREE.BoxGeometry(3.4, 1.6, 0.2);
    const shelfBackdrop = new THREE.Mesh(
      shelfBackdropGeo,
      new THREE.MeshStandardMaterial({ color: 0x1e1e2f, roughness: 0.3 })
    );
    shelfBackdrop.position.set(0, 1.8, 0.6);
    bar.add(shelfBackdrop);

    // 3 Glass Shelves with Bottles
    const bottleColors = [
      0x16a34a, // Green beer bottles
      0xd97706, // Golden whiskey bottles
      0x06b6d4, // Cyan vodka/gin bottles
      0x991b1b, // Red wine bottles
      0xfacc15  // Champagne / Rum
    ];

    [1.25, 1.7, 2.15].forEach((sy, tierIdx) => {
      // Glass tier shelf
      const shelfSlab = new THREE.Mesh(
        new THREE.BoxGeometry(3.2, 0.04, 0.3),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.1, transparent: true, opacity: 0.8 })
      );
      shelfSlab.position.set(0, sy, 0.45);
      bar.add(shelfSlab);

      // Rows of bottles
      for (let bx = -1.4; bx <= 1.4; bx += 0.28) {
        const bCol = bottleColors[(Math.abs(Math.round(bx * 10)) + tierIdx) % bottleColors.length];
        const bGroup = new THREE.Group();
        bGroup.position.set(bx, sy + 0.02, 0.45);

        // Bottle body
        const bBody = new THREE.Mesh(
          new THREE.CylinderGeometry(0.045, 0.045, 0.22, 8),
          new THREE.MeshStandardMaterial({ color: bCol, roughness: 0.2, metalness: 0.3, transparent: true, opacity: 0.9 })
        );
        bBody.position.y = 0.11;
        bGroup.add(bBody);

        // Bottle neck & cap
        const bNeck = new THREE.Mesh(
          new THREE.CylinderGeometry(0.016, 0.022, 0.1, 8),
          new THREE.MeshStandardMaterial({ color: bCol, roughness: 0.2 })
        );
        bNeck.position.y = 0.25;
        bGroup.add(bNeck);

        const bCap = new THREE.Mesh(
          new THREE.CylinderGeometry(0.018, 0.018, 0.02, 6),
          new THREE.MeshBasicMaterial({ color: 0xfde047 })
        );
        bCap.position.y = 0.31;
        bGroup.add(bCap);

        bar.add(bGroup);
      }
    });

    // 5. High Bar Stools
    [-1.0, 0, 1.0].forEach((sx) => {
      const stool = new THREE.Group();
      stool.position.set(sx, 0.28, -1.25);

      // Chrome central leg & circular base
      const sBase = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.24, 0.72, 12),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.15 })
      );
      sBase.position.y = 0.36;
      stool.add(sBase);

      // Footrest ring
      const fRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.16, 0.02, 8, 16),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.15 })
      );
      fRing.rotation.x = Math.PI / 2;
      fRing.position.y = 0.24;
      stool.add(fRing);

      // Round leather seat cushion
      const sSeat = new THREE.Mesh(
        new THREE.CylinderGeometry(0.22, 0.22, 0.08, 16),
        new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.5 }) // crimson leather
      );
      sSeat.position.y = 0.74;
      stool.add(sSeat);

      bar.add(stool);
    });

    // 6. Vibrant Neon Mood Lights Inside Lounge
    if (!this.isMobile) {
      const neonCyan = new THREE.PointLight(0x06b6d4, 3.2, 9.0);
      neonCyan.position.set(-1.2, 2.3, 0.2);
      bar.add(neonCyan);

      const neonPurple = new THREE.PointLight(0xd946ef, 2.8, 8.0);
      neonPurple.position.set(1.2, 2.3, 0.2);
      bar.add(neonPurple);
    }

    // 7. NEON SIGNBOARD: "HIGHWAY BAR" | মদের বার
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 1024;
    signCanvas.height = 256;
    const sCtx = signCanvas.getContext('2d');

    // Pitch black background
    sCtx.fillStyle = '#030712';
    sCtx.fillRect(0, 0, 1024, 256);

    // Neon outer border (Hot Magenta glow)
    sCtx.strokeStyle = '#ec4899';
    sCtx.lineWidth = 10;
    sCtx.shadowColor = '#ec4899';
    sCtx.shadowBlur = 18;
    sCtx.strokeRect(12, 12, 1000, 232);

    // Neon inner border (Cyan glow)
    sCtx.strokeStyle = '#06b6d4';
    sCtx.lineWidth = 4;
    sCtx.shadowColor = '#06b6d4';
    sCtx.shadowBlur = 12;
    sCtx.strokeRect(26, 26, 972, 204);

    // Neon Beer Mug Icon on Left
    const drawNeonBeerMug = (bx, by) => {
      sCtx.shadowColor = '#facc15';
      sCtx.shadowBlur = 14;

      // Beer Mug Body
      sCtx.fillStyle = '#facc15';
      sCtx.beginPath();
      sCtx.roundRect(bx, by + 18, 48, 56, [0, 0, 8, 8]);
      sCtx.fill();

      // Foam Head
      sCtx.fillStyle = '#ffffff';
      sCtx.beginPath();
      sCtx.arc(bx + 10, by + 14, 14, 0, Math.PI * 2);
      sCtx.arc(bx + 24, by + 8, 16, 0, Math.PI * 2);
      sCtx.arc(bx + 38, by + 14, 14, 0, Math.PI * 2);
      sCtx.fill();

      // Handle
      sCtx.strokeStyle = '#facc15';
      sCtx.lineWidth = 6;
      sCtx.beginPath();
      sCtx.arc(bx + 52, by + 46, 16, -Math.PI * 0.45, Math.PI * 0.45);
      sCtx.stroke();
    };

    // Neon Cocktail Glass Icon on Right
    const drawNeonCocktail = (cx, cy) => {
      sCtx.shadowColor = '#06b6d4';
      sCtx.shadowBlur = 14;

      // Triangle Glass Bowl
      sCtx.strokeStyle = '#38bdf8';
      sCtx.lineWidth = 5;
      sCtx.beginPath();
      sCtx.moveTo(cx - 30, cy + 10);
      sCtx.lineTo(cx + 30, cy + 10);
      sCtx.lineTo(cx, cy + 50);
      sCtx.closePath();
      sCtx.stroke();

      // Liquid inside
      sCtx.fillStyle = '#f43f5e';
      sCtx.beginPath();
      sCtx.moveTo(cx - 20, cy + 22);
      sCtx.lineTo(cx + 20, cy + 22);
      sCtx.lineTo(cx, cy + 50);
      sCtx.closePath();
      sCtx.fill();

      // Stem & Base
      sCtx.strokeStyle = '#38bdf8';
      sCtx.lineWidth = 5;
      sCtx.beginPath();
      sCtx.moveTo(cx, cy + 50);
      sCtx.lineTo(cx, cy + 80);
      sCtx.moveTo(cx - 22, cy + 80);
      sCtx.lineTo(cx + 22, cy + 80);
      sCtx.stroke();

      // Olive / Lime
      sCtx.fillStyle = '#84cc16';
      sCtx.beginPath();
      sCtx.arc(cx - 6, cy + 16, 7, 0, Math.PI * 2);
      sCtx.fill();
    };

    drawNeonBeerMug(52, 85);
    drawNeonCocktail(940, 80);

    // Top BOLD English "HIGHWAY BAR" in Neon Cyan & Hot Pink
    sCtx.fillStyle = '#38bdf8';
    sCtx.font = '900 84px sans-serif';
    sCtx.textAlign = 'center';
    sCtx.textBaseline = 'middle';
    sCtx.shadowColor = '#06b6d4';
    sCtx.shadowBlur = 24;
    sCtx.fillText('HIGHWAY BAR', 512, 78);

    // Center BOLD Bengali "মদের বার" in Glowing Amber/Yellow
    sCtx.fillStyle = '#fde047';
    sCtx.font = 'bold 62px sans-serif';
    sCtx.shadowColor = '#f59e0b';
    sCtx.shadowBlur = 20;
    sCtx.fillText('মদের বার', 512, 168);

    // Subtitle in Electric Lime Green
    sCtx.fillStyle = '#a3e635';
    sCtx.font = 'bold 25px sans-serif';
    sCtx.shadowColor = '#84cc16';
    sCtx.shadowBlur = 8;
    sCtx.fillText('IMPORTED LIQUOR • CHILLED BEER • WINE LOUNGE', 512, 224);

    const signTexture = new THREE.CanvasTexture(signCanvas);
    const signMat = new THREE.MeshStandardMaterial({
      map: signTexture,
      roughness: 0.25,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.35
    });

    const signGroup = new THREE.Group();
    signGroup.position.set(0, 3.4, -0.95);

    const signFrame = new THREE.Mesh(
      new THREE.BoxGeometry(4.7, 0.95, 0.08),
      new THREE.MeshStandardMaterial({ color: 0x020617, roughness: 0.4 })
    );
    signGroup.add(signFrame);

    const signFaceGeo = new THREE.PlaneGeometry(4.62, 0.88);
    signFaceGeo.rotateY(Math.PI);
    const signFace = new THREE.Mesh(signFaceGeo, signMat);
    signFace.position.set(0, 0, -0.045);
    signGroup.add(signFace);

    // Side 24/7 Neon Cocktail Signboard
    const sideNeonGeo = new THREE.PlaneGeometry(0.8, 1.2);
    const sideNeonCanvas = document.createElement('canvas');
    sideNeonCanvas.width = 256;
    sideNeonCanvas.height = 384;
    const snCtx = sideNeonCanvas.getContext('2d');
    snCtx.fillStyle = '#030712';
    snCtx.fillRect(0, 0, 256, 384);
    snCtx.strokeStyle = '#ec4899';
    snCtx.lineWidth = 6;
    snCtx.strokeRect(6, 6, 244, 372);
    snCtx.fillStyle = '#facc15';
    snCtx.font = '900 46px sans-serif';
    snCtx.textAlign = 'center';
    snCtx.shadowColor = '#f59e0b';
    snCtx.shadowBlur = 12;
    snCtx.fillText('BAR', 128, 70);
    snCtx.fillStyle = '#38bdf8';
    snCtx.font = 'bold 36px sans-serif';
    snCtx.shadowColor = '#06b6d4';
    snCtx.fillText('OPEN', 128, 130);
    snCtx.fillStyle = '#ec4899';
    snCtx.font = '900 44px sans-serif';
    snCtx.shadowColor = '#ec4899';
    snCtx.fillText('24/7', 128, 200);
    snCtx.fillStyle = '#fde047';
    snCtx.font = 'bold 32px sans-serif';
    snCtx.shadowColor = '#f59e0b';
    snCtx.fillText('মদ ও বিয়ার', 128, 280);
    snCtx.fillStyle = '#a3e635';
    snCtx.font = 'bold 22px sans-serif';
    snCtx.fillText('CHILLED BEER', 128, 340);

    const sideNeonTex = new THREE.CanvasTexture(sideNeonCanvas);
    const sideNeonMesh = new THREE.Mesh(
      sideNeonGeo,
      new THREE.MeshStandardMaterial({ map: sideNeonTex, emissive: 0xec4899, emissiveIntensity: 0.35 })
    );
    sideNeonMesh.position.set(-2.82, 2.0, -0.6);
    sideNeonMesh.rotation.y = -Math.PI / 2;
    bar.add(sideNeonMesh);

    return bar;
  }

  // ========================================================
  // 11. ROADSIDE SMOKING GUYS GROUP (কয়েকটা ছেলে দাঁড়াইয়া সিগারেট খাইতেছে)
  // 3 Guys Hanging Out: One Taking a Drag with Glowing Ember & Rising Smoke,
  // One Holding a Lit Cigarette Talking, One Listening with Hands in Pockets!
  // ========================================================
  createSmokingGuysGroup(side = 1) {
    const group = new THREE.Group();
    group.name = 'smoking_guys_group';
    group.scale.set(1.25, 1.25, 1.25); // Well-proportioned and visible

    const skinMat = new THREE.MeshStandardMaterial({ color: 0xf5c396, roughness: 0.65 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.45 });
    const shoeWhiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.7 });
    const shoeDarkMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7 });

    // ----------------------------------------------------
    // GUY 1: The Smoker taking a drag (মুখে সিগারেট নিয়ে টানছে)
    // ----------------------------------------------------
    const guy1 = new THREE.Group();
    guy1.position.set(-0.42, 0, 0);

    const g1JacketMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.7 }); // Trendy red hoodie jacket
    const g1PantsMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });  // Dark navy jeans

    // Torso
    const g1Torso = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.58, 0.24), g1JacketMat);
    g1Torso.position.set(0, 1.15, 0);
    g1Torso.rotation.y = 0.25;
    guy1.add(g1Torso);

    // Hoodie hood on back of neck
    const g1Hood = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.24, 0.16), g1JacketMat);
    g1Hood.position.set(0, 1.38, 0.12);
    guy1.add(g1Hood);

    // Head Pivot for breathing / smoking drag motion
    const g1HeadPivot = new THREE.Group();
    g1HeadPivot.position.set(0, 1.54, 0);
    g1HeadPivot.rotation.x = -0.12; // Slight head tilt back while smoking!
    g1HeadPivot.rotation.y = 0.25;

    const g1Head = new THREE.Mesh(new THREE.SphereGeometry(0.125, 12, 12), skinMat);
    g1HeadPivot.add(g1Head);

    const g1Hair = new THREE.Mesh(new THREE.SphereGeometry(0.132, 12, 12), hairMat);
    g1Hair.scale.set(1.02, 1.08, 1.04);
    g1Hair.position.set(0, 0.03, -0.01);
    g1HeadPivot.add(g1Hair);
    guy1.add(g1HeadPivot);

    // Legs
    [-0.1, 0.1].forEach((lx) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.84, 8), g1PantsMat);
      leg.position.set(lx, 0.44, 0);
      guy1.add(leg);

      const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.22), shoeWhiteMat);
      shoe.position.set(lx, 0.04, -0.04);
      guy1.add(shoe);
    });

    // Left arm hanging naturally down
    const g1LeftArm = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.04, 0.52, 8), g1JacketMat);
    g1LeftArm.position.set(-0.24, 1.1, 0);
    g1LeftArm.rotation.z = 0.15;
    guy1.add(g1LeftArm);

    // Right arm raised with hand at mouth holding cigarette!
    const g1RightUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.044, 0.32, 8), g1JacketMat);
    g1RightUpperArm.position.set(0.23, 1.25, -0.06);
    g1RightUpperArm.rotation.z = -Math.PI * 0.35;
    g1RightUpperArm.rotation.x = -Math.PI * 0.25;
    guy1.add(g1RightUpperArm);

    const g1RightForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.038, 0.32, 8), g1JacketMat);
    g1RightForearm.position.set(0.14, 1.44, -0.12);
    g1RightForearm.rotation.z = Math.PI * 0.32;
    g1RightForearm.rotation.x = -Math.PI * 0.45;
    guy1.add(g1RightForearm);

    // Right Hand
    const g1Hand = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), skinMat);
    g1Hand.position.set(0.04, 1.5, -0.16);
    guy1.add(g1Hand);

    // THE CIGARETTE IN MOUTH / HAND
    const cigGroup1 = new THREE.Group();
    cigGroup1.position.set(0.02, 1.51, -0.18);
    cigGroup1.rotation.x = -Math.PI * 0.15;
    cigGroup1.rotation.y = 0.28;

    // Filter tip (beige)
    const cigFilter = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.028, 8),
      new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.9 })
    );
    cigFilter.rotation.x = Math.PI / 2;
    cigGroup1.add(cigFilter);

    // White cigarette body
    const cigBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.065, 8),
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 })
    );
    cigBody.rotation.x = Math.PI / 2;
    cigBody.position.z = -0.046;
    cigGroup1.add(cigBody);

    // Burning Red/Orange Cherry Ember Tip (MeshBasicMaterial glows naturally without expensive GPU light passes)
    const cigEmber = new THREE.Mesh(
      new THREE.SphereGeometry(0.014, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xff3b00 })
    );
    cigEmber.position.z = -0.082;
    cigGroup1.add(cigEmber);

    // Animated Rising Smoke Puffs from cigarette tip
    const smokeGroup1 = new THREE.Group();
    smokeGroup1.position.set(0.02, 1.51, -0.26);
    smokeGroup1.userData = {
      type: 'cigarette',
      maxH: 0.5,
      spd: 0.007,
      drift: 0.004,
      light: null,
      seed: Math.random() * 5
    };
    for (let s = 0; s < 5; s++) {
      const sp = new THREE.Mesh(
        new THREE.SphereGeometry(0.022 + s * 0.006, 6, 6),
        this.smokeMat
      );
      sp.position.y = s * 0.1;
      smokeGroup1.add(sp);
    }
    this.smokeEmitters.push(smokeGroup1);
    guy1.add(smokeGroup1);

    guy1.add(cigGroup1);
    group.add(guy1);

    // Register Guy 1 for animation (breathing/puffing)
    this.animatedAnimals.push({
      type: 'smoker',
      head: g1HeadPivot,
      seed: Math.random() * 10
    });

    // ----------------------------------------------------
    // GUY 2: Holding lit cigarette while talking (হাতে সিগারেট নিয়ে কথা বলছে)
    // ----------------------------------------------------
    const guy2 = new THREE.Group();
    guy2.position.set(0.48, 0, -0.15);

    const g2ShirtMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.7 }); // Navy blue t-shirt
    const g2PantsMat = new THREE.MeshStandardMaterial({ color: 0x3f6212, roughness: 0.8 });  // Olive green cargo pants

    const g2Torso = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.56, 0.22), g2ShirtMat);
    g2Torso.position.set(0, 1.14, 0);
    g2Torso.rotation.y = -0.7; // Facing toward Guy 1 and Guy 3
    guy2.add(g2Torso);

    const g2Head = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), skinMat);
    g2Head.position.set(0, 1.54, 0);
    g2Head.rotation.y = -0.7;
    guy2.add(g2Head);

    const g2Hair = new THREE.Mesh(new THREE.SphereGeometry(0.128, 12, 12), hairMat);
    g2Hair.scale.set(1.02, 1.06, 1.04);
    g2Hair.position.set(0, 1.57, -0.01);
    guy2.add(g2Hair);

    // Legs
    [-0.09, 0.09].forEach((lx) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.058, 0.05, 0.84, 8), g2PantsMat);
      leg.position.set(lx, 0.44, 0);
      guy2.add(leg);

      const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.22), shoeDarkMat);
      shoe.position.set(lx, 0.04, -0.04);
      guy2.add(shoe);
    });

    // Right arm gesturing while talking
    const g2RightArm = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.038, 0.48, 8), g2ShirtMat);
    g2RightArm.position.set(0.22, 1.16, 0.06);
    g2RightArm.rotation.z = -Math.PI * 0.22;
    g2RightArm.rotation.x = -Math.PI * 0.25;
    guy2.add(g2RightArm);

    // Left arm holding lit cigarette down at waist level
    const g2LeftArm = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.038, 0.48, 8), g2ShirtMat);
    g2LeftArm.position.set(-0.21, 1.08, 0.04);
    g2LeftArm.rotation.z = Math.PI * 0.16;
    g2LeftArm.rotation.x = -Math.PI * 0.12;
    guy2.add(g2LeftArm);

    const g2LeftHand = new THREE.Mesh(new THREE.SphereGeometry(0.042, 8, 8), skinMat);
    g2LeftHand.position.set(-0.28, 0.85, 0.1);
    guy2.add(g2LeftHand);

    // Cigarette held in Guy 2's left hand
    const cigGroup2 = new THREE.Group();
    cigGroup2.position.set(-0.32, 0.85, 0.12);
    cigGroup2.rotation.x = -Math.PI * 0.35;
    cigGroup2.rotation.y = -0.4;

    const cigBody2 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.08, 8),
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 })
    );
    cigBody2.rotation.x = Math.PI / 2;
    cigGroup2.add(cigBody2);

    const cigEmber2 = new THREE.Mesh(
      new THREE.SphereGeometry(0.014, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xff3b00 })
    );
    cigEmber2.position.z = -0.045;
    cigGroup2.add(cigEmber2);

    // Animated Rising Smoke Puffs for Guy 2's cigarette
    const smokeGroup2 = new THREE.Group();
    smokeGroup2.position.set(-0.32, 0.88, 0.1);
    smokeGroup2.userData = {
      type: 'cigarette',
      maxH: 0.45,
      spd: 0.006,
      drift: 0.003,
      light: null,
      seed: Math.random() * 5
    };
    for (let s = 0; s < 4; s++) {
      const sp = new THREE.Mesh(
        new THREE.SphereGeometry(0.02 + s * 0.005, 6, 6),
        this.smokeMat
      );
      sp.position.y = s * 0.1;
      smokeGroup2.add(sp);
    }
    this.smokeEmitters.push(smokeGroup2);
    guy2.add(smokeGroup2);

    guy2.add(cigGroup2);
    group.add(guy2);

    // ----------------------------------------------------
    // GUY 3: Buddy with hands in jacket pockets listening (জ্যাকেটের পকেটে হাত দিয়ে দাঁড়িয়ে শুনছে)
    // ----------------------------------------------------
    const guy3 = new THREE.Group();
    guy3.position.set(0.02, 0, 0.52);

    const g3JacketMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.7 }); // Charcoal jacket
    const g3PantsMat = new THREE.MeshStandardMaterial({ color: 0xd4a373, roughness: 0.8 });  // Khaki chinos

    const g3Torso = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.58, 0.24), g3JacketMat);
    g3Torso.position.set(0, 1.15, 0);
    g3Torso.rotation.y = Math.PI * 0.9; // Facing back towards Guy 1 and 2
    guy3.add(g3Torso);

    const g3Head = new THREE.Mesh(new THREE.SphereGeometry(0.125, 12, 12), skinMat);
    g3Head.position.set(0, 1.54, 0);
    g3Head.rotation.y = Math.PI * 0.9;
    guy3.add(g3Head);

    const g3Hair = new THREE.Mesh(new THREE.SphereGeometry(0.132, 12, 12), hairMat);
    g3Hair.scale.set(1.02, 1.08, 1.04);
    g3Hair.position.set(0, 1.57, 0.01);
    guy3.add(g3Hair);

    // Legs
    [-0.1, 0.1].forEach((lx) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.058, 0.05, 0.84, 8), g3PantsMat);
      leg.position.set(lx, 0.44, 0);
      guy3.add(leg);

      const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.22), new THREE.MeshStandardMaterial({ color: 0x78350f }));
      shoe.position.set(lx, 0.04, 0.04);
      guy3.add(shoe);
    });

    // Arms bent with hands in jacket pockets
    [-0.22, 0.22].forEach((ax) => {
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.04, 0.48, 8), g3JacketMat);
      arm.position.set(ax, 1.12, -0.06);
      arm.rotation.z = ax > 0 ? -0.25 : 0.25;
      arm.rotation.x = Math.PI * 0.18;
      guy3.add(arm);
    });

    group.add(guy3);

    // ----------------------------------------------------
    // ROADSIDE DETAILS: Concrete curb / brick, Cigarette pack & Matchbox
    // ----------------------------------------------------
    const brick = new THREE.Mesh(
      new THREE.BoxGeometry(0.35, 0.2, 0.5),
      this.brickMat
    );
    brick.position.set(-0.1, 0.1, -0.15);
    group.add(brick);

    // Gold/Navy Cigarette Pack on brick
    const cigPack = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 0.05, 0.16),
      new THREE.MeshStandardMaterial({ color: 0x1e3a8a, metalness: 0.5, roughness: 0.3 })
    );
    cigPack.position.set(-0.1, 0.225, -0.15);
    group.add(cigPack);

    // Tiny matchbox with red strike edge
    const matchbox = new THREE.Mesh(
      new THREE.BoxGeometry(0.07, 0.035, 0.11),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.8 })
    );
    matchbox.position.set(0.02, 0.218, -0.22);
    group.add(matchbox);

    return group;
  }

  // ========================================================
  // 12. TRADITIONAL WOODEN DINGI BOAT (ডিঙ্গি নৌকা - Photo 2)
  // Curved Wooden Hull, Bamboo Woven Canopy (Chhoi), Boatman (Majhi) & Oar (Boitha)
  // ========================================================
  createDingiBoat() {
    const boat = new THREE.Group();
    boat.name = 'dingi_nouka';

    const hullWoodMat = new THREE.MeshStandardMaterial({
      color: 0x3e2723, // Weathered dark mahogany / sal wood
      roughness: 0.8
    });

    // Main boat floor & bottom
    const floorGeo = new THREE.BoxGeometry(1.1, 0.12, 3.8);
    const floor = new THREE.Mesh(floorGeo, hullWoodMat);
    floor.position.y = 0.06;
    boat.add(floor);

    // Left and Right flaring side planks
    [-0.55, 0.55].forEach((sx) => {
      const sidePlankGeo = new THREE.BoxGeometry(0.08, 0.45, 3.8);
      const sidePlank = new THREE.Mesh(sidePlankGeo, hullWoodMat);
      sidePlank.position.set(sx, 0.28, 0);
      sidePlank.rotation.z = sx > 0 ? 0.25 : -0.25;
      boat.add(sidePlank);
    });

    // Pointed upturned Bow (Golui) and Stern
    [-1, 1].forEach((dir) => {
      const tipGeo = new THREE.ConeGeometry(0.55, 1.2, 5);
      tipGeo.rotateX(dir > 0 ? -Math.PI / 3 : Math.PI / 3);
      const tip = new THREE.Mesh(tipGeo, hullWoodMat);
      tip.position.set(0, 0.35, dir * 2.3);
      tip.scale.set(0.9, 0.5, 1.1);
      boat.add(tip);

      // Brass / metal ornamental cap on prow
      const prowCap = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 8, 8),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8, roughness: 0.3 })
      );
      prowCap.position.set(0, 0.65, dir * 2.7);
      boat.add(prowCap);
    });

    // Arched Bamboo Canopy (Chhoi / বাঁশের ছই - Photo 2)
    const chhoiGeo = new THREE.CylinderGeometry(0.68, 0.68, 1.9, 16, 1, true, 0, Math.PI);
    chhoiGeo.rotateZ(Math.PI / 2);
    chhoiGeo.rotateY(Math.PI / 2);
    const chhoi = new THREE.Mesh(chhoiGeo, this.bambooWallMat);
    chhoi.position.set(0, 0.48, -0.2);
    boat.add(chhoi);

    // Woven bamboo ribs / hoops supporting chhoi
    [-0.8, 0, 0.8].forEach((rz) => {
      const ribGeo = new THREE.TorusGeometry(0.69, 0.025, 6, 16, Math.PI);
      ribGeo.rotateZ(Math.PI / 2);
      ribGeo.rotateY(Math.PI / 2);
      const rib = new THREE.Mesh(ribGeo, this.woodMat);
      rib.position.set(0, 0.48, -0.2 + rz);
      boat.add(rib);
    });

    // Boatman (Majhi / মাঝি) sitting at stern
    const majhiGroup = new THREE.Group();
    majhiGroup.position.set(0, 0.22, 1.35);

    const skinMat = new THREE.MeshStandardMaterial({ color: 0xd4a373, roughness: 0.7 });
    const lungiMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.8 }); // Blue lungi
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.5 });

    // Seated Lungi legs
    const lungi = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.28, 0.42), lungiMat);
    lungi.position.y = 0.14;
    majhiGroup.add(lungi);

    // Torso (sleeveless / bare chest)
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.42, 0.2), skinMat);
    torso.position.set(0, 0.46, -0.05);
    torso.rotation.x = -0.15; // Leaning forward slightly as he rows
    majhiGroup.add(torso);

    // Head & Hair
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 10), skinMat);
    head.position.set(0, 0.74, -0.1);
    majhiGroup.add(head);

    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.115, 10, 10), hairMat);
    hair.position.set(0, 0.77, -0.1);
    hair.scale.set(1.02, 1.05, 1.02);
    majhiGroup.add(hair);

    // Majhi Hat (Mathal / বাঁশের মাথাল - Traditional cone hat)
    const mathalGeo = new THREE.ConeGeometry(0.24, 0.12, 12);
    const mathal = new THREE.Mesh(mathalGeo, this.bambooWallMat);
    mathal.position.set(0, 0.86, -0.1);
    majhiGroup.add(mathal);

    // Rowing Oar (Boitha / বৈঠা)
    const oarGroup = new THREE.Group();
    oarGroup.position.set(0.32, 0.4, 0);
    oarGroup.rotation.z = -Math.PI * 0.32;
    oarGroup.rotation.x = Math.PI * 0.25;

    // Shaft
    const oarShaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.025, 0.025, 2.2, 8),
      this.woodMat
    );
    oarShaft.position.y = -0.5;
    oarGroup.add(oarShaft);

    // Paddle Blade dipping in water
    const oarBlade = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.55, 0.02),
      this.woodMat
    );
    oarBlade.position.y = -1.4;
    oarGroup.add(oarBlade);

    majhiGroup.add(oarGroup);
    boat.add(majhiGroup);

    return boat;
  }

  // ========================================================
  // 13. FLOATING WATER HYACINTH CLUSTERS (কচুরিপানা - Photo 2)
  // ========================================================
  createWaterHyacinthCluster() {
    const cluster = new THREE.Group();
    cluster.name = 'kochuripana_cluster';

    const leafMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.5 });
    const flowerMat = new THREE.MeshBasicMaterial({ color: 0xc084fc }); // delicate violet/lilac

    for (let i = 0; i < 7; i++) {
      const angle = (i / 7) * Math.PI * 2 + Math.random() * 0.4;
      const dist = 0.25 + Math.random() * 0.45;
      const lx = Math.cos(angle) * dist;
      const lz = Math.sin(angle) * dist;

      // Rounded heart/oval leaf pad
      const leafGeo = new THREE.SphereGeometry(0.12, 8, 6);
      leafGeo.scale(1.3, 0.2, 1.0);
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.position.set(lx, 0.02, lz);
      cluster.add(leaf);

      // Occasional tiny lilac flower spike
      if (i % 2 === 0) {
        const flower = new THREE.Mesh(
          new THREE.ConeGeometry(0.04, 0.12, 6),
          flowerMat
        );
        flower.position.set(lx * 0.8, 0.08, lz * 0.8);
        cluster.add(flower);
      }
    }

    return cluster;
  }

  // ========================================================
  // 14. AUTHENTIC BANGLADESHI RIVER BRIDGE (নদীর ওপর লাল-সাদা সেতু - User Photos)
  // Exact Colors & Architecture:
  // - Vivid Red Concrete Vertical Posts & Chamfered Caps
  // - Two Tiers of Clean Off-White Concrete Horizontal Railings
  // - Raised Warning Curbs with 45-degree Diagonal Red & White Warning Stripes
  // - Galvanized Utility Pipeline with Red Mounting Brackets on Left Railing
  // - Subtle Parabolic Arch Profile Rising over the River Center
  // - Red Fascia Girder Beams & Red Trestle Support Piers in River Water
  // - Wide Flowing River (নদী), Traditional Dingi Boat (ডিঙ্গি নৌকা), Kochuripana & RHD Plaque!
  // ========================================================
  createBangladeshiRiverBridge(roadWidth = 13.0, bridgeLength = 60) {
    const bridge = new THREE.Group();
    bridge.name = 'bangladeshi_river_bridge';

    const halfW = roadWidth * 0.5;
    const archH = 0.45; // Gentle parabolic rise at center

    // 1. Concrete Sub-Deck Slab (Strictly beneath roadway to completely eliminate Z-fighting blinking)
    const subDeckGeo = new THREE.BoxGeometry(roadWidth + 0.8, 0.45, bridgeLength);
    const subDeckMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.8 });
    const subDeck = new THREE.Mesh(subDeckGeo, subDeckMat);
    // Lowered slightly so top of subDeck is at y = -0.055, safely below road plane (y = 0.003)
    subDeck.position.set(0, -0.28, 0);
    subDeck.receiveShadow = true;
    bridge.add(subDeck);

    // Expansion Joint strips at both ends of bridge (sitting cleanly on asphalt)
    [-bridgeLength * 0.5 + 0.3, bridgeLength * 0.5 - 0.3].forEach((ez) => {
      const jointGeo = new THREE.BoxGeometry(roadWidth + 0.2, 0.012, 0.35);
      const joint = new THREE.Mesh(jointGeo, new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.9 }));
      joint.position.set(0, 0.006, ez);
      bridge.add(joint);
    });

    // 2. Red Side-Fascia Girder Beams (Along bridge sides below deck - Photo 2)
    [-1, 1].forEach((side) => {
      const gx = (halfW + 0.3) * side;

      // Heavy Red Girder
      const girderGeo = new THREE.BoxGeometry(0.38, 0.85, bridgeLength);
      const girder = new THREE.Mesh(girderGeo, this.bridgeRedMat);
      girder.position.set(gx, -0.45, 0);
      this.applyShadow(girder);
      bridge.add(girder);

      // Off-white bottom flange trim
      const flangeGeo = new THREE.BoxGeometry(0.44, 0.12, bridgeLength);
      const flange = new THREE.Mesh(flangeGeo, this.bridgeWhiteMat);
      flange.position.set(gx, -0.85, 0);
      bridge.add(flange);
    });

    // 3. Trestle Pier Bents dipping into River Water (Photo 2)
    const pierZPositions = [-18, -6, 6, 18];
    pierZPositions.forEach((pz) => {
      const pierBent = new THREE.Group();
      pierBent.position.set(0, 0, pz);

      // Red Cap Beam under deck
      const capGeo = new THREE.BoxGeometry(roadWidth + 1.2, 0.45, 0.95);
      const cap = new THREE.Mesh(capGeo, this.bridgeRedMat);
      cap.position.y = -0.55;
      pierBent.add(cap);

      // 4 Heavy Inclined Red Concrete Columns extending into riverbed (y = -3.2m)
      [-5.2, -1.8, 1.8, 5.2].forEach((cx) => {
        const colGeo = new THREE.CylinderGeometry(0.24, 0.28, 3.2, 8);
        const col = new THREE.Mesh(colGeo, this.bridgeRedMat);
        col.position.set(cx, -1.95, 0);
        col.rotation.z = cx > 0 ? -0.06 : 0.06; // slight trestle batter
        pierBent.add(col);

        // Dark waterline ring stain
        const waterRing = new THREE.Mesh(
          new THREE.CylinderGeometry(0.29, 0.29, 0.28, 8),
          new THREE.MeshStandardMaterial({ color: 0x0f2922, roughness: 0.9 })
        );
        waterRing.position.set(cx, -1.35, 0);
        pierBent.add(waterRing);
      });

      // Horizontal Cross-brace
      const braceGeo = new THREE.BoxGeometry(roadWidth + 0.6, 0.22, 0.3);
      const brace = new THREE.Mesh(braceGeo, this.bridgeRedMat);
      brace.position.y = -1.6;
      pierBent.add(brace);

      bridge.add(pierBent);
    });

    // 4. Raised Warning Curbs with Diagonal Red & White Stripes (Photo 1)
    [-1, 1].forEach((side) => {
      const cx = (halfW + 0.16) * side;
      const curbGeo = new THREE.BoxGeometry(0.34, 0.28, bridgeLength);
      const curb = new THREE.Mesh(curbGeo, this.bridgeCurbMat);
      curb.position.set(cx, 0.14, 0);
      curb.receiveShadow = true;
      bridge.add(curb);
    });

    // 5. Red & White Concrete Railings with Arch Profile (Optimized: 16 posts per side)
    const postCount = 16;
    const postZList = [];
    for (let i = 0; i < postCount; i++) {
      postZList.push(-28.5 + (i / (postCount - 1)) * 57.0);
    }

    [-1, 1].forEach((side) => {
      const rx = (halfW + 0.16) * side;

      // Vertical Posts (লাল রঙের পিলার)
      postZList.forEach((pz) => {
        const archY = Math.sin(((pz + 28.5) / 57) * Math.PI) * archH;

        // Post shaft
        const postGeo = new THREE.BoxGeometry(0.22, 0.96, 0.22);
        const post = new THREE.Mesh(postGeo, this.bridgeRedMat);
        post.position.set(rx, 0.28 + 0.48 + archY, pz);
        this.applyShadow(post);
        bridge.add(post);

        // Pyramid cap
        const capGeo = new THREE.ConeGeometry(0.18, 0.08, 4);
        capGeo.rotateY(Math.PI / 4);
        const pCap = new THREE.Mesh(capGeo, this.bridgeRedMat);
        pCap.position.set(rx, 0.28 + 0.96 + 0.04 + archY, pz);
        bridge.add(pCap);
      });

      // Horizontal Rails (সাদা রঙের রেলিং) between posts
      for (let i = 0; i < postZList.length - 1; i++) {
        const z1 = postZList[i];
        const z2 = postZList[i + 1];
        const midZ = (z1 + z2) * 0.5;
        const segLen = z2 - z1;
        const archY = Math.sin(((midZ + 28.5) / 57) * Math.PI) * archH;

        // Mid Rail (Off-white concrete)
        const midRail = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.12, segLen), this.bridgeWhiteMat);
        midRail.position.set(rx, 0.28 + 0.44 + archY, midZ);
        bridge.add(midRail);

        // Top Continuous Handrail (Off-white concrete)
        const topRail = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.12, segLen), this.bridgeWhiteMat);
        topRail.position.set(rx, 0.28 + 0.92 + archY, midZ);
        bridge.add(topRail);

        // Utility Pipeline segment (Galvanized steel pipe on left railing)
        if (side === -1) {
          const pipeGeo = new THREE.CylinderGeometry(0.065, 0.065, segLen, 8);
          pipeGeo.rotateX(Math.PI / 2);
          const pipe = new THREE.Mesh(pipeGeo, this.pipelineMat);
          pipe.position.set(rx + 0.09, 0.28 + 0.32 + archY, midZ);
          bridge.add(pipe);
        }
      }
    });

    // 6. The Wide River (নদী) Beneath the Bridge (Photo 2)
    // Expansive water surface spanning x = -90m to +90m and z = -24m to +24m
    const riverGeo = new THREE.PlaneGeometry(180, 48);
    riverGeo.rotateX(-Math.PI / 2);
    const river = new THREE.Mesh(riverGeo, this.riverWaterMat);
    river.position.set(0, -1.35, 0);
    river.receiveShadow = true;
    bridge.add(river);

    // Riverbed beneath the water
    const bedGeo = new THREE.PlaneGeometry(180, 48);
    bedGeo.rotateX(-Math.PI / 2);
    const bed = new THREE.Mesh(bedGeo, new THREE.MeshStandardMaterial({ color: 0x1c1917, roughness: 0.95 }));
    bed.position.set(0, -3.2, 0);
    bridge.add(bed);

    // Sloping River Embankments (নদীর পার) at upstream and downstream ends
    [-1, 1].forEach((dir) => {
      const bankZ = dir * 26.5; // z = -26.5 and +26.5
      // Left and right embankment banks
      [-1, 1].forEach((side) => {
        const bankGeo = new THREE.PlaneGeometry(75, 7);
        bankGeo.rotateX(dir > 0 ? -Math.PI * 0.38 : Math.PI * 0.38);
        const bank = new THREE.Mesh(bankGeo, this.mudPlinthMat);
        bank.position.set(side * 48, -0.7, bankZ);
        bridge.add(bank);
      });
    });

    // 7. Traditional Wooden Dingi Boat (ডিঙ্গি নৌকা - Photo 2)
    // Floating on the river water near the bridge
    const dingi = this.createDingiBoat();
    dingi.position.set(16.5, -1.35, 3.5);
    dingi.rotation.y = 0.45;
    bridge.add(dingi);

    // Register dingi boat for water bobbing animation
    this.animatedAnimals.push({
      type: 'dingi',
      mesh: dingi,
      startY: -1.35,
      seed: Math.random() * 10
    });

    // 8. Water Hyacinth Patches (কচুরিপানা - Photo 2)
    const hyacinthPositions = [
      [14.5, -1.34, 1.5],
      [19.0, -1.34, 5.5],
      [-15.0, -1.34, -4.0],
      [-7.5, -1.34, 6.0],
      [7.5, -1.34, -6.0]
    ];
    hyacinthPositions.forEach(([hx, hy, hz]) => {
      const cluster = this.createWaterHyacinthCluster();
      cluster.position.set(hx, hy, hz);
      bridge.add(cluster);
    });

    // 9. RHD Bridge Approach Signboard / Milestone (Photo 1)
    // Placed at the bridge approach corner
    const signGroup = new THREE.Group();
    signGroup.position.set(halfW + 0.95, 0, -28.8);

    // Concrete striped milestone post
    const postMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.35, 1.2, 0.35),
      this.bridgeCurbMat
    );
    postMesh.position.y = 0.6;
    signGroup.add(postMesh);

    // Official RHD Bridge Plaque Canvas
    const bpCanvas = document.createElement('canvas');
    bpCanvas.width = 512;
    bpCanvas.height = 320;
    const bpCtx = bpCanvas.getContext('2d');

    // RHD Forest Green
    bpCtx.fillStyle = '#15803d';
    bpCtx.fillRect(0, 0, 512, 320);

    // Gold border
    bpCtx.strokeStyle = '#facc15';
    bpCtx.lineWidth = 12;
    bpCtx.strokeRect(8, 8, 496, 304);

    // White inner border
    bpCtx.strokeStyle = '#ffffff';
    bpCtx.lineWidth = 4;
    bpCtx.strokeRect(22, 22, 468, 276);

    // Bengali Bridge Name
    bpCtx.fillStyle = '#ffffff';
    bpCtx.font = 'bold 56px sans-serif';
    bpCtx.textAlign = 'center';
    bpCtx.textBaseline = 'middle';
    bpCtx.fillText('মেঘনা নদী সেতু', 256, 85);

    // English Bridge Name
    bpCtx.fillStyle = '#facc15';
    bpCtx.font = '900 44px sans-serif';
    bpCtx.fillText('MEGHNA RIVER BRIDGE', 256, 160);

    // Length & Authority
    bpCtx.fillStyle = '#e2e8f0';
    bpCtx.font = 'bold 28px sans-serif';
    bpCtx.fillText('দৈর্ঘ্য: ৬০ মিটার | LENGTH: 60M', 256, 225);

    bpCtx.fillStyle = '#86efac';
    bpCtx.font = 'bold 22px sans-serif';
    bpCtx.fillText('সড়ক ও জনপথ অধিদপ্তর (RHD)', 256, 275);

    const bpTex = new THREE.CanvasTexture(bpCanvas);
    const bpMat = new THREE.MeshStandardMaterial({ map: bpTex, roughness: 0.4 });
    const bpMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.75), bpMat);
    bpMesh.position.set(0, 1.35, -0.05);
    bpMesh.rotation.y = -Math.PI / 4; // Angled towards oncoming player!
    signGroup.add(bpMesh);

    bridge.add(signGroup);

    // 10. Red & White Striped Guide Posts / Bollards lining Approaches (Photo 2)
    [-1, 1].forEach((side) => {
      const bx = (halfW + 0.38) * side;
      // Approach 1 (entering bridge)
      for (let bz = -29.2; bz <= -23.5; bz += 1.4) {
        const bollard = new THREE.Mesh(
          new THREE.CylinderGeometry(0.1, 0.1, 0.85, 12),
          this.bollardMat
        );
        bollard.position.set(bx, 0.425, bz);
        this.applyShadow(bollard);
        bridge.add(bollard);

        const cap = new THREE.Mesh(
          new THREE.SphereGeometry(0.1, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5),
          this.bridgeRedMat
        );
        cap.position.set(bx, 0.85, bz);
        bridge.add(cap);
      }
      // Approach 2 (exiting bridge)
      for (let bz = 23.5; bz <= 29.2; bz += 1.4) {
        const bollard = new THREE.Mesh(
          new THREE.CylinderGeometry(0.1, 0.1, 0.85, 12),
          this.bollardMat
        );
        bollard.position.set(bx, 0.425, bz);
        this.applyShadow(bollard);
        bridge.add(bollard);

        const cap = new THREE.Mesh(
          new THREE.SphereGeometry(0.1, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5),
          this.bridgeRedMat
        );
        cap.position.set(bx, 0.85, bz);
        bridge.add(cap);
      }
    });

    return bridge;
  }

  // ========================================================
  // 14. AUTHENTIC BANGLADESHI HUMAN FIGURE (For Stage & Adda)
  // Lightweight, expressive, optimized 3D character
  // ========================================================
  createFigure({ shirtMat, pantsMat, isSitting = false, isSmoking = false }) {
    const figure = new THREE.Group();
    figure.name = 'human_figure';
    figure.scale.set(1.15, 1.15, 1.15);

    // Torso
    const torsoGeo = new THREE.BoxGeometry(0.36, 0.52, 0.22);
    const torso = new THREE.Mesh(torsoGeo, shirtMat || this.shirtTealMat);
    torso.position.y = isSitting ? 0.72 : 1.12;
    figure.add(torso);

    // Head
    const headGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const head = new THREE.Mesh(headGeo, this.skinMat);
    head.position.y = isSitting ? 1.08 : 1.48;
    figure.add(head);

    // Hair cap
    const hairGeo = new THREE.SphereGeometry(0.126, 8, 8);
    hairGeo.scale(1.02, 1.05, 1.02);
    const hair = new THREE.Mesh(hairGeo, this.hairMat);
    hair.position.set(0, (isSitting ? 1.08 : 1.48) + 0.02, -0.01);
    figure.add(hair);

    // Arms
    [-0.22, 0.22].forEach((ax, idx) => {
      const armGeo = new THREE.CylinderGeometry(0.045, 0.04, 0.48, 6);
      const arm = new THREE.Mesh(armGeo, shirtMat || this.shirtTealMat);
      if (isSitting) {
        arm.position.set(ax, 0.70, 0.10);
        arm.rotation.x = 0.35;
      } else if (isSmoking && idx === 1) {
        // Raised arm holding cigarette
        arm.position.set(ax * 0.8, 1.25, -0.08);
        arm.rotation.z = -0.6;
        arm.rotation.x = -0.5;

        // Cigarette with glowing cherry
        const cigGeo = new THREE.CylinderGeometry(0.01, 0.01, 0.12, 4);
        cigGeo.rotateX(Math.PI / 2);
        const cig = new THREE.Mesh(cigGeo, this.panjabiMat);
        cig.position.set(0, 0.24, -0.08);
        arm.add(cig);

        const emberGeo = new THREE.SphereGeometry(0.015, 4, 4);
        const ember = new THREE.Mesh(emberGeo, new THREE.MeshBasicMaterial({ color: 0xff4400 }));
        ember.position.set(0, 0, -0.06);
        cig.add(ember);
      } else {
        arm.position.set(ax, 1.08, 0);
        arm.rotation.z = ax > 0 ? -0.1 : 0.1;
      }
      figure.add(arm);
    });

    // Legs
    const legPants = pantsMat || this.stageTrussMat;
    if (isSitting) {
      // Horizontal thighs + vertical calves
      [-0.10, 0.10].forEach((lx) => {
        const thighGeo = new THREE.BoxGeometry(0.11, 0.12, 0.42);
        const thigh = new THREE.Mesh(thighGeo, legPants);
        thigh.position.set(lx, 0.48, 0.22);
        figure.add(thigh);

        const calfGeo = new THREE.BoxGeometry(0.10, 0.44, 0.10);
        const calf = new THREE.Mesh(calfGeo, legPants);
        calf.position.set(lx, 0.22, 0.40);
        figure.add(calf);
      });
    } else {
      [-0.09, 0.09].forEach((lx) => {
        const legGeo = new THREE.CylinderGeometry(0.055, 0.048, 0.82, 6);
        const leg = new THREE.Mesh(legGeo, legPants);
        leg.position.set(lx, 0.41, 0);
        figure.add(leg);
      });
    }

    return figure;
  }

  // ========================================================
  // 15. AUTHENTIC UDDAN OPEN-AIR AMPHITHEATER STAGE & ROADSIDE TONG ADDA
  // Created 100% faithful to User's Reference Artwork:
  // - Large Semi-Circular Blue Corrugated Steel Truss Canopy Roof
  // - Tiered Elevated Platform Stage with Golden Ochre Facings & Blue Borders
  // - Sloping Side Access Ramps with Blue Railings
  // - Traditional Folk Art Terracotta & Golden Backdrop Mural with Arched Crest
  // - Front Garden Planter Boxes with Lush Shrubbery
  // - Performers & People Sitting / Relaxing on Stage Steps
  // - Scenic Rolling Hills (Pahar) behind the Stage
  // - Authentic Roadside Tong er Cha er Dokan with Live Adda in Front!
  // ========================================================
  createUddanOpenStageWithTong(side = 1) {
    const complex = new THREE.Group();
    complex.name = 'uddan_open_stage_complex';

    // -----------------------------------------------------------
    // 1. SCENIC BACKGROUND HILLS (রোডের পেছনের পাহাড়)
    // -----------------------------------------------------------
    const hillsGroup = new THREE.Group();
    hillsGroup.position.set(33 * side, 0, -4.0);

    // Main towering center hill behind the stage
    const mainHillGeo = new THREE.ConeGeometry(18, 22, 14);
    const mainHill = new THREE.Mesh(mainHillGeo, this.hillDarkGreenMat);
    mainHill.position.set(0, 11, 0);
    hillsGroup.add(mainHill);

    // Left rolling hill ridge
    const hillLGeo = new THREE.ConeGeometry(15, 17, 12);
    const hillL = new THREE.Mesh(hillLGeo, this.hillGreenMat);
    hillL.position.set(2 * side, 8.5, -18);
    hillsGroup.add(hillL);

    // Right rolling hill ridge
    const hillRGeo = new THREE.ConeGeometry(16, 18, 12);
    const hillR = new THREE.Mesh(hillRGeo, this.hillGreenMat);
    hillR.position.set(2 * side, 9.0, 15);
    hillsGroup.add(hillR);

    // Distant ridge trees on the peaks
    [-14, -6, 6, 14].forEach((tz) => {
      const tGeo = new THREE.ConeGeometry(2.0, 5.0, 6);
      const tree = new THREE.Mesh(tGeo, this.treeCrownMat);
      tree.position.set(-3 * side, 15, tz);
      hillsGroup.add(tree);
    });
    complex.add(hillsGroup);

    // -----------------------------------------------------------
    // 2. PARK COURTYARD GROUND & ORNAMENTAL TREES (উদ্যান চত্বর)
    // -----------------------------------------------------------
    const plazaGroup = new THREE.Group();
    plazaGroup.position.set(20 * side, 0, -4.0);

    const plazaGeo = new THREE.PlaneGeometry(20, 42);
    plazaGeo.rotateX(-Math.PI / 2);
    const plaza = new THREE.Mesh(plazaGeo, this.pavingPlazaMat);
    plaza.position.set(0, 0.015, 0);
    plaza.receiveShadow = true;
    plazaGroup.add(plaza);

    // 2 Grand Shade Trees flanking stage on left & right
    [-16, 12].forEach((tz) => {
      const treeGroup = new THREE.Group();
      treeGroup.position.set(0, 0, tz);

      const trunkGeo = new THREE.CylinderGeometry(0.35, 0.45, 4.5, 8);
      const trunk = new THREE.Mesh(trunkGeo, this.palmTrunkMat);
      trunk.position.y = 2.25;
      treeGroup.add(trunk);

      const crownGeo = new THREE.SphereGeometry(3.8, 8, 8);
      crownGeo.scale(1.25, 0.85, 1.25);
      const crown = new THREE.Mesh(crownGeo, this.treeCrownMat);
      crown.position.y = 5.4;
      treeGroup.add(crown);

      plazaGroup.add(treeGroup);
    });
    complex.add(plazaGroup);

    // -----------------------------------------------------------
    // 3. THE OPEN-AIR AMPHITHEATER STAGE (উন্মুক্ত মঞ্চ - From User Photo!)
    // -----------------------------------------------------------
    const stageGroup = new THREE.Group();
    stageGroup.position.set(21 * side, 0, -4.0);
    // Face directly toward the highway road!
    stageGroup.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;

    // A. Stage Platform (মঞ্চের ভিত্তি)
    const stageBaseGeo = new THREE.BoxGeometry(14.0, 0.90, 8.0);
    const stageBase = new THREE.Mesh(stageBaseGeo, this.stageBaseYellowMat);
    stageBase.position.set(0, 0.45, 0);
    this.applyShadow(stageBase);
    stageGroup.add(stageBase);

    // Stage Top Floor
    const stageFloorGeo = new THREE.BoxGeometry(14.2, 0.08, 8.2);
    const stageFloor = new THREE.Mesh(stageFloorGeo, this.stageFloorMat);
    stageFloor.position.set(0, 0.94, 0);
    stageGroup.add(stageFloor);

    // Blue Border Trim along front edge (Matching Image!)
    const borderGeo = new THREE.BoxGeometry(14.3, 0.08, 0.2);
    const border = new THREE.Mesh(borderGeo, this.stageBorderBlueMat);
    border.position.set(0, 0.94, 4.1);
    stageGroup.add(border);

    // Front Steps
    const step1 = new THREE.Mesh(new THREE.BoxGeometry(11.0, 0.30, 1.4), this.stageBaseYellowMat);
    step1.position.set(0, 0.30, 4.7);
    stageGroup.add(step1);

    const step2 = new THREE.Mesh(new THREE.BoxGeometry(9.0, 0.30, 1.2), this.stageBaseYellowMat);
    step2.position.set(0, 0.15, 5.6);
    stageGroup.add(step2);

    // Front Planter Box Ledge with Lush Shrubbery
    const planterGeo = new THREE.BoxGeometry(8.0, 0.35, 0.5);
    const planter = new THREE.Mesh(planterGeo, this.brickMat);
    planter.position.set(0, 0.18, 6.4);
    stageGroup.add(planter);

    for (let s = -3.2; s <= 3.2; s += 1.6) {
      const shrubGeo = new THREE.SphereGeometry(0.3, 6, 6);
      shrubGeo.scale(1.3, 0.9, 1.3);
      const shrub = new THREE.Mesh(shrubGeo, this.bananaLeafMat);
      shrub.position.set(s, 0.42, 6.4);
      stageGroup.add(shrub);
    }

    // Sloping Access Ramps on Left and Right Sides with Blue Railings (Matching Image!)
    [-7.4, 7.4].forEach((rx) => {
      const rampGroup = new THREE.Group();
      rampGroup.position.set(rx, 0, 2.2);

      const rampGeo = new THREE.BoxGeometry(1.6, 0.8, 4.8);
      const ramp = new THREE.Mesh(rampGeo, this.stageBaseYellowMat);
      ramp.position.set(0, 0.40, 0);
      ramp.rotation.x = 0.18;
      rampGroup.add(ramp);

      // Blue Handrail
      const railGeo = new THREE.BoxGeometry(0.1, 0.7, 4.8);
      const rail = new THREE.Mesh(railGeo, this.stageBorderBlueMat);
      rail.position.set(rx > 0 ? 0.75 : -0.75, 0.75, 0);
      rail.rotation.x = 0.18;
      rampGroup.add(rail);

      stageGroup.add(rampGroup);
    });

    // B. Cultural Terracotta & Golden Backdrop Wall (মঞ্চের টেরাকোটা পটভূমি - Image!)
    const backdropGroup = new THREE.Group();
    backdropGroup.position.set(0, 0.9, -3.8);

    // Rear Wall Panel
    const backWallGeo = new THREE.BoxGeometry(11.5, 4.5, 0.3);
    const backWall = new THREE.Mesh(backWallGeo, this.stageTerracottaMat);
    backWall.position.set(0, 2.25, 0);
    this.applyShadow(backWall);
    backdropGroup.add(backWall);

    // Center Sculpted Golden Mural (Folk Art Relief)
    const muralGeo = new THREE.BoxGeometry(7.5, 3.4, 0.38);
    const mural = new THREE.Mesh(muralGeo, this.stageGoldEmblemMat);
    mural.position.set(0, 2.0, 0.05);
    backdropGroup.add(mural);

    // Arched Golden Crest at Top of Backdrop (Sun/Kula motif)
    const crestGeo = new THREE.CylinderGeometry(2.8, 2.8, 0.4, 16, 1, false, 0, Math.PI);
    crestGeo.rotateZ(Math.PI / 2);
    const crest = new THREE.Mesh(crestGeo, this.stageGoldEmblemMat);
    crest.position.set(0, 4.0, 0.05);
    backdropGroup.add(crest);

    // Flanking Wooden-Slat Acoustic Screens (Matching Image!)
    [-5.2, 5.2].forEach((wx) => {
      const screenGeo = new THREE.BoxGeometry(1.8, 4.2, 0.35);
      const screen = new THREE.Mesh(screenGeo, this.woodMat);
      screen.position.set(wx, 2.1, 0.02);
      backdropGroup.add(screen);
    });
    stageGroup.add(backdropGroup);

    // C. Arched Steel Truss Canopy Roof (ইস্পাতের বাঁকানো নীল ছাদ - Hero Feature from Image!)
    const archRoofGroup = new THREE.Group();
    archRoofGroup.position.set(0, 0.9, 0);

    const roofRadius = 7.5;
    const roofDepth = 8.5;
    const archRoofGeo = new THREE.CylinderGeometry(
      roofRadius, roofRadius,
      roofDepth,
      24, 1,
      true,
      Math.PI * 0.12,
      Math.PI * 0.76
    );
    archRoofGeo.rotateX(Math.PI / 2);
    const archRoof = new THREE.Mesh(archRoofGeo, this.stageBlueRoofMat);
    archRoof.position.set(0, 0.0, 0);
    this.applyShadow(archRoof);
    archRoofGroup.add(archRoof);

    // Front & Rear Heavy Curved Steel Arch Beams
    [-roofDepth * 0.5, roofDepth * 0.5].forEach((rz) => {
      const rimArcPoints = [];
      for (let k = 0; k <= 20; k++) {
        const theta = Math.PI * 0.12 + (k / 20) * (Math.PI * 0.76);
        const x = Math.cos(theta) * roofRadius;
        const y = Math.sin(theta) * roofRadius;
        rimArcPoints.push(new THREE.Vector3(x, y, rz));
      }
      const rimCurve = new THREE.CatmullRomCurve3(rimArcPoints);
      const rimGeo = new THREE.TubeGeometry(rimCurve, 20, 0.14, 8, false);
      const rimMesh = new THREE.Mesh(rimGeo, this.stageTrussMat);
      archRoofGroup.add(rimMesh);
    });

    // Radial Steel Truss Braces
    [-roofDepth * 0.5 + 0.1, roofDepth * 0.5 - 0.1].forEach((rz) => {
      [0.25, 0.40, 0.50, 0.60, 0.75].forEach((t) => {
        const theta = Math.PI * 0.12 + t * (Math.PI * 0.76);
        const x = Math.cos(theta) * roofRadius;
        const y = Math.sin(theta) * roofRadius;
        const strutPoints = [new THREE.Vector3(0, 0, rz), new THREE.Vector3(x, y, rz)];
        const strutCurve = new THREE.CatmullRomCurve3(strutPoints);
        const strutGeo = new THREE.TubeGeometry(strutCurve, 2, 0.06, 6, false);
        const strutMesh = new THREE.Mesh(strutGeo, this.stageTrussMat);
        archRoofGroup.add(strutMesh);
      });
    });

    // Front Horizontal Fascia Beam with Golden Emblem (Matching Image!)
    const fasciaGeo = new THREE.BoxGeometry(12.0, 0.75, 0.25);
    const fascia = new THREE.Mesh(fasciaGeo, this.stageTrussMat);
    fascia.position.set(0, 5.8, roofDepth * 0.5 + 0.1);
    archRoofGroup.add(fascia);

    // Golden Circular Emblem on Fascia
    const emblemGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.12, 16);
    emblemGeo.rotateX(Math.PI / 2);
    const emblem = new THREE.Mesh(emblemGeo, this.stageGoldEmblemMat);
    emblem.position.set(0, 6.4, roofDepth * 0.5 + 0.15);
    archRoofGroup.add(emblem);

    stageGroup.add(archRoofGroup);

    // D. People on Stage (পারফর্মার ও আড্ডারত মানুষ - Matching Image!)
    const p1 = this.createFigure({ shirtMat: this.panjabiMat, pantsMat: this.panjabiMat, isSitting: false });
    p1.position.set(-1.2, 0.94, -0.6);
    stageGroup.add(p1);

    const p2 = this.createFigure({ shirtMat: this.shirtRedMat, pantsMat: this.stageTrussMat, isSitting: false });
    p2.position.set(-0.4, 0.94, -0.6);
    p2.rotation.y = -Math.PI * 0.4;
    stageGroup.add(p2);

    const p3 = this.createFigure({ shirtMat: this.shirtTealMat, pantsMat: this.stageTrussMat, isSitting: true });
    p3.position.set(2.4, 0.30, 4.9);
    stageGroup.add(p3);

    const p4 = this.createFigure({ shirtMat: this.stageBaseYellowMat, pantsMat: this.lungiPlaidMat, isSitting: true });
    p4.position.set(3.4, 0.30, 4.9);
    stageGroup.add(p4);

    complex.add(stageGroup);

    // -----------------------------------------------------------
    // 4. ROADSIDE TONG ER CHA ER DOKAN WITH LIVE ADDA (User requirement!)
    // Located right by the road edge in front of the stage:
    // In full, close-up, vivid view of the player as they race by!
    // -----------------------------------------------------------
    const tongGroup = new THREE.Group();
    tongGroup.position.set(11.3 * side, 0, 8.0);
    tongGroup.rotation.y = side > 0 ? -Math.PI * 0.5 - 0.25 : Math.PI * 0.5 + 0.25;

    // Stall Structure & Tin Roof
    const tongStall = this.createTeaStall();
    tongGroup.add(tongStall);

    // Red Stall Signboard: "উদ্যান চা স্টল & স্ন্যাক্স"
    const signGeo = new THREE.BoxGeometry(2.4, 0.45, 0.08);
    const signMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.5 });
    const sign = new THREE.Mesh(signGeo, signMat);
    sign.position.set(0, 2.55, 0.85);
    tongGroup.add(sign);

    // Hanging Yellow Bananas from front stall post
    const bananaGroup = new THREE.Group();
    bananaGroup.position.set(1.4, 1.9, 0.9);
    for (let b = 0; b < 6; b++) {
      const bGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.22, 6);
      bGeo.rotateZ(0.2 + (b % 2) * 0.2);
      const bMesh = new THREE.Mesh(bGeo, this.stageGoldEmblemMat);
      bMesh.position.set((b % 3) * 0.06 - 0.06, -Math.floor(b / 3) * 0.15, 0);
      bananaGroup.add(bMesh);
    }
    tongGroup.add(bananaGroup);

    // THE ADDA GROUP (টংয়ের দোকানে আড্ডারত মানুষ)
    // 1. Tea Stall Mama (দোকানি) behind the counter
    const mama = this.createFigure({ shirtMat: this.shirtTealMat, pantsMat: this.lungiPlaidMat, isSitting: false });
    mama.position.set(0.2, 0, -0.4);
    mama.rotation.y = Math.PI;
    tongGroup.add(mama);

    // 2. Friend 1: Sitting on bench holding tea cup
    const friend1 = this.createFigure({ shirtMat: this.shirtRedMat, pantsMat: this.stageTrussMat, isSitting: true });
    friend1.position.set(-0.6, 0.45, 1.8);
    friend1.rotation.y = 0;
    tongGroup.add(friend1);

    // 3. Friend 2: Sitting on bench laughing with friend 1
    const friend2 = this.createFigure({ shirtMat: this.panjabiMat, pantsMat: this.panjabiMat, isSitting: true });
    friend2.position.set(0.6, 0.45, 1.8);
    friend2.rotation.y = -0.3;
    tongGroup.add(friend2);

    // 4. Friend 3: Standing leaning against post smoking cigarette
    const friend3 = this.createFigure({ shirtMat: this.stageBaseYellowMat, pantsMat: this.stageTrussMat, isSitting: false, isSmoking: true });
    friend3.position.set(1.65, 0, 1.5);
    friend3.rotation.y = -Math.PI * 0.4;
    tongGroup.add(friend3);

    complex.add(tongGroup);

    return complex;
  }

  // ========================================================
  // 16. AUTHENTIC UIU PERMANENT CAMPUS (United International University)
  // Recreated with 100% precision from User's Reference Photos:
  // - Multi-Tower Modern Campus Skyscraper Complex set back from road for full panoramic visualization
  // - Open flat green landscape around UIU ("ফাঁকা স্পেসের মাঝখানে বিল্ডিংটা থাকবে, পেছনে ও সামনে কোনো পাহাড় থাকবে না")
  // - Exact photo colors: Warm stone grey concrete frame, terracotta red brick accents, white sunshades
  // - Right Tower with glowing Neon Red-Orange "UIU" Logo & 3D illuminated letters matching the aerial photo
  // - Central Glass Atrium with REAL 3D structural steel diagonal X-trusses / cross-bracing across multiple floors
  // - Sprawling rectangular football ground with bold white center circle, goalposts, and players
  // - White sideline spectator marquee tents (শামিয়ানা / তাঁবু) & sports banners
  // - Scenic natural water canal along the left bank with lush vegetation (Photo match!)
  // - Entrance gate, perimeter boundary fence, and paved grand promenade
  // ========================================================
  createUIUCampus(side = 1) {
    const campus = new THREE.Group();
    campus.name = 'uiu_permanent_campus';

    // -----------------------------------------------------------
    // 0. VAST EXPANSIVE FLAT GREEN CAMPUS BASE APRON
    // Pure open green space - safely set back from highway road
    // -----------------------------------------------------------
    const baseApronGeo = new THREE.PlaneGeometry(88, 112);
    baseApronGeo.rotateX(-Math.PI / 2);
    const baseApron = new THREE.Mesh(baseApronGeo, this.paddyFieldMat);
    baseApron.position.set(60 * side, 0.005, 0);
    baseApron.receiveShadow = true;
    campus.add(baseApron);

    // -----------------------------------------------------------
    // 1. CAMPUS FOOTBALL GROUND & GREEN LAWN (UIU খেলার মাঠ)
    // Set back from highway road (Center at x = 48m * side)
    // Rectangular 4-cornered ground with bold white center circle & framing trees!
    // -----------------------------------------------------------
    const fieldGroup = new THREE.Group();
    fieldGroup.position.set(48 * side, 0, 0);

    // A. Main Football Pitch (38m wide x 68m long)
    const lawnGeo = new THREE.PlaneGeometry(38, 68);
    lawnGeo.rotateX(-Math.PI / 2);
    const lawn = new THREE.Mesh(lawnGeo, this.uiuLawnMat);
    lawn.position.set(0, 0.02, 0);
    lawn.receiveShadow = true;
    fieldGroup.add(lawn);

    // Surrounding green turf apron
    const apronGeo = new THREE.PlaneGeometry(46, 76);
    apronGeo.rotateX(-Math.PI / 2);
    const apron = new THREE.Mesh(apronGeo, this.paddyFieldMat);
    apron.position.set(0, 0.01, 0);
    fieldGroup.add(apron);

    // Paved grand promenade between football field and main building
    const promenadeGeo = new THREE.PlaneGeometry(16, 76);
    promenadeGeo.rotateX(-Math.PI / 2);
    const promenade = new THREE.Mesh(promenadeGeo, this.pavingPlazaMat);
    promenade.position.set(27 * side, 0.015, 0);
    fieldGroup.add(promenade);

    // B. Regulation White Football Goalposts (North & South ends at z = -30m and +30m)
    [-30, 30].forEach((gz) => {
      const gp = new THREE.Group();
      gp.position.set(0, 0, gz);

      // Two vertical posts (3.2m high, 6.4m apart)
      [-3.2, 3.2].forEach((px) => {
        const post = new THREE.Mesh(
          new THREE.CylinderGeometry(0.08, 0.08, 3.2, 8),
          this.goalPostMat
        );
        post.position.set(px, 1.6, 0);
        gp.add(post);
      });

      // Horizontal Crossbar
      const crossbar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 6.56, 8),
        this.goalPostMat
      );
      crossbar.rotateZ(Math.PI / 2);
      crossbar.position.set(0, 3.2, 0);
      gp.add(crossbar);

      // Rear net support struts
      [-3.2, 3.2].forEach((px) => {
        const strut = new THREE.Mesh(
          new THREE.CylinderGeometry(0.04, 0.04, 2.2, 6),
          this.goalPostMat
        );
        strut.position.set(px, 1.1, gz > 0 ? 1.0 : -1.0);
        strut.rotation.x = gz > 0 ? 0.72 : -0.72;
        gp.add(strut);
      });

      fieldGroup.add(gp);
    });

    // C. Football in center circle kickoff spot
    const soccerBall = new THREE.Mesh(
      new THREE.SphereGeometry(0.28, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 })
    );
    soccerBall.position.set(0, 0.28, 0);
    fieldGroup.add(soccerBall);

    // D. Live Players on Field (Red vs Teal kit - Photo match!)
    const p1 = this.createFigure({ shirtMat: this.shirtRedMat, pantsMat: this.stageTrussMat, isSitting: false });
    p1.position.set(-2.2, 0, 1.8);
    p1.rotation.y = -0.6;
    fieldGroup.add(p1);

    const p2 = this.createFigure({ shirtMat: this.shirtTealMat, pantsMat: this.panjabiMat, isSitting: false });
    p2.position.set(2.4, 0, -1.6);
    p2.rotation.y = 2.4;
    fieldGroup.add(p2);

    const p3 = this.createFigure({ shirtMat: this.shirtRedMat, pantsMat: this.stageTrussMat, isSitting: false });
    p3.position.set(8.5, 0, 12);
    p3.rotation.y = -1.2;
    fieldGroup.add(p3);

    const p4 = this.createFigure({ shirtMat: this.shirtTealMat, pantsMat: this.panjabiMat, isSitting: false });
    p4.position.set(-9.0, 0, -14);
    p4.rotation.y = 1.1;
    fieldGroup.add(p4);

    // E. White Sideline Spectator Marquee Tents (সাদা শামিয়ানা / তাঁবু - Signature Aerial Photo Feature!)
    [-14, 14].forEach((tz) => {
      const tent = new THREE.Group();
      tent.position.set(-18 * side, 0, tz);

      // Peaked pyramid white canvas roof
      const roofGeo = new THREE.ConeGeometry(3.2, 2.2, 4);
      roofGeo.rotateY(Math.PI / 4);
      const roof = new THREE.Mesh(roofGeo, this.uiuTentMat);
      roof.position.set(0, 3.1, 0);
      tent.add(roof);

      // 4 corner steel poles
      [-1.8, 1.8].forEach((tx) => {
        [-1.8, 1.8].forEach((ty) => {
          const pole = new THREE.Mesh(
            new THREE.CylinderGeometry(0.04, 0.04, 2.2, 6),
            this.stageTrussMat
          );
          pole.position.set(tx, 1.1, ty);
          tent.add(pole);
        });
      });

      // Spectator bench with seated spectators inside tent
      const bench = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.45, 3.2),
        this.uiuConcreteMat
      );
      bench.position.set(0, 0.225, 0);
      tent.add(bench);

      const spec = this.createFigure({ shirtMat: this.stageBaseYellowMat, pantsMat: this.stageTrussMat, isSitting: true });
      spec.position.set(0, 0, 0);
      tent.add(spec);

      fieldGroup.add(tent);
    });

    // Decorative sideline pennant flags / sports markers
    [-24, -8, 8, 24].forEach((fz) => {
      const flagPole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.025, 0.025, 2.4, 6),
        this.goalPostMat
      );
      flagPole.position.set(-18 * side, 1.2, fz);
      fieldGroup.add(flagPole);

      const flag = new THREE.Mesh(
        new THREE.BoxGeometry(0.02, 0.45, 0.7),
        fz > 0 ? this.shirtRedMat : this.stageBaseYellowMat
      );
      flag.position.set(-18 * side, 2.1, fz + 0.35);
      fieldGroup.add(flag);
    });

    // F. Trees Framing the Football Ground (পাশ দিয়ে গাছ থাকবে - Photo Match!)
    // North end tree line (z = 37m)
    [-16, -8, 0, 8, 16].forEach((tx) => {
      const palm = this.createCoconutTree();
      palm.position.set(tx, 0, 37);
      fieldGroup.add(palm);
    });

    // South end tree line (z = -37m)
    [-16, -8, 0, 8, 16].forEach((tx) => {
      const palm = this.createCoconutTree();
      palm.position.set(tx, 0, -37);
      fieldGroup.add(palm);
    });

    // Extreme outer roadside corners only - KEEPING CENTER COMPLETELY OPEN & UNOBSTRUCTED!
    [-34, 34].forEach((tz) => {
      const palm = this.createCoconutTree();
      palm.position.set(-20 * side, 0, tz);
      fieldGroup.add(palm);
    });

    // Rear walkway trees between field promenade and building
    [-28, -14, 14, 28].forEach((tz) => {
      const palm = this.createCoconutTree();
      palm.position.set(20 * side, 0, tz);
      fieldGroup.add(palm);
    });

    // G. Campus Boundary Security Fence with Center Gateway Opening
    const fenceGroup = new THREE.Group();
    const fenceX = -24 * side; // Far back from the road verge (leaves wide open green foreground)

    // North wing of fence (z = -35 to -3.8)
    const curbN = new THREE.Mesh(
      new THREE.BoxGeometry(0.35, 0.45, 31.2),
      this.concreteMat
    );
    curbN.position.set(fenceX, 0.225, -19.4);
    fenceGroup.add(curbN);

    for (let fz = -35; fz <= -4.0; fz += 3.5) {
      const post = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 1.6, 6),
        this.stageTrussMat
      );
      post.position.set(fenceX, 1.0, fz);
      fenceGroup.add(post);
    }
    const topRailN = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.08, 31.2),
      this.stageTrussMat
    );
    topRailN.position.set(fenceX, 1.75, -19.4);
    fenceGroup.add(topRailN);

    // South wing of fence (z = +3.8 to +35)
    const curbS = new THREE.Mesh(
      new THREE.BoxGeometry(0.35, 0.45, 31.2),
      this.concreteMat
    );
    curbS.position.set(fenceX, 0.225, 19.4);
    fenceGroup.add(curbS);

    for (let fz = 4.0; fz <= 35; fz += 3.5) {
      const post = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 1.6, 6),
        this.stageTrussMat
      );
      post.position.set(fenceX, 1.0, fz);
      fenceGroup.add(post);
    }
    const topRailS = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.08, 31.2),
      this.stageTrussMat
    );
    topRailS.position.set(fenceX, 1.75, 19.4);
    fenceGroup.add(topRailS);

    // Grand Campus Entrance Gate Archway at center (x = fenceX = 24.0)
    const gateGroup = new THREE.Group();
    gateGroup.position.set(fenceX, 0, 0);

    // Concrete base threshold beneath the gate arch
    const gateSill = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.12, 7.0),
      this.concreteMat
    );
    gateSill.position.set(0, 0.06, 0);
    gateGroup.add(gateSill);

    // 1. Twin Monumental Brick & Stone Pylons
    [-3.5, 3.5].forEach((gx) => {
      const pillar = new THREE.Mesh(
        new THREE.BoxGeometry(1.0, 5.4, 1.0),
        this.brickMat
      );
      pillar.position.set(0, 2.7, gx);
      gateGroup.add(pillar);

      // Stone base plinth
      const plinth = new THREE.Mesh(
        new THREE.BoxGeometry(1.25, 0.8, 1.25),
        this.concreteMat
      );
      plinth.position.set(0, 0.4, gx);
      gateGroup.add(plinth);

      // Stone capital / cap
      const cap = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.35, 1.2),
        this.concreteMat
      );
      cap.position.set(0, 5.5, gx);
      gateGroup.add(cap);
    });

    // 2. Heavy Arch Crossbeam across the gate
    const gBeam = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 1.0, 7.8),
      this.stageTrussMat
    );
    gBeam.position.set(0, 4.8, 0);
    gateGroup.add(gBeam);

    // 3. Entrance Signboard Plate under the beam
    const gPlate = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 0.95, 6.8),
      this.uiuGateSignMat
    );
    gPlate.position.set(side > 0 ? -0.1 : 0.1, 4.8, 0);
    gateGroup.add(gPlate);

    // 4. THE PROMINENT "UIU" TOP CROWN SIGNAGE ON TOP OF THE GATE ARCH ("ওই গেটের উপরে লেখা থাকবে UIU")
    const gateCrownGroup = new THREE.Group();
    gateCrownGroup.position.set(0, 5.9, 0);

    // Charcoal backplate pediment
    const crownBacking = new THREE.Mesh(
      new THREE.BoxGeometry(0.35, 1.4, 4.4),
      new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.3 })
    );
    gateCrownGroup.add(crownBacking);

    // Gold decorative border trim
    const crownTrim = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 1.48, 4.48),
      this.goldBadgeMat
    );
    crownTrim.position.set(0, 0, 0);
    gateCrownGroup.add(crownTrim);

    // 3D GLOWING VIBRANT NEON SCARLET LETTERS: "UIU" ON TOP OF THE GATE!
    const gateNeonMat = new THREE.MeshStandardMaterial({
      color: 0xff1744,
      emissive: 0xff1744,
      emissiveIntensity: 1.8,
      roughness: 0.2
    });

    const addGateTube = (w, h, d, px, py, pz) => {
      const tube = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), gateNeonMat);
      tube.position.set(px, py, pz);
      gateCrownGroup.add(tube);
    };

    const frontOffset = side > 0 ? -0.22 : 0.22;

    // Letter 'U' (North side, z = -1.3)
    addGateTube(0.12, 0.85, 0.14, frontOffset, 0, -1.65); // left leg
    addGateTube(0.12, 0.85, 0.14, frontOffset, 0, -0.95); // right leg
    addGateTube(0.12, 0.14, 0.84, frontOffset, -0.38, -1.30); // bottom bar

    // Letter 'I' (Center, z = 0)
    addGateTube(0.12, 0.85, 0.16, frontOffset, 0, 0); // center bar
    addGateTube(0.12, 0.14, 0.55, frontOffset, 0.38, 0); // top serif
    addGateTube(0.12, 0.14, 0.55, frontOffset, -0.38, 0); // bottom serif

    // Letter 'U' (South side, z = +1.3)
    addGateTube(0.12, 0.85, 0.14, frontOffset, 0, 0.95); // left leg
    addGateTube(0.12, 0.85, 0.14, frontOffset, 0, 1.65); // right leg
    addGateTube(0.12, 0.14, 0.84, frontOffset, -0.38, 1.30); // bottom bar

    // Red neon point light for ambient gate illumination
    const gateLight = new THREE.PointLight(0xff1744, 1.4, 12);
    gateLight.position.set(frontOffset * 2, 0, 0);
    gateCrownGroup.add(gateLight);

    gateGroup.add(gateCrownGroup);

    // 5. Security Guard Booth & Drop-Arm Boom Barrier
    const guardBooth = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 2.5, 1.8),
      this.concreteMat
    );
    guardBooth.position.set(1.5, 1.25, -4.5);
    gateGroup.add(guardBooth);

    // Booth window
    const boothWin = new THREE.Mesh(
      new THREE.BoxGeometry(0.10, 0.9, 1.2),
      this.uiuGlassMat
    );
    boothWin.position.set(frontOffset, 1.4, -4.5);
    gateGroup.add(boothWin);

    // Red & white striped drop-arm security barrier pole
    const boomBarrier = new THREE.Mesh(
      new THREE.CylinderGeometry(0.045, 0.045, 4.0, 6),
      this.policeBarricadeMat
    );
    boomBarrier.rotateX(Math.PI / 2);
    boomBarrier.position.set(0.6, 0.95, -1.2);
    gateGroup.add(boomBarrier);

    // Campus security guard standing on duty
    const guardFigure = this.createFigure({
      shirtMat: this.policeShirtMat,
      pantsMat: this.policePantsMat,
      isSitting: false
    });
    guardFigure.position.set(0.8, 0, -3.2);
    guardFigure.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
    gateGroup.add(guardFigure);

    fenceGroup.add(gateGroup);
    fieldGroup.add(fenceGroup);

    campus.add(fieldGroup);

    // -----------------------------------------------------------
    // 2. THE MAIN MULTI-TOWER CAMPUS BUILDING (UIU ক্যাম্পাস ভবন)
    // Set back at x = 78m * side, spanning z = -32m to +32m, height = 38m!
    // Set back far enough so the ENTIRE building and football ground are beautifully visualized!
    // -----------------------------------------------------------
    const buildingGroup = new THREE.Group();
    buildingGroup.position.set(78 * side, 0, 0);
    // Face directly toward the football field and highway!
    buildingGroup.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;

    // A. Tower 1 (Right Wing - The Iconic "UIU" Logo Tower!)
    // Height: 38m, Width: 18m, Depth: 16m. Positioned at local x = -19 (world z = +19 -> viewer's RIGHT)
    const t1Group = new THREE.Group();
    t1Group.position.set(-19.0, 19.0, 0);

    const t1MainGeo = new THREE.BoxGeometry(18.0, 38.0, 16.0);
    const t1Materials = [
      this.uiuFacadeMat, // +x right
      this.uiuFacadeMat, // -x left
      this.uiuConcreteMat, // +y top
      this.uiuConcreteMat, // -y bottom
      this.uiuLogoMat,   // +z FRONT facing field & highway with glowing neon red UIU logo!
      this.uiuFacadeMat  // -z back
    ];
    const t1Mesh = new THREE.Mesh(t1MainGeo, t1Materials);
    this.applyShadow(t1Mesh);
    t1Group.add(t1Mesh);

    // Terracotta Brick Red Column Accent on outer flank (Signature Photo Detail!)
    const t1BrickFlank = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 38.0, 16.2),
      this.uiuBrickFlankMat
    );
    t1BrickFlank.position.set(-9.2, 0, 0);
    t1Group.add(t1BrickFlank);

    // Rooftop Elevator Core Penthouse
    const t1Penthouse = new THREE.Mesh(
      new THREE.BoxGeometry(7.0, 3.8, 8.0),
      this.uiuConcreteMat
    );
    t1Penthouse.position.set(-2.0, 20.9, 0);
    t1Group.add(t1Penthouse);

    // Rooftop Garden Vegetation (Aerial Photo Match!)
    const t1RoofGarden = new THREE.Mesh(
      new THREE.BoxGeometry(16.5, 0.8, 14.5),
      this.uiuRoofGardenMat
    );
    t1RoofGarden.position.set(0, 19.4, 0);
    t1Group.add(t1RoofGarden);

    // Rooftop Communication Mast with flashing aviation beacon light
    const antGeo = new THREE.CylinderGeometry(0.06, 0.08, 7.5, 6);
    const ant = new THREE.Mesh(antGeo, this.goalPostMat);
    ant.position.set(-2.0, 25.5, 1.5);
    t1Group.add(ant);

    const beacon = new THREE.Mesh(
      new THREE.SphereGeometry(0.32, 8, 8),
      new THREE.MeshStandardMaterial({
        color: 0xff0000,
        emissive: 0xff0000,
        emissiveIntensity: 2.2
      })
    );
    beacon.position.set(-2.0, 29.5, 1.5);
    t1Group.add(beacon);

    // Parapet safety railings on roof
    const t1Railing = new THREE.Mesh(
      new THREE.BoxGeometry(18.1, 1.1, 16.1),
      this.stageTrussMat
    );
    t1Railing.position.set(0, 19.55, 0);
    t1Group.add(t1Railing);

    // 3D ILLUMINATED NEON "UIU" LOGO FIXTURE (Upper Facade)
    const logoFixture = new THREE.Group();
    logoFixture.position.set(0, 11.5, 8.1);

    // Dark charcoal fascia backplate
    const logoBacking = new THREE.Mesh(
      new THREE.BoxGeometry(11.2, 5.0, 0.25),
      new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.3 })
    );
    logoFixture.add(logoBacking);

    // Glowing scarlet neon tube material
    const neonMat = new THREE.MeshStandardMaterial({
      color: 0xff1744,
      emissive: 0xff1744,
      emissiveIntensity: 1.8,
      roughness: 0.2
    });

    const addTube = (w, h, d, px, py, pz) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), neonMat);
      m.position.set(px, py, pz);
      logoFixture.add(m);
    };

    // 'U' (left, centered at x = -3.2)
    addTube(0.38, 2.6, 0.25, -4.0, 0, 0.2);
    addTube(0.38, 2.6, 0.25, -2.4, 0, 0.2);
    addTube(1.98, 0.38, 0.25, -3.2, -1.15, 0.2);

    // 'I' (middle, centered at x = 0)
    addTube(0.44, 2.6, 0.25, 0, 0, 0.2);
    addTube(1.4, 0.35, 0.25, 0, 1.15, 0.2);
    addTube(1.4, 0.35, 0.25, 0, -1.15, 0.2);

    // 'U' (right, centered at x = +3.2)
    addTube(0.38, 2.6, 0.25, 2.4, 0, 0.2);
    addTube(0.38, 2.6, 0.25, 4.0, 0, 0.2);
    addTube(1.98, 0.38, 0.25, 3.2, -1.15, 0.2);

    // Red neon point light for ambient glow on building facade
    const logoLight = new THREE.PointLight(0xff1744, 1.6, 18);
    logoLight.position.set(0, 0, 2.0);
    logoFixture.add(logoLight);

    t1Group.add(logoFixture);

    buildingGroup.add(t1Group);

    // B. Tower 2: Central Glass Atrium with REAL 3D STRUCTURAL STEEL X-TRUSS BRACING! (Photo Signature!)
    // Height: 32m, Width: 16m, Depth: 13m. Positioned at local x = 0 (world z = 0 -> viewer's CENTER)
    const atriumGroup = new THREE.Group();
    atriumGroup.position.set(0, 16.0, 0);

    const atriumGeo = new THREE.BoxGeometry(16.0, 32.0, 13.0);
    const atriumMaterials = [
      this.uiuConcreteMat,
      this.uiuConcreteMat,
      this.uiuConcreteMat,
      this.uiuConcreteMat,
      this.uiuAtriumMat, // +z Front face with massive steel diagonal X-bracing!
      this.uiuConcreteMat
    ];
    const atriumMesh = new THREE.Mesh(atriumGeo, atriumMaterials);
    atriumGroup.add(atriumMesh);

    // Interconnecting horizontal skybridge walkways across floors
    [7, 14, 21, 28].forEach((by) => {
      const bridgeBand = new THREE.Mesh(
        new THREE.BoxGeometry(16.2, 1.2, 13.4),
        this.uiuConcreteMat
      );
      bridgeBand.position.set(0, by - 16.0, 0);
      atriumGroup.add(bridgeBand);
    });

    // Rooftop garden atop the atrium
    const atriumRoof = new THREE.Mesh(
      new THREE.BoxGeometry(15.5, 0.6, 12.5),
      this.uiuRoofGardenMat
    );
    atriumRoof.position.set(0, 16.3, 0);
    atriumGroup.add(atriumRoof);

    // --- REAL 3D STRUCTURAL STEEL DIAGONAL X-TRUSS SYSTEM ---
    // 2 massive bays across atrium front (local z = 6.6)
    // Bay 1: local x = -3.95 (width 6.9m), Bay 2: local x = +3.95 (width 6.9m)
    // 2 vertically stacked tiers: Tier 1 (y = -11 to +2), Tier 2 (y = +2 to +15)
    const trussBayWidth = 6.9;
    const trussTierHeight = 13.0;
    const diagLen = Math.sqrt(trussBayWidth * trussBayWidth + trussTierHeight * trussTierHeight);
    const diagAngle = Math.atan2(trussBayWidth, trussTierHeight);
    const trussZ = 6.6;

    [-3.95, 3.95].forEach((bayX) => {
      [-4.5, 8.5].forEach((tierY) => {
        // Diagonal 1 (Bottom-left to Top-right)
        const d1 = new THREE.Mesh(
          new THREE.CylinderGeometry(0.24, 0.24, diagLen, 8),
          this.stageTrussMat
        );
        d1.position.set(bayX, tierY, trussZ);
        d1.rotation.z = -diagAngle;
        atriumGroup.add(d1);

        // Diagonal 2 (Bottom-right to Top-left)
        const d2 = new THREE.Mesh(
          new THREE.CylinderGeometry(0.24, 0.24, diagLen, 8),
          this.stageTrussMat
        );
        d2.position.set(bayX, tierY, trussZ);
        d2.rotation.z = diagAngle;
        atriumGroup.add(d2);

        // Center Gusset Plate / Node
        const centerNode = new THREE.Mesh(
          new THREE.BoxGeometry(0.85, 0.85, 0.45),
          this.stageTrussMat
        );
        centerNode.position.set(bayX, tierY, trussZ + 0.05);
        atriumGroup.add(centerNode);
      });
    });

    // Horizontal Steel Chord Beams connecting the truss levels
    [-11, 2, 15].forEach((beamY) => {
      const hBeam = new THREE.Mesh(
        new THREE.BoxGeometry(16.3, 0.65, 0.5),
        this.stageTrussMat
      );
      hBeam.position.set(0, beamY, trussZ);
      atriumGroup.add(hBeam);
    });

    // Vertical Steel Columns bounding the truss bays
    [-7.4, 0, 7.4].forEach((colX) => {
      const vCol = new THREE.Mesh(
        new THREE.CylinderGeometry(0.24, 0.24, 26.0, 8),
        this.stageTrussMat
      );
      vCol.position.set(colX, 2.0, trussZ);
      atriumGroup.add(vCol);
    });

    buildingGroup.add(atriumGroup);

    // C. Tower 3 & 4: Left Wing Academic Block (Photo Match!)
    // Height: 34m, Width: 18m, Depth: 16m. Positioned at local x = +19 (world z = -19 -> viewer's LEFT)
    const t3Group = new THREE.Group();
    t3Group.position.set(19.0, 17.0, 0);

    const t3MainGeo = new THREE.BoxGeometry(18.0, 34.0, 16.0);
    const t3Materials = [
      this.uiuFacadeMat,
      this.uiuFacadeMat,
      this.uiuConcreteMat,
      this.uiuConcreteMat,
      this.uiuFacadeMat,
      this.uiuFacadeMat
    ];
    const t3Mesh = new THREE.Mesh(t3MainGeo, t3Materials);
    this.applyShadow(t3Mesh);
    t3Group.add(t3Mesh);

    // Terracotta Brick Red Flank on left outer edge (Exact match to photo!)
    const t3BrickFlank = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 34.0, 16.2),
      this.uiuBrickFlankMat
    );
    t3BrickFlank.position.set(9.2, 0, 0);
    t3Group.add(t3BrickFlank);

    // 3D Horizontal Sunshade Louvers across front facade
    for (let floorY = -12; floorY <= 12; floorY += 3.5) {
      const louver = new THREE.Mesh(
        new THREE.BoxGeometry(18.2, 0.35, 1.2),
        this.uiuConcreteMat
      );
      louver.position.set(0, floorY, 8.4);
      t3Group.add(louver);
    }

    // Rooftop Garden Vegetation
    const t3RoofGarden = new THREE.Mesh(
      new THREE.BoxGeometry(16.5, 0.8, 14.5),
      this.uiuRoofGardenMat
    );
    t3RoofGarden.position.set(0, 17.4, 0);
    t3Group.add(t3RoofGarden);

    const t3Railing = new THREE.Mesh(
      new THREE.BoxGeometry(18.1, 1.1, 16.1),
      this.stageTrussMat
    );
    t3Railing.position.set(0, 17.55, 0);
    t3Group.add(t3Railing);

    buildingGroup.add(t3Group);

    // D. Ground Floor Entrance Colonnade & Main Steps
    const colonnadeGroup = new THREE.Group();
    for (let cx = -26; cx <= 26; cx += 5.2) {
      const col = new THREE.Mesh(
        new THREE.CylinderGeometry(0.45, 0.5, 5.0, 8),
        this.uiuConcreteMat
      );
      col.position.set(cx, 2.5, 8.2);
      colonnadeGroup.add(col);
    }

    // Glass entrance lobby
    const lobby = new THREE.Mesh(
      new THREE.BoxGeometry(32.0, 5.0, 2.0),
      this.uiuGlassMat
    );
    lobby.position.set(0, 2.5, 7.5);
    colonnadeGroup.add(lobby);

    // Grand Entrance Stairs leading down toward football ground promenade
    const mainSteps = new THREE.Mesh(
      new THREE.BoxGeometry(36.0, 0.6, 6.0),
      this.concreteMat
    );
    mainSteps.position.set(0, 0.3, 11.0);
    colonnadeGroup.add(mainSteps);

    buildingGroup.add(colonnadeGroup);

    campus.add(buildingGroup);

    // -----------------------------------------------------------
    // 4. UIU ROADSIDE BUS PARKING BAY (ভার্সিটির পাশে রাস্তার সাইডে পার্কিং)
    // Positioned along the highway shoulder frontage so buses are 100% visible!
    // -----------------------------------------------------------
    const parkingGroup = new THREE.Group();
    // Positioned right alongside the highway road frontage (x = 13.5m * side)
    parkingGroup.position.set(13.5 * side, 0, 0);

    // Paved concrete & asphalt roadside bus layby apron (8.5m wide x 34m long)
    const parkingApronGeo = new THREE.PlaneGeometry(8.5, 34);
    parkingApronGeo.rotateX(-Math.PI / 2);
    const parkingApron = new THREE.Mesh(parkingApronGeo, this.pavingPlazaMat);
    parkingApron.position.set(0, 0.015, 21.5);
    parkingApron.receiveShadow = true;
    parkingGroup.add(parkingApron);

    // Black & white safety curb stones around outer parking boundary
    const curbEastGeo = new THREE.BoxGeometry(0.35, 0.22, 34);
    const curbEast = new THREE.Mesh(curbEastGeo, this.bwCurbMat);
    curbEast.position.set(side > 0 ? 4.25 : -4.25, 0.11, 21.5);
    parkingGroup.add(curbEast);

    // White painted parking stall divider lines
    [5.5, 21.5, 37.5].forEach((pz) => {
      const lineMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(8.0, 0.24),
        this.policeSilverMat
      );
      lineMesh.rotateX(-Math.PI / 2);
      lineMesh.position.set(0, 0.02, pz);
      parkingGroup.add(lineMesh);
    });

    // Roadside Bus Stand Signpost: "UIU SHUTTLE BUS STAND • ছাত্র-ছাত্রী পরিবহন"
    const busSign = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.85, 2.2),
      this.uiuBusStandSignMat
    );
    busSign.position.set(side > 0 ? 3.8 : -3.8, 2.2, 5.5);
    parkingGroup.add(busSign);

    const busSignPost = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 2.4, 6),
      this.stageTrussMat
    );
    busSignPost.position.set(side > 0 ? 3.8 : -3.8, 1.2, 5.5);
    parkingGroup.add(busSignPost);

    // BUS 1: Parked in Front Roadside Bay 1 (z = 13.5) facing traffic along the highway!
    const bus1 = this.createUIUShuttleBus();
    bus1.position.set(0, 0, 13.5);
    bus1.rotation.y = Math.PI; // Long passenger side directly faces oncoming player on the highway!
    parkingGroup.add(bus1);

    // BUS 2: Parked in Roadside Bay 2 (z = 29.5) right behind Bus 1!
    const bus2 = this.createUIUShuttleBus();
    bus2.position.set(0, 0, 29.5);
    bus2.rotation.y = Math.PI;
    parkingGroup.add(bus2);

    campus.add(parkingGroup);

    return campus;
  }

  // ========================================================
  // 17. AUTHENTIC UIU SHUTTLE BUS (User Photo Reference 2)
  // - Official University Commuter Shuttle Bus
  // - Vibrant UIU orange aerodynamic coach body
  // - Streamlined rooftop air conditioning (AC) pod unit
  // - Continuous dark tinted panoramic passenger windows
  // - Aerodynamic white & silver wave swoosh livery on lower skirt
  // - "UNITED INTERNATIONAL UNIVERSITY" crest & branding on side
  // - Dual front LED headlights, front chrome grille, rear taillights
  // - 4 heavy-duty wheels with rubber tires and silver steel rims
  // ========================================================
  createUIUShuttleBus() {
    const bus = new THREE.Group();
    bus.name = 'uiu_shuttle_bus';

    const busLength = 10.6;
    const busWidth = 2.6;

    // 1. Lower Main Body / Chassis (Vibrant UIU Orange)
    const lowerBodyGeo = new THREE.BoxGeometry(busWidth, 1.35, busLength);
    const lowerBody = new THREE.Mesh(lowerBodyGeo, this.uiuBusOrangeMat);
    lowerBody.position.y = 1.15;
    this.applyShadow(lowerBody);
    bus.add(lowerBody);

    // 2. Side Livery Decals with UIU Swoosh & Branding (+X and -X sides)
    [-busWidth * 0.5 - 0.01, busWidth * 0.5 + 0.01].forEach((dx) => {
      const decalGeo = new THREE.PlaneGeometry(busLength * 0.94, 1.25);
      const decal = new THREE.Mesh(decalGeo, this.uiuBusSideMat);
      decal.position.set(dx, 1.15, 0);
      decal.rotation.y = dx > 0 ? Math.PI / 2 : -Math.PI / 2;
      bus.add(decal);
    });

    // 3. Dark Tinted Panoramic Window Band
    const windowGeo = new THREE.BoxGeometry(busWidth * 0.98, 1.05, busLength * 0.98);
    const windows = new THREE.Mesh(windowGeo, this.uiuBusGlassMat);
    windows.position.y = 2.25;
    bus.add(windows);

    // Window Mullions / Vertical Pillars
    for (let wz = -4.5; wz <= 4.5; wz += 1.5) {
      [-busWidth * 0.5 - 0.005, busWidth * 0.5 + 0.005].forEach((wx) => {
        const pillar = new THREE.Mesh(
          new THREE.BoxGeometry(0.04, 1.05, 0.08),
          this.uiuBusOrangeMat
        );
        pillar.position.set(wx, 2.25, wz);
        bus.add(pillar);
      });
    }

    // 4. Roof Panel & Streamlined Rooftop AC Pod Unit (Signature from Photo!)
    const roof = new THREE.Mesh(
      new THREE.BoxGeometry(busWidth, 0.22, busLength),
      this.uiuBusOrangeMat
    );
    roof.position.y = 2.86;
    bus.add(roof);

    // Rooftop AC Pod
    const acPod = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.38, 3.2),
      this.uiuBusOrangeMat
    );
    acPod.position.set(0, 3.08, -0.6);
    bus.add(acPod);

    // AC unit black intake vent louvers
    const acVent = new THREE.Mesh(
      new THREE.BoxGeometry(1.3, 0.06, 2.6),
      this.uiuBusGlassMat
    );
    acVent.position.set(0, 3.28, -0.6);
    bus.add(acVent);

    // 5. Front Windshield & Destination Board ("UIU SHUTTLE BUS")
    const destBoard = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 0.30, 0.10),
      this.policeCapMat
    );
    destBoard.position.set(0, 2.65, busLength * 0.5 + 0.02);
    bus.add(destBoard);

    // Front Windshield Wipers
    [-0.45, 0.45].forEach((wpx) => {
      const wiper = new THREE.Mesh(
        new THREE.CylinderGeometry(0.012, 0.012, 0.48, 4),
        this.policeCapMat
      );
      wiper.position.set(wpx, 1.95, busLength * 0.5 + 0.03);
      wiper.rotation.z = 0.35;
      bus.add(wiper);
    });

    // 6. Front & Rear Bumpers
    const fBumper = new THREE.Mesh(
      new THREE.BoxGeometry(busWidth + 0.05, 0.44, 0.35),
      this.uiuBusBumperMat
    );
    fBumper.position.set(0, 0.52, busLength * 0.5 + 0.12);
    bus.add(fBumper);

    const rBumper = new THREE.Mesh(
      new THREE.BoxGeometry(busWidth + 0.05, 0.44, 0.35),
      this.uiuBusBumperMat
    );
    rBumper.position.set(0, 0.52, -busLength * 0.5 - 0.12);
    bus.add(rBumper);

    // 7. Headlights, Grille & Taillights
    [-0.95, 0.95].forEach((hx) => {
      const headlight = new THREE.Mesh(
        new THREE.BoxGeometry(0.38, 0.18, 0.06),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      headlight.position.set(hx, 0.88, busLength * 0.5 + 0.04);
      bus.add(headlight);

      const turnSignal = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 0.18, 0.06),
        new THREE.MeshBasicMaterial({ color: 0xf59e0b })
      );
      turnSignal.position.set(hx > 0 ? hx + 0.26 : hx - 0.26, 0.88, busLength * 0.5 + 0.04);
      bus.add(turnSignal);
    });

    // Front Grille
    const grille = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.32, 0.06),
      this.uiuBusBumperMat
    );
    grille.position.set(0, 0.85, busLength * 0.5 + 0.04);
    bus.add(grille);

    // Front UIU Emblem on Grille
    const frontEmblem = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 6, 6),
      this.goldBadgeMat
    );
    frontEmblem.position.set(0, 0.85, busLength * 0.5 + 0.08);
    bus.add(frontEmblem);

    // Rear Taillights
    [-1.0, 1.0].forEach((rx) => {
      const tailLight = new THREE.Mesh(
        new THREE.BoxGeometry(0.20, 0.52, 0.06),
        this.shirtRedMat
      );
      tailLight.position.set(rx, 1.15, -busLength * 0.5 - 0.04);
      bus.add(tailLight);
    });

    // 8. Aerodynamic Side-View Mirrors
    [-busWidth * 0.5 - 0.22, busWidth * 0.5 + 0.22].forEach((mx) => {
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.02, 0.02, 0.35, 4),
        this.policeCapMat
      );
      arm.rotateZ(mx > 0 ? -Math.PI / 4 : Math.PI / 4);
      arm.position.set(mx > 0 ? mx - 0.1 : mx + 0.1, 2.3, busLength * 0.5 - 0.2);
      bus.add(arm);

      const mirror = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, 0.42, 0.20),
        this.policeCapMat
      );
      mirror.position.set(mx, 2.2, busLength * 0.5 - 0.05);
      bus.add(mirror);
    });

    // 9. Four Heavy-Duty 3D Wheels
    const wheelZPositions = [busLength * 0.5 - 2.0, -busLength * 0.5 + 2.2];
    wheelZPositions.forEach((wz) => {
      [-busWidth * 0.5 - 0.02, busWidth * 0.5 + 0.02].forEach((wx) => {
        const wheelGroup = new THREE.Group();
        wheelGroup.position.set(wx, 0.52, wz);

        // Black Rubber Tire
        const tireGeo = new THREE.CylinderGeometry(0.50, 0.50, 0.28, 12);
        tireGeo.rotateZ(Math.PI / 2);
        const tire = new THREE.Mesh(tireGeo, this.tireMat);
        wheelGroup.add(tire);

        // Silver Alloy Rim Hub
        const rimGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.30, 8);
        rimGeo.rotateZ(Math.PI / 2);
        const rim = new THREE.Mesh(rimGeo, this.rimMat);
        wheelGroup.add(rim);

        // Black Center Hub Cap
        const capGeo = new THREE.CylinderGeometry(0.10, 0.10, 0.32, 6);
        capGeo.rotateZ(Math.PI / 2);
        const hubCap = new THREE.Mesh(capGeo, this.policeCapMat);
        wheelGroup.add(hubCap);

        bus.add(wheelGroup);
      });
    });

    this.applyShadow(bus);
    return bus;
  }

  // ========================================================
  // 17. OVERHEAD HIGHWAY SIGN GANTRY (User Reference Photo 1)
  // - Spans across the entire expressway road
  // - Two support pylons with red & white hazard striped bases
  // - Overhead steel truss beam with inspection catwalk
  // - Three Green Destination Signs: Tangail 98 KM, UIU 1 KM, Biye ∞!
  // ========================================================
  createHighwaySignGantry(roadWidth = 13.0) {
    const gantry = new THREE.Group();
    gantry.name = 'highway_sign_gantry';

    const pylonX = roadWidth * 0.5 + 1.2;
    const gantryH = 8.5;

    // 1. Left & Right Support Pylons
    [-pylonX, pylonX].forEach((px) => {
      // Concrete & Hazard-striped base plinth (up to y = 1.8m)
      const baseGeo = new THREE.BoxGeometry(0.9, 1.8, 0.9);
      const baseMesh = new THREE.Mesh(baseGeo, this.gantryHazardMat);
      baseMesh.position.set(px, 0.9, 0);
      gantry.add(baseMesh);

      // Steel Tubular Truss Vertical Columns (Twin posts)
      [-0.22, 0.22].forEach((offsetZ) => {
        const post = new THREE.Mesh(
          new THREE.CylinderGeometry(0.12, 0.12, gantryH - 1.8, 8),
          this.stageTrussMat
        );
        post.position.set(px, 1.8 + (gantryH - 1.8) * 0.5, offsetZ);
        gantry.add(post);
      });

      // Diagonal cross-lacing between twin vertical posts
      for (let y = 2.4; y < gantryH - 0.5; y += 1.4) {
        const brace = new THREE.Mesh(
          new THREE.CylinderGeometry(0.04, 0.04, 1.45, 6),
          this.stageTrussMat
        );
        brace.position.set(px, y + 0.6, 0);
        brace.rotation.x = Math.PI / 4;
        gantry.add(brace);
      }

      // Triangular cantilever support bracket at top
      const bracket = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 2.8, 6),
        this.stageTrussMat
      );
      bracket.position.set(px > 0 ? px - 1.0 : px + 1.0, gantryH - 0.9, 0);
      bracket.rotation.z = px > 0 ? -Math.PI / 4 : Math.PI / 4;
      gantry.add(bracket);
    });

    // 2. Overhead Horizontal Steel Truss Beam spanning the full road
    const spanW = pylonX * 2 + 1.2;
    [-0.35, 0.35].forEach((offsetY) => {
      [-0.22, 0.22].forEach((offsetZ) => {
        const chord = new THREE.Mesh(
          new THREE.CylinderGeometry(0.09, 0.09, spanW, 8),
          this.stageTrussMat
        );
        chord.rotateZ(Math.PI / 2);
        chord.position.set(0, gantryH + offsetY, offsetZ);
        gantry.add(chord);
      });
    });

    // Cross-truss bracing along the span
    for (let x = -pylonX + 1.5; x < pylonX - 1.0; x += 1.8) {
      const vStrut = new THREE.Mesh(
        new THREE.CylinderGeometry(0.045, 0.045, 0.7, 6),
        this.stageTrussMat
      );
      vStrut.position.set(x, gantryH, 0.22);
      gantry.add(vStrut);

      const dStrut = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 1.9, 6),
        this.stageTrussMat
      );
      dStrut.position.set(x + 0.9, gantryH, 0.22);
      dStrut.rotation.z = Math.PI / 4;
      gantry.add(dStrut);
    }

    // 3. The Three Green Destination Signboards (টাঙ্গাইল ৯৮ কিমি, ইউআইইউ ১ কিমি, বিয়ে ∞)
    // Board is completely clean, spotless, and unobstructed (no black lines or bars in front!)
    const signGeo = new THREE.BoxGeometry(11.8, 2.6, 0.16);
    const signMaterials = [
      this.stageTrussMat, // right
      this.stageTrussMat, // left
      this.stageTrussMat, // top
      this.stageTrussMat, // bottom
      this.highwayGantrySignMat, // FRONT face (+Z facing oncoming cars!)
      this.stageTrussMat  // BACK face (-Z)
    ];
    const signMesh = new THREE.Mesh(signGeo, signMaterials);
    signMesh.position.set(0, 7.6, 0.35);
    gantry.add(signMesh);

    return gantry;
  }

  // ========================================================
  // 18. AUTHENTIC PUTHIA SHIVA TEMPLE COMPLEX (User Photo: ৫-রত্ন শিব মন্দির, পুকুর ঘাট ও দোল মন্দির)
  // - Modeled exactly after user's photo (Puthia Shiva Temple on lake/pond)
  // - Raised white foundation with front access stairs leading into the water ghat
  // - Front Verandah Platform (বারান্দা টাইপের স্পেস) with balustrade railings
  // - 5 Tiered Beehive Shikharas (Pancha-Ratna) with crowning brass kalasa & trishul
  // - Octagonal Domed Pavilion (দোল মন্দির) on left bank
  // - Decorated with Orange & Yellow Marigold Flower Garlands (ফুল দিয়ে সাজানো)
  // - Water tank / pond in front with stone bathing ghat & lush banana trees
  // ========================================================
  createPuthiaTemple(side = -1) {
    const temple = new THREE.Group();
    temple.name = 'puthia_shiva_temple';

    // Temple set back from road
    const complex = new THREE.Group();
    complex.position.set(24 * side, 0, 0);
    // Face toward highway road
    complex.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;

    // 1. Plinth / Raised Terracotta Foundation (Bhiti)
    const plinthGeo = new THREE.BoxGeometry(15.0, 1.8, 16.0);
    const plinth = new THREE.Mesh(plinthGeo, this.templePlinthMat);
    plinth.position.set(0, 0.9, 0);
    plinth.receiveShadow = true;
    complex.add(plinth);

    // 2. Front Verandah Platform (বারান্দা টাইপের স্পেস - User Requirement!)
    const verandahGeo = new THREE.BoxGeometry(13.5, 0.45, 6.5);
    const verandah = new THREE.Mesh(verandahGeo, this.templePlinthMat);
    verandah.position.set(0, 1.8 + 0.225, 9.5);
    verandah.receiveShadow = true;
    complex.add(verandah);

    // Decorative balustrade railings along the front verandah
    [-6.6, 6.6].forEach((vx) => {
      const sideRail = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.85, 6.5),
        this.templePlinthMat
      );
      sideRail.position.set(vx, 2.45, 9.5);
      complex.add(sideRail);
    });

    // Front access stairs (ঘাট / সিঁড়ি) leading down from verandah into the pond
    for (let s = 0; s < 5; s++) {
      const step = new THREE.Mesh(
        new THREE.BoxGeometry(9.0 + s * 0.8, 0.28, 0.9),
        this.templePlinthMat
      );
      step.position.set(0, 1.4 - s * 0.28, 13.0 + s * 0.8);
      complex.add(step);
    }

    // 3. Temple Pond / Water Tank & Bathing Ghat (পুকুর ও ঘাট - Photo Match!)
    const pondGeo = new THREE.PlaneGeometry(28, 16);
    pondGeo.rotateX(-Math.PI / 2);
    const pond = new THREE.Mesh(pondGeo, this.riverWaterMat);
    pond.position.set(0, 0.03, 24);
    complex.add(pond);

    // Floating water lily / kochuripana clusters on pond edge
    [-6, 6].forEach((wx) => {
      const lily = this.createWaterHyacinthCluster();
      lily.position.set(wx, 0.04, 20);
      complex.add(lily);
    });

    // 4. Lower Temple Sanctum (গর্ভগৃহ ও নিচতলা)
    const sanctumGeo = new THREE.BoxGeometry(12.5, 6.5, 12.5);
    const sanctum = new THREE.Mesh(sanctumGeo, this.templeWallMat);
    sanctum.position.set(0, 1.8 + 3.25, 0);
    this.applyShadow(sanctum);
    complex.add(sanctum);

    // Main Sanctum Entrance Arch (Mughal-Bengal Cusped Archway)
    const archPortal = new THREE.Mesh(
      new THREE.BoxGeometry(3.6, 4.8, 0.4),
      this.templePlinthMat
    );
    archPortal.position.set(0, 4.4, 6.3);
    complex.add(archPortal);

    const doorNiche = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 3.8, 0.5),
      this.stageTrussMat
    );
    doorNiche.position.set(0, 4.0, 6.35);
    complex.add(doorNiche);

    // 5. Upper Tier / Second Storey (দোতলা গর্ভগৃহ)
    const upperGeo = new THREE.BoxGeometry(8.5, 4.2, 8.5);
    const upper = new THREE.Mesh(upperGeo, this.templeWallMat);
    upper.position.set(0, 1.8 + 6.5 + 2.1, 0);
    this.applyShadow(upper);
    complex.add(upper);

    // 6. The Iconic 5 Shikharas / Spire Towers (৫-রত্ন চূড়া - Photo Match!)
    // A. Main Central Shikhara (মূল বড় রত্ন চূড়া)
    const mainShikharaGeo = new THREE.ConeGeometry(3.8, 10.5, 12);
    const mainShikhara = new THREE.Mesh(mainShikharaGeo, this.templeShikharaMat);
    mainShikhara.position.set(0, 14.6 + 5.25, 0);
    this.applyShadow(mainShikhara);
    complex.add(mainShikhara);

    // Crowning Brass Kalasa Finial & Trishul on top of main shikhara
    const mainKalasa = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.45, 2.6, 8),
      this.templeBrassMat
    );
    mainKalasa.position.set(0, 26.2, 0);
    complex.add(mainKalasa);

    const trishul = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 0.8, 0.08),
      this.templeBrassMat
    );
    trishul.position.set(0, 27.8, 0);
    complex.add(trishul);

    // B. Four Corner Shikharas (চার কোণার চার রত্ন চূড়া) on the first floor roof
    [-4.8, 4.8].forEach((cx) => {
      [-4.8, 4.8].forEach((cz) => {
        const cornerSpireGeo = new THREE.ConeGeometry(1.6, 5.2, 8);
        const cornerSpire = new THREE.Mesh(cornerSpireGeo, this.templeShikharaMat);
        cornerSpire.position.set(cx, 8.3 + 2.6, cz);
        this.applyShadow(cornerSpire);
        complex.add(cornerSpire);

        const cornerKalasa = new THREE.Mesh(
          new THREE.CylinderGeometry(0.06, 0.18, 1.4, 6),
          this.templeBrassMat
        );
        cornerKalasa.position.set(cx, 14.0, cz);
        complex.add(cornerKalasa);
      });
    });

    // 7. Octagonal Domed Pavilion (দোল মন্দির - User Photo Match on Left Bank!)
    const dolGroup = new THREE.Group();
    dolGroup.position.set(-13.5, 0, 4.0);

    const dolPlinth = new THREE.Mesh(
      new THREE.CylinderGeometry(3.2, 3.4, 1.2, 8),
      this.templePlinthMat
    );
    dolPlinth.position.set(0, 0.6, 0);
    dolGroup.add(dolPlinth);

    const dolBody = new THREE.Mesh(
      new THREE.CylinderGeometry(2.4, 2.6, 4.5, 8),
      this.templeWallMat
    );
    dolBody.position.set(0, 3.45, 0);
    dolGroup.add(dolBody);

    // Hemispherical dome
    const dolDome = new THREE.Mesh(
      new THREE.SphereGeometry(2.5, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.5),
      this.templeShikharaMat
    );
    dolDome.position.set(0, 5.7, 0);
    dolGroup.add(dolDome);

    const dolKalasa = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.22, 1.5, 6),
      this.templeBrassMat
    );
    dolKalasa.position.set(0, 8.4, 0);
    dolGroup.add(dolKalasa);

    complex.add(dolGroup);

    // 8. Marigold Flower Garlands Decoration (ফুল দিয়ে সাজানো থাকবে - User Requirement!)
    const createGarlandCurve = (points, colorMat) => {
      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeo = new THREE.TubeGeometry(curve, 10, 0.08, 6, false);
      const garland = new THREE.Mesh(tubeGeo, colorMat);
      complex.add(garland);
    };

    // A. Flower garland draped across main entrance archway
    createGarlandCurve([
      new THREE.Vector3(-1.8, 2.4, 6.55),
      new THREE.Vector3(-1.2, 5.8, 6.55),
      new THREE.Vector3(0, 6.4, 6.55),
      new THREE.Vector3(1.2, 5.8, 6.55),
      new THREE.Vector3(1.8, 2.4, 6.55)
    ], this.marigoldOrangeMat);

    createGarlandCurve([
      new THREE.Vector3(-1.6, 2.2, 6.58),
      new THREE.Vector3(-1.0, 5.5, 6.58),
      new THREE.Vector3(0, 6.1, 6.58),
      new THREE.Vector3(1.0, 5.5, 6.58),
      new THREE.Vector3(1.6, 2.2, 6.58)
    ], this.marigoldYellowMat);

    // B. Flower garlands draped along front verandah railings
    createGarlandCurve([
      new THREE.Vector3(-6.6, 2.7, 6.5),
      new THREE.Vector3(-6.6, 2.2, 9.5),
      new THREE.Vector3(-6.6, 2.7, 12.5)
    ], this.marigoldOrangeMat);

    createGarlandCurve([
      new THREE.Vector3(6.6, 2.7, 6.5),
      new THREE.Vector3(6.6, 2.2, 9.5),
      new THREE.Vector3(6.6, 2.7, 12.5)
    ], this.marigoldYellowMat);

    createGarlandCurve([
      new THREE.Vector3(-6.6, 2.7, 12.5),
      new THREE.Vector3(-3.2, 2.1, 12.5),
      new THREE.Vector3(0, 2.6, 12.5),
      new THREE.Vector3(3.2, 2.1, 12.5),
      new THREE.Vector3(6.6, 2.7, 12.5)
    ], this.marigoldOrangeMat);

    // C. Hanging floral torans / tassels at entrance
    [-1.6, 0, 1.6].forEach((tx) => {
      const tassel = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 0.65, 6),
        this.marigoldYellowMat
      );
      tassel.position.set(tx, 5.8, 6.6);
      complex.add(tassel);
    });

    // 9. Lush Tropical Greenery Framing the Temple (Photo Match: Banana Trees & Palms!)
    [-7.8, 7.8].forEach((bx) => {
      const b1 = this.createBananaTree();
      b1.position.set(bx, 0, 6);
      complex.add(b1);

      const b2 = this.createBananaTree();
      b2.position.set(bx, 0, 11);
      complex.add(b2);
    });

    [-8, 0, 8].forEach((tx) => {
      const palm = this.createCoconutTree();
      palm.position.set(tx, 0, -10);
      complex.add(palm);
    });

    temple.add(complex);

    return temple;
  }

  // ========================================================
  // 19. AUTHENTIC 3D BANGLADESHI TRAFFIC POLICE OFFICER
  // - Alert duty stance on highway road shoulder
  // - Authentic Bangladesh Police uniform: Navy blue trousers, light steel-blue shirt
  // - Fluorescent high-visibility neon patrol vest with retro-reflective silver stripes
  // - Bangladesh Police peaked cap with gold emblem crest & aviator sunglasses
  // - Duty leather belt, pistol holster, ammo pouch, and service boots
  // - Standard service rifle / submachine gun ("hat ee gun") held alertly across chest on duty!
  // ========================================================
  createTrafficPoliceOfficer() {
    const officer = new THREE.Group();
    officer.name = 'bangladeshi_police_officer';
    officer.scale.set(1.15, 1.15, 1.15);

    // 1. Black Combat Boots
    [-0.10, 0.10].forEach((bx) => {
      const boot = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 0.16, 0.24),
        this.policeCapMat
      );
      boot.position.set(bx, 0.08, 0.02);
      officer.add(boot);
    });

    // 2. Navy Blue Trousers / Legs
    [-0.09, 0.09].forEach((lx) => {
      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.065, 0.055, 0.80, 6),
        this.policePantsMat
      );
      leg.position.set(lx, 0.52, 0);
      officer.add(leg);
    });

    // 3. Duty Belt with Buckle & Holster
    const belt = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 0.08, 0.24),
      this.policeCapMat
    );
    belt.position.set(0, 0.94, 0);
    officer.add(belt);

    const buckle = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.07, 0.02),
      this.goldBadgeMat
    );
    buckle.position.set(0, 0.94, 0.125);
    officer.add(buckle);

    // Pistol holster on right hip
    const holster = new THREE.Mesh(
      new THREE.BoxGeometry(0.07, 0.18, 0.09),
      this.policeCapMat
    );
    holster.position.set(0.20, 0.88, 0);
    officer.add(holster);

    // Ammo pouch on left hip
    const pouch = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.10, 0.08),
      this.policeCapMat
    );
    pouch.position.set(-0.20, 0.92, 0);
    officer.add(pouch);

    // 4. Torso with High-Visibility Neon Patrol Vest
    // Inner shirt (steel blue sleeves/collar)
    const torso = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 0.52, 0.23),
      this.policeShirtMat
    );
    torso.position.set(0, 1.20, 0);
    officer.add(torso);

    // Fluorescent neon yellow-green reflective patrol vest
    const vest = new THREE.Mesh(
      new THREE.BoxGeometry(0.39, 0.44, 0.24),
      this.policeVestMat
    );
    vest.position.set(0, 1.18, 0);
    officer.add(vest);

    // Silver retro-reflective stripes across chest and waist
    [1.10, 1.28].forEach((ry) => {
      const stripe = new THREE.Mesh(
        new THREE.BoxGeometry(0.40, 0.045, 0.245),
        this.policeSilverMat
      );
      stripe.position.set(0, ry, 0);
      officer.add(stripe);
    });

    // Shoulder rank epaulets
    [-0.18, 0.18].forEach((ex) => {
      const epaulet = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.02, 0.14),
        this.policePantsMat
      );
      epaulet.position.set(ex, 1.45, 0);
      officer.add(epaulet);

      const pip = new THREE.Mesh(
        new THREE.SphereGeometry(0.015, 4, 4),
        this.goldBadgeMat
      );
      pip.position.set(ex, 1.465, 0);
      officer.add(pip);
    });

    // 5. Head, Sunglasses & Police Peaked Cap
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 8, 8),
      this.skinMat
    );
    head.position.set(0, 1.54, 0);
    officer.add(head);

    // Sunglasses
    const glasses = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.04, 0.06),
      this.policeCapMat
    );
    glasses.position.set(0, 1.56, 0.10);
    officer.add(glasses);

    // Police Cap
    const capBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.135, 0.13, 0.07, 8),
      this.policeCapMat
    );
    capBase.position.set(0, 1.63, 0);
    officer.add(capBase);

    // Cap Visor / Peak
    const visor = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.02, 0.09),
      this.policeCapMat
    );
    visor.position.set(0, 1.60, 0.13);
    visor.rotation.x = 0.25;
    officer.add(visor);

    // Gold Police Cap Badge
    const badge = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.05, 0.015),
      this.goldBadgeMat
    );
    badge.position.set(0, 1.65, 0.125);
    officer.add(badge);

    // 6. 3D DUTY SERVICE RIFLE ("hat ee gun") & ALERT POSTURE
    // Rifle held alertly across the chest with both hands
    const gunGroup = new THREE.Group();
    gunGroup.position.set(0, 1.15, 0.22);
    gunGroup.rotation.set(-0.25, 0.25, -0.45);

    // Receiver body
    const receiver = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.10, 0.44),
      this.gunMetalMat
    );
    gunGroup.add(receiver);

    // Wooden stock
    const stock = new THREE.Mesh(
      new THREE.BoxGeometry(0.05, 0.09, 0.24),
      this.gunWoodMat
    );
    stock.position.set(0, -0.01, 0.32);
    gunGroup.add(stock);

    // Barrel with flash hider
    const barrel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.016, 0.016, 0.40, 6),
      this.gunMetalMat
    );
    barrel.rotateX(Math.PI / 2);
    barrel.position.set(0, 0.015, -0.40);
    gunGroup.add(barrel);

    // Front sight post
    const frontSight = new THREE.Mesh(
      new THREE.BoxGeometry(0.012, 0.04, 0.02),
      this.gunMetalMat
    );
    frontSight.position.set(0, 0.04, -0.52);
    gunGroup.add(frontSight);

    // Wooden foregrip / handguard
    const foregrip = new THREE.Mesh(
      new THREE.BoxGeometry(0.055, 0.07, 0.22),
      this.gunWoodMat
    );
    foregrip.position.set(0, -0.01, -0.20);
    gunGroup.add(foregrip);

    // Curved banana magazine
    const magazine = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.16, 0.08),
      this.gunMetalMat
    );
    magazine.position.set(0, -0.11, -0.06);
    magazine.rotation.x = -0.25;
    gunGroup.add(magazine);

    // Rifle sling strap
    const sling = new THREE.Mesh(
      new THREE.BoxGeometry(0.02, 0.02, 0.60),
      this.policePantsMat
    );
    sling.position.set(0, -0.06, 0.05);
    gunGroup.add(sling);

    officer.add(gunGroup);

    // Arms holding rifle:
    // Right arm on pistol grip/trigger
    const rightArm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.045, 0.04, 0.42, 6),
      this.policeShirtMat
    );
    rightArm.position.set(0.18, 1.18, 0.10);
    rightArm.rotation.set(-0.85, 0.20, -0.40);
    officer.add(rightArm);

    // Right hand gripping
    const rightHand = new THREE.Mesh(
      new THREE.SphereGeometry(0.04, 6, 6),
      this.skinMat
    );
    rightHand.position.set(0.08, 1.08, 0.24);
    officer.add(rightHand);

    // Left arm reaching across to support foregrip
    const leftArm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.045, 0.04, 0.44, 6),
      this.policeShirtMat
    );
    leftArm.position.set(-0.16, 1.14, 0.12);
    leftArm.rotation.set(-0.75, -0.35, 0.70);
    officer.add(leftArm);

    // Left hand gripping barrel/foregrip
    const leftHand = new THREE.Mesh(
      new THREE.SphereGeometry(0.04, 6, 6),
      this.skinMat
    );
    leftHand.position.set(-0.06, 1.20, 0.28);
    officer.add(leftHand);

    this.applyShadow(officer);
    return officer;
  }

  // ========================================================
  // 19. AUTHENTIC BANGLADESH POLICE BOX (পুলিশ বক্স / KIOSK)
  // - High-visibility Bangladesh Police highway observation booth
  // - Deep navy blue & white paneled cabin with wrap-around observation windows
  // - Interior desk with VHF police radio transmitter
  // - Front illuminated signboard: "★ বাংলাদেশ পুলিশ ★ • পুলিশ বক্স • POLICE BOX"
  // - Pagoda overhanging canopy roof with antenna & emergency flashing strobes
  // ========================================================
  createPoliceBox() {
    const boxGroup = new THREE.Group();
    boxGroup.name = 'police_box_booth';

    // 1. Concrete Base Plinth (2.4m x 2.4m x 0.22m)
    const plinth = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 0.22, 2.4),
      this.concreteMat
    );
    plinth.position.y = 0.11;
    boxGroup.add(plinth);

    // Black & Yellow Hazard Curb trim around base
    const curb = new THREE.Mesh(
      new THREE.BoxGeometry(2.5, 0.08, 2.5),
      this.bwCurbMat
    );
    curb.position.y = 0.04;
    boxGroup.add(curb);

    // 2. Main Cabin Lower Walls (Deep Navy Blue, 2.0m x 2.0m x 1.15m)
    const lowerCabin = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 1.15, 2.0),
      this.policePantsMat
    );
    lowerCabin.position.y = 0.795;
    boxGroup.add(lowerCabin);

    // White horizontal reflective accent band
    const accentBand = new THREE.Mesh(
      new THREE.BoxGeometry(2.04, 0.12, 2.04),
      this.policeSilverMat
    );
    accentBand.position.y = 1.32;
    boxGroup.add(accentBand);

    // 3. Four Corner Steel Posts
    [-0.95, 0.95].forEach((px) => {
      [-0.95, 0.95].forEach((pz) => {
        const post = new THREE.Mesh(
          new THREE.CylinderGeometry(0.04, 0.04, 1.25, 6),
          this.stageTrussMat
        );
        post.position.set(px, 1.95, pz);
        boxGroup.add(post);
      });
    });

    // 4. Wrap-Around Glass Observation Windows (All 4 Sides)
    // Front window (faces road / oncoming traffic)
    const frontWindow = new THREE.Mesh(
      new THREE.BoxGeometry(1.82, 0.92, 0.04),
      this.uiuGlassMat
    );
    frontWindow.position.set(0, 1.85, 0.95);
    boxGroup.add(frontWindow);

    // Side windows
    [-0.95, 0.95].forEach((wx) => {
      const sWindow = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, 0.92, 1.82),
        this.uiuGlassMat
      );
      sWindow.position.set(wx, 1.85, 0);
      boxGroup.add(sWindow);
    });

    // Back window
    const backWindow = new THREE.Mesh(
      new THREE.BoxGeometry(1.82, 0.92, 0.04),
      this.uiuGlassMat
    );
    backWindow.position.set(0, 1.85, -0.95);
    boxGroup.add(backWindow);

    // Interior Desk & Police Radio
    const desk = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.08, 0.6),
      this.gunWoodMat
    );
    desk.position.set(0, 1.35, 0.55);
    boxGroup.add(desk);

    const radioBox = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.18, 0.22),
      this.gunMetalMat
    );
    radioBox.position.set(-0.4, 1.48, 0.55);
    boxGroup.add(radioBox);

    // 5. Overhead Signboard: "★ বাংলাদেশ পুলিশ ★ • পুলিশ বক্স • POLICE BOX"
    const signBoardMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1.9, 0.52, 0.06),
      this.policeBoxSignMat
    );
    signBoardMesh.position.set(0, 2.56, 1.01);
    boxGroup.add(signBoardMesh);

    // Upper navy frieze band
    const upperFrieze = new THREE.Mesh(
      new THREE.BoxGeometry(2.08, 0.52, 2.08),
      this.policePantsMat
    );
    upperFrieze.position.y = 2.56;
    boxGroup.add(upperFrieze);

    // 6. Overhanging Pagoda Canopy Roof with Metal Trim
    const roofOverhang = new THREE.Mesh(
      new THREE.BoxGeometry(2.45, 0.12, 2.45),
      this.gunMetalMat
    );
    roofOverhang.position.y = 2.88;
    boxGroup.add(roofOverhang);

    const roofCapGeo = new THREE.ConeGeometry(1.75, 0.65, 4);
    roofCapGeo.rotateY(Math.PI / 4);
    const roofCap = new THREE.Mesh(roofCapGeo, this.policePantsMat);
    roofCap.position.y = 3.24;
    boxGroup.add(roofCap);

    // Communications Antenna Mast
    const antenna = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.02, 1.6, 6),
      this.gunMetalMat
    );
    antenna.position.set(0.7, 3.8, 0.7);
    boxGroup.add(antenna);

    // 7. Roof-Mounted Emergency Flashing Beacon Strobes (Red & Blue)
    const beaconPlinth = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.14, 0.10, 8),
      this.stageTrussMat
    );
    beaconPlinth.position.y = 3.60;
    boxGroup.add(beaconPlinth);

    const bRed = new THREE.Mesh(
      new THREE.CylinderGeometry(0.09, 0.09, 0.22, 8),
      this.strobeRedMat
    );
    bRed.position.set(-0.12, 3.74, 0);
    boxGroup.add(bRed);

    const bBlue = new THREE.Mesh(
      new THREE.CylinderGeometry(0.09, 0.09, 0.22, 8),
      this.strobeBlueMat
    );
    bBlue.position.set(0.12, 3.74, 0);
    boxGroup.add(bBlue);

    this.policeStrobes.push({
      red: bRed,
      blue: bBlue,
      light: null,
      seed: Math.random() * 10
    });

    this.applyShadow(boxGroup);
    return boxGroup;
  }

  // ========================================================
  // 20. AUTHENTIC BANGLADESH POLICE HIGHWAY CHECKPOST
  // - Located directly before the river bridge ("road ee bridge er shamnee")
  // - Features signature Bangladesh "পুলিশ বক্স" (Police Booth) on roadside pad
  // - 3D Police officer standing on roadside shoulder with service rifle on duty
  // - Lamppost with street floodlight, twin flashing emergency red/blue strobe beacons
  // - Prominent signboard: "পুলিশ চেকপোস্ট" (POLICE CHECK POST)
  // - Red & white diagonal striped checkpoint barricade & traffic safety cones
  // ========================================================
  createPoliceCheckpost(side = 1, roadWidth = 13.0) {
    const checkpost = new THREE.Group();
    checkpost.name = 'bangladesh_police_checkpost';

    // 0. Concrete & Asphalt Checkpoint Safety Island Apron
    const apronGeo = new THREE.PlaneGeometry(6.4, 15.0);
    apronGeo.rotateX(-Math.PI / 2);
    const apron = new THREE.Mesh(apronGeo, this.concreteMat);
    apron.position.set((roadWidth * 0.5 + 3.8) * side, 0.015, -0.5);
    apron.receiveShadow = true;
    checkpost.add(apron);

    // Hazard Curb Stones on the road verge side
    const curbGeo = new THREE.BoxGeometry(0.35, 0.20, 15.0);
    const curbMesh = new THREE.Mesh(curbGeo, this.bwCurbMat);
    curbMesh.position.set((roadWidth * 0.5 + 0.6) * side, 0.10, -0.5);
    checkpost.add(curbMesh);

    // 1. Signature Bangladesh Police Box ("পুলিশ বক্স")
    const policeBox = this.createPoliceBox();
    policeBox.position.set((roadWidth * 0.5 + 4.4) * side, 0, 1.4);
    // Face directly toward oncoming traffic (+Z)
    policeBox.rotation.y = side > 0 ? 0 : Math.PI;
    checkpost.add(policeBox);

    // 2. Authentic 3D Bangladeshi Police Officer on Duty with Rifle ("hat ee gun")
    const officer = this.createTrafficPoliceOfficer();
    officer.position.set((roadWidth * 0.5 + 1.8) * side, 0, -0.6);
    // Face oncoming traffic along the road
    officer.rotation.y = side > 0 ? Math.PI : 0;
    checkpost.add(officer);

    // 3. Lamppost with "পুলিশ চেকপোস্ট" Signboard & Flashing Police Strobes
    const lampX = (roadWidth * 0.5 + 3.0) * side;
    const lampGroup = new THREE.Group();
    lampGroup.position.set(lampX, 0, -2.4);

    // Concrete base pedestal
    const basePlinth = new THREE.Mesh(
      new THREE.CylinderGeometry(0.32, 0.38, 0.55, 8),
      this.concreteMat
    );
    basePlinth.position.y = 0.275;
    lampGroup.add(basePlinth);

    // Steel octagonal lamppost mast (4.8m tall)
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.07, 0.10, 4.8, 8),
      this.stageTrussMat
    );
    pole.position.y = 2.60;
    lampGroup.add(pole);

    // Top curved lamppost arm extending toward road
    const armGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.8, 6);
    armGeo.rotateZ(side > 0 ? -Math.PI / 3 : Math.PI / 3);
    const arm = new THREE.Mesh(armGeo, this.stageTrussMat);
    arm.position.set(side > 0 ? -0.75 : 0.75, 5.0, 0);
    lampGroup.add(arm);

    // Street floodlight head fixture (illuminates checkpost, officer & signboard!)
    const lampHead = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 0.14, 0.64),
      this.stageTrussMat
    );
    lampHead.position.set(side > 0 ? -1.45 : 1.45, 5.15, 0);
    lampGroup.add(lampHead);

    const floodLens = new THREE.Mesh(
      new THREE.PlaneGeometry(0.34, 0.56),
      new THREE.MeshBasicMaterial({ color: 0xfffbeb })
    );
    floodLens.rotateX(Math.PI / 2);
    floodLens.position.set(side > 0 ? -1.45 : 1.45, 5.07, 0);
    lampGroup.add(floodLens);

    // Overhead floodlight source
    const floodLight = new THREE.PointLight(0xfff7ed, 1.8, 14);
    floodLight.position.set(side > 0 ? -1.45 : 1.45, 4.8, 0);
    lampGroup.add(floodLight);

    // EMERGENCY FLASHING POLICE STROBE BEACONS (Red & Blue!)
    const strobeCrossbar = new THREE.Mesh(
      new THREE.BoxGeometry(1.05, 0.06, 0.06),
      this.stageTrussMat
    );
    strobeCrossbar.position.set(0, 4.65, 0);
    lampGroup.add(strobeCrossbar);

    const redStrobe = new THREE.Mesh(
      new THREE.CylinderGeometry(0.09, 0.09, 0.20, 8),
      this.strobeRedMat
    );
    redStrobe.position.set(-0.38, 4.77, 0);
    lampGroup.add(redStrobe);

    const blueStrobe = new THREE.Mesh(
      new THREE.CylinderGeometry(0.09, 0.09, 0.20, 8),
      this.strobeBlueMat
    );
    blueStrobe.position.set(0.38, 4.77, 0);
    lampGroup.add(blueStrobe);

    // Ambient police emergency strobe glow
    const strobeLight = new THREE.PointLight(0x3b82f6, 1.4, 12);
    strobeLight.position.set(0, 4.6, 0);
    lampGroup.add(strobeLight);

    this.policeStrobes.push({
      red: redStrobe,
      blue: blueStrobe,
      light: strobeLight,
      seed: Math.random() * 10
    });

    // THE PROMINENT "পুলিশ চেকপোস্ট" SIGNBOARD (Double-sided, Facing Oncoming Traffic!)
    const signBoard = new THREE.Mesh(
      new THREE.BoxGeometry(2.35, 1.40, 0.08),
      this.policeSignMat
    );
    signBoard.position.set(0, 2.45, 0);
    // Face oncoming traffic directly
    signBoard.rotation.y = side > 0 ? 0 : Math.PI;
    lampGroup.add(signBoard);

    // Steel mounting bracket clamps
    [-0.45, 0.45].forEach((sy) => {
      const clamp = new THREE.Mesh(
        new THREE.BoxGeometry(0.24, 0.06, 0.18),
        this.stageTrussMat
      );
      clamp.position.set(0, 2.45 + sy, 0);
      lampGroup.add(clamp);
    });

    checkpost.add(lampGroup);

    // 4. Roadside Police Barricade ("POLICE • থামুন")
    const barX = (roadWidth * 0.5 + 1.2) * side;
    const barricadeGroup = new THREE.Group();
    barricadeGroup.position.set(barX, 0, -4.6);
    barricadeGroup.rotation.y = side > 0 ? -0.15 : 0.15;

    // Tubular A-frame legs
    [-1.0, 1.0].forEach((bx) => {
      const bLeg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.03, 1.05, 6),
        this.stageTrussMat
      );
      bLeg.position.set(0, 0.52, bx);
      barricadeGroup.add(bLeg);

      const foot = new THREE.Mesh(
        new THREE.BoxGeometry(0.40, 0.04, 0.08),
        this.stageTrussMat
      );
      foot.position.set(0, 0.02, bx);
      barricadeGroup.add(foot);
    });

    // Horizontal barrier boards with red & white hazard stripes
    const barBoard = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.38, 2.2),
      this.policeBarricadeMat
    );
    barBoard.position.set(0, 0.72, 0);
    barricadeGroup.add(barBoard);

    const barBoardLower = new THREE.Mesh(
      new THREE.BoxGeometry(0.05, 0.22, 2.2),
      this.policeBarricadeMat
    );
    barBoardLower.position.set(0, 0.34, 0);
    barricadeGroup.add(barBoardLower);

    checkpost.add(barricadeGroup);

    // 5. Traffic Safety Cones (Fluorescent orange with white reflective band along taper)
    [-5.8, -4.2, -2.6, -1.0].forEach((cz) => {
      const coneGroup = new THREE.Group();
      coneGroup.position.set((roadWidth * 0.5 + 0.5) * side, 0, cz);

      // Base
      const coneBase = new THREE.Mesh(
        new THREE.BoxGeometry(0.36, 0.03, 0.36),
        this.marigoldOrangeMat
      );
      coneBase.position.y = 0.015;
      coneGroup.add(coneBase);

      // Orange Cone
      const coneBody = new THREE.Mesh(
        new THREE.ConeGeometry(0.14, 0.62, 8),
        this.marigoldOrangeMat
      );
      coneBody.position.y = 0.32;
      coneGroup.add(coneBody);

      // Reflective white band
      const whiteBand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.085, 0.105, 0.15, 8),
        this.policeSilverMat
      );
      whiteBand.position.y = 0.32;
      coneGroup.add(whiteBand);

      checkpost.add(coneGroup);
    });

    return checkpost;
  }

  // Update animal animations, environmental motion, and smoke every frame
  update(time) {
    // 1. Animals & Figures (Cows chewing/grazing, ducks, romantic couple, smoking guys, dingi boats)
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
      } else if (anim.type === 'smoker') {
        // Subtle breathing & head motion while taking a drag
        if (anim.head) {
          const drag = Math.sin(time * 1.8 + anim.seed) * 0.04;
          anim.head.rotation.x = -0.12 + Math.max(0, drag);
        }
      } else if (anim.type === 'dingi') {
        // Gentle water bobbing and slow drifting of dingi boat in river (Photo 2)
        anim.mesh.position.y = anim.startY + Math.sin(time * 2.2 + anim.seed) * 0.035;
        anim.mesh.rotation.z = Math.sin(time * 1.8 + anim.seed) * 0.04;
        anim.mesh.rotation.x = Math.cos(time * 1.4 + anim.seed) * 0.025;
      }
    });

    // 2. Smoke Emitters (Tea Stall kettle steam + Cigarette smoke puffs)
    this.smokeEmitters.forEach((group) => {
      const isCig = group.userData && group.userData.type === 'cigarette';
      const maxH = (group.userData && group.userData.maxH) || (isCig ? 0.5 : 1.4);
      const spd = (group.userData && group.userData.spd) || (isCig ? 0.007 : 0.015);
      const drift = (group.userData && group.userData.drift) || (isCig ? 0.004 : 0.005);

      group.children.forEach((p, idx) => {
        p.position.y += spd;
        p.position.x += Math.sin(time * 3.0 + idx) * drift;
        p.position.z += Math.cos(time * 2.6 + idx) * (drift * 0.6);
        if (p.position.y > maxH) {
          p.position.y = 0;
          p.position.x = 0;
          p.position.z = 0;
        }
      });

      // Cigarette ember light flicker
      if (group.userData && group.userData.light) {
        const seed = group.userData.seed || 0;
        group.userData.light.intensity = 0.85 + Math.sin(time * 7.5 + seed) * 0.35;
      }
    });

    // 3. Police Checkpost Flashing Emergency Strobes (Alternating Red & Blue)
    this.policeStrobes.forEach((strobe) => {
      const flash = Math.sin(time * 12.0 + strobe.seed);
      if (strobe.red && strobe.blue) {
        strobe.red.material.emissiveIntensity = flash > 0 ? 2.5 : 0.2;
        strobe.blue.material.emissiveIntensity = flash <= 0 ? 2.5 : 0.2;
      }
      if (strobe.light) {
        strobe.light.color.setHex(flash > 0 ? 0xef4444 : 0x3b82f6);
        strobe.light.intensity = 0.8 + Math.abs(flash) * 0.8;
      }
    });
  }
}
