// ===================================================================
// BANGLADESH RICKSHAW 3D MODEL (OG_RACE)
// Authentic Cycle Rickshaw with Real Rickshaw Art
// Features a Cute Teenage Couple sitting romantically & holding hands!
// ===================================================================

import * as THREE from 'three';
import { CONFIG } from '../config.js';

export class DeshiRickshaw {
  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'og_deshi_rickshaw';

    // Wheels for spinning
    this.wheels = [];
    this.frontWheel = null;

    // Couple & Puller animated limbs
    this.coupleGroup = new THREE.Group();
    this.pullerLegs = [];
    this.pullerPedalAngle = 0;

    // Lights & Effects
    this.headlights = [];
    this.brakeLights = [];
    this.exhaustFires = [];
    this.bellMesh = null;

    // Dynamics state
    this.currentRoll = 0;
    this.currentPitch = 0;
    this.currentYaw = 0;
    this.wheelRotation = 0;
    this.hornTimer = 0;

    // Collision Bounding Box (tuned for Cycle Rickshaw)
    this.box = new THREE.Box3();
    this.collisionSize = new THREE.Vector3(1.5, 2.1, 3.2);

    this.buildRickshaw();

    // Balanced proportional size so highway in front is clearly visible
    this.group.scale.set(0.85, 0.85, 0.85);
  }

  buildRickshaw() {
    this.bodyGroup = new THREE.Group();
    this.group.add(this.bodyGroup);

    // ----------------------------------------------------
    // 1. Procedural Rickshaw Art Textures via Canvas
    // ----------------------------------------------------

    // ===================================================================
    // 1. Procedural Bangladeshi Rickshaw Art Textures (From Reference Picture!)
    // ===================================================================

    // A. Lower Tin Art Backplate: Rising Sun, Blue River & Village Houses (1024 x 640)
    const backCanvas = document.createElement('canvas');
    backCanvas.width = 1024;
    backCanvas.height = 640;
    const bCtx = backCanvas.getContext('2d');

    // 1. Soft Sky Blue Gradient
    const skyGrad = bCtx.createLinearGradient(0, 0, 0, 360);
    skyGrad.addColorStop(0, '#7dd3fc');
    skyGrad.addColorStop(1, '#e0f2fe');
    bCtx.fillStyle = skyGrad;
    bCtx.fillRect(0, 0, 1024, 640);

    // Fluffy White Clouds
    const drawCloud = (cx, cy, scale) => {
      bCtx.fillStyle = '#ffffff';
      bCtx.beginPath();
      bCtx.arc(cx, cy, 38 * scale, 0, Math.PI * 2);
      bCtx.arc(cx + 42 * scale, cy - 14 * scale, 48 * scale, 0, Math.PI * 2);
      bCtx.arc(cx + 95 * scale, cy - 8 * scale, 42 * scale, 0, Math.PI * 2);
      bCtx.arc(cx + 135 * scale, cy + 8 * scale, 32 * scale, 0, Math.PI * 2);
      bCtx.fill();
    };
    drawCloud(80, 120, 1.1);
    drawCloud(720, 100, 0.95);

    // 2. Radiant Rising Sun & Spreading Golden Rays (exact match to reference photo!)
    const sunX = 512;
    const sunY = 270;
    for (let a = -Math.PI; a <= 0; a += Math.PI / 18) {
      bCtx.beginPath();
      bCtx.moveTo(sunX, sunY);
      bCtx.lineTo(sunX + Math.cos(a) * 380, sunY + Math.sin(a) * 380);
      bCtx.lineTo(sunX + Math.cos(a + Math.PI / 36) * 380, sunY + Math.sin(a + Math.PI / 36) * 380);
      bCtx.closePath();
      bCtx.fillStyle = 'rgba(245, 158, 11, 0.45)';
      bCtx.fill();
    }
    // Half-circle Rising Golden Sun
    bCtx.beginPath();
    bCtx.arc(sunX, sunY, 78, Math.PI, 0);
    bCtx.fillStyle = '#f59e0b';
    bCtx.fill();
    bCtx.beginPath();
    bCtx.arc(sunX, sunY, 52, Math.PI, 0);
    bCtx.fillStyle = '#fde047';
    bCtx.fill();

    // 3. Blue River Water (Left side)
    const riverGrad = bCtx.createLinearGradient(0, 270, 0, 520);
    riverGrad.addColorStop(0, '#0284c7');
    riverGrad.addColorStop(1, '#0369a1');
    bCtx.fillStyle = riverGrad;
    bCtx.beginPath();
    bCtx.moveTo(0, 270);
    bCtx.lineTo(512, 270);
    bCtx.lineTo(470, 520);
    bCtx.lineTo(0, 520);
    bCtx.closePath();
    bCtx.fill();

    // White wave ripples on the water
    bCtx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
    bCtx.lineWidth = 3.5;
    for (let y = 290; y < 510; y += 24) {
      const step = 38;
      for (let x = 20; x < 440; x += step * 2) {
        bCtx.beginPath();
        bCtx.moveTo(x, y);
        bCtx.quadraticCurveTo(x + step / 2, y - 5, x + step, y);
        bCtx.stroke();
      }
    }

    // 4. Riverbank & Rural Landscape (Right side)
    // Sandy shoreline
    bCtx.fillStyle = '#fde68a';
    bCtx.beginPath();
    bCtx.moveTo(470, 520);
    bCtx.lineTo(512, 270);
    bCtx.lineTo(560, 270);
    bCtx.lineTo(530, 520);
    bCtx.closePath();
    bCtx.fill();

    // Green grassy meadow
    bCtx.fillStyle = '#16a34a';
    bCtx.beginPath();
    bCtx.moveTo(520, 270);
    bCtx.lineTo(1024, 270);
    bCtx.lineTo(1024, 520);
    bCtx.lineTo(485, 520);
    bCtx.closePath();
    bCtx.fill();

    // Coconut palms behind the houses
    const drawPalm = (px, py) => {
      bCtx.strokeStyle = '#854d0e';
      bCtx.lineWidth = 6;
      bCtx.beginPath();
      bCtx.moveTo(px, py);
      bCtx.quadraticCurveTo(px - 15, py - 60, px - 25, py - 110);
      bCtx.stroke();
      bCtx.strokeStyle = '#15803d';
      bCtx.lineWidth = 4;
      for (let fa = 0; fa < Math.PI * 2; fa += Math.PI / 4) {
        bCtx.beginPath();
        bCtx.moveTo(px - 25, py - 110);
        bCtx.quadraticCurveTo(px - 25 + Math.cos(fa) * 45, py - 110 + Math.sin(fa) * 40 - 15, px - 25 + Math.cos(fa) * 65, py - 110 + Math.sin(fa) * 40);
        bCtx.stroke();
      }
    };
    drawPalm(640, 360);
    drawPalm(720, 350);
    drawPalm(940, 360);

    // Two Traditional Village Houses (from reference photo)
    // House 1 (Right): Red corrugated tin roof
    bCtx.fillStyle = '#fce7f3'; // pinkish white walls
    bCtx.fillRect(720, 370, 190, 85);
    bCtx.strokeStyle = '#18181b';
    bCtx.lineWidth = 3;
    bCtx.strokeRect(720, 370, 190, 85);

    bCtx.fillStyle = '#dc2626';
    bCtx.beginPath();
    bCtx.moveTo(705, 370);
    bCtx.lineTo(815, 310);
    bCtx.lineTo(925, 370);
    bCtx.closePath();
    bCtx.fill();
    bCtx.stroke();
    // Corrugation
    bCtx.strokeStyle = '#ffffff';
    bCtx.lineWidth = 2.5;
    for (let rx = 720; rx < 910; rx += 18) {
      bCtx.beginPath();
      bCtx.moveTo(rx, 370);
      bCtx.lineTo(815, 310);
      bCtx.stroke();
    }
    bCtx.fillStyle = '#374151';
    bCtx.fillRect(785, 395, 35, 60);
    bCtx.fillRect(850, 390, 30, 30);

    // House 2 (Left): Blue corrugated tin roof
    bCtx.fillStyle = '#f8fafc'; // white walls
    bCtx.fillRect(570, 385, 140, 70);
    bCtx.strokeStyle = '#18181b';
    bCtx.lineWidth = 3;
    bCtx.strokeRect(570, 385, 140, 70);

    bCtx.fillStyle = '#2563eb';
    bCtx.beginPath();
    bCtx.moveTo(555, 385);
    bCtx.lineTo(640, 335);
    bCtx.lineTo(725, 385);
    bCtx.closePath();
    bCtx.fill();
    bCtx.stroke();
    bCtx.strokeStyle = '#ffffff';
    bCtx.lineWidth = 2.5;
    for (let bx = 570; bx < 710; bx += 18) {
      bCtx.beginPath();
      bCtx.moveTo(bx, 385);
      bCtx.lineTo(640, 335);
      bCtx.stroke();
    }
    bCtx.fillStyle = '#1e3a8a';
    bCtx.fillRect(620, 405, 30, 50);

    // 5. Lower Borders:
    // Scalloped Orange & Yellow Lotus Petals
    bCtx.fillStyle = '#ea580c';
    bCtx.fillRect(0, 510, 1024, 45);
    bCtx.fillStyle = '#fde047';
    for (let x = 20; x < 1024; x += 40) {
      bCtx.beginPath();
      bCtx.arc(x, 510, 16, 0, Math.PI);
      bCtx.fill();
      bCtx.strokeStyle = '#18181b';
      bCtx.lineWidth = 2;
      bCtx.stroke();
    }

    // Colorful vertical dash band (Red, White, Green, Yellow)
    bCtx.fillStyle = '#18181b';
    bCtx.fillRect(0, 555, 1024, 35);
    const dashColors = ['#dc2626', '#ffffff', '#16a34a', '#fde047'];
    for (let i = 0; i < 48; i++) {
      bCtx.fillStyle = dashColors[i % dashColors.length];
      bCtx.fillRect(i * 22, 558, 14, 29);
    }

    // 6. Three Hanging Silver Filigree Heart Charms at Bottom (from reference photo!)
    const drawSilverHeart = (hx, hy) => {
      bCtx.strokeStyle = '#94a3b8';
      bCtx.lineWidth = 3;
      bCtx.beginPath();
      bCtx.arc(hx, hy, 8, 0, Math.PI * 2);
      bCtx.stroke();

      bCtx.fillStyle = '#e2e8f0';
      bCtx.beginPath();
      bCtx.moveTo(hx, hy + 8);
      bCtx.bezierCurveTo(hx + 28, hy + 8, hx + 44, hy + 28, hx, hy + 64);
      bCtx.bezierCurveTo(hx - 44, hy + 28, hx - 28, hy + 8, hx, hy + 8);
      bCtx.closePath();
      bCtx.fill();
      bCtx.strokeStyle = '#64748b';
      bCtx.lineWidth = 2.5;
      bCtx.stroke();

      // Perforated filigree holes
      bCtx.fillStyle = '#94a3b8';
      [
        [0, 24], [-14, 28], [14, 28], [-8, 42], [8, 42], [0, 52]
      ].forEach(([dx, dy]) => {
        bCtx.beginPath();
        bCtx.arc(hx + dx, hy + dy, 3.2, 0, Math.PI * 2);
        bCtx.fill();
      });
    };
    drawSilverHeart(220, 570);
    drawSilverHeart(512, 570);
    drawSilverHeart(804, 570);

    const backTexture = new THREE.CanvasTexture(backCanvas);

    // ===================================================================
    // B. Middle Arched Silver Cowl Banner ("বাংলাদেশ" with "মা" Medallions)
    // ===================================================================
    const midBannerCanvas = document.createElement('canvas');
    midBannerCanvas.width = 1024;
    midBannerCanvas.height = 260;
    const mCtx = midBannerCanvas.getContext('2d');

    const cowlGrad = mCtx.createLinearGradient(0, 0, 0, 260);
    cowlGrad.addColorStop(0, '#f8fafc');
    cowlGrad.addColorStop(0.5, '#e2e8f0');
    cowlGrad.addColorStop(1, '#94a3b8');
    mCtx.fillStyle = cowlGrad;
    mCtx.fillRect(0, 0, 1024, 260);

    // Metallic Studs / Rivets
    mCtx.fillStyle = '#475569';
    for (let x = 30; x < 1000; x += 45) {
      mCtx.beginPath();
      mCtx.arc(x, 24, 7, 0, Math.PI * 2);
      mCtx.fill();
      mCtx.beginPath();
      mCtx.arc(x - 2, 22, 2.5, 0, Math.PI * 2);
      mCtx.fillStyle = '#ffffff';
      mCtx.fill();
      mCtx.fillStyle = '#475569';

      mCtx.beginPath();
      mCtx.arc(x, 236, 7, 0, Math.PI * 2);
      mCtx.fill();
      mCtx.beginPath();
      mCtx.arc(x - 2, 234, 2.5, 0, Math.PI * 2);
      mCtx.fillStyle = '#ffffff';
      mCtx.fill();
      mCtx.fillStyle = '#475569';
    }

    // Calligraphy: "বাংলাদেশ" with red and green accents
    mCtx.fillStyle = '#f59e0b';
    mCtx.strokeStyle = '#dc2626';
    mCtx.lineWidth = 7;
    mCtx.font = 'bold 82px sans-serif';
    mCtx.textAlign = 'center';
    mCtx.textBaseline = 'middle';
    mCtx.strokeText('বাংলাদেশ', 512, 115);
    mCtx.fillText('বাংলাদেশ', 512, 115);

    mCtx.fillStyle = '#16a34a';
    mCtx.font = 'bold 78px sans-serif';
    mCtx.fillText('বাংলাদেশ', 512, 113);
    mCtx.fillStyle = '#fef08a';
    mCtx.font = 'bold 74px sans-serif';
    mCtx.fillText('বাংলাদেশ', 512, 111);

    // Colorful decorative dots below "বাংলাদেশ"
    const dotColors = ['#dc2626', '#16a34a', '#f59e0b', '#06b6d4', '#ec4899'];
    for (let i = 0; i < 18; i++) {
      mCtx.beginPath();
      mCtx.arc(310 + i * 24, 185, 7.5, 0, Math.PI * 2);
      mCtx.fillStyle = dotColors[i % dotColors.length];
      mCtx.fill();
      mCtx.strokeStyle = '#18181b';
      mCtx.lineWidth = 1.8;
      mCtx.stroke();
    }

    // Circular "মা" Medallions on Left and Right (exact match to picture!)
    const drawMaaMedallion = (cx, cy) => {
      mCtx.beginPath();
      mCtx.arc(cx, cy, 62, 0, Math.PI * 2);
      mCtx.fillStyle = '#cbd5e1';
      mCtx.fill();
      mCtx.strokeStyle = '#64748b';
      mCtx.lineWidth = 4;
      mCtx.stroke();

      mCtx.beginPath();
      mCtx.arc(cx, cy, 48, 0, Math.PI * 2);
      mCtx.fillStyle = '#dc2626';
      mCtx.fill();
      mCtx.strokeStyle = '#fde047';
      mCtx.lineWidth = 3;
      mCtx.stroke();

      mCtx.fillStyle = '#ffffff';
      mCtx.font = 'bold 50px sans-serif';
      mCtx.textAlign = 'center';
      mCtx.textBaseline = 'middle';
      mCtx.fillText('মা', cx, cy);
    };
    drawMaaMedallion(140, 125);
    drawMaaMedallion(884, 125);

    const midBannerTexture = new THREE.CanvasTexture(midBannerCanvas);

    // ===================================================================
    // C. Upper Arched Hood Back ("মায়ের দোয়া", Blue Strap "১", & Folk Flowers)
    // ===================================================================
    const hoodBackCanvas = document.createElement('canvas');
    hoodBackCanvas.width = 1024;
    hoodBackCanvas.height = 1024;
    const hbCtx = hoodBackCanvas.getContext('2d');

    // Red Arched Dome with Golden Rim
    hbCtx.beginPath();
    hbCtx.moveTo(40, 1024);
    hbCtx.lineTo(40, 520);
    hbCtx.bezierCurveTo(40, 60, 984, 60, 984, 520);
    hbCtx.lineTo(984, 1024);
    hbCtx.closePath();
    hbCtx.fillStyle = '#dc2626';
    hbCtx.fill();
    hbCtx.strokeStyle = '#881337';
    hbCtx.lineWidth = 12;
    hbCtx.stroke();

    hbCtx.strokeStyle = '#fde047';
    hbCtx.lineWidth = 5;
    hbCtx.stroke();

    // Central Royal Blue Vertical Strap with White Stripe (from picture)
    hbCtx.fillStyle = '#1d4ed8';
    hbCtx.fillRect(456, 120, 112, 680);
    hbCtx.strokeStyle = '#18181b';
    hbCtx.lineWidth = 3;
    hbCtx.strokeRect(456, 120, 112, 680);

    hbCtx.fillStyle = '#ffffff';
    hbCtx.fillRect(498, 120, 28, 680);

    // Red medallion with Bengali "১" at the bottom of blue strap
    hbCtx.beginPath();
    hbCtx.arc(512, 780, 42, 0, Math.PI * 2);
    hbCtx.fillStyle = '#dc2626';
    hbCtx.fill();
    hbCtx.strokeStyle = '#fde047';
    hbCtx.lineWidth = 5;
    hbCtx.stroke();

    hbCtx.fillStyle = '#ffffff';
    hbCtx.font = 'bold 44px sans-serif';
    hbCtx.textAlign = 'center';
    hbCtx.textBaseline = 'middle';
    hbCtx.fillText('১', 512, 780);

    // Top Arch Calligraphy: "মায়ের" on Left, "দোয়া" on Right (white with black outline)
    const drawArchedText = (text, cx, cy, rot) => {
      hbCtx.save();
      hbCtx.translate(cx, cy);
      hbCtx.rotate(rot);
      hbCtx.font = 'bold 88px sans-serif';
      hbCtx.textAlign = 'center';
      hbCtx.textBaseline = 'middle';
      hbCtx.strokeStyle = '#18181b';
      hbCtx.lineWidth = 12;
      hbCtx.strokeText(text, 0, 0);
      hbCtx.fillStyle = '#ffffff';
      hbCtx.fillText(text, 0, 0);
      hbCtx.restore();
    };
    drawArchedText('মায়ের', 310, 240, -0.22);
    drawArchedText('দোয়া', 714, 240, 0.22);

    // Symmetrical Folk Floral Bouquets flanking Blue Strap (Yellow, Pink Lotus & Royal Blue Roses!)
    const drawSideFolkBouquet = (sideX, flip) => {
      hbCtx.save();
      hbCtx.translate(sideX, 500);
      if (flip) hbCtx.scale(-1, 1);

      // Top Yellow Blossom
      hbCtx.beginPath();
      hbCtx.arc(70, -160, 36, 0, Math.PI * 2);
      hbCtx.fillStyle = '#fde047';
      hbCtx.fill();
      hbCtx.strokeStyle = '#18181b';
      hbCtx.lineWidth = 3;
      hbCtx.stroke();
      hbCtx.beginPath();
      hbCtx.arc(70, -160, 16, 0, Math.PI * 2);
      hbCtx.fillStyle = '#ea580c';
      hbCtx.fill();

      // Middle Pink Lotus
      for (let p = 0; p < 7; p++) {
        const pa = -Math.PI / 2 + (p - 3) * 0.35;
        hbCtx.beginPath();
        hbCtx.ellipse(80 + Math.cos(pa) * 45, -50 + Math.sin(pa) * 35, 18, 38, pa, 0, Math.PI * 2);
        hbCtx.fillStyle = '#ec4899';
        hbCtx.fill();
        hbCtx.strokeStyle = '#18181b';
        hbCtx.lineWidth = 2.5;
        hbCtx.stroke();
      }
      hbCtx.beginPath();
      hbCtx.arc(80, -50, 24, 0, Math.PI * 2);
      hbCtx.fillStyle = '#fef08a';
      hbCtx.fill();
      hbCtx.stroke();

      // Lower Royal Blue Roses
      const drawBlueRose = (rx, ry) => {
        hbCtx.fillStyle = '#16a34a';
        hbCtx.beginPath();
        hbCtx.ellipse(rx - 30, ry + 20, 16, 32, 0.6, 0, Math.PI * 2);
        hbCtx.ellipse(rx + 30, ry + 20, 16, 32, -0.6, 0, Math.PI * 2);
        hbCtx.fill();
        hbCtx.stroke();

        hbCtx.fillStyle = '#1d4ed8';
        hbCtx.beginPath();
        hbCtx.arc(rx, ry, 55, 0, Math.PI * 2);
        hbCtx.fill();
        hbCtx.strokeStyle = '#18181b';
        hbCtx.lineWidth = 3;
        hbCtx.stroke();

        hbCtx.strokeStyle = '#38bdf8';
        hbCtx.lineWidth = 4;
        hbCtx.beginPath();
        hbCtx.arc(rx, ry, 36, 0.4, Math.PI * 1.6);
        hbCtx.stroke();
        hbCtx.beginPath();
        hbCtx.arc(rx, ry, 20, Math.PI, Math.PI * 2.2);
        hbCtx.stroke();

        hbCtx.fillStyle = '#ffffff';
        hbCtx.beginPath();
        hbCtx.arc(rx, ry, 10, 0, Math.PI * 2);
        hbCtx.fill();
      };
      drawBlueRose(85, 110);
      hbCtx.restore();
    };

    drawSideFolkBouquet(260, false);
    drawSideFolkBouquet(764, true);

    const hoodBackTexture = new THREE.CanvasTexture(hoodBackCanvas);

    // ===================================================================
    // D. Mudguard Texture (Red & White Spiral Candy Stripes from picture!)
    // ===================================================================
    const mudguardCanvas = document.createElement('canvas');
    mudguardCanvas.width = 512;
    mudguardCanvas.height = 128;
    const mgCtx = mudguardCanvas.getContext('2d');
    mgCtx.fillStyle = '#ffffff';
    mgCtx.fillRect(0, 0, 512, 128);
    mgCtx.fillStyle = '#dc2626';
    for (let i = -128; i < 512 + 128; i += 36) {
      mgCtx.beginPath();
      mgCtx.moveTo(i, 0);
      mgCtx.lineTo(i + 18, 0);
      mgCtx.lineTo(i + 18 + 128, 128);
      mgCtx.lineTo(i + 128, 128);
      mgCtx.closePath();
      mgCtx.fill();
    }
    const stripedMudguardTexture = new THREE.CanvasTexture(mudguardCanvas);

    // B. Canopy / Hood Texture (Authentic Masterpiece of Bangladeshi Rickshaw Paint)
    const hoodCanvas = document.createElement('canvas');
    hoodCanvas.width = 1024;
    hoodCanvas.height = 1024;
    const hCtx = hoodCanvas.getContext('2d');

    // Vibrant Yellow Lacquer Background
    hCtx.fillStyle = '#f59e0b';
    hCtx.fillRect(0, 0, 1024, 1024);

    // Traditional Diamond Watermark Grid on Yellow Canvas
    hCtx.strokeStyle = 'rgba(234, 88, 12, 0.18)';
    hCtx.lineWidth = 3;
    for (let i = -1024; i < 2048; i += 64) {
      hCtx.beginPath();
      hCtx.moveTo(i, 0);
      hCtx.lineTo(i + 1024, 1024);
      hCtx.stroke();
      hCtx.beginPath();
      hCtx.moveTo(i, 1024);
      hCtx.lineTo(i + 1024, 0);
      hCtx.stroke();
    }

    // 1. Front and Rear Arched Borders in Deep Royal Maroon (from Image 5)
    hCtx.fillStyle = '#881337';
    hCtx.fillRect(0, 0, 1024, 140);
    hCtx.fillRect(0, 884, 1024, 140);

    // Turquoise & Emerald Accent Stripes
    hCtx.fillStyle = '#06b6d4';
    hCtx.fillRect(0, 140, 1024, 28);
    hCtx.fillRect(0, 856, 1024, 28);

    hCtx.fillStyle = '#10b981';
    hCtx.fillRect(0, 168, 1024, 16);
    hCtx.fillRect(0, 840, 1024, 16);

    // Golden Scalloped Borders along the maroon bands
    for (let x = 32; x < 1024; x += 64) {
      hCtx.beginPath();
      hCtx.arc(x, 140, 16, 0, Math.PI);
      hCtx.fillStyle = '#fde047';
      hCtx.fill();
      hCtx.strokeStyle = '#18181b';
      hCtx.lineWidth = 2.5;
      hCtx.stroke();

      hCtx.beginPath();
      hCtx.arc(x, 884, 16, Math.PI, Math.PI * 2);
      hCtx.fillStyle = '#fde047';
      hCtx.fill();
      hCtx.strokeStyle = '#18181b';
      hCtx.lineWidth = 2.5;
      hCtx.stroke();
    }

    // Traditional Bengali Calligraphy on Arched Banners: "মা বাবার দোয়া"
    [70, 954].forEach((bannerY) => {
      hCtx.fillStyle = '#ffffff';
      hCtx.font = 'bold 44px sans-serif';
      hCtx.textAlign = 'center';
      hCtx.textBaseline = 'middle';
      hCtx.shadowColor = 'rgba(0,0,0,0.8)';
      hCtx.shadowBlur = 8;
      hCtx.fillText('মা বাবার দোয়া', 512, bannerY);
      hCtx.shadowBlur = 0;
    });

    // 2. MAGNIFICENT CENTRAL BLOOMING LOTUS MANDALA (Top Ridge of Roof)
    const drawGrandLotusMandala = (cx, cy) => {
      // Golden Sunburst Rays radiating outward
      hCtx.strokeStyle = '#ea580c';
      hCtx.lineWidth = 4;
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 16) {
        hCtx.beginPath();
        hCtx.moveTo(cx, cy);
        hCtx.lineTo(cx + Math.cos(a) * 260, cy + Math.sin(a) * 260);
        hCtx.stroke();
      }

      // Outer Layer Petals (Ruby Red & Cyan)
      for (let i = 0; i < 16; i++) {
        const ang = (i * Math.PI) / 8;
        const px = cx + Math.cos(ang) * 175;
        const py = cy + Math.sin(ang) * 175;
        hCtx.beginPath();
        hCtx.ellipse(px, py, 42, 65, ang + Math.PI / 2, 0, Math.PI * 2);
        hCtx.fillStyle = i % 2 === 0 ? '#dc2626' : '#0284c7';
        hCtx.fill();
        hCtx.strokeStyle = '#18181b';
        hCtx.lineWidth = 4;
        hCtx.stroke();
      }

      // Middle Layer Petals (Hot Pink & Emerald Green)
      for (let i = 0; i < 12; i++) {
        const ang = (i * Math.PI) / 6;
        const px = cx + Math.cos(ang) * 115;
        const py = cy + Math.sin(ang) * 115;
        hCtx.beginPath();
        hCtx.ellipse(px, py, 34, 52, ang + Math.PI / 2, 0, Math.PI * 2);
        hCtx.fillStyle = i % 2 === 0 ? '#ec4899' : '#10b981';
        hCtx.fill();
        hCtx.strokeStyle = '#18181b';
        hCtx.lineWidth = 3.5;
        hCtx.stroke();
      }

      // Inner Core Ring
      hCtx.beginPath();
      hCtx.arc(cx, cy, 62, 0, Math.PI * 2);
      hCtx.fillStyle = '#fde047';
      hCtx.fill();
      hCtx.strokeStyle = '#18181b';
      hCtx.lineWidth = 4;
      hCtx.stroke();

      // Center Ruby Jewel
      hCtx.beginPath();
      hCtx.arc(cx, cy, 32, 0, Math.PI * 2);
      hCtx.fillStyle = '#b91c1c';
      hCtx.fill();

      // Peacock Feather Kalka Flourishes on Left and Right sides of Lotus
      [-1, 1].forEach((dir) => {
        // Upper Paisley / Kalka curve
        hCtx.beginPath();
        hCtx.moveTo(cx + dir * 160, cy - 60);
        hCtx.bezierCurveTo(cx + dir * 320, cy - 140, cx + dir * 420, cy - 40, cx + dir * 340, cy + 50);
        hCtx.bezierCurveTo(cx + dir * 280, cy + 120, cx + dir * 200, cy + 60, cx + dir * 180, cy);
        hCtx.fillStyle = '#0d9488';
        hCtx.fill();
        hCtx.strokeStyle = '#18181b';
        hCtx.lineWidth = 4;
        hCtx.stroke();

        // Peacock eye inside kalka
        hCtx.beginPath();
        hCtx.arc(cx + dir * 320, cy - 30, 28, 0, Math.PI * 2);
        hCtx.fillStyle = '#fde047';
        hCtx.fill();
        hCtx.beginPath();
        hCtx.arc(cx + dir * 320, cy - 30, 16, 0, Math.PI * 2);
        hCtx.fillStyle = '#1e3a8a';
        hCtx.fill();
      });
    };

    drawGrandLotusMandala(512, 512);

    // 3. Side Lotus Rosettes near left and right edges (visible from street level!)
    const drawSideRosette = (cx, cy) => {
      const colors = ['#dc2626', '#ec4899', '#f59e0b', '#10b981'];
      for (let i = 0; i < 8; i++) {
        const ang = (i * Math.PI) / 4;
        const px = cx + Math.cos(ang) * 48;
        const py = cy + Math.sin(ang) * 48;
        hCtx.beginPath();
        hCtx.arc(px, py, 22, 0, Math.PI * 2);
        hCtx.fillStyle = colors[i % colors.length];
        hCtx.fill();
        hCtx.strokeStyle = '#18181b';
        hCtx.lineWidth = 2.5;
        hCtx.stroke();
      }
      hCtx.beginPath();
      hCtx.arc(cx, cy, 26, 0, Math.PI * 2);
      hCtx.fillStyle = '#fde047';
      hCtx.fill();
      hCtx.strokeStyle = '#18181b';
      hCtx.lineWidth = 2.5;
      hCtx.stroke();
      hCtx.beginPath();
      hCtx.arc(cx, cy, 12, 0, Math.PI * 2);
      hCtx.fillStyle = '#991b1b';
      hCtx.fill();
    };

    [120, 904].forEach((sideX) => {
      drawSideRosette(sideX, 320);
      drawSideRosette(sideX, 704);
    });

    const hoodTexture = new THREE.CanvasTexture(hoodCanvas);

    // C. Seat Cushion Tapestry Texture
    const cushionCanvas = document.createElement('canvas');
    cushionCanvas.width = 256;
    cushionCanvas.height = 256;
    const sCtx = cushionCanvas.getContext('2d');
    sCtx.fillStyle = '#b91c1c';
    sCtx.fillRect(0, 0, 256, 256);

    sCtx.strokeStyle = '#fde047';
    sCtx.lineWidth = 3;
    for (let i = 0; i < 256; i += 32) {
      sCtx.beginPath();
      sCtx.moveTo(i, 0);
      sCtx.lineTo(i + 32, 256);
      sCtx.stroke();
      sCtx.beginPath();
      sCtx.moveTo(256 - i, 0);
      sCtx.lineTo(256 - i - 32, 256);
      sCtx.stroke();
    }
    const cushionTexture = new THREE.CanvasTexture(cushionCanvas);

    // D. Side Body Art Texture (Sunflower + Turquoise Diamond Lattice) from reference pic
    const sideArtCanvas = document.createElement('canvas');
    sideArtCanvas.width = 512;
    sideArtCanvas.height = 256;
    const saCtx = sideArtCanvas.getContext('2d');

    // Yellow background
    saCtx.fillStyle = '#f59e0b';
    saCtx.fillRect(0, 0, 512, 256);

    // Sunflower in center
    saCtx.fillStyle = '#ea580c';
    saCtx.beginPath();
    saCtx.arc(256, 105, 45, 0, Math.PI * 2);
    saCtx.fill();
    // Sun rays
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
      saCtx.fillStyle = '#dc2626';
      saCtx.beginPath();
      saCtx.arc(256 + Math.cos(a) * 62, 105 + Math.sin(a) * 62, 14, 0, Math.PI * 2);
      saCtx.fill();
    }
    // Sunflower yellow center
    saCtx.fillStyle = '#fde047';
    saCtx.beginPath();
    saCtx.arc(256, 105, 26, 0, Math.PI * 2);
    saCtx.fill();

    // Turquoise diamond cross lattice (Diamond Rail) on lower part
    saCtx.fillStyle = '#0d9488';
    saCtx.fillRect(0, 185, 512, 71);
    saCtx.strokeStyle = '#fde047';
    saCtx.lineWidth = 5;
    for (let x = -20; x <= 530; x += 32) {
      saCtx.beginPath();
      saCtx.moveTo(x, 185);
      saCtx.lineTo(x + 32, 256);
      saCtx.stroke();
      saCtx.beginPath();
      saCtx.moveTo(x + 32, 185);
      saCtx.lineTo(x, 256);
      saCtx.stroke();
    }
    const sideArtTexture = new THREE.CanvasTexture(sideArtCanvas);

    // ----------------------------------------------------
    // 2. Shared Materials
    // ----------------------------------------------------
    const redFrameMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, metalness: 0.6, roughness: 0.3 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.9, roughness: 0.15 });
    const blackRubberMat = new THREE.MeshStandardMaterial({ color: 0x1f2421, roughness: 0.9 });
    const tealFenderMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.5, roughness: 0.4 });
    const woodTinMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.6 });
    const backArtMat = new THREE.MeshStandardMaterial({ map: backTexture, roughness: 0.4 });
    const middleBannerMat = new THREE.MeshStandardMaterial({ map: midBannerTexture, roughness: 0.35, metalness: 0.1 });
    const hoodBackMat = new THREE.MeshStandardMaterial({ map: hoodBackTexture, roughness: 0.6, transparent: true, side: THREE.DoubleSide });
    const stripedFenderMat = new THREE.MeshStandardMaterial({ map: stripedMudguardTexture, roughness: 0.45, metalness: 0.1 });
    const sideArtMat = new THREE.MeshStandardMaterial({ map: sideArtTexture, roughness: 0.5, side: THREE.DoubleSide });
    const hoodMat = new THREE.MeshStandardMaterial({ map: hoodTexture, roughness: 0.7, side: THREE.DoubleSide });
    const cushionMat = new THREE.MeshStandardMaterial({ map: cushionTexture, roughness: 0.6 });

    // ----------------------------------------------------
    // 3. Bicycle Tubular Frame (Front to Middle)
    // ----------------------------------------------------
    const frameGroup = new THREE.Group();

    // Main bottom backbone tube
    const spineGeo = new THREE.CylinderGeometry(0.045, 0.045, 1.8, 12);
    spineGeo.rotateX(Math.PI / 2);
    const spine = new THREE.Mesh(spineGeo, redFrameMat);
    spine.position.set(0, 0.65, 0.1);
    frameGroup.add(spine);

    // Front fork column
    const forkColGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.95, 12);
    forkColGeo.rotateX(-0.18);
    const forkCol = new THREE.Mesh(forkColGeo, redFrameMat);
    forkCol.position.set(0, 0.95, -0.9);
    frameGroup.add(forkCol);

    // Front Wheel Fork Blades
    [-0.1, 0.1].forEach((x) => {
      const bladeGeo = new THREE.CylinderGeometry(0.025, 0.02, 0.7, 8);
      bladeGeo.rotateX(0.15);
      const blade = new THREE.Mesh(bladeGeo, chromeMat);
      blade.position.set(x, 0.48, -1.02);
      frameGroup.add(blade);
    });

    // Handlebars
    const barCenterGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.75, 12);
    barCenterGeo.rotateZ(Math.PI / 2);
    const handlebar = new THREE.Mesh(barCenterGeo, chromeMat);
    handlebar.position.set(0, 1.35, -0.85);
    frameGroup.add(handlebar);

    // Black Rubber Hand Grips
    [-0.38, 0.38].forEach((x) => {
      const gripGeo = new THREE.CylinderGeometry(0.032, 0.032, 0.14, 12);
      gripGeo.rotateZ(Math.PI / 2);
      const grip = new THREE.Mesh(gripGeo, blackRubberMat);
      grip.position.set(x, 1.35, -0.85);
      frameGroup.add(grip);
    });

    // Front Chrome Headlight & Classic Bell
    const hlGeo = new THREE.SphereGeometry(0.09, 14, 14);
    hlGeo.scale(1, 1, 0.7);
    const hlMesh = new THREE.Mesh(hlGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    hlMesh.position.set(0, 1.05, -1.08);
    frameGroup.add(hlMesh);
    this.headlights.push(hlMesh);

    // Chrome Bell
    const bellGeo = new THREE.SphereGeometry(0.05, 12, 12);
    this.bellMesh = new THREE.Mesh(bellGeo, chromeMat);
    this.bellMesh.position.set(-0.24, 1.4, -0.85);
    frameGroup.add(this.bellMesh);

    // Puller Saddle / Bicycle Seat
    const saddleGeo = new THREE.BoxGeometry(0.26, 0.08, 0.32);
    const saddle = new THREE.Mesh(saddleGeo, blackRubberMat);
    saddle.position.set(0, 1.08, -0.15);
    frameGroup.add(saddle);

    // Chrome coil springs under saddle (from reference picture)
    [-0.08, 0.08].forEach((sx) => {
      const springGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.12, 8);
      const spring = new THREE.Mesh(springGeo, chromeMat);
      spring.position.set(sx, 0.98, -0.15);
      frameGroup.add(spring);
    });

    // Pedal Crank Hub
    const crankHubGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.28, 12);
    crankHubGeo.rotateZ(Math.PI / 2);
    const crankHub = new THREE.Mesh(crankHubGeo, chromeMat);
    crankHub.position.set(0, 0.52, -0.15);
    frameGroup.add(crankHub);

    this.bodyGroup.add(frameGroup);

    // ----------------------------------------------------
    // 4. Wheels (1 Front Bicycle Wheel, 2 Big Rear Wheels)
    // ----------------------------------------------------

    // Front Wheel (z = -1.05) with teal mudguard
    this.frontWheel = this.createRickshawWheel(0.42, redFrameMat, chromeMat, blackRubberMat);
    this.frontWheel.position.set(0, 0.42, -1.05);
    this.bodyGroup.add(this.frontWheel);
    this.wheels.push(this.frontWheel);

    const fMudGeo = new THREE.CylinderGeometry(0.46, 0.46, 0.12, 16, 1, true, 0, Math.PI * 0.8);
    fMudGeo.rotateZ(Math.PI / 2);
    const fMud = new THREE.Mesh(fMudGeo, tealFenderMat);
    fMud.position.set(0, 0.44, -1.05);
    this.bodyGroup.add(fMud);

    // Rear Wheels (x = ±0.78, z = 0.95)
    [-0.78, 0.78].forEach((x) => {
      const rw = this.createRickshawWheel(0.48, redFrameMat, chromeMat, blackRubberMat);
      rw.position.set(x, 0.48, 0.95);
      this.bodyGroup.add(rw);
      this.wheels.push(rw);

      // Red & White Spiral Candy Striped Mudguards over rear wheels (from reference photo!)
      const fenderGeo = new THREE.CylinderGeometry(0.53, 0.53, 0.16, 20, 1, true, 0, Math.PI);
      fenderGeo.rotateZ(Math.PI / 2);
      const fender = new THREE.Mesh(fenderGeo, stripedFenderMat);
      fender.position.set(x, 0.48, 0.95);
      this.bodyGroup.add(fender);
    });

    // ----------------------------------------------------
    // 5. Passenger Carriage (Body, Footrest, Seat, Hood)
    // ----------------------------------------------------
    const carriageGroup = new THREE.Group();

    // Wooden / Tin chassis bed
    const floorGeo = new THREE.BoxGeometry(1.25, 0.08, 1.25);
    const floor = new THREE.Mesh(floorGeo, woodTinMat);
    floor.position.set(0, 0.65, 0.75);
    carriageGroup.add(floor);

    // Footrest hanging forward
    const footrestGeo = new THREE.BoxGeometry(0.9, 0.05, 0.5);
    const footrest = new THREE.Mesh(footrestGeo, woodTinMat);
    footrest.position.set(0, 0.48, 0.35);
    carriageGroup.add(footrest);

    // Passenger Cushion Seat Box
    const seatBoxGeo = new THREE.BoxGeometry(1.2, 0.38, 0.58);
    const seatBox = new THREE.Mesh(seatBoxGeo, woodTinMat);
    seatBox.position.set(0, 0.86, 0.88);
    carriageGroup.add(seatBox);

    // Authentic Side Art Plates (Sunflower + Turquoise Diamond Lattice)
    [-0.62, 0.62].forEach((x, idx) => {
      const sidePlateGeo = new THREE.PlaneGeometry(1.15, 0.52);
      const sidePlate = new THREE.Mesh(sidePlateGeo, sideArtMat);
      sidePlate.position.set(x, 0.96, 0.75);
      sidePlate.rotation.y = idx === 0 ? -Math.PI / 2 : Math.PI / 2;
      carriageGroup.add(sidePlate);
    });

    // Red Patterned Seat Cushion
    const cushionGeo = new THREE.BoxGeometry(1.18, 0.14, 0.56);
    const cushion = new THREE.Mesh(cushionGeo, cushionMat);
    cushion.position.set(0, 1.08, 0.88);
    carriageGroup.add(cushion);

    // Backrest Cushion (supporting mid-back - low profile so couple is clearly visible from rear!)
    const backCushionGeo = new THREE.BoxGeometry(1.16, 0.22, 0.10);
    const backCushion = new THREE.Mesh(backCushionGeo, cushionMat);
    backCushion.position.set(0, 1.15, 1.08);
    carriageGroup.add(backCushion);

    // Side Armrests with decorative carved wood
    [-0.58, 0.58].forEach((x) => {
      const armGeo = new THREE.BoxGeometry(0.08, 0.28, 0.6);
      const arm = new THREE.Mesh(armGeo, tealFenderMat);
      arm.position.set(x, 1.22, 0.88);
      carriageGroup.add(arm);
    });

    // ----------------------------------------------------
    // AUTHENTIC BANGLADESHI RICKSHAW ART BACKSIDE (Exact Match to Reference Picture!)
    // ----------------------------------------------------
    // 1. Lower Tin Scenic Plate (Rising Sun, River, Village Houses & 3 Silver Hearts)
    const backPlateGeo = new THREE.PlaneGeometry(1.06, 0.54);
    const backPlate = new THREE.Mesh(backPlateGeo, backArtMat);
    backPlate.position.set(0, 0.66, 1.18);
    backPlate.rotation.y = Math.PI; // Face backwards toward oncoming rear traffic!
    carriageGroup.add(backPlate);

    // 2. Middle Silver Cowl Banner ("বাংলাদেশ" with "মা" medallions from reference photo)
    const midBannerGeo = new THREE.PlaneGeometry(1.08, 0.19);
    const midBanner = new THREE.Mesh(midBannerGeo, middleBannerMat);
    midBanner.position.set(0, 0.96, 1.185);
    midBanner.rotation.y = Math.PI;
    carriageGroup.add(midBanner);

    // 3. Upper Hood Back Arched Panel ("মায়ের দোয়া", Blue Strap "১", & Symmetrical Folk Flowers)
    const hoodBackGeo = new THREE.PlaneGeometry(1.22, 0.82);
    const hoodBackMesh = new THREE.Mesh(hoodBackGeo, hoodBackMat);
    hoodBackMesh.position.set(0, 1.50, 1.11);
    hoodBackMesh.rotation.y = Math.PI;
    carriageGroup.add(hoodBackMesh);

    // Rear Mudguard Reflectors / Taillights (mounted on red & white striped fenders)
    [-0.78, 0.78].forEach((x) => {
      const tlHousing = new THREE.Mesh(
        new THREE.CylinderGeometry(0.055, 0.055, 0.035, 12),
        chromeMat
      );
      tlHousing.rotateX(Math.PI / 2);
      tlHousing.position.set(x, 0.62, 1.16);
      carriageGroup.add(tlHousing);

      const tlGeo = new THREE.SphereGeometry(0.048, 12, 12);
      const tl = new THREE.Mesh(tlGeo, new THREE.MeshBasicMaterial({ color: 0xef4444 }));
      tl.position.set(x, 0.62, 1.18);
      carriageGroup.add(tl);
      this.brakeLights.push(tl);
    });

    // ----------------------------------------------------
    // TRADITIONAL ARCHED RICKSHAW ROOF / CANOPY (ছাদ ও হুড)
    // Prominent curved folk art roof spanning overhead with open rear arch so couple remains fully visible!
    // ----------------------------------------------------
    // 1. Arched Canopy Roof (ছাদ) - Curves overhead from left to right along Z axis
    const hoodGeo = new THREE.CylinderGeometry(0.70, 0.70, 0.96, 24, 1, true, -Math.PI / 2, Math.PI);
    hoodGeo.rotateX(-Math.PI / 2); // Curves UPWARDS overhead (peak at y = 2.20m!)
    const hood = new THREE.Mesh(hoodGeo, hoodMat);
    hood.position.set(0, 1.50, 0.62);
    carriageGroup.add(hood);

    // 2. Front Visor Arch Rim & Decorative Scalloped Fringe (overhang shading puller's back)
    const frontArchGeo = new THREE.TorusGeometry(0.70, 0.022, 8, 24, Math.PI);
    const frontArch = new THREE.Mesh(frontArchGeo, redFrameMat);
    frontArch.position.set(0, 1.50, 0.14);
    carriageGroup.add(frontArch);

    for (let i = 0; i <= 14; i++) {
      const ang = (i * Math.PI) / 14;
      const fx = Math.cos(ang) * 0.70;
      const fy = 1.50 + Math.sin(ang) * 0.70;
      const fringe = new THREE.Mesh(
        new THREE.SphereGeometry(0.022, 6, 6),
        new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.8 })
      );
      fringe.position.set(fx, fy - 0.02, 0.14);
      carriageGroup.add(fringe);
    }

    // 3. Rear Decorative Arch Border framing the rear opening
    const rearArchGeo = new THREE.TorusGeometry(0.70, 0.025, 8, 24, Math.PI);
    const rearArch = new THREE.Mesh(rearArchGeo, redFrameMat);
    rearArch.position.set(0, 1.50, 1.10);
    carriageGroup.add(rearArch);

    // Scalloped Red Decorative Fringe along rear canopy arch rim (Image 2 & 5)
    for (let i = 0; i <= 14; i++) {
      const ang = (i * Math.PI) / 14;
      const fx = Math.cos(ang) * 0.70;
      const fy = 1.50 + Math.sin(ang) * 0.70;
      const fringeBead = new THREE.Mesh(
        new THREE.SphereGeometry(0.022, 6, 6),
        new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.8 })
      );
      fringeBead.position.set(fx, fy - 0.02, 1.10);
      carriageGroup.add(fringeBead);
    }

    // 4. Upper Rear Hood Cowl Panel (Maroon & Floral Rickshaw Art Header from Image 5)
    // Mounted high above couple's heads (y = 1.96 - 2.20) framing the top arch
    const hoodHeaderGeo = new THREE.CylinderGeometry(0.70, 0.70, 0.12, 24, 1, true, -Math.PI / 2, Math.PI);
    hoodHeaderGeo.rotateX(-Math.PI / 2);
    const hoodHeader = new THREE.Mesh(hoodHeaderGeo, hoodMat);
    hoodHeader.position.set(0, 1.50, 1.04);
    carriageGroup.add(hoodHeader);

    // 5. Side Canvas Panels on Left & Right (Image 2)
    [-0.70, 0.70].forEach((x, idx) => {
      const sideFlapGeo = new THREE.PlaneGeometry(0.82, 0.36);
      const sideFlap = new THREE.Mesh(sideFlapGeo, hoodMat);
      sideFlap.position.set(x, 1.34, 0.65);
      sideFlap.rotation.y = idx === 0 ? -Math.PI / 2 : Math.PI / 2;
      carriageGroup.add(sideFlap);

      // Folding Scissors Struts (হুডের কাঁচি) in shiny chrome (Image 2)
      const strut1 = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.78, 8), chromeMat);
      strut1.position.set(x + (idx === 0 ? -0.015 : 0.015), 1.34, 0.65);
      strut1.rotation.x = 0.45;
      carriageGroup.add(strut1);

      const strut2 = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.78, 8), chromeMat);
      strut2.position.set(x + (idx === 0 ? -0.015 : 0.015), 1.34, 0.65);
      strut2.rotation.x = -0.45;
      carriageGroup.add(strut2);

      // Center scissor hinge rivet
      const rivet = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 8), redFrameMat);
      rivit: rivet.position.set(x + (idx === 0 ? -0.025 : 0.025), 1.34, 0.65);
      carriageGroup.add(rivet);
    });

    // 6. Slanted Red Metal Main Support Struts (connecting Hood to Lower Chassis Frame)
    [-0.64, 0.64].forEach((x) => {
      const strutGeo = new THREE.CylinderGeometry(0.016, 0.016, 1.15, 8);
      strutGeo.rotateX(0.42);
      const strut = new THREE.Mesh(strutGeo, redFrameMat);
      strut.position.set(x, 1.40, 0.60);
      carriageGroup.add(strut);
    });

    this.bodyGroup.add(carriageGroup);

    // ----------------------------------------------------
    // 6. Rickshaw Puller ("Mama") in Front
    // ----------------------------------------------------
    const pullerGroup = new THREE.Group();

    // Puller Torso (wearing sleeveless blue/green vest)
    const vestMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.8 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0x8d5524, roughness: 0.7 });
    const lungiMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.9 });

    const pullerTorsoGeo = new THREE.BoxGeometry(0.36, 0.48, 0.22);
    const pullerTorso = new THREE.Mesh(pullerTorsoGeo, vestMat);
    pullerTorso.position.set(0, 1.42, -0.25);
    pullerTorso.rotation.x = 0.22; // Leaning forward slightly to pedal!
    pullerGroup.add(pullerTorso);

    // Puller Head with Gamcha
    const pullerHeadGeo = new THREE.SphereGeometry(0.12, 14, 14);
    const pullerHead = new THREE.Mesh(pullerHeadGeo, skinMat);
    pullerHead.position.set(0, 1.74, -0.32);
    pullerGroup.add(pullerHead);

    const gamchaGeo = new THREE.TorusGeometry(0.11, 0.035, 8, 16);
    gamchaGeo.rotateX(Math.PI / 2);
    const gamcha = new THREE.Mesh(gamchaGeo, new THREE.MeshStandardMaterial({ color: 0xdc2626 }));
    gamcha.position.set(0, 1.68, -0.32);
    pullerGroup.add(gamcha);

    // Puller Arms holding handlebars
    [-0.18, 0.18].forEach((x) => {
      const armGeo = new THREE.CylinderGeometry(0.04, 0.035, 0.52, 8);
      armGeo.rotateX(0.75);
      const arm = new THREE.Mesh(armGeo, skinMat);
      arm.position.set(x, 1.42, -0.52);
      pullerGroup.add(arm);
    });

    // Puller Lungi / Lower body
    const lungiGeo = new THREE.BoxGeometry(0.38, 0.44, 0.32);
    const lungi = new THREE.Mesh(lungiGeo, lungiMat);
    lungi.position.set(0, 1.05, -0.18);
    pullerGroup.add(lungi);

    this.bodyGroup.add(pullerGroup);

    // ----------------------------------------------------
    // 7. Cute Teenage Couple (Sitting Romantically & Holding Hands!)
    // ----------------------------------------------------
    this.buildCuteRomanticCouple();

    // ----------------------------------------------------
    // 8. Subtle Boost Jet Exhaust (Behind Passenger Seat)
    // ----------------------------------------------------
    [-0.32, 0.32].forEach((x) => {
      const flameGeo = new THREE.ConeGeometry(0.12, 0.65, 8);
      flameGeo.rotateX(-Math.PI / 2);
      const flameMat = new THREE.MeshBasicMaterial({
        color: 0xffbb00,
        transparent: true,
        opacity: 0
      });
      const flame = new THREE.Mesh(flameGeo, flameMat);
      flame.position.set(x, 0.58, 1.25);
      this.bodyGroup.add(flame);
      this.exhaustFires.push(flame);
    });
  }

  // Create Bicycle / Rickshaw Wheel with Chrome Rim, Spokes & Tire (Perfect Round Wheel in YZ plane)
  createRickshawWheel(radius, hubMat, chromeMat, tireMat) {
    const wheelGroup = new THREE.Group();

    // Rubber Tire - oriented in YZ plane (axle along X)
    const tireGeo = new THREE.TorusGeometry(radius, 0.038, 14, 36);
    tireGeo.rotateY(Math.PI / 2);
    const tire = new THREE.Mesh(tireGeo, tireMat);
    wheelGroup.add(tire);

    // Chrome Rim - oriented in YZ plane
    const rimGeo = new THREE.TorusGeometry(radius * 0.92, 0.02, 10, 36);
    rimGeo.rotateY(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, chromeMat);
    wheelGroup.add(rim);

    // Red Center Hub - cylinder with axis along X
    const hubGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.14, 14);
    hubGeo.rotateZ(Math.PI / 2);
    const hub = new THREE.Mesh(hubGeo, hubMat);
    wheelGroup.add(hub);

    // 14 Spokes radiating outwards in YZ plane
    for (let i = 0; i < 14; i++) {
      const angle = (i * Math.PI) / 7;
      const spokeGeo = new THREE.CylinderGeometry(0.005, 0.005, radius * 1.84, 4);
      spokeGeo.rotateX(angle);
      const spoke = new THREE.Mesh(spokeGeo, chromeMat);
      wheelGroup.add(spoke);
    }

    return wheelGroup;
  }

  // ===================================================================
  // CUTE TEENAGE COUPLE (Romantic Posture, Clasped Hands!)
  // ===================================================================
  buildCuteRomanticCouple() {
    this.coupleGroup = new THREE.Group();
    this.coupleGroup.position.set(0, 0, 0);

    const skinMat = new THREE.MeshStandardMaterial({ color: 0xf5c396, roughness: 0.6 });
    const boyHairMat = new THREE.MeshStandardMaterial({ color: 0x1c1917, roughness: 0.5 });
    const girlHairMat = new THREE.MeshStandardMaterial({ color: 0x0f0e0e, roughness: 0.4 });

    // Boy's clothes: Coral-red casual shirt & dark navy jeans
    const boyShirtMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.7 });
    const boyJeansMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });

    // Girl's clothes: Beautiful teal/pink kurti & dupatta
    const girlDressMat = new THREE.MeshStandardMaterial({ color: 0xec4899, roughness: 0.6 });
    const girlDupattaMat = new THREE.MeshStandardMaterial({ color: 0xfde047, roughness: 0.7 });
    const girlPantsMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 });

    // ----------------------------------------------------
    // A. BOY (Sitting on the Left, x ~ -0.25)
    // ----------------------------------------------------
    const boyGroup = new THREE.Group();
    boyGroup.position.set(-0.25, 1.18, 0.82);

    // Boy Torso
    const boyTorsoGeo = new THREE.BoxGeometry(0.32, 0.42, 0.24);
    const boyTorso = new THREE.Mesh(boyTorsoGeo, boyShirtMat);
    boyTorso.position.set(0, 0.22, 0);
    boyTorso.rotation.y = 0.16; // Gently turned toward girl!
    boyTorso.rotation.z = -0.06;
    boyGroup.add(boyTorso);

    // Boy Head & Hair
    const boyHeadGeo = new THREE.SphereGeometry(0.12, 14, 14);
    const boyHead = new THREE.Mesh(boyHeadGeo, skinMat);
    boyHead.position.set(0.02, 0.52, 0.02);
    boyHead.rotation.y = 0.26; // Looking fondly toward girl!
    boyHead.rotation.z = -0.08;
    boyGroup.add(boyHead);

    const boyHairGeo = new THREE.SphereGeometry(0.13, 14, 14);
    boyHairGeo.scale(1.02, 1.05, 1.02);
    const boyHair = new THREE.Mesh(boyHairGeo, boyHairMat);
    boyHair.position.set(0.02, 0.55, 0.01);
    boyGroup.add(boyHair);

    // Boy Legs (Sitting on cushion with knees bent forward)
    const boyLegsGeo = new THREE.BoxGeometry(0.28, 0.18, 0.48);
    const boyLegs = new THREE.Mesh(boyLegsGeo, boyJeansMat);
    boyLegs.position.set(0, -0.05, -0.16);
    boyGroup.add(boyLegs);

    // Boy Left Arm (Resting on side armrest)
    const boyLeftArmGeo = new THREE.CylinderGeometry(0.04, 0.035, 0.38, 8);
    boyLeftArmGeo.rotateZ(0.25);
    const boyLeftArm = new THREE.Mesh(boyLeftArmGeo, boyShirtMat);
    boyLeftArm.position.set(-0.22, 0.18, 0);
    boyGroup.add(boyLeftArm);

    // BOY'S RIGHT ARM: Reaching into center holding girl's hand!
    const boyRightArmGeo = new THREE.CylinderGeometry(0.04, 0.035, 0.34, 8);
    boyRightArmGeo.rotateZ(-Math.PI / 4);
    boyRightArmGeo.rotateX(-0.18);
    const boyRightArm = new THREE.Mesh(boyRightArmGeo, boyShirtMat);
    boyRightArm.position.set(0.18, 0.14, -0.07);
    boyGroup.add(boyRightArm);

    this.coupleGroup.add(boyGroup);

    // ----------------------------------------------------
    // B. GIRL (Sitting on the Right, x ~ +0.25)
    // ----------------------------------------------------
    const girlGroup = new THREE.Group();
    girlGroup.position.set(0.25, 1.18, 0.82);

    // Girl Torso (Pretty kurti)
    const girlTorsoGeo = new THREE.BoxGeometry(0.28, 0.38, 0.22);
    const girlTorso = new THREE.Mesh(girlTorsoGeo, girlDressMat);
    girlTorso.position.set(0, 0.2, 0);
    girlTorso.rotation.y = -0.18; // Turned toward boy!
    girlTorso.rotation.z = 0.08;
    girlGroup.add(girlTorso);

    // Yellow Dupatta / Orna draped gracefully over shoulder
    const dupattaGeo = new THREE.BoxGeometry(0.32, 0.35, 0.24);
    const dupatta = new THREE.Mesh(dupattaGeo, girlDupattaMat);
    dupatta.position.set(0, 0.22, 0.02);
    girlGroup.add(dupatta);

    // Girl Head with Long Hair / Cute Ponytail
    const girlHeadGeo = new THREE.SphereGeometry(0.11, 14, 14);
    const girlHead = new THREE.Mesh(girlHeadGeo, skinMat);
    girlHead.position.set(-0.02, 0.48, 0.02);
    girlHead.rotation.y = -0.3; // Looking happily toward boy!
    girlHead.rotation.z = 0.1;
    girlGroup.add(girlHead);

    const girlHairGeo = new THREE.SphereGeometry(0.12, 14, 14);
    girlHairGeo.scale(1.04, 1.06, 1.08);
    const girlHair = new THREE.Mesh(girlHairGeo, girlHairMat);
    girlHair.position.set(-0.02, 0.51, 0);
    girlGroup.add(girlHair);

    // Ponytail trailing down
    const ponytailGeo = new THREE.CylinderGeometry(0.04, 0.02, 0.32, 8);
    ponytailGeo.rotateX(-0.4);
    const ponytail = new THREE.Mesh(ponytailGeo, girlHairMat);
    ponytail.position.set(-0.01, 0.38, 0.15);
    girlGroup.add(ponytail);

    // Girl Legs
    const girlLegsGeo = new THREE.BoxGeometry(0.26, 0.16, 0.46);
    const girlLegs = new THREE.Mesh(girlLegsGeo, girlPantsMat);
    girlLegs.position.set(0, -0.05, -0.16);
    girlGroup.add(girlLegs);

    // Girl Right Arm (Holding the Red Rose gracefully upright!)
    const girlRightArmGeo = new THREE.CylinderGeometry(0.035, 0.03, 0.35, 8);
    girlRightArmGeo.rotateZ(-0.25);
    girlRightArmGeo.rotateX(-0.25);
    const girlRightArm = new THREE.Mesh(girlRightArmGeo, girlDressMat);
    girlRightArm.position.set(0.2, 0.16, -0.05);
    girlGroup.add(girlRightArm);

    // Romantic Red Rose in Girl's Hand! (Clearly visible from behind the rickshaw!)
    const roseGroup = new THREE.Group();
    // Green stem
    const stemGeo = new THREE.CylinderGeometry(0.007, 0.007, 0.32, 6);
    const roseStemMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8 });
    const stem = new THREE.Mesh(stemGeo, roseStemMat);
    stem.position.set(0, 0.14, 0);
    roseGroup.add(stem);

    // Green leaves
    const leafGeo = new THREE.BoxGeometry(0.07, 0.012, 0.035);
    const leaf1 = new THREE.Mesh(leafGeo, roseStemMat);
    leaf1.position.set(0.035, 0.12, 0);
    leaf1.rotation.z = 0.3;
    roseGroup.add(leaf1);

    const leaf2 = new THREE.Mesh(leafGeo, roseStemMat);
    leaf2.position.set(-0.035, 0.18, 0);
    leaf2.rotation.z = -0.3;
    roseGroup.add(leaf2);

    // Blooming Ruby Red Rose Blossom
    const rosePetalMat = new THREE.MeshStandardMaterial({
      color: 0xdc2626,
      roughness: 0.35,
      metalness: 0.1,
      emissive: 0x7f1d1d,
      emissiveIntensity: 0.3
    });
    const roseBud = new THREE.Mesh(new THREE.DodecahedronGeometry(0.055, 1), rosePetalMat);
    roseBud.position.set(0, 0.30, 0);
    roseBud.scale.set(1.1, 1.25, 1.1);
    roseGroup.add(roseBud);

    const roseCenter = new THREE.Mesh(
      new THREE.SphereGeometry(0.038, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.3 })
    );
    roseCenter.position.set(0, 0.32, 0);
    roseGroup.add(roseCenter);

    // Mount rose near girl's right hand tilted gracefully forward and upward
    roseGroup.position.set(0.22, 0.22, -0.15);
    roseGroup.rotation.x = -0.35;
    roseGroup.rotation.z = -0.22;
    girlGroup.add(roseGroup);

    // GIRL'S LEFT ARM: Reaching into center holding boy's hand!
    const girlLeftArmGeo = new THREE.CylinderGeometry(0.035, 0.03, 0.32, 8);
    girlLeftArmGeo.rotateZ(Math.PI / 4);
    girlLeftArmGeo.rotateX(-0.18);
    const girlLeftArm = new THREE.Mesh(girlLeftArmGeo, girlDressMat);
    girlLeftArm.position.set(-0.17, 0.14, -0.07);
    girlGroup.add(girlLeftArm);

    this.coupleGroup.add(girlGroup);

    // ----------------------------------------------------
    // C. CLASPED HANDS IN THE CENTER (ROMANTIC DETAIL!)
    // ----------------------------------------------------
    const claspedHandsGroup = new THREE.Group();
    claspedHandsGroup.position.set(0, 1.28, 0.74);

    // Boy's hand
    const boyHand = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 10), skinMat);
    boyHand.scale.set(1.3, 0.9, 1.1);
    boyHand.position.set(-0.02, 0, 0);
    claspedHandsGroup.add(boyHand);

    // Girl's hand interlaced holding
    const girlHand = new THREE.Mesh(new THREE.SphereGeometry(0.042, 10, 10), skinMat);
    girlHand.scale.set(1.2, 0.85, 1.05);
    girlHand.position.set(0.02, 0.01, 0.01);
    claspedHandsGroup.add(girlHand);

    this.coupleGroup.add(claspedHandsGroup);

    this.bodyGroup.add(this.coupleGroup);
  }

  // Frame-by-frame animation & dynamics update
  update(speedKmh, currentLaneX, targetLaneX, isBraking, isBoosting, delta) {
    const forwardMs = (speedKmh * 1000) / 3600;

    // 1. Wheel Rotation based on forward speed
    const wheelRotDelta = (forwardMs / 0.42) * delta;
    this.wheelRotation -= wheelRotDelta;
    this.wheels.forEach((w) => {
      w.rotation.x = this.wheelRotation;
    });

    // 2. Gentle Bicycle Banking Roll on lane steering
    const laneOffset = targetLaneX - currentLaneX;
    const targetRoll = -laneOffset * 0.12;
    this.currentRoll += (targetRoll - this.currentRoll) * Math.min(1.0, delta * 7);
    this.bodyGroup.rotation.z = this.currentRoll;

    // 3. Chassis Yaw turning angle
    const targetYaw = -laneOffset * 0.08;
    this.currentYaw += (targetYaw - this.currentYaw) * Math.min(1.0, delta * 6);
    this.bodyGroup.rotation.y = this.currentYaw;

    // 4. Pitch dynamics (Dips slightly on brake, pitches back on boost)
    let targetPitch = 0;
    if (isBraking) {
      targetPitch = 0.04;
    } else if (isBoosting) {
      targetPitch = -0.05;
    }
    this.currentPitch += (targetPitch - this.currentPitch) * Math.min(1.0, delta * 8);
    this.bodyGroup.rotation.x = this.currentPitch;

    // 5. Couple gentle animated romance bobbing & hand pulse
    const time = performance.now() * 0.001;
    const bobFactor = Math.min(1.0, speedKmh / 80);
    const bob = Math.sin(time * 8.5) * 0.025 * bobFactor;
    this.coupleGroup.position.y = bob;
    this.coupleGroup.rotation.z = Math.sin(time * 4.2) * 0.015 * bobFactor;

    // 6. Boost Exhaust Flames
    this.exhaustFires.forEach((flame) => {
      if (isBoosting) {
        flame.material.opacity = 0.9;
        flame.scale.set(
          1.1 + Math.random() * 0.4,
          1.1 + Math.random() * 0.5,
          1.1 + Math.random() * 0.4
        );
      } else {
        flame.material.opacity = 0;
      }
    });

    // 7. Bell / Horn Flash Animation
    if (this.hornTimer > 0) {
      this.hornTimer -= delta;
      if (this.bellMesh) {
        this.bellMesh.scale.set(1.3, 1.3, 1.3);
      }
      this.headlights.forEach((hl) => hl.scale.set(1.4, 1.4, 1.4));
    } else {
      if (this.bellMesh) {
        this.bellMesh.scale.set(1.0, 1.0, 1.0);
      }
      this.headlights.forEach((hl) => hl.scale.set(1.0, 1.0, 1.0));
    }

    this.updateBoundingBox();
  }

  updateBoundingBox() {
    const center = this.group.position.clone();
    center.y += 1.15;
    this.box.setFromCenterAndSize(center, this.collisionSize);
  }

  triggerCrash() {
    this.bodyGroup.rotation.z = 0.35;
    this.bodyGroup.rotation.y = 0.45;
    this.bodyGroup.rotation.x = -0.18;
    this.bodyGroup.position.y = 0.25;
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
