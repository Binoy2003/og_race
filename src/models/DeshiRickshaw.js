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

    // A. Backboard Tin Art Plate (Traditional Peacock / Floral motif)
    const backCanvas = document.createElement('canvas');
    backCanvas.width = 512;
    backCanvas.height = 384;
    const bCtx = backCanvas.getContext('2d');

    // Yellow background with turquoise ornamental border
    bCtx.fillStyle = '#f59e0b';
    bCtx.fillRect(0, 0, 512, 384);

    bCtx.strokeStyle = '#06b6d4';
    bCtx.lineWidth = 14;
    bCtx.strokeRect(10, 10, 492, 364);

    bCtx.strokeStyle = '#dc2626';
    bCtx.lineWidth = 6;
    bCtx.strokeRect(22, 22, 468, 340);

    // Bengali Calligraphy: "মা বাবার দোয়া"
    bCtx.fillStyle = '#dc2626';
    bCtx.font = 'bold 36px sans-serif';
    bCtx.textAlign = 'center';
    bCtx.fillText('মা বাবার দোয়া', 256, 68);

    // Peacock / Floral Art centerpiece
    bCtx.fillStyle = '#0284c7';
    bCtx.beginPath();
    bCtx.ellipse(256, 210, 75, 105, 0, 0, Math.PI * 2);
    bCtx.fill();
    bCtx.strokeStyle = '#fbbf24';
    bCtx.lineWidth = 8;
    bCtx.stroke();

    // Vibrant Peacock Feathers / Lotus Petals
    const colors = ['#ef4444', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];
    for (let i = 0; i < 7; i++) {
      const angle = -Math.PI * 0.75 + (i * Math.PI * 0.25);
      const px = 256 + Math.cos(angle) * 115;
      const py = 210 + Math.sin(angle) * 100;

      bCtx.fillStyle = colors[i % colors.length];
      bCtx.beginPath();
      bCtx.arc(px, py, 26, 0, Math.PI * 2);
      bCtx.fill();
      bCtx.strokeStyle = '#ffffff';
      bCtx.lineWidth = 4;
      bCtx.stroke();
    }

    // Yellow eye spot
    bCtx.fillStyle = '#ffffff';
    bCtx.beginPath();
    bCtx.arc(256, 175, 18, 0, Math.PI * 2);
    bCtx.fill();
    bCtx.fillStyle = '#000000';
    bCtx.beginPath();
    bCtx.arc(256, 175, 9, 0, Math.PI * 2);
    bCtx.fill();

    const backTexture = new THREE.CanvasTexture(backCanvas);

    // B. Canopy / Hood Texture (Scalloped Yellow, Red and Turquoise)
    const hoodCanvas = document.createElement('canvas');
    hoodCanvas.width = 512;
    hoodCanvas.height = 512;
    const hCtx = hoodCanvas.getContext('2d');

    hCtx.fillStyle = '#f59e0b';
    hCtx.fillRect(0, 0, 512, 512);

    // Red fringe border
    hCtx.fillStyle = '#dc2626';
    hCtx.fillRect(0, 460, 512, 52);

    // Traditional floral circles
    for (let y = 80; y <= 400; y += 120) {
      for (let x = 80; x <= 440; x += 120) {
        hCtx.fillStyle = '#059669';
        hCtx.beginPath();
        hCtx.arc(x, y, 36, 0, Math.PI * 2);
        hCtx.fill();

        hCtx.fillStyle = '#ef4444';
        hCtx.beginPath();
        hCtx.arc(x, y, 22, 0, Math.PI * 2);
        hCtx.fill();

        hCtx.fillStyle = '#ffffff';
        hCtx.beginPath();
        hCtx.arc(x, y, 10, 0, Math.PI * 2);
        hCtx.fill();
      }
    }

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

      // Turquoise curved mudguards over rear wheels
      const fenderGeo = new THREE.CylinderGeometry(0.53, 0.53, 0.16, 20, 1, true, 0, Math.PI);
      fenderGeo.rotateZ(Math.PI / 2);
      const fender = new THREE.Mesh(fenderGeo, tealFenderMat);
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

    // Backrest Cushion (supporting mid-back so couple is clearly visible!)
    const backCushionGeo = new THREE.BoxGeometry(1.18, 0.34, 0.12);
    const backCushion = new THREE.Mesh(backCushionGeo, cushionMat);
    backCushion.position.set(0, 1.20, 1.12);
    carriageGroup.add(backCushion);

    // Side Armrests with decorative carved wood
    [-0.58, 0.58].forEach((x) => {
      const armGeo = new THREE.BoxGeometry(0.08, 0.28, 0.6);
      const arm = new THREE.Mesh(armGeo, tealFenderMat);
      arm.position.set(x, 1.22, 0.88);
      carriageGroup.add(arm);
    });

    // Backboard Tin Plate with Rickshaw Art (Facing rear traffic)
    const backPlateGeo = new THREE.PlaneGeometry(1.05, 0.75);
    const backPlate = new THREE.Mesh(backPlateGeo, backArtMat);
    backPlate.position.set(0, 0.95, 1.22);
    backPlate.rotation.y = Math.PI; // Face backwards toward oncoming rear traffic!
    carriageGroup.add(backPlate);

    // Traditional Arched Rickshaw Hood / Canopy with Red Struts
    const hoodGeo = new THREE.CylinderGeometry(0.68, 0.68, 1.26, 24, 1, true, Math.PI * 0.1, Math.PI * 0.85);
    hoodGeo.rotateZ(Math.PI / 2);
    const hood = new THREE.Mesh(hoodGeo, hoodMat);
    hood.position.set(0, 1.62, 0.85);
    carriageGroup.add(hood);

    // Thin Red Metal Support Struts connecting Hood to Carriage (from reference picture)
    [-0.62, 0.62].forEach((x) => {
      const strutGeo = new THREE.CylinderGeometry(0.015, 0.015, 1.05, 8);
      strutGeo.rotateX(0.35);
      const strut = new THREE.Mesh(strutGeo, redFrameMat);
      strut.position.set(x, 1.42, 0.65);
      carriageGroup.add(strut);
    });

    // Rear Taillights on carriage
    [-0.48, 0.48].forEach((x) => {
      const tlGeo = new THREE.SphereGeometry(0.05, 10, 10);
      const tl = new THREE.Mesh(tlGeo, new THREE.MeshBasicMaterial({ color: 0xff0000 }));
      tl.position.set(x, 0.65, 1.22);
      carriageGroup.add(tl);
      this.brakeLights.push(tl);
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

    // Girl Right Arm
    const girlRightArmGeo = new THREE.CylinderGeometry(0.035, 0.03, 0.35, 8);
    girlRightArmGeo.rotateZ(-0.25);
    const girlRightArm = new THREE.Mesh(girlRightArmGeo, girlDressMat);
    girlRightArm.position.set(0.2, 0.16, 0);
    girlGroup.add(girlRightArm);

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
