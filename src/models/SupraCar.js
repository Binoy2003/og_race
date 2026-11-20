// ==========================================
// SUPRA RUSH - DETAILED TOYOTA SUPRA MK5 3D MODEL
// ==========================================

import * as THREE from 'three';
import { CONFIG } from '../config.js';

export class SupraCar {
  constructor(color = CONFIG.COLORS.SUPRA_RED) {
    this.carColor = color;
    this.group = new THREE.Group();

    // Wheel references for spin & steering
    this.wheels = [];
    this.frontWheels = [];

    // Light references for dynamic activation
    this.brakeLights = [];
    this.headlights = [];
    this.headlightSpotlights = [];
    this.exhaustFires = [];

    // Materials
    this.paintMat = null;
    this.carbonMat = null;
    this.glassMat = null;
    this.taillightMat = null;
    this.brakeActiveMat = null;

    // Dynamics state
    this.currentRoll = 0;
    this.currentPitch = 0;
    this.currentYaw = 0;
    this.wheelRotation = 0;

    // Collision Bounding Box
    this.box = new THREE.Box3();
    this.collisionSize = new THREE.Vector3(1.85, 1.25, 4.3);

    this.buildCar();
  }

  buildCar() {
    // ----------------------------------------------------
    // 1. Materials
    // ----------------------------------------------------
    this.paintMat = new THREE.MeshPhysicalMaterial({
      color: this.carColor,
      metalness: 0.85,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95
    });

    this.carbonMat = new THREE.MeshStandardMaterial({
      color: 0x18181c,
      metalness: 0.3,
      roughness: 0.4
    });

    this.glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x05070a,
      metalness: 0.9,
      roughness: 0.05,
      transmission: 0.3,
      transparent: true,
      opacity: 0.92
    });

    this.chromeMat = new THREE.MeshStandardMaterial({
      color: 0xededed,
      metalness: 0.95,
      roughness: 0.1
    });

    this.tireMat = new THREE.MeshStandardMaterial({
      color: 0x222224,
      metalness: 0.1,
      roughness: 0.8
    });

    this.rimMat = new THREE.MeshStandardMaterial({
      color: 0xd8d8de,
      metalness: 0.88,
      roughness: 0.22
    });

    this.caliperMat = new THREE.MeshStandardMaterial({
      color: 0xdd1111,
      metalness: 0.6,
      roughness: 0.3
    });

    this.headlightLensMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.2,
      roughness: 0.1,
      transmission: 0.8,
      transparent: true,
      opacity: 0.85
    });

    this.headlightEmissiveMat = new THREE.MeshBasicMaterial({
      color: 0xffffff
    });

    this.taillightMat = new THREE.MeshStandardMaterial({
      color: 0xaa0000,
      emissive: 0xaa0000,
      emissiveIntensity: 0.8,
      roughness: 0.2
    });

    this.brakeActiveMat = new THREE.MeshStandardMaterial({
      color: 0xff1111,
      emissive: 0xff0000,
      emissiveIntensity: 3.8,
      roughness: 0.1
    });

    // ----------------------------------------------------
    // 2. Main Car Body & Sculpted Monocoque
    // ----------------------------------------------------
    const bodyGroup = new THREE.Group();
    bodyGroup.name = 'carBody';
    this.bodyGroup = bodyGroup;

    // Lower chassis base
    const chassisGeo = new THREE.BoxGeometry(1.68, 0.22, 4.3);
    const chassis = new THREE.Mesh(chassisGeo, this.carbonMat);
    chassis.position.set(0, 0.28, 0);
    bodyGroup.add(chassis);

    // Front Pointed Nose & Hood
    const hoodGeo = new THREE.BoxGeometry(1.58, 0.24, 1.85);
    const hood = new THREE.Mesh(hoodGeo, this.paintMat);
    hood.position.set(0, 0.52, -1.15);
    hood.rotation.x = 0.05; // Swept downward
    bodyGroup.add(hood);

    // Front Nose Beak (Iconic pointed Supra A90 nose)
    const noseGeo = new THREE.CylinderGeometry(0.04, 0.45, 0.7, 4);
    const nose = new THREE.Mesh(noseGeo, this.paintMat);
    nose.rotation.x = Math.PI / 2;
    nose.rotation.y = Math.PI / 4;
    nose.scale.set(1.4, 0.55, 0.6);
    nose.position.set(0, 0.46, -2.15);
    bodyGroup.add(nose);

    // Front Aggressive Splitter & Aerodynamic Winglets
    const splitterGeo = new THREE.BoxGeometry(1.78, 0.06, 0.7);
    const splitter = new THREE.Mesh(splitterGeo, this.carbonMat);
    splitter.position.set(0, 0.2, -1.95);
    bodyGroup.add(splitter);

    // Splitter side winglets / canards
    [-0.88, 0.88].forEach((x) => {
      const wingletGeo = new THREE.BoxGeometry(0.04, 0.14, 0.28);
      const winglet = new THREE.Mesh(wingletGeo, this.carbonMat);
      winglet.position.set(x, 0.25, -2.05);
      bodyGroup.add(winglet);
    });

    // Lower Front Air Intakes (Triple grille openings)
    const intakeGeo = new THREE.BoxGeometry(1.44, 0.16, 0.1);
    const intake = new THREE.Mesh(intakeGeo, this.carbonMat);
    intake.position.set(0, 0.32, -2.12);
    bodyGroup.add(intake);

    // Cockpit Cabin
    const cabinGeo = new THREE.BoxGeometry(1.36, 0.48, 1.95);
    const cabin = new THREE.Mesh(cabinGeo, this.paintMat);
    cabin.position.set(0, 0.82, 0.22);
    bodyGroup.add(cabin);

    // Double-Bubble Roof (Two distinct raised lobes with center sunken channel)
    [-0.32, 0.32].forEach((x) => {
      const bubbleGeo = new THREE.CylinderGeometry(0.24, 0.28, 1.5, 12);
      const bubble = new THREE.Mesh(bubbleGeo, this.paintMat);
      bubble.rotation.x = Math.PI / 2;
      bubble.scale.set(0.9, 0.35, 1.0);
      bubble.position.set(x, 1.08, 0.2);
      bodyGroup.add(bubble);
    });

    // Windshield (Raked front glass)
    const windshieldGeo = new THREE.PlaneGeometry(1.32, 0.82);
    const windshield = new THREE.Mesh(windshieldGeo, this.glassMat);
    windshield.position.set(0, 0.84, -0.66);
    windshield.rotation.x = -0.62;
    bodyGroup.add(windshield);

    // Rear Hatch Glass (Fastback slope towards ducktail)
    const rearGlassGeo = new THREE.PlaneGeometry(1.24, 0.95);
    const rearGlass = new THREE.Mesh(rearGlassGeo, this.glassMat);
    rearGlass.position.set(0, 0.84, 1.05);
    rearGlass.rotation.x = 0.58;
    bodyGroup.add(rearGlass);

    // Side Windows
    [-0.69, 0.69].forEach((x) => {
      const sideGlassGeo = new THREE.PlaneGeometry(1.4, 0.35);
      const sideGlass = new THREE.Mesh(sideGlassGeo, this.glassMat);
      sideGlass.position.set(x, 0.84, 0.2);
      sideGlass.rotation.y = x > 0 ? Math.PI / 2 : -Math.PI / 2;
      bodyGroup.add(sideGlass);

      // Sleek side aerodynamic mirrors
      const mirrorArmGeo = new THREE.BoxGeometry(0.12, 0.04, 0.04);
      const mirrorArm = new THREE.Mesh(mirrorArmGeo, this.carbonMat);
      mirrorArm.position.set(x > 0 ? 0.73 : -0.73, 0.8, -0.38);
      bodyGroup.add(mirrorArm);

      const mirrorCapGeo = new THREE.BoxGeometry(0.18, 0.1, 0.12);
      const mirrorCap = new THREE.Mesh(mirrorCapGeo, this.paintMat);
      mirrorCap.position.set(x > 0 ? 0.82 : -0.82, 0.82, -0.38);
      bodyGroup.add(mirrorCap);
    });

    // Muscular Flared Rear Fenders / Haunches (Iconic Supra wide hips)
    [-0.84, 0.84].forEach((x) => {
      const hipGeo = new THREE.BoxGeometry(0.24, 0.42, 1.4);
      const hip = new THREE.Mesh(hipGeo, this.paintMat);
      hip.position.set(x, 0.52, 1.15);
      bodyGroup.add(hip);

      // Side Air Vent Trim behind doors
      const ventGeo = new THREE.BoxGeometry(0.02, 0.26, 0.12);
      const vent = new THREE.Mesh(ventGeo, this.carbonMat);
      vent.position.set(x > 0 ? x + 0.12 : x - 0.12, 0.5, 0.4);
      bodyGroup.add(vent);
    });

    // Flared Front Fenders
    [-0.8, 0.8].forEach((x) => {
      const frontArchGeo = new THREE.BoxGeometry(0.18, 0.38, 1.25);
      const frontArch = new THREE.Mesh(frontArchGeo, this.paintMat);
      frontArch.position.set(x, 0.5, -1.25);
      bodyGroup.add(frontArch);
    });

    // Side Skirts
    [-0.86, 0.86].forEach((x) => {
      const skirtGeo = new THREE.BoxGeometry(0.08, 0.08, 2.2);
      const skirt = new THREE.Mesh(skirtGeo, this.carbonMat);
      skirt.position.set(x, 0.22, 0.0);
      bodyGroup.add(skirt);
    });

    // Rear End & Integrated Ducktail Spoiler
    const rearDeckGeo = new THREE.BoxGeometry(1.58, 0.36, 0.95);
    const rearDeck = new THREE.Mesh(rearDeckGeo, this.paintMat);
    rearDeck.position.set(0, 0.58, 1.72);
    bodyGroup.add(rearDeck);

    // Upswept Ducktail Spoiler Lip (Graceful curved rear wing)
    const ducktailGeo = new THREE.BoxGeometry(1.64, 0.14, 0.28);
    const ducktail = new THREE.Mesh(ducktailGeo, this.paintMat);
    ducktail.position.set(0, 0.82, 2.12);
    ducktail.rotation.x = -0.25; // angled up
    bodyGroup.add(ducktail);

    // Rear Diffuser with aerodynamic strakes
    const diffuserGeo = new THREE.BoxGeometry(1.62, 0.2, 0.45);
    const diffuser = new THREE.Mesh(diffuserGeo, this.carbonMat);
    diffuser.position.set(0, 0.24, 2.05);
    bodyGroup.add(diffuser);

    // Diffuser vertical fins
    [-0.45, -0.15, 0.15, 0.45].forEach((x) => {
      const finGeo = new THREE.BoxGeometry(0.03, 0.16, 0.35);
      const fin = new THREE.Mesh(finGeo, this.carbonMat);
      fin.position.set(x, 0.22, 2.08);
      bodyGroup.add(fin);
    });

    // Central F1-style rain/brake light in diffuser
    const f1LightGeo = new THREE.BoxGeometry(0.18, 0.08, 0.05);
    const f1Light = new THREE.Mesh(f1LightGeo, this.taillightMat);
    f1Light.position.set(0, 0.25, 2.26);
    bodyGroup.add(f1Light);
    this.brakeLights.push(f1Light);

    // Dual Round Exhaust Pipes (Chrome stainless tips)
    [-0.55, 0.55].forEach((x) => {
      const exhaustGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.22, 16);
      const exhaust = new THREE.Mesh(exhaustGeo, this.chromeMat);
      exhaust.rotation.x = Math.PI / 2;
      exhaust.position.set(x, 0.22, 2.22);
      bodyGroup.add(exhaust);

      // Exhaust interior black hole
      const innerGeo = new THREE.CircleGeometry(0.075, 16);
      const innerMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
      const inner = new THREE.Mesh(innerGeo, innerMat);
      inner.position.set(x, 0.22, 2.33);
      bodyGroup.add(inner);

      // Exhaust flame cones (active during boost/nitro)
      const flameGeo = new THREE.ConeGeometry(0.1, 0.55, 12);
      flameGeo.rotateX(-Math.PI / 2);
      const flameMat = new THREE.MeshBasicMaterial({
        color: 0x3388ff,
        transparent: true,
        opacity: 0.0
      });
      const flame = new THREE.Mesh(flameGeo, flameMat);
      flame.position.set(x, 0.22, 2.6);
      bodyGroup.add(flame);
      this.exhaustFires.push(flame);
    });

    // ----------------------------------------------------
    // 3. Headlights & LED DRLs (Front)
    // ----------------------------------------------------
    [-0.64, 0.64].forEach((x) => {
      // Slender swept headlight casing
      const casingGeo = new THREE.BoxGeometry(0.34, 0.12, 0.42);
      const casing = new THREE.Mesh(casingGeo, this.carbonMat);
      casing.position.set(x, 0.52, -1.9);
      casing.rotation.y = x > 0 ? -0.22 : 0.22;
      bodyGroup.add(casing);

      // LED DRL curved strip
      const drlGeo = new THREE.BoxGeometry(0.3, 0.03, 0.05);
      const drl = new THREE.Mesh(drlGeo, this.headlightEmissiveMat);
      drl.position.set(x, 0.56, -2.08);
      drl.rotation.y = x > 0 ? -0.22 : 0.22;
      bodyGroup.add(drl);

      // Triple projector lenses
      [-0.08, 0, 0.08].forEach((subX) => {
        const lensGeo = new THREE.SphereGeometry(0.035, 8, 8);
        const lens = new THREE.Mesh(lensGeo, this.headlightEmissiveMat);
        lens.position.set(x + subX * 0.7, 0.51, -2.06);
        bodyGroup.add(lens);
      });

      // Realistic forward light cone / spotlight
      const spot = new THREE.SpotLight(0xffffff, 2.2, 50, Math.PI / 6, 0.5, 1.2);
      spot.position.set(x, 0.52, -2.1);
      spot.target.position.set(x * 1.5, 0, -25);
      bodyGroup.add(spot);
      bodyGroup.add(spot.target);
      this.headlightSpotlights.push(spot);
    });

    // ----------------------------------------------------
    // 4. Iconic Supra LED Taillights (Rear)
    // ----------------------------------------------------
    [-0.64, 0.64].forEach((x) => {
      // Horizontal bar
      const tailBarGeo = new THREE.BoxGeometry(0.34, 0.07, 0.06);
      const tailBar = new THREE.Mesh(tailBarGeo, this.taillightMat);
      tailBar.position.set(x, 0.62, 2.18);
      bodyGroup.add(tailBar);
      this.brakeLights.push(tailBar);

      // Downward teardrop accent
      const dropGeo = new THREE.BoxGeometry(0.08, 0.12, 0.06);
      const drop = new THREE.Mesh(dropGeo, this.taillightMat);
      drop.position.set(x > 0 ? x + 0.11 : x - 0.11, 0.55, 2.18);
      bodyGroup.add(drop);
      this.brakeLights.push(drop);
    });

    this.group.add(bodyGroup);

    // ----------------------------------------------------
    // 5. Wheels & High-Performance Tires (4 Wheels)
    // ----------------------------------------------------
    const wheelPositions = [
      { x: -0.84, y: 0.32, z: -1.35, isFront: true },  // Front Left
      { x: 0.84, y: 0.32, z: -1.35, isFront: true },   // Front Right
      { x: -0.86, y: 0.34, z: 1.25, isFront: false },  // Rear Left
      { x: 0.86, y: 0.34, z: 1.25, isFront: false }   // Rear Right
    ];

    wheelPositions.forEach((pos) => {
      const wheelAssembly = this.createWheel(pos.x > 0);
      wheelAssembly.position.set(pos.x, pos.y, pos.z);
      this.group.add(wheelAssembly);

      this.wheels.push(wheelAssembly.userData.spinner);
      if (pos.isFront) {
        this.frontWheels.push(wheelAssembly);
      }
    });

    // Enable shadows on car parts
    this.group.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }

  createWheel(isRightSide) {
    const assembly = new THREE.Group();

    // Spinner group holds tire & rims that rotate along wheel axis
    const spinner = new THREE.Group();
    assembly.userData.spinner = spinner;
    assembly.add(spinner);

    // Rubber Tire (Chunky sports tire with bevel)
    const tireGeo = new THREE.CylinderGeometry(0.33, 0.33, 0.26, 24);
    tireGeo.rotateZ(Math.PI / 2);
    const tire = new THREE.Mesh(tireGeo, this.tireMat);
    spinner.add(tire);

    // Alloy Rim Center & Rim Lip
    const rimLipGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.27, 24);
    rimLipGeo.rotateZ(Math.PI / 2);
    const rimLip = new THREE.Mesh(rimLipGeo, this.rimMat);
    spinner.add(rimLip);

    // 5 Twin-Spokes (10 spokes total)
    const spokeCount = 5;
    for (let i = 0; i < spokeCount; i++) {
      const angle = (i * Math.PI * 2) / spokeCount;
      const spokeGeo = new THREE.BoxGeometry(0.04, 0.23, 0.04);
      spokeGeo.translate(0, 0.11, 0);

      const spoke1 = new THREE.Mesh(spokeGeo, this.rimMat);
      spoke1.position.set(isRightSide ? 0.04 : -0.04, 0, 0);
      spoke1.rotation.x = angle + 0.08;
      spinner.add(spoke1);

      const spoke2 = new THREE.Mesh(spokeGeo, this.rimMat);
      spoke2.position.set(isRightSide ? 0.04 : -0.04, 0, 0);
      spoke2.rotation.x = angle - 0.08;
      spinner.add(spoke2);
    }

    // Center Hub with Toyota badge dot
    const hubGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.28, 12);
    hubGeo.rotateZ(Math.PI / 2);
    const hub = new THREE.Mesh(hubGeo, this.carbonMat);
    spinner.add(hub);

    // Brake Rotor (Stationary, doesn't spin with wheel)
    const rotorGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.04, 18);
    rotorGeo.rotateZ(Math.PI / 2);
    const rotor = new THREE.Mesh(rotorGeo, this.chromeMat);
    rotor.position.set(isRightSide ? -0.03 : 0.03, 0, 0);
    assembly.add(rotor);

    // Red Brembo Brake Caliper
    const caliperGeo = new THREE.BoxGeometry(0.06, 0.12, 0.1);
    const caliper = new THREE.Mesh(caliperGeo, this.caliperMat);
    caliper.position.set(isRightSide ? -0.03 : 0.03, 0.12, 0.08);
    assembly.add(caliper);

    return assembly;
  }

  // Update position, physics banking, wheel steering, and lights every frame
  update(speedKmh, currentLaneX, targetLaneX, isBraking, isBoosting, delta) {
    // 1. Wheel spin proportional to road speed
    const speedMs = (speedKmh * 1000) / 3600;
    const wheelCircumference = 2 * Math.PI * 0.33;
    const rotSpeed = (speedMs / wheelCircumference) * (2 * Math.PI) * delta;
    this.wheelRotation -= rotSpeed;
    this.wheels.forEach((w) => {
      w.rotation.x = this.wheelRotation;
    });

    // 2. Front wheel steering angle (steers toward direction of lane change)
    const laneDeltaX = targetLaneX - this.group.position.x;
    const targetWheelYaw = -Math.max(-CONFIG.STEERING.WHEEL_TURN_ANGLE, Math.min(CONFIG.STEERING.WHEEL_TURN_ANGLE, laneDeltaX * 0.45));
    this.frontWheels.forEach((fw) => {
      fw.rotation.y += (targetWheelYaw - fw.rotation.y) * Math.min(1.0, delta * 14);
    });

    // 3. Body roll / banking into turn (suspension dynamic roll)
    const targetRoll = Math.max(-CONFIG.STEERING.BODY_ROLL_FACTOR, Math.min(CONFIG.STEERING.BODY_ROLL_FACTOR, laneDeltaX * 0.08));
    this.currentRoll += (targetRoll - this.currentRoll) * Math.min(1.0, delta * 12);
    this.bodyGroup.rotation.z = this.currentRoll;

    // 4. Body yaw turning
    const targetYaw = Math.max(-CONFIG.STEERING.BODY_YAW_FACTOR, Math.min(CONFIG.STEERING.BODY_YAW_FACTOR, laneDeltaX * 0.06));
    this.currentYaw += (targetYaw - this.currentYaw) * Math.min(1.0, delta * 12);
    this.bodyGroup.rotation.y = this.currentYaw;

    // 5. Pitch: Dip down on braking, lift up on boost/acceleration
    let targetPitch = 0;
    if (isBraking) {
      targetPitch = 0.035; // Nose dips down
    } else if (isBoosting) {
      targetPitch = -0.025; // Nose rises slightly
    }
    this.currentPitch += (targetPitch - this.currentPitch) * Math.min(1.0, delta * 10);
    this.bodyGroup.rotation.x = this.currentPitch;

    // 6. Dynamic Brake Lights
    const targetMat = isBraking ? this.brakeActiveMat : this.taillightMat;
    this.brakeLights.forEach((lightMesh) => {
      lightMesh.material = targetMat;
    });

    // 7. Nitro Exhaust Flames (flickering blue/orange jet flames)
    this.exhaustFires.forEach((flame) => {
      if (isBoosting) {
        flame.material.opacity = 0.85 + Math.random() * 0.15;
        flame.scale.set(
          0.8 + Math.random() * 0.4,
          1.0 + Math.random() * 0.6,
          0.8 + Math.random() * 0.4
        );
        flame.material.color.setHex(Math.random() > 0.3 ? 0x2288ff : 0xffaa22);
      } else {
        flame.material.opacity = 0;
      }
    });

    // 8. Update Bounding Box for Collision Detection
    this.updateBoundingBox();
  }

  updateBoundingBox() {
    const center = this.group.position.clone();
    center.y += 0.65; // vertical center
    this.box.setFromCenterAndSize(center, this.collisionSize);
  }

  // Crash visual effect: sparks, car tilt, smoke
  triggerCrash() {
    this.bodyGroup.rotation.z = 0.3;
    this.bodyGroup.rotation.y = 0.4;
    this.bodyGroup.rotation.x = -0.15;
    this.bodyGroup.position.y = 0.2;
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
