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
    this.collisionSize = new THREE.Vector3(2.1, 2.8, 5.5);

    this.buildTruck();

    // Balanced proportional size so highway in front is clearly visible
    this.group.scale.set(0.88, 0.88, 0.88);
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
    // D. AUTHENTIC BANGLADESHI TRUCK TAILGATE ART (Dala Backside - from User Image!)
    // Symmetrical 3-Panel Layout with Folk Bird, Floral Rosettes, Flared Wings & Yellow Dot Columns!
    // ----------------------------------------------------
    const tailgateCanvas = document.createElement('canvas');
    tailgateCanvas.width = 1024;
    tailgateCanvas.height = 680;
    const tCtx = tailgateCanvas.getContext('2d');

    // 1. Primary Deshi Truck Sky-Blue Body Base (Image 1)
    tCtx.fillStyle = '#4a90e2';
    tCtx.fillRect(0, 0, 1024, 680);

    // 2. Flared Corner Crown Wings (Taj / Wing Tips at top-left and top-right)
    // Dark Navy Blue Triangular Wing Tips (Image 1)
    tCtx.fillStyle = '#172554';
    // Top-left wing tip
    tCtx.beginPath();
    tCtx.moveTo(0, 0);
    tCtx.lineTo(110, 0);
    tCtx.lineTo(0, 85);
    tCtx.closePath();
    tCtx.fill();

    // Top-right wing tip
    tCtx.beginPath();
    tCtx.moveTo(1024, 0);
    tCtx.lineTo(914, 0);
    tCtx.lineTo(1024, 85);
    tCtx.closePath();
    tCtx.fill();

    // Flared angle cut lines
    tCtx.strokeStyle = '#18181b';
    tCtx.lineWidth = 5;
    tCtx.beginPath();
    tCtx.moveTo(0, 85);
    tCtx.lineTo(110, 0);
    tCtx.lineTo(914, 0);
    tCtx.lineTo(1024, 85);
    tCtx.stroke();

    // 3. Top Decorative Trim Beam (y: 35 to 85)
    tCtx.fillStyle = '#2563eb';
    tCtx.fillRect(100, 35, 824, 45);
    tCtx.strokeStyle = '#18181b';
    tCtx.lineWidth = 3;
    tCtx.strokeRect(100, 35, 824, 45);

    // Decorative Dark Blue Sawtooth / Scallop Triangles along top beam (from Image 1)
    tCtx.fillStyle = '#1e3a8a';
    for (let x = 110; x <= 900; x += 32) {
      tCtx.beginPath();
      tCtx.moveTo(x, 80);
      tCtx.lineTo(x + 16, 45);
      tCtx.lineTo(x + 32, 80);
      tCtx.closePath();
      tCtx.fill();
    }

    // 4. Left and Right Yellow Vertical Bead Columns (from Image 1)
    const drawYellowBorderColumn = (colX) => {
      // Yellow Column Background
      tCtx.fillStyle = '#facc15';
      tCtx.fillRect(colX, 85, 54, 345);
      tCtx.strokeStyle = '#18181b';
      tCtx.lineWidth = 4;
      tCtx.strokeRect(colX, 85, 54, 345);

      // Vertical Column of Folk Red Bullseye Dots
      for (let y = 104; y <= 415; y += 26) {
        // Red outer ring
        tCtx.fillStyle = '#dc2626';
        tCtx.beginPath();
        tCtx.arc(colX + 27, y, 9.5, 0, Math.PI * 2);
        tCtx.fill();

        // Yellow inner core
        tCtx.fillStyle = '#fde047';
        tCtx.beginPath();
        tCtx.arc(colX + 27, y, 4.5, 0, Math.PI * 2);
        tCtx.fill();
      }
    };
    drawYellowBorderColumn(36);
    drawYellowBorderColumn(934);

    // 5. Three Main Tailgate Panels (divided by blue framing)
    const panelTopY = 90;
    const panelHeight = 335;
    const panelBotY = panelTopY + panelHeight; // 425

    // A. Left Display Panel (Folk Floral Rosette)
    const leftPX = 104;
    const panelW = 252;
    tCtx.fillStyle = '#78aee6'; // Soft sky blue interior (Image 1)
    tCtx.fillRect(leftPX, panelTopY, panelW, panelHeight);
    tCtx.strokeStyle = '#18181b';
    tCtx.lineWidth = 6;
    tCtx.strokeRect(leftPX, panelTopY, panelW, panelHeight);

    // B. Center Display Panel (The Masterpiece Folk Bird)
    const midPX = 386;
    tCtx.fillStyle = '#78aee6';
    tCtx.fillRect(midPX, panelTopY, panelW, panelHeight);
    tCtx.strokeStyle = '#18181b';
    tCtx.lineWidth = 6;
    tCtx.strokeRect(midPX, panelTopY, panelW, panelHeight);

    // C. Right Display Panel (Folk Floral Rosette)
    const rightPX = 668;
    tCtx.fillStyle = '#78aee6';
    tCtx.fillRect(rightPX, panelTopY, panelW, panelHeight);
    tCtx.strokeStyle = '#18181b';
    tCtx.lineWidth = 6;
    tCtx.strokeRect(rightPX, panelTopY, panelW, panelHeight);

    // 6. Draw Symmetrical Folk Floral Rosettes on Left & Right Panels (from Image 1)
    const drawFloralRosette = (cx, cy) => {
      // 4 Cardinal Palmette / Leaf Clusters (North, South, East, West)
      const dirs = [
        { dx: 0, dy: -1 }, // North
        { dx: 0, dy: 1 },  // South
        { dx: 1, dy: 0 },  // East
        { dx: -1, dy: 0 }  // West
      ];

      dirs.forEach(({ dx, dy }) => {
        // Main pointed center leaf (Forest Green)
        tCtx.fillStyle = '#15803d';
        tCtx.beginPath();
        const tipX = cx + dx * 72;
        const tipY = cy + dy * 72;
        const perpX = -dy * 16;
        const perpY = dx * 16;
        tCtx.moveTo(cx + dx * 24, cy + dy * 24);
        tCtx.quadraticCurveTo(cx + dx * 46 + perpX, cy + dy * 46 + perpY, tipX, tipY);
        tCtx.quadraticCurveTo(cx + dx * 46 - perpX, cy + dy * 46 - perpY, cx + dx * 24, cy + dy * 24);
        tCtx.fill();

        // Left curving side leaf
        tCtx.fillStyle = '#166534';
        tCtx.beginPath();
        const sideTip1X = cx + dx * 52 + perpX * 1.5;
        const sideTip1Y = cy + dy * 52 + perpY * 1.5;
        tCtx.moveTo(cx + dx * 22, cy + dy * 22);
        tCtx.quadraticCurveTo(cx + dx * 34 + perpX * 1.8, cy + dy * 34 + perpY * 1.8, sideTip1X, sideTip1Y);
        tCtx.quadraticCurveTo(cx + dx * 38 + perpX * 0.8, cy + dy * 38 + perpY * 0.8, cx + dx * 22, cy + dy * 22);
        tCtx.fill();

        // Right curving side leaf
        tCtx.beginPath();
        const sideTip2X = cx + dx * 52 - perpX * 1.5;
        const sideTip2Y = cy + dy * 52 - perpY * 1.5;
        tCtx.moveTo(cx + dx * 22, cy + dy * 22);
        tCtx.quadraticCurveTo(cx + dx * 34 - perpX * 1.8, cy + dy * 34 - perpY * 1.8, sideTip2X, sideTip2Y);
        tCtx.quadraticCurveTo(cx + dx * 38 - perpX * 0.8, cy + dy * 38 - perpY * 0.8, cx + dx * 22, cy + dy * 22);
        tCtx.fill();

        // Fine light-green vein
        tCtx.strokeStyle = '#4ade80';
        tCtx.lineWidth = 1.8;
        tCtx.beginPath();
        tCtx.moveTo(cx + dx * 26, cy + dy * 26);
        tCtx.lineTo(tipX * 0.95 + cx * 0.05, tipY * 0.95 + cy * 0.05);
        tCtx.stroke();
      });

      // 4 Diagonal Corner Leaves (NE, NW, SE, SW)
      const diags = [
        { dx: 0.707, dy: -0.707 },
        { dx: -0.707, dy: -0.707 },
        { dx: 0.707, dy: 0.707 },
        { dx: -0.707, dy: 0.707 }
      ];
      diags.forEach(({ dx, dy }) => {
        tCtx.fillStyle = '#16a34a';
        tCtx.beginPath();
        const tipX = cx + dx * 46;
        const tipY = cy + dy * 46;
        const perpX = -dy * 10;
        const perpY = dx * 10;
        tCtx.moveTo(cx + dx * 22, cy + dy * 22);
        tCtx.quadraticCurveTo(cx + dx * 32 + perpX, cy + dy * 32 + perpY, tipX, tipY);
        tCtx.quadraticCurveTo(cx + dx * 32 - perpX, cy + dy * 32 - perpY, cx + dx * 22, cy + dy * 22);
        tCtx.fill();
      });

      // Central Golden-Yellow & Orange Flower Core (Image 1)
      // Radiating yellow petal teeth
      tCtx.fillStyle = '#facc15';
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
        tCtx.beginPath();
        tCtx.arc(cx + Math.cos(a) * 27, cy + Math.sin(a) * 27, 4.5, 0, Math.PI * 2);
        tCtx.fill();
      }

      // Main Golden-Yellow Outer Ring
      tCtx.fillStyle = '#facc15';
      tCtx.beginPath();
      tCtx.arc(cx, cy, 25, 0, Math.PI * 2);
      tCtx.fill();
      tCtx.strokeStyle = '#ca8a04';
      tCtx.lineWidth = 2;
      tCtx.stroke();

      // Inner Rich Orange Core
      tCtx.fillStyle = '#ea580c';
      tCtx.beginPath();
      tCtx.arc(cx, cy, 14, 0, Math.PI * 2);
      tCtx.fill();

      // Bright yellow center dot
      tCtx.fillStyle = '#fef08a';
      tCtx.beginPath();
      tCtx.arc(cx, cy, 6, 0, Math.PI * 2);
      tCtx.fill();
    };

    drawFloralRosette(leftPX + panelW * 0.5, panelTopY + panelHeight * 0.5);
    drawFloralRosette(rightPX + panelW * 0.5, panelTopY + panelHeight * 0.5);

    // 7. Draw the Masterpiece Folk Art Bird on Center Panel (from Image 1!)
    const drawFolkBird = (cx, cy, floorY) => {
      // Bird Claws and Legs perched on the bottom black frame line (Image 1)
      tCtx.strokeStyle = '#18181b';
      tCtx.lineWidth = 3.5;
      tCtx.lineCap = 'round';

      // Left leg
      tCtx.beginPath();
      tCtx.moveTo(cx - 24, floorY); // foot on line
      tCtx.lineTo(cx - 30, floorY - 5);
      tCtx.moveTo(cx - 24, floorY);
      tCtx.lineTo(cx - 18, floorY - 5);
      tCtx.moveTo(cx - 24, floorY);
      tCtx.lineTo(cx - 22, floorY - 22); // ankle
      tCtx.lineTo(cx - 32, floorY - 52); // knee angled back
      tCtx.lineTo(cx - 18, floorY - 80); // upper thigh into belly
      tCtx.stroke();

      // Right leg
      tCtx.beginPath();
      tCtx.moveTo(cx + 12, floorY);
      tCtx.lineTo(cx + 6, floorY - 5);
      tCtx.moveTo(cx + 12, floorY);
      tCtx.lineTo(cx + 18, floorY - 5);
      tCtx.moveTo(cx + 12, floorY);
      tCtx.lineTo(cx + 14, floorY - 22);
      tCtx.lineTo(cx + 24, floorY - 52);
      tCtx.lineTo(cx + 8, floorY - 84);
      tCtx.stroke();

      // Fanned Golden-Yellow Tail Feathers with Red Accented Tips (Image 1)
      const tailLobes = [
        { tipX: cx + 72, tipY: cy - 25, midX: cx + 45, midY: cy - 8 },   // Top Lobe
        { tipX: cx + 95, tipY: cy - 2,  midX: cx + 56, midY: cy + 12 },  // Upper-Mid Lobe
        { tipX: cx + 104, tipY: cy + 24, midX: cx + 58, midY: cy + 32 }, // Lower-Mid Lobe
        { tipX: cx + 82, tipY: cy + 50, midX: cx + 48, midY: cy + 46 }   // Bottom Lobe
      ];

      // Draw golden-yellow fan body
      tailLobes.forEach(({ tipX, tipY, midX, midY }) => {
        tCtx.fillStyle = '#facc15'; // Golden yellow tail feather
        tCtx.beginPath();
        tCtx.moveTo(cx + 16, cy + 30); // tail root
        tCtx.quadraticCurveTo(midX, midY - 12, tipX, tipY);
        tCtx.quadraticCurveTo(tipX + 6, tipY + 12, tipX - 12, tipY + 18);
        tCtx.quadraticCurveTo(midX, midY + 12, cx + 16, cy + 38);
        tCtx.closePath();
        tCtx.fill();
        tCtx.strokeStyle = '#18181b';
        tCtx.lineWidth = 2.5;
        tCtx.stroke();

        // Ruby Red Scalloped Cap on Tail Feather Tip (Image 1)
        tCtx.fillStyle = '#dc2626';
        tCtx.beginPath();
        tCtx.moveTo(tipX - 18, tipY + 4);
        tCtx.quadraticCurveTo(tipX - 4, tipY - 8, tipX, tipY);
        tCtx.quadraticCurveTo(tipX + 6, tipY + 12, tipX - 12, tipY + 18);
        tCtx.quadraticCurveTo(tipX - 12, tipY + 10, tipX - 18, tipY + 4);
        tCtx.closePath();
        tCtx.fill();
      });

      // Yellow Lower Belly / Flank
      tCtx.fillStyle = '#facc15';
      tCtx.beginPath();
      tCtx.moveTo(cx - 36, cy + 44);
      tCtx.quadraticCurveTo(cx - 2, cy + 72, cx + 34, cy + 46);
      tCtx.quadraticCurveTo(cx + 8, cy + 22, cx - 36, cy + 44);
      tCtx.closePath();
      tCtx.fill();
      tCtx.strokeStyle = '#18181b';
      tCtx.lineWidth = 2.5;
      tCtx.stroke();

      // Bold Ruby-Red Rounded Proud Chest / Breast (Image 1)
      tCtx.fillStyle = '#dc2626';
      tCtx.beginPath();
      tCtx.moveTo(cx - 16, cy - 42); // base of throat
      tCtx.quadraticCurveTo(cx - 62, cy - 2, cx - 42, cy + 46); // large rounded breast bulging forward
      tCtx.quadraticCurveTo(cx + 12, cy + 34, cx + 4, cy - 22);
      tCtx.closePath();
      tCtx.fill();
      tCtx.strokeStyle = '#18181b';
      tCtx.lineWidth = 2.5;
      tCtx.stroke();

      // Scalloped Blue Wing Feathers (Over the back - Image 1)
      tCtx.fillStyle = '#0284c7';
      tCtx.beginPath();
      tCtx.moveTo(cx - 18, cy - 28);
      tCtx.quadraticCurveTo(cx + 24, cy - 35, cx + 58, cy - 14); // upper wing edge
      tCtx.lineTo(cx + 52, cy + 12);
      tCtx.quadraticCurveTo(cx + 14, cy + 18, cx - 22, cy + 12);
      tCtx.closePath();
      tCtx.fill();
      tCtx.strokeStyle = '#18181b';
      tCtx.lineWidth = 2.5;
      tCtx.stroke();

      // Light Sky-Blue Scalloped Wing Feather Tips (Image 1)
      tCtx.fillStyle = '#38bdf8';
      const wingTips = [
        { x: cx + 58, y: cy - 14 },
        { x: cx + 64, y: cy + 4 },
        { x: cx + 52, y: cy + 18 }
      ];
      wingTips.forEach(({ x, y }) => {
        tCtx.beginPath();
        tCtx.ellipse(x, y, 9, 6, -Math.PI / 4, 0, Math.PI * 2);
        tCtx.fill();
        tCtx.strokeStyle = '#18181b';
        tCtx.lineWidth = 1.8;
        tCtx.stroke();
      });

      // Wing quill lines
      tCtx.strokeStyle = '#1e3a8a';
      tCtx.lineWidth = 2;
      tCtx.beginPath();
      tCtx.moveTo(cx - 4, cy - 18);
      tCtx.lineTo(cx + 42, cy - 8);
      tCtx.moveTo(cx - 2, cy - 6);
      tCtx.lineTo(cx + 44, cy + 4);
      tCtx.stroke();

      // Royal Blue Neck & Head (Image 1)
      tCtx.fillStyle = '#0284c7';
      tCtx.beginPath();
      tCtx.moveTo(cx - 24, cy - 32); // nape
      tCtx.quadraticCurveTo(cx - 28, cy - 68, cx - 2, cy - 78); // crown arch
      tCtx.quadraticCurveTo(cx + 24, cy - 74, cx + 22, cy - 48); // face front
      tCtx.quadraticCurveTo(cx + 8, cy - 28, cx - 16, cy - 22); // throat
      tCtx.closePath();
      tCtx.fill();
      tCtx.strokeStyle = '#18181b';
      tCtx.lineWidth = 2.5;
      tCtx.stroke();

      // Orange-Red Curved Beak (Image 1)
      tCtx.fillStyle = '#ea580c';
      tCtx.beginPath();
      tCtx.moveTo(cx + 20, cy - 58); // upper beak base
      tCtx.quadraticCurveTo(cx + 36, cy - 54, cx + 44, cy - 42); // curved sharp tip
      tCtx.quadraticCurveTo(cx + 28, cy - 42, cx + 18, cy - 44); // lower beak base
      tCtx.closePath();
      tCtx.fill();
      tCtx.strokeStyle = '#18181b';
      tCtx.lineWidth = 2.2;
      tCtx.stroke();

      // Black mouth dividing line
      tCtx.beginPath();
      tCtx.moveTo(cx + 20, cy - 50);
      tCtx.lineTo(cx + 42, cy - 43);
      tCtx.stroke();

      // Eye: White circle with black pupil and highlight glint (Image 1)
      tCtx.fillStyle = '#ffffff';
      tCtx.beginPath();
      tCtx.arc(cx + 6, cy - 58, 8.5, 0, Math.PI * 2);
      tCtx.fill();
      tCtx.strokeStyle = '#18181b';
      tCtx.lineWidth = 2;
      tCtx.stroke();

      tCtx.fillStyle = '#18181b';
      tCtx.beginPath();
      tCtx.arc(cx + 8, cy - 58, 4.2, 0, Math.PI * 2);
      tCtx.fill();

      // White catchlight
      tCtx.fillStyle = '#ffffff';
      tCtx.beginPath();
      tCtx.arc(cx + 7, cy - 60, 1.8, 0, Math.PI * 2);
      tCtx.fill();
    };

    drawFolkBird(midPX + panelW * 0.5, panelTopY + panelHeight * 0.52, panelBotY);

    // 8. Horizontal Hinge & Latch Beam (y: 425 to 470)
    tCtx.fillStyle = '#3b82f6';
    tCtx.fillRect(20, panelBotY, 984, 45);
    tCtx.strokeStyle = '#18181b';
    tCtx.lineWidth = 4;
    tCtx.strokeRect(20, panelBotY, 984, 45);

    // 3 Steel Hinge / Latch Bracket Plates (Image 1)
    const drawHinge = (hx) => {
      tCtx.fillStyle = '#94a3b8';
      tCtx.fillRect(hx, panelBotY + 8, 54, 28);
      tCtx.strokeStyle = '#18181b';
      tCtx.lineWidth = 2.5;
      tCtx.strokeRect(hx, panelBotY + 8, 54, 28);

      // Center lock pin
      tCtx.fillStyle = '#334155';
      tCtx.fillRect(hx + 22, panelBotY + 4, 10, 36);

      // Bolts
      tCtx.fillStyle = '#f8fafc';
      tCtx.fillRect(hx + 6, panelBotY + 18, 6, 8);
      tCtx.fillRect(hx + 42, panelBotY + 18, 6, 8);
    };
    drawHinge(205);
    drawHinge(485);
    drawHinge(765);

    // 9. Lower Tailgate Skirt with Stepped Center Cutout (Image 1)
    const skirtTopY = 470;
    tCtx.fillStyle = '#4a90e2';
    tCtx.beginPath();
    tCtx.moveTo(20, skirtTopY);
    tCtx.lineTo(20, 580);
    tCtx.lineTo(315, 580);
    tCtx.lineTo(365, 635); // stepped down center
    tCtx.lineTo(659, 635);
    tCtx.lineTo(709, 580); // stepped up
    tCtx.lineTo(1004, 580);
    tCtx.lineTo(1004, skirtTopY);
    tCtx.closePath();
    tCtx.fill();
    tCtx.strokeStyle = '#18181b';
    tCtx.lineWidth = 5;
    tCtx.stroke();

    // 10. Horizontal Multi-Chamber Taillights (Yellow, Red, White - from Image 1)
    const drawTaillightCluster = (lx, isLeft) => {
      // Outer black frame box
      tCtx.fillStyle = '#18181b';
      tCtx.fillRect(lx - 4, 498, 172, 64);
      tCtx.strokeStyle = '#facc15';
      tCtx.lineWidth = 3;
      tCtx.strokeRect(lx - 4, 498, 172, 64);

      const chambers = isLeft
        ? ['#f59e0b', '#ef4444', '#f8fafc'] // Amber/Yellow (turn), Red (brake), White (reverse)
        : ['#f8fafc', '#ef4444', '#f59e0b']; // White (reverse), Red (brake), Amber/Yellow (turn)

      chambers.forEach((color, i) => {
        tCtx.fillStyle = color;
        tCtx.fillRect(lx + i * 54 + 2, 504, 50, 52);
        tCtx.strokeStyle = '#18181b';
        tCtx.lineWidth = 2.5;
        tCtx.strokeRect(lx + i * 54 + 2, 504, 50, 52);

        // Lens ridges
        tCtx.fillStyle = 'rgba(255,255,255,0.25)';
        tCtx.fillRect(lx + i * 54 + 6, 508, 42, 6);
      });
    };

    drawTaillightCluster(118, true);
    drawTaillightCluster(742, false);

    const tailgateTexture = new THREE.CanvasTexture(tailgateCanvas);

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

    // ----------------------------------------------------
    // 8B. AUTHENTIC BANGLADESHI TRUCK TAILGATE ASSEMBLY (from User Image!)
    // Featuring 3-Panel Tailgate with Folk Bird, Floral Rosettes, Flared Taj Wings & 3D Taillights!
    // ----------------------------------------------------
    const tailgateGroup = new THREE.Group();
    tailgateGroup.position.set(0, 0, 1.68);

    // 1. Structural Blue Tailgate Backing Board
    const tailBackingGeo = new THREE.BoxGeometry(2.28, 1.45, 0.08);
    const tailBackingMat = new THREE.MeshStandardMaterial({
      color: 0x4a90e2,
      roughness: 0.45
    });
    const tailBacking = new THREE.Mesh(tailBackingGeo, tailBackingMat);
    tailBacking.position.set(0, 0.08, 0);
    tailBacking.castShadow = true;
    tailgateGroup.add(tailBacking);

    // 2. High-Resolution Tailgate Artwork Face (Facing +Z directly towards player chase camera!)
    const tailFaceGeo = new THREE.PlaneGeometry(2.28, 1.45);
    const tailFaceMat = new THREE.MeshStandardMaterial({
      map: tailgateTexture,
      roughness: 0.35,
      metalness: 0.15
    });
    const tailFace = new THREE.Mesh(tailFaceGeo, tailFaceMat);
    tailFace.position.set(0, 0.08, 0.045);
    tailgateGroup.add(tailFace);

    // 3. Flared Corner Crown Wings (Taj / Outward Angled Ears at top-left & top-right from Image 1)
    [-1, 1].forEach((dir) => {
      // Wing ear shape sloping outwards and upwards
      const earShape = new THREE.Shape();
      earShape.moveTo(0, 0);
      earShape.lineTo(dir * 0.18, 0.28);
      earShape.lineTo(0, 0.28);
      earShape.closePath();

      const extrudeSettings = { depth: 0.08, bevelEnabled: false };
      const earGeo = new THREE.ExtrudeGeometry(earShape, extrudeSettings);
      const earMat = new THREE.MeshStandardMaterial({ color: 0x172554, roughness: 0.4 }); // Dark navy tip
      const earMesh = new THREE.Mesh(earGeo, earMat);
      earMesh.position.set(dir * 1.14, 0.68, -0.04);
      tailgateGroup.add(earMesh);
    });

    // 4. 3D Multi-Chamber Taillight Assemblies (Segmented: Yellow, Red, White)
    // The Red Brake Light chamber lights up brilliantly during braking!
    [-0.78, 0.78].forEach((tx, idx) => {
      const isLeft = idx === 0;

      // Outer Black Frame Housing
      const tHousing = new THREE.Mesh(
        new THREE.BoxGeometry(0.42, 0.16, 0.05),
        this.chassisMat
      );
      tHousing.position.set(tx, -0.42, 0.08);
      tailgateGroup.add(tHousing);

      // Yellow / Amber Turn Lens
      const amberLens = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 0.12, 0.03),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.3 })
      );
      amberLens.position.set(isLeft ? tx - 0.13 : tx + 0.13, -0.42, 0.10);
      tailgateGroup.add(amberLens);

      // Red Brake Light Lens (Connected to this.brakeLights for dynamic braking response!)
      const redLens = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 0.12, 0.03),
        this.taillightMat
      );
      redLens.position.set(tx, -0.42, 0.10);
      tailgateGroup.add(redLens);
      this.brakeLights.push(redLens);

      // White Reverse Light Lens
      const whiteLens = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 0.12, 0.03),
        new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 })
      );
      whiteLens.position.set(isLeft ? tx + 0.13 : tx - 0.13, -0.42, 0.10);
      tailgateGroup.add(whiteLens);
    });

    // 5. Heavy-Duty Rear Mudflaps (behind dual rear tires)
    [-0.85, 0.85].forEach((mx) => {
      const flap = new THREE.Mesh(
        new THREE.BoxGeometry(0.42, 0.44, 0.03),
        this.tireMat
      );
      flap.position.set(mx, -0.80, 0.06);
      tailgateGroup.add(flap);
    });

    dalaGroup.add(tailgateGroup);

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
