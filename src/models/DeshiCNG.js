// ===================================================================
// AUTHENTIC GREEN CNG AUTO-RICKSHAW 3D MODEL (OG_RACE)
// Recreated with 100% Precision from User's Reference Images:
// - Image 2: Perspective 3D View (Yellow windshield frame, green lower body,
//   open side entryways, bright blue passenger seats, single front wheel)
// - Image 3: Exact Front & Rear Technical Schematic:
//   * Rear: Domed black canopy with rear window, bold horizontal yellow beltline stripe,
//     solid green engine hatch with 4 rows of horizontal cooling louvers,
//     white stencil "CNG" text, yellow license plate "HR 26 0123",
//     integrated vertical amber/red taillights, black bumper & exhaust!
//   * Front: Yellow windshield cowl with 3-pane glass & wiper, green nose apron
//     with dual round headlights, "CNG" badge, front fork & mudguard!
// ===================================================================

import * as THREE from 'three';

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

    // Collision Bounding Box (tuned for authentic CNG proportions)
    this.box = new THREE.Box3();
    this.collisionSize = new THREE.Vector3(1.32, 1.74, 2.58);
    this._boxCenter = new THREE.Vector3();

    this.buildCNG();

    // Scale to standard in-game vehicle size
    this.group.scale.set(0.96, 0.96, 0.96);
  }

  buildCNG() {
    this.bodyGroup = new THREE.Group();
    this.group.add(this.bodyGroup);

    // ========================================================
    // 1. PROCEDURAL CANVASES & TEXTURES (Exact replica of Image 2 & 3!)
    // ========================================================

    // ----------------------------------------------------
    // A. REAR VIEW TEXTURE (Exact replica of Image 3 - Right diagram!)
    // ----------------------------------------------------
    const rearCanvas = document.createElement('canvas');
    rearCanvas.width = 1024;
    rearCanvas.height = 1024;
    const rCtx = rearCanvas.getContext('2d');

    // 1. Top Section (y: 0 to 420): Rounded Charcoal/Black Canvas Canopy (Image 3)
    rCtx.clearRect(0, 0, 1024, 1024);

    rCtx.beginPath();
    rCtx.moveTo(0, 420);
    rCtx.lineTo(0, 150);
    rCtx.quadraticCurveTo(0, 18, 175, 18);
    rCtx.lineTo(849, 18);
    rCtx.quadraticCurveTo(1024, 18, 1024, 150);
    rCtx.lineTo(1024, 420);
    rCtx.closePath();
    rCtx.fillStyle = '#1c1917';
    rCtx.fill();

    // Subtle dark canvas weave texture
    rCtx.fillStyle = 'rgba(255, 255, 255, 0.025)';
    for (let x = 0; x < 1024; x += 4) {
      rCtx.fillRect(x, 0, 2, 420);
    }
    for (let y = 0; y < 420; y += 4) {
      rCtx.fillRect(0, y, 1024, 2);
    }

    // Rear Window: Trapezoid / Rounded Rectangle in center (Image 3)
    const winX = 262;
    const winY = 135;
    const winW = 500;
    const winH = 220;

    // Outer thick black rubber seal gasket
    rCtx.fillStyle = '#09090b';
    rCtx.beginPath();
    rCtx.roundRect(winX - 14, winY - 14, winW + 28, winH + 28, 28);
    rCtx.fill();

    // Inner tinted glass
    const glassGrad = rCtx.createLinearGradient(winX, winY, winX, winY + winH);
    glassGrad.addColorStop(0, '#0f172a');
    glassGrad.addColorStop(0.4, '#1e293b');
    glassGrad.addColorStop(1, '#090d16');
    rCtx.fillStyle = glassGrad;
    rCtx.beginPath();
    rCtx.roundRect(winX, winY, winW, winH, 20);
    rCtx.fill();

    // Inside through rear window: Visible Bright Blue Passenger Seat Backrest (Image 2!)
    rCtx.fillStyle = '#2563eb'; // Vibrant Royal Blue upholstery
    rCtx.beginPath();
    rCtx.roundRect(winX + 25, winY + 65, winW - 50, winH - 75, 14);
    rCtx.fill();

    // Blue seat seams / padding lines
    rCtx.strokeStyle = '#1d4ed8';
    rCtx.lineWidth = 4;
    rCtx.beginPath();
    rCtx.moveTo(winX + winW * 0.5, winY + 65);
    rCtx.lineTo(winX + winW * 0.5, winY + winH - 10);
    rCtx.stroke();

    // Glass reflection diagonal glare
    rCtx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    rCtx.beginPath();
    rCtx.moveTo(winX + 40, winY + winH);
    rCtx.lineTo(winX + 160, winY);
    rCtx.lineTo(winX + 220, winY);
    rCtx.lineTo(winX + 100, winY + winH);
    rCtx.closePath();
    rCtx.fill();

    // 2. Middle Section (y: 420 to 525): BOLD BRIGHT YELLOW BELTLINE STRIPE (Image 2 & 3!)
    rCtx.fillStyle = '#facc15'; // Bright Taxi Yellow
    rCtx.fillRect(0, 420, 1024, 105);

    // Dark seam separation lines
    rCtx.fillStyle = '#18181b';
    rCtx.fillRect(0, 416, 1024, 6);
    rCtx.fillRect(0, 523, 1024, 6);

    // 3. Lower Section (y: 525 to 1024): Solid Green Sheet Metal Body (Image 3)
    rCtx.fillStyle = '#15803d'; // CNG Emerald Green
    rCtx.fillRect(0, 525, 1024, 499);

    // Metal panel bevel highlights
    rCtx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    rCtx.fillRect(0, 529, 1024, 4);

    // 4. Center Rectangular Engine Hatch Door (Image 3)
    const hatchX = 230;
    const hatchY = 565;
    const hatchW = 564;
    const hatchH = 345;

    // Recessed hatch border
    rCtx.fillStyle = '#14532d';
    rCtx.beginPath();
    rCtx.roundRect(hatchX - 6, hatchY - 6, hatchW + 12, hatchH + 12, 12);
    rCtx.fill();

    rCtx.fillStyle = '#166534';
    rCtx.beginPath();
    rCtx.roundRect(hatchX, hatchY, hatchW, hatchH, 8);
    rCtx.fill();

    rCtx.strokeStyle = '#22c55e';
    rCtx.lineWidth = 3;
    rCtx.stroke();

    // 4 Rows of Horizontal Cooling Louvers (2 columns of 4 = 8 louvers total - Image 3!)
    for (let row = 0; row < 4; row++) {
      const ly = hatchY + 38 + row * 68;

      // Left column louver
      rCtx.fillStyle = '#0f291e'; // deep recessed shadow slit
      rCtx.beginPath();
      rCtx.roundRect(hatchX + 28, ly, 235, 42, 6);
      rCtx.fill();

      rCtx.fillStyle = '#15803d'; // louver slat body
      rCtx.beginPath();
      rCtx.roundRect(hatchX + 32, ly + 4, 227, 34, 4);
      rCtx.fill();

      rCtx.fillStyle = 'rgba(255, 255, 255, 0.25)'; // top highlight
      rCtx.fillRect(hatchX + 32, ly + 4, 227, 4);

      // Right column louver
      rCtx.fillStyle = '#0f291e';
      rCtx.beginPath();
      rCtx.roundRect(hatchX + 301, ly, 235, 42, 6);
      rCtx.fill();

      rCtx.fillStyle = '#15803d';
      rCtx.beginPath();
      rCtx.roundRect(hatchX + 305, ly + 4, 227, 34, 4);
      rCtx.fill();

      rCtx.fillStyle = 'rgba(255, 255, 255, 0.25)';
      rCtx.fillRect(hatchX + 305, ly + 4, 227, 4);
    }

    // Center Chrome Handle & Keyhole
    rCtx.fillStyle = '#cbd5e1';
    rCtx.beginPath();
    rCtx.roundRect(hatchX + hatchW * 0.5 - 28, hatchY + hatchH - 36, 56, 18, 4);
    rCtx.fill();
    rCtx.fillStyle = '#09090b';
    rCtx.beginPath();
    rCtx.arc(hatchX + hatchW * 0.5, hatchY + hatchH - 27, 4, 0, Math.PI * 2);
    rCtx.fill();

    // 5. Left Side: BOLD WHITE STENCIL "CNG" TEXT (Image 3!)
    rCtx.fillStyle = '#ffffff';
    rCtx.font = '900 64px sans-serif';
    rCtx.textAlign = 'center';
    rCtx.textBaseline = 'middle';
    rCtx.shadowColor = 'rgba(0,0,0,0.7)';
    rCtx.shadowBlur = 6;
    rCtx.fillText('CNG', 120, 715);
    rCtx.shadowBlur = 0;

    // 6. Right Side: YELLOW RECTANGULAR LICENSE PLATE "HR 26 0123" (Image 3!)
    const lpX = 810;
    const lpY = 665;
    const lpW = 165;
    const lpH = 95;

    rCtx.fillStyle = '#facc15'; // Bright yellow plate
    rCtx.beginPath();
    rCtx.roundRect(lpX, lpY, lpW, lpH, 8);
    rCtx.fill();

    rCtx.strokeStyle = '#18181b';
    rCtx.lineWidth = 4;
    rCtx.stroke();

    rCtx.fillStyle = '#18181b';
    rCtx.font = '900 32px sans-serif';
    rCtx.fillText('HR 26', lpX + lpW * 0.5, lpY + 34);
    rCtx.font = '900 36px monospace';
    rCtx.fillText('0123', lpX + lpW * 0.5, lpY + 70);

    // 7. Bottom Rubber Bumper Strip
    rCtx.fillStyle = '#18181b';
    rCtx.fillRect(0, 955, 1024, 69);
    rCtx.fillStyle = '#3f3f46';
    rCtx.fillRect(0, 955, 1024, 6);

    const rearTexture = new THREE.CanvasTexture(rearCanvas);

    // ----------------------------------------------------
    // B. FRONT PROFILE TEXTURE (Exact replica of Image 3 - Left diagram!)
    // ----------------------------------------------------
    const frontCanvas = document.createElement('canvas');
    frontCanvas.width = 1024;
    frontCanvas.height = 1024;
    const fCtx = frontCanvas.getContext('2d');

    // 1. Top Section (y: 0 to 480): Bright Yellow Windshield Cowl (Image 3!)
    fCtx.clearRect(0, 0, 1024, 1024);

    fCtx.beginPath();
    fCtx.moveTo(0, 480);
    fCtx.lineTo(0, 140);
    fCtx.quadraticCurveTo(0, 18, 175, 18);
    fCtx.lineTo(849, 18);
    fCtx.quadraticCurveTo(1024, 18, 1024, 140);
    fCtx.lineTo(1024, 480);
    fCtx.closePath();
    fCtx.fillStyle = '#facc15';
    fCtx.fill();

    // Windshield Gasket & Frame
    fCtx.fillStyle = '#09090b';
    fCtx.beginPath();
    fCtx.roundRect(75, 55, 874, 340, 24);
    fCtx.fill();

    // Windshield Glass: 3-Pane Structure (Image 3!)
    // Center Pane
    fCtx.fillStyle = '#1e293b';
    fCtx.fillRect(265, 75, 494, 300);

    // Left Corner Quarter Pane
    fCtx.fillStyle = '#1e293b';
    fCtx.fillRect(95, 75, 150, 300);

    // Right Corner Quarter Pane
    fCtx.fillStyle = '#1e293b';
    fCtx.fillRect(779, 75, 150, 300);

    // Glass dividing pillars
    fCtx.fillStyle = '#09090b';
    fCtx.fillRect(245, 70, 20, 310);
    fCtx.fillRect(759, 70, 20, 310);

    // Windshield Wiper (diagonal across center pane - Image 3!)
    fCtx.strokeStyle = '#09090b';
    fCtx.lineWidth = 10;
    fCtx.beginPath();
    fCtx.moveTo(420, 370);
    fCtx.lineTo(610, 205);
    fCtx.stroke();

    fCtx.strokeStyle = '#18181b';
    fCtx.lineWidth = 6;
    fCtx.beginPath();
    fCtx.moveTo(560, 245);
    fCtx.lineTo(660, 160);
    fCtx.stroke();

    // Amber marker / indicator lights below windshield (Image 3)
    fCtx.fillStyle = '#f59e0b';
    fCtx.beginPath();
    fCtx.roundRect(115, 420, 95, 34, 6);
    fCtx.fill();
    fCtx.beginPath();
    fCtx.roundRect(814, 420, 95, 34, 6);
    fCtx.fill();

    // 2. Lower Section (y: 480 to 1024): Green Nose Apron & Black Center Shield
    fCtx.fillStyle = '#15803d';
    fCtx.fillRect(0, 480, 1024, 544);

    // Matte Black Center Nose Shield (Image 3)
    fCtx.fillStyle = '#18181b';
    fCtx.beginPath();
    fCtx.moveTo(310, 480);
    fCtx.lineTo(714, 480);
    fCtx.lineTo(650, 880);
    fCtx.lineTo(374, 880);
    fCtx.closePath();
    fCtx.fill();

    // Front Yellow License Plate in Center (Image 3)
    fCtx.fillStyle = '#facc15';
    fCtx.beginPath();
    fCtx.roundRect(432, 590, 160, 80, 6);
    fCtx.fill();
    fCtx.strokeStyle = '#18181b';
    fCtx.lineWidth = 3;
    fCtx.stroke();

    fCtx.fillStyle = '#18181b';
    fCtx.font = '900 26px sans-serif';
    fCtx.textAlign = 'center';
    fCtx.fillText('HR 26', 512, 622);
    fCtx.font = '900 28px monospace';
    fCtx.fillText('0123', 512, 654);

    // White "CNG" Text on lower green apron (Image 3)
    fCtx.fillStyle = '#ffffff';
    fCtx.font = '900 52px sans-serif';
    fCtx.fillText('CNG', 200, 680);

    const frontTexture = new THREE.CanvasTexture(frontCanvas);

    // ----------------------------------------------------
    // C. SIDE PROFILE TEXTURE (Exact replica of Image 2!)
    // Yellow beltline stripe, green lower body & open door cutout
    // ----------------------------------------------------
    const sideCanvas = document.createElement('canvas');
    sideCanvas.width = 1024;
    sideCanvas.height = 512;
    const sCtx = sideCanvas.getContext('2d');

    // Upper Half: Dark Charcoal Canopy
    sCtx.fillStyle = '#1c1917';
    sCtx.fillRect(0, 0, 1024, 210);

    // Middle Beltline: Vibrant Yellow Stripe (Image 2!)
    sCtx.fillStyle = '#facc15';
    sCtx.fillRect(0, 210, 1024, 60);

    sCtx.fillStyle = '#18181b';
    sCtx.fillRect(0, 206, 1024, 4);
    sCtx.fillRect(0, 270, 1024, 4);

    // Lower Half: Green Sheet Metal Body (Image 2)
    sCtx.fillStyle = '#15803d';
    sCtx.fillRect(0, 270, 1024, 242);

    // Open Door Entryway Cutout: Interior view (Image 2)
    sCtx.fillStyle = '#0f172a'; // Interior shadow
    sCtx.beginPath();
    sCtx.roundRect(240, 75, 480, 310, 18);
    sCtx.fill();

    // Inside doorway: Bright Blue Passenger Seat visible! (Image 2)
    sCtx.fillStyle = '#2563eb';
    sCtx.beginPath();
    sCtx.roundRect(460, 230, 240, 110, 12);
    sCtx.fill();

    // Thin black door frame pillars
    sCtx.strokeStyle = '#09090b';
    sCtx.lineWidth = 14;
    sCtx.beginPath();
    sCtx.roundRect(240, 75, 480, 310, 18);
    sCtx.stroke();

    const sideTexture = new THREE.CanvasTexture(sideCanvas);

    // ========================================================
    // 2. MATERIALS
    // ========================================================
    const cngGreenMat = new THREE.MeshStandardMaterial({
      color: 0x15803d, // Authentic CNG Emerald Green
      metalness: 0.25,
      roughness: 0.35
    });

    const cngYellowMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15, // Bright Taxi Yellow
      metalness: 0.15,
      roughness: 0.38
    });

    const darkCanopyMat = new THREE.MeshStandardMaterial({
      color: 0x1c1917, // Dark Charcoal Canvas/Fiberglass
      roughness: 0.85,
      metalness: 0.05
    });

    const seatBlueMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb, // Vibrant Royal Blue Seats (Image 2)
      roughness: 0.55
    });

    const tireRubberMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      roughness: 0.92
    });

    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9, // Crisp White/Silver Rim (Image 2)
      metalness: 0.45,
      roughness: 0.35
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.92,
      roughness: 0.12
    });

    const rearFaceMat = new THREE.MeshStandardMaterial({
      map: rearTexture,
      roughness: 0.4,
      metalness: 0.1,
      side: THREE.DoubleSide,
      transparent: true,
      alphaTest: 0.2
    });

    const frontFaceMat = new THREE.MeshStandardMaterial({
      map: frontTexture,
      roughness: 0.4,
      metalness: 0.1,
      side: THREE.DoubleSide,
      transparent: true,
      alphaTest: 0.2
    });

    const sidePanelMat = new THREE.MeshStandardMaterial({
      map: sideTexture,
      roughness: 0.42,
      metalness: 0.1,
      side: THREE.DoubleSide
    });

    // ========================================================
    // 3. MAIN CHASSIS & FLOOR PAN
    // ========================================================
    const chassisGeo = new THREE.BoxGeometry(1.24, 0.24, 2.38);
    const chassis = new THREE.Mesh(chassisGeo, cngGreenMat);
    chassis.position.set(0, 0.34, 0);
    chassis.receiveShadow = true;
    this.bodyGroup.add(chassis);

    // Lower front floor tapering towards front wheel
    const frontFloorGeo = new THREE.BoxGeometry(0.85, 0.22, 0.65);
    const frontFloor = new THREE.Mesh(frontFloorGeo, cngGreenMat);
    frontFloor.position.set(0, 0.33, -1.05);
    this.bodyGroup.add(frontFloor);

    // ========================================================
    // 4. AUTHENTIC 3D CONTOURED CANOPY ROOF (Image 2 & 3)
    // 100% Custom Parametric BufferGeometry — ZERO pie slices, ZERO downward wedges, ZERO shadow glitches!
    // Fitted snugly to 1.26m cabin width with rounded shoulders, front sun-visor & canvas hoop ribs.
    // ========================================================
    const roofGroup = new THREE.Group();

    const createRoofCanopyGeometry = () => {
      const segX = 24;
      const segZ = 32;
      const halfW = 0.63; // exact 1.26m cabin width
      const zMin = -1.16; // extends slightly over windshield header
      const zMax = 1.08;  // meets rear window header
      const zLen = zMax - zMin;

      const positions = [];
      const uvs = [];
      const indices = [];

      // Calculate (x, y, z) for grid coordinates u in [-1, 1], v in [0, 1]
      const getRoofPoint = (u, v) => {
        // Taper slightly at the front and rear corners for rounded footprint
        let curW = halfW;
        const z = zMin + v * zLen;
        if (z < -0.88) {
          const t = (-0.88 - z) / 0.28;
          curW = halfW - t * 0.05; // 0.63 -> 0.58
        } else if (z > 0.85) {
          const t = (z - 0.85) / 0.23;
          curW = halfW - t * 0.035; // 0.63 -> 0.595
        }

        const x = u * curW;

        // Arch across width (X): flat top with smoothly rounded shoulders
        const archX = Math.max(0, 1.0 - Math.pow(Math.abs(u), 2.3));

        // Longitudinal arch along length (Z): smooth rise over driver & passenger, gentle visor drop
        const archZ = Math.sin(Math.PI * (0.10 + 0.80 * v));

        // Baseline eaves height: 1.54m
        const yEave = 1.54 - 0.015 * Math.pow(v - 0.5, 2) * 4;

        // Peak crown height is 1.66m (12cm curve rise)
        const y = yEave + 0.12 * archX * archZ;

        return new THREE.Vector3(x, y, z);
      };

      // A. Top Dome Surface
      for (let j = 0; j <= segZ; j++) {
        const v = j / segZ;
        for (let i = 0; i <= segX; i++) {
          const u = (i / segX) * 2 - 1;
          const pt = getRoofPoint(u, v);
          positions.push(pt.x, pt.y, pt.z);
          uvs.push(i / segX, j / segZ);
        }
      }

      const rowStride = segX + 1;
      for (let j = 0; j < segZ; j++) {
        for (let i = 0; i < segX; i++) {
          const a = j * rowStride + i;
          const b = (j + 1) * rowStride + i;
          const c = (j + 1) * rowStride + (i + 1);
          const d = j * rowStride + (i + 1);
          indices.push(a, b, d);
          indices.push(b, c, d);
        }
      }

      // B. Perimeter Skirts (Vertical Eaves / Rims of 6cm height)
      const skirtDrop = 0.06;

      // 1. Left Skirt (u = -1)
      let offset = positions.length / 3;
      for (let j = 0; j <= segZ; j++) {
        const v = j / segZ;
        const pt = getRoofPoint(-1, v);
        positions.push(pt.x, pt.y, pt.z);
        uvs.push(0, v);
        positions.push(pt.x, pt.y - skirtDrop, pt.z);
        uvs.push(1, v);
      }
      for (let j = 0; j < segZ; j++) {
        const a = offset + j * 2;
        const b = offset + (j + 1) * 2;
        const c = offset + (j + 1) * 2 + 1;
        const d = offset + j * 2 + 1;
        indices.push(a, d, b);
        indices.push(b, d, c);
      }

      // 2. Right Skirt (u = +1)
      offset = positions.length / 3;
      for (let j = 0; j <= segZ; j++) {
        const v = j / segZ;
        const pt = getRoofPoint(1, v);
        positions.push(pt.x, pt.y, pt.z);
        uvs.push(0, v);
        positions.push(pt.x, pt.y - skirtDrop, pt.z);
        uvs.push(1, v);
      }
      for (let j = 0; j < segZ; j++) {
        const a = offset + j * 2;
        const b = offset + (j + 1) * 2;
        const c = offset + (j + 1) * 2 + 1;
        const d = offset + j * 2 + 1;
        indices.push(a, b, d);
        indices.push(b, d, c);
      }

      // 3. Front Brow Visor Skirt (v = 0)
      offset = positions.length / 3;
      for (let i = 0; i <= segX; i++) {
        const u = (i / segX) * 2 - 1;
        const pt = getRoofPoint(u, 0);
        positions.push(pt.x, pt.y, pt.z);
        uvs.push(i / segX, 0);
        positions.push(pt.x, pt.y - skirtDrop, pt.z);
        uvs.push(i / segX, 1);
      }
      for (let i = 0; i < segX; i++) {
        const a = offset + i * 2;
        const b = offset + (i + 1) * 2;
        const c = offset + (i + 1) * 2 + 1;
        const d = offset + i * 2 + 1;
        indices.push(a, d, b);
        indices.push(b, d, c);
      }

      // 4. Rear Skirt (v = 1)
      offset = positions.length / 3;
      for (let i = 0; i <= segX; i++) {
        const u = (i / segX) * 2 - 1;
        const pt = getRoofPoint(u, 1);
        positions.push(pt.x, pt.y, pt.z);
        uvs.push(i / segX, 0);
        positions.push(pt.x, pt.y - skirtDrop, pt.z);
        uvs.push(i / segX, 1);
      }
      for (let i = 0; i < segX; i++) {
        const a = offset + i * 2;
        const b = offset + (i + 1) * 2;
        const c = offset + (i + 1) * 2 + 1;
        const d = offset + i * 2 + 1;
        indices.push(a, b, d);
        indices.push(b, d, c);
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geo.setIndex(indices);
      geo.computeVertexNormals();
      return geo;
    };

    const roofMesh = new THREE.Mesh(createRoofCanopyGeometry(), darkCanopyMat);
    roofMesh.castShadow = true;
    roofMesh.receiveShadow = true;
    roofGroup.add(roofMesh);

    // 4 Curved Transverse Canvas Hoop Ribs across the roof (Image 2 & 3 quilted canvas structure)
    const ribZPositions = [-0.68, -0.18, 0.32, 0.76];
    const ribMat = new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.65 });
    ribZPositions.forEach((rz) => {
      const v = (rz - (-1.16)) / (1.08 - (-1.16));
      const ribCurvePoints = [];
      for (let k = 0; k <= 16; k++) {
        const u = (k / 16) * 2 - 1;
        const archX = Math.max(0, 1.0 - Math.pow(Math.abs(u), 2.3));
        const archZ = Math.sin(Math.PI * (0.10 + 0.80 * v));
        const y = 1.54 + 0.12 * archX * archZ + 0.006;
        ribCurvePoints.push(new THREE.Vector3(u * 0.625, y, rz));
      }
      const ribCurve = new THREE.CatmullRomCurve3(ribCurvePoints);
      const ribGeo = new THREE.TubeGeometry(ribCurve, 16, 0.012, 6, false);
      const ribMesh = new THREE.Mesh(ribGeo, ribMat);
      roofGroup.add(ribMesh);
    });

    // Side Rain Gutter Moldings along left and right eaves
    [-0.63, 0.63].forEach((gx) => {
      const gutterGeo = new THREE.CylinderGeometry(0.012, 0.012, 2.16, 8);
      gutterGeo.rotateX(Math.PI / 2);
      const gutter = new THREE.Mesh(gutterGeo, ribMat);
      gutter.position.set(gx, 1.53, -0.04);
      roofGroup.add(gutter);
    });

    // Front Visor Brow Molding over windshield header
    const visorGeo = new THREE.BoxGeometry(1.20, 0.035, 0.08);
    const visorMesh = new THREE.Mesh(visorGeo, ribMat);
    visorMesh.position.set(0, 1.54, -1.15);
    roofGroup.add(visorMesh);

    // Clean Underneath Ceiling Panel closing cabin interior
    const ceilingGeo = new THREE.PlaneGeometry(1.22, 2.18);
    ceilingGeo.rotateX(Math.PI / 2);
    const ceilingMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.95 });
    const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat);
    ceiling.position.set(0, 1.48, -0.04);
    roofGroup.add(ceiling);

    this.bodyGroup.add(roofGroup);

    // ========================================================
    // 5. SIDE BODY PANELS & BELTLINE (Image 2)
    // ========================================================
    [-0.63, 0.63].forEach((sx, idx) => {
      // High-res Side Profile Panel (with open door cutout & yellow stripe)
      const sideMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2.18, 1.28),
        sidePanelMat
      );
      sideMesh.position.set(sx, 1.05, -0.05);
      sideMesh.rotation.y = idx === 0 ? -Math.PI / 2 : Math.PI / 2;
      this.bodyGroup.add(sideMesh);

      // Green Lower Quarter Wall below doorway
      const sillWallGeo = new THREE.BoxGeometry(0.04, 0.32, 1.15);
      const sillWall = new THREE.Mesh(sillWallGeo, cngGreenMat);
      sillWall.position.set(sx * 0.98, 0.58, -0.05);
      this.bodyGroup.add(sillWall);

      // Tubular Black A-pillar framing windshield
      const aPillar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.022, 0.022, 1.05, 8),
        new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.5 })
      );
      aPillar.position.set(sx * 0.96, 1.18, -1.0);
      aPillar.rotation.x = 0.22;
      this.bodyGroup.add(aPillar);

      // Tubular Black B-pillar behind driver
      const bPillar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.022, 0.022, 1.12, 8),
        new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.5 })
      );
      bPillar.position.set(sx * 0.96, 1.12, -0.15);
      this.bodyGroup.add(bPillar);

      // Rear Corner C-pillar
      const cPillar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.022, 0.022, 1.12, 8),
        new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.5 })
      );
      cPillar.position.set(sx * 0.96, 1.12, 1.02);
      this.bodyGroup.add(cPillar);
    });

    // ========================================================
    // 6. EXACT REAR ASSEMBLY (Image 3 - Right diagram!)
    // This is the direct chase camera view!
    // ========================================================
    const rearGroup = new THREE.Group();
    rearGroup.position.set(0, 0, 1.08);

    // High-Resolution Authentic Rear Face Plate
    // Normal faces +Z directly towards player chase camera!
    const rearFaceMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1.28, 1.34),
      rearFaceMat
    );
    rearFaceMesh.position.set(0, 1.02, 0.01);
    // Face directly towards camera (+Z)
    rearFaceMesh.rotation.y = 0;
    rearGroup.add(rearFaceMesh);

    // 3D Integrated Taillights on Left & Right Rear Corners (Image 3!)
    [-0.54, 0.54].forEach((tx) => {
      const tGroup = new THREE.Group();
      tGroup.position.set(tx, 0.74, 0.035);

      // Taillight Housing Box
      const housing = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 0.24, 0.04),
        new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.6 })
      );
      tGroup.add(housing);

      // Upper Amber Turn Indicator Lens (Image 3)
      const amberLens = new THREE.Mesh(
        new THREE.BoxGeometry(0.10, 0.10, 0.025),
        new THREE.MeshBasicMaterial({ color: 0xf59e0b })
      );
      amberLens.position.set(0, 0.055, 0.018);
      tGroup.add(amberLens);

      // Lower Red Brake Light Lens (Linked to this.brakeLights - glows bright red on braking!)
      const redLens = new THREE.Mesh(
        new THREE.BoxGeometry(0.10, 0.10, 0.025),
        new THREE.MeshBasicMaterial({ color: 0xdc2626 })
      );
      redLens.position.set(0, -0.055, 0.018);
      tGroup.add(redLens);
      this.brakeLights.push(redLens);

      rearGroup.add(tGroup);
    });

    // 3D Black Rubber Rear Bumper Bar
    const bBarGeo = new THREE.BoxGeometry(1.32, 0.12, 0.08);
    const bBar = new THREE.Mesh(
      bBarGeo,
      new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.85 })
    );
    bBar.position.set(0, 0.32, 0.06);
    rearGroup.add(bBar);

    // Heavy Black Rubber Mudflaps behind Rear Wheels (Image 3)
    [-0.52, 0.52].forEach((mx) => {
      const mudflap = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.22, 0.02),
        tireRubberMat
      );
      mudflap.position.set(mx, 0.18, 0.04);
      mudflap.rotation.x = 0.08;
      rearGroup.add(mudflap);
    });

    // Horizontal Silver/Black Exhaust Tailpipe Underneath (Image 3)
    const exhaustGeo = new THREE.CylinderGeometry(0.032, 0.032, 0.55, 10);
    exhaustGeo.rotateZ(Math.PI / 2);
    const exhaustPipe = new THREE.Mesh(exhaustGeo, chromeMat);
    exhaustPipe.position.set(0.22, 0.18, 0.02);
    rearGroup.add(exhaustPipe);

    // Boost Jet Flame Emitter (at exhaust pipe tip)
    const flameGeo = new THREE.ConeGeometry(0.075, 0.45, 10);
    flameGeo.rotateX(-Math.PI / 2);
    const flameMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0
    });
    const flameMesh = new THREE.Mesh(flameGeo, flameMat);
    flameMesh.position.set(0.48, 0.18, 0.28);
    rearGroup.add(flameMesh);
    this.exhaustFires.push(flameMesh);

    this.bodyGroup.add(rearGroup);

    // ========================================================
    // 7. EXACT FRONT ASSEMBLY (Image 2 & 3 - Left diagram!)
    // ========================================================
    const frontGroup = new THREE.Group();
    frontGroup.position.set(0, 0, -1.14);

    // High-Resolution Front Cowl & Windshield Apron
    const frontFaceMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1.18, 1.34),
      frontFaceMat
    );
    frontFaceMesh.position.set(0, 1.02, 0);
    // Face forward (-Z)
    frontFaceMesh.rotation.y = Math.PI;
    frontGroup.add(frontFaceMesh);

    // 3D Chrome Dual Round Headlights (Image 3)
    [-0.32, 0.32].forEach((hx) => {
      const hlGroup = new THREE.Group();
      hlGroup.position.set(hx, 0.68, -0.04);

      // Chrome bezel ring
      const bezel = new THREE.Mesh(
        new THREE.CylinderGeometry(0.085, 0.085, 0.04, 16),
        chromeMat
      );
      bezel.rotateX(Math.PI / 2);
      hlGroup.add(bezel);

      // Glowing lens
      const lens = new THREE.Mesh(
        new THREE.SphereGeometry(0.075, 12, 12, 0, Math.PI * 2, 0, Math.PI * 0.5),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      lens.rotateX(Math.PI);
      lens.position.z = -0.015;
      hlGroup.add(lens);

      this.headlights.push(lens);
      frontGroup.add(hlGroup);
    });

    this.bodyGroup.add(frontGroup);

    // ========================================================
    // 8. SIDE REAR-VIEW MIRRORS (Image 2 & 3!)
    // Stems projecting outward from front pillars with round black mirrors
    // ========================================================
    [-1, 1].forEach((side) => {
      const mirrorGroup = new THREE.Group();
      const mx = (0.64 + 0.14) * side;
      mirrorGroup.position.set(mx, 1.15, -0.72);

      // Angled black metal rod stem
      const stemGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.28, 8);
      stemGeo.rotateZ(side > 0 ? -Math.PI * 0.35 : Math.PI * 0.35);
      const stem = new THREE.Mesh(stemGeo, new THREE.MeshStandardMaterial({ color: 0x18181b }));
      mirrorGroup.add(stem);

      // Round black mirror head (Image 3)
      const headGeo = new THREE.CylinderGeometry(0.075, 0.075, 0.03, 16);
      headGeo.rotateX(Math.PI / 2);
      const mHead = new THREE.Mesh(headGeo, new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.5 }));
      mHead.position.set(side * 0.12, 0.08, 0);
      mirrorGroup.add(mHead);

      // Reflective glass face on back of mirror
      const glass = new THREE.Mesh(
        new THREE.CircleGeometry(0.068, 16),
        chromeMat
      );
      glass.position.set(side * 0.12, 0.08, 0.018);
      mirrorGroup.add(glass);

      this.bodyGroup.add(mirrorGroup);
    });

    // ========================================================
    // 9. INTERIOR SEATING & CONTROLS (Image 2)
    // ========================================================
    const interiorGroup = new THREE.Group();

    // Front Driver Bucket Seat (Image 2)
    const dSeatCushion = new THREE.Mesh(
      new THREE.BoxGeometry(0.48, 0.12, 0.44),
      new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.7 })
    );
    dSeatCushion.position.set(0, 0.52, -0.32);
    interiorGroup.add(dSeatCushion);

    const dSeatBack = new THREE.Mesh(
      new THREE.BoxGeometry(0.48, 0.42, 0.10),
      new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.7 })
    );
    dSeatBack.position.set(0, 0.76, -0.12);
    interiorGroup.add(dSeatBack);

    // Rear Passenger Bench Seat: Bright Royal Blue (Image 2!)
    const pSeatCushion = new THREE.Mesh(
      new THREE.BoxGeometry(1.16, 0.16, 0.48),
      seatBlueMat
    );
    pSeatCushion.position.set(0, 0.54, 0.55);
    interiorGroup.add(pSeatCushion);

    const pSeatBack = new THREE.Mesh(
      new THREE.BoxGeometry(1.16, 0.48, 0.12),
      seatBlueMat
    );
    pSeatBack.position.set(0, 0.84, 0.82);
    interiorGroup.add(pSeatBack);

    // Motorcycle Handlebars for Driver (Image 2 & 3)
    const handleGroup = new THREE.Group();
    handleGroup.position.set(0, 0.78, -0.85);

    const barGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.62, 10);
    barGeo.rotateZ(Math.PI / 2);
    const hBar = new THREE.Mesh(barGeo, chromeMat);
    handleGroup.add(hBar);

    // Black Rubber Grips
    [-0.28, 0.28].forEach((gx) => {
      const grip = new THREE.Mesh(
        new THREE.CylinderGeometry(0.024, 0.024, 0.12, 8),
        tireRubberMat
      );
      grip.rotateZ(Math.PI / 2);
      grip.position.x = gx;
      handleGroup.add(grip);
    });

    // Instrument Speedometer Pod
    const speedo = new THREE.Mesh(
      new THREE.CylinderGeometry(0.045, 0.045, 0.04, 12),
      new THREE.MeshStandardMaterial({ color: 0x18181b })
    );
    speedo.position.set(0, 0.04, -0.04);
    handleGroup.add(speedo);

    interiorGroup.add(handleGroup);

    this.bodyGroup.add(interiorGroup);

    // ========================================================
    // 10. WHEELS & SUSPENSION (Image 2 & 3)
    // 1 Centered Front Wheel + 2 Rear Wheels with White/Silver Rims
    // ========================================================

    // Helper: Build an authentic Auto-Rickshaw Wheel
    const buildWheel = (isFront = false) => {
      const wGroup = new THREE.Group();

      // Tire (10-inch scooter tire)
      const tireGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.14, 20);
      tireGeo.rotateZ(Math.PI / 2);
      const tire = new THREE.Mesh(tireGeo, tireRubberMat);
      tire.castShadow = true;
      wGroup.add(tire);

      // White / Silver Steel Rim (Image 2)
      const rimGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.145, 16);
      rimGeo.rotateZ(Math.PI / 2);
      const rim = new THREE.Mesh(rimGeo, rimMat);
      wGroup.add(rim);

      // Center Hub & 4 Chrome Lug Nuts
      const hub = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 0.155, 12),
        chromeMat
      );
      hub.rotateZ(Math.PI / 2);
      wGroup.add(hub);

      for (let i = 0; i < 4; i++) {
        const ang = (i / 4) * Math.PI * 2;
        const nut = new THREE.Mesh(
          new THREE.CylinderGeometry(0.012, 0.012, 0.16, 6),
          chromeMat
        );
        nut.rotateZ(Math.PI / 2);
        nut.position.set(0, Math.sin(ang) * 0.08, Math.cos(ang) * 0.08);
        wGroup.add(nut);
      }

      return wGroup;
    };

    // A. Single Centered Front Wheel (Image 2 & 3)
    const fWheelGroup = new THREE.Group();
    fWheelGroup.position.set(0, 0.24, -1.18);

    const fWheel = buildWheel(true);
    fWheelGroup.add(fWheel);
    this.wheels.push(fWheel);
    this.frontWheel = fWheelGroup;

    // Single-sided Front Fork Suspension (Image 2)
    const forkArm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.024, 0.028, 0.52, 8),
      chromeMat
    );
    forkArm.position.set(-0.10, 0.22, 0);
    forkArm.rotation.x = -0.18;
    fWheelGroup.add(forkArm);

    // Green Front Mudguard / Fender wrapping over tire (Image 2 & 3)
    const fMudguardGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.18, 16, 1, true, Math.PI * 0.2, Math.PI * 0.65);
    fMudguardGeo.rotateZ(Math.PI / 2);
    const fMudguard = new THREE.Mesh(fMudguardGeo, cngGreenMat);
    fMudguard.position.set(0, 0.05, 0);
    fWheelGroup.add(fMudguard);

    this.bodyGroup.add(fWheelGroup);

    // B. Left & Right Rear Wheels (Image 2 & 3)
    [-0.56, 0.56].forEach((rx) => {
      const rWheel = buildWheel(false);
      rWheel.position.set(rx, 0.24, 0.64);
      this.wheels.push(rWheel);
      this.bodyGroup.add(rWheel);
    });
  }

  // Master per-frame dynamics & rendering update
  update(speedKmh, currentX, targetX, isBraking, isBoosting, delta) {
    // 1. Wheel Rotation Animation
    const speedMs = (speedKmh * 1000) / 3600;
    const wheelCircumference = 2 * Math.PI * 0.24;
    const rotDelta = (speedMs / wheelCircumference) * delta * Math.PI * 2;
    this.wheelRotation += rotDelta;

    this.wheels.forEach((w) => {
      w.rotation.x = this.wheelRotation;
    });

    // 2. Front Fork Steering Yaw & Body Roll
    const laneOffset = targetX - currentX;
    const targetRoll = laneOffset * 0.045; // Nimble 3-wheeler body lean
    this.currentRoll += (targetRoll - this.currentRoll) * Math.min(1.0, delta * 9.0);
    this.bodyGroup.rotation.z = this.currentRoll;

    if (this.frontWheel) {
      this.frontWheel.rotation.y = -laneOffset * 0.18;
    }

    // 3. Chassis Yaw turning angle
    const targetYaw = -laneOffset * 0.08;
    this.currentYaw += (targetYaw - this.currentYaw) * Math.min(1.0, delta * 8.0);
    this.bodyGroup.rotation.y = this.currentYaw;

    // 4. Pitch dynamics (acceleration squat / braking dive)
    let targetPitch = 0;
    if (isBraking) {
      targetPitch = 0.04;
    } else if (isBoosting) {
      targetPitch = -0.035;
    }
    this.currentPitch += (targetPitch - this.currentPitch) * Math.min(1.0, delta * 8.0);
    this.bodyGroup.rotation.x = this.currentPitch;

    // 5. Dynamic Active Brake Lights (Rear Taillights)
    this.brakeLights.forEach((bl) => {
      bl.material.color.setHex(isBraking ? 0xff0000 : 0xdc2626);
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
    this._boxCenter.copy(this.group.position);
    this._boxCenter.y += 0.88;
    this.box.setFromCenterAndSize(this._boxCenter, this.collisionSize);
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
