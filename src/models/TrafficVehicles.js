// ==========================================
// BANGLADESH TRUCK RUSH - TRAFFIC VEHICLES
// (Including Cow-Loaded Deshi Trucks!)
// ==========================================

import * as THREE from 'three';
import { CONFIG } from '../config.js';

export class TrafficVehicle {
  constructor(type = 'sedan') {
    this.type = type;
    this.group = new THREE.Group();
    this.group.name = `traffic_${type}`;

    this.speed = 75; // km/h
    this.lane = 0;
    this.active = false;
    this.hasBeenOvertaken = false;

    this.wheels = [];
    this.wheelRotation = 0;

    // Collision Bounding Box (pre-allocated vector to prevent per-frame GC allocations)
    this.box = new THREE.Box3();
    this.collisionSize = new THREE.Vector3(1.8, 1.4, 4.5);
    this._boxCenter = new THREE.Vector3();

    this.buildModel();
  }

  buildModel() {
    switch (this.type) {
      case 'cow_truck':
        this.buildCowLoadedTruck();
        break;
      case 'truck':
        this.buildCommercialTruck();
        break;
      case 'bus':
        this.buildDeshiBus();
        break;
      case 'suv':
        this.buildSUV();
        break;
      case 'sedan':
      default:
        this.buildSedan();
    }
  }

  getVehicleMaterials(bodyColorHex) {
    return {
      body: new THREE.MeshStandardMaterial({
        color: bodyColorHex,
        metalness: 0.5,
        roughness: 0.35
      }),
      darkTrim: new THREE.MeshStandardMaterial({
        color: 0x1e2024,
        roughness: 0.7
      }),
      wood: new THREE.MeshStandardMaterial({
        color: 0x854d0e,
        roughness: 0.9
      }),
      glass: new THREE.MeshPhysicalMaterial({
        color: 0x111622,
        metalness: 0.9,
        roughness: 0.1,
        transparent: true,
        opacity: 0.88
      }),
      chrome: new THREE.MeshStandardMaterial({
        color: 0xdfdfdf,
        metalness: 0.9,
        roughness: 0.2
      }),
      headlight: new THREE.MeshBasicMaterial({ color: 0xffffff }),
      taillight: new THREE.MeshStandardMaterial({
        color: 0xcc0000,
        emissive: 0xcc0000,
        emissiveIntensity: 1.2
      }),
      tire: new THREE.MeshStandardMaterial({
        color: 0x1e1e20,
        metalness: 0.1,
        roughness: 0.85
      }),
      rim: new THREE.MeshStandardMaterial({
        color: 0xb91c1c, // Red truck rim
        metalness: 0.5,
        roughness: 0.4
      }),
      cowFawn: new THREE.MeshStandardMaterial({ color: 0x8d5524, roughness: 0.7 }),
      cowWhite: new THREE.MeshStandardMaterial({ color: 0xf5f5f0, roughness: 0.6 }),
      cowBlack: new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.7 }),
      horn: new THREE.MeshStandardMaterial({ color: 0x374151, roughness: 0.4 })
    };
  }

  // ========================================================
  // 1. COW-LOADED DESHI TRUCK (গোরু-ভর্তি দেশি ট্রাক)
  // ========================================================
  buildCowLoadedTruck() {
    const cabColors = [0x0284c7, 0x16a34a, 0xd97706, 0xdc2626];
    const cabColor = cabColors[Math.floor(Math.random() * cabColors.length)];
    const mats = this.getVehicleMaterials(cabColor);

    this.collisionSize.set(2.35, 2.9, 6.4);

    // Chassis Frame
    const frameGeo = new THREE.BoxGeometry(2.0, 0.4, 6.2);
    const frame = new THREE.Mesh(frameGeo, mats.darkTrim);
    frame.position.set(0, 0.6, 0);
    this.group.add(frame);

    // Front Bumper / Bull Bar
    const bumperGeo = new THREE.BoxGeometry(2.3, 0.4, 0.25);
    const bumper = new THREE.Mesh(bumperGeo, mats.darkTrim);
    bumper.position.set(0, 0.6, -3.15);
    this.group.add(bumper);

    // Hood / Bonnet
    const hoodGeo = new THREE.BoxGeometry(1.8, 0.9, 1.5);
    const hood = new THREE.Mesh(hoodGeo, mats.body);
    hood.position.set(0, 1.25, -2.2);
    this.group.add(hood);

    // Cabin
    const cabGeo = new THREE.BoxGeometry(2.1, 1.5, 1.5);
    const cab = new THREE.Mesh(cabGeo, mats.body);
    cab.position.set(0, 1.8, -0.7);
    this.group.add(cab);

    // Windshield
    const windshieldGeo = new THREE.PlaneGeometry(1.85, 0.7);
    const windshield = new THREE.Mesh(windshieldGeo, mats.glass);
    windshield.position.set(0, 1.95, -1.46);
    this.group.add(windshield);

    // Headlights
    [-0.7, 0.7].forEach((x) => {
      const hl = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.2, 0.05), mats.headlight);
      hl.position.set(x, 1.15, -3.18);
      this.group.add(hl);
    });

    // Wooden Cargo Bed (Dala)
    const bedGeo = new THREE.BoxGeometry(2.25, 0.12, 3.6);
    const bed = new THREE.Mesh(bedGeo, mats.wood);
    bed.position.set(0, 1.05, 1.5);
    this.group.add(bed);

    // High Slotted Wooden Rails
    [-1.12, 1.12].forEach((x) => {
      const railGeo = new THREE.BoxGeometry(0.08, 1.3, 3.6);
      const rail = new THREE.Mesh(railGeo, mats.wood);
      rail.position.set(x, 1.7, 1.5);
      this.group.add(rail);
    });

    const tailGeo = new THREE.BoxGeometry(2.25, 1.2, 0.08);
    const tailgate = new THREE.Mesh(tailGeo, mats.wood);
    tailgate.position.set(0, 1.65, 3.3);
    this.group.add(tailgate);

    // Taillights
    [-0.85, 0.85].forEach((x) => {
      const tl = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.16, 0.05), mats.taillight);
      tl.position.set(x, 0.75, 3.32);
      this.group.add(tl);
    });

    // 3 Cows Peeking out of the cargo bed!
    const cowPositions = [
      { x: -0.45, z: 0.5, mat: mats.cowWhite },
      { x: 0.45, z: 1.5, mat: mats.cowFawn },
      { x: -0.35, z: 2.4, mat: mats.cowBlack }
    ];

    cowPositions.forEach((cp) => {
      const cowHeadGroup = new THREE.Group();
      cowHeadGroup.position.set(cp.x, 2.2, cp.z);

      // Cow Head
      const hGeo = new THREE.BoxGeometry(0.42, 0.45, 0.6);
      const head = new THREE.Mesh(hGeo, cp.mat);
      cowHeadGroup.add(head);

      // Snout
      const sGeo = new THREE.BoxGeometry(0.3, 0.25, 0.25);
      const snout = new THREE.Mesh(sGeo, mats.darkTrim);
      snout.position.set(0, -0.08, 0.38);
      cowHeadGroup.add(snout);

      // Horns
      [-0.18, 0.18].forEach((hx) => {
        const hornGeo = new THREE.ConeGeometry(0.05, 0.28, 6);
        const horn = new THREE.Mesh(hornGeo, mats.horn);
        horn.position.set(hx, 0.26, 0.05);
        horn.rotation.z = hx > 0 ? -0.35 : 0.35;
        cowHeadGroup.add(horn);
      });

      this.group.add(cowHeadGroup);
    });

    // Truck Wheels (Front single, Rear dual)
    const wheelPositions = [
      { x: -1.05, z: -2.1 }, { x: 1.05, z: -2.1 },
      { x: -1.05, z: 1.8 }, { x: 1.05, z: 1.8 }
    ];

    wheelPositions.forEach((pos) => {
      const wheel = this.createSimpleWheel(mats, 0.5, 0.3);
      wheel.position.set(pos.x, 0.5, pos.z);
      this.group.add(wheel);
      this.wheels.push(wheel);
    });
  }

  // ========================================================
  // 2. COMMERCIAL CARGO TRUCK
  // ========================================================
  buildCommercialTruck() {
    const mats = this.getVehicleMaterials(0xd97706);
    this.collisionSize.set(2.35, 2.9, 6.4);

    const frameGeo = new THREE.BoxGeometry(2.0, 0.4, 6.2);
    const frame = new THREE.Mesh(frameGeo, mats.darkTrim);
    frame.position.set(0, 0.6, 0);
    this.group.add(frame);

    const cabGeo = new THREE.BoxGeometry(2.1, 1.6, 1.8);
    const cab = new THREE.Mesh(cabGeo, mats.body);
    cab.position.set(0, 1.7, -1.8);
    this.group.add(cab);

    const cargoGeo = new THREE.BoxGeometry(2.3, 2.1, 3.8);
    const cargo = new THREE.Mesh(cargoGeo, mats.wood);
    cargo.position.set(0, 1.85, 1.2);
    this.group.add(cargo);

    this.addStandardLights(mats, 0.75, -2.75, 0.8, 3.12, 0.8);
    this.addStandardWheels(mats, 1.05, 0.5, 1.8, 0.5);
  }

  // ========================================================
  // 3. BANGLADESHI HIGHWAY BUS (Local / Intercity Bus)
  // ========================================================
  buildDeshiBus() {
    const mats = this.getVehicleMaterials(0x16a34a); // Green highway bus
    this.collisionSize.set(2.4, 3.2, 10.5);

    const busGeo = new THREE.BoxGeometry(2.35, 2.5, 10.2);
    const bus = new THREE.Mesh(busGeo, mats.body);
    bus.position.set(0, 1.65, 0);
    this.group.add(bus);

    // Front Windshield
    const windshieldGeo = new THREE.PlaneGeometry(2.15, 1.2);
    const windshield = new THREE.Mesh(windshieldGeo, mats.glass);
    windshield.position.set(0, 1.95, -5.12);
    this.group.add(windshield);

    // Side windows strip
    [-1.19, 1.19].forEach((x) => {
      const winStripGeo = new THREE.PlaneGeometry(9.0, 0.9);
      const winStrip = new THREE.Mesh(winStripGeo, mats.glass);
      winStrip.position.set(x, 1.9, 0.2);
      winStrip.rotation.y = x > 0 ? Math.PI / 2 : -Math.PI / 2;
      this.group.add(winStrip);
    });

    // Lights
    [-0.85, 0.85].forEach((x) => {
      const hl = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.16, 0.05), mats.headlight);
      hl.position.set(x, 0.75, -5.12);
      this.group.add(hl);

      const tl = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.35, 0.05), mats.taillight);
      tl.position.set(x, 1.3, 5.12);
      this.group.add(tl);
    });

    // Wheels
    const busWheelPos = [
      { x: -1.05, z: -3.5 }, { x: 1.05, z: -3.5 },
      { x: -1.05, z: 3.3 }, { x: 1.05, z: 3.3 }
    ];

    busWheelPos.forEach((pos) => {
      const wheel = this.createSimpleWheel(mats, 0.48, 0.3);
      wheel.position.set(pos.x, 0.48, pos.z);
      this.group.add(wheel);
      this.wheels.push(wheel);
    });
  }

  // ========================================================
  // 4. SUV & 5. SEDAN
  // ========================================================
  buildSUV() {
    const colors = [0xd46820, 0x1f232b, 0x54626f, 0xf0f0f2];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const mats = this.getVehicleMaterials(color);

    this.collisionSize.set(1.95, 1.76, 4.75);

    const baseGeo = new THREE.BoxGeometry(1.88, 0.4, 4.65);
    const base = new THREE.Mesh(baseGeo, mats.darkTrim);
    base.position.set(0, 0.42, 0);
    this.group.add(base);

    const bodyGeo = new THREE.BoxGeometry(1.84, 0.6, 4.6);
    const body = new THREE.Mesh(bodyGeo, mats.body);
    body.position.set(0, 0.78, 0);
    this.group.add(body);

    const cabinGeo = new THREE.BoxGeometry(1.58, 0.65, 2.9);
    const cabin = new THREE.Mesh(cabinGeo, mats.body);
    cabin.position.set(0, 1.3, 0.2);
    this.group.add(cabin);

    this.addStandardLights(mats, 0.68, -2.33, 0.75, 2.33, 0.75);
    this.addStandardWheels(mats, 0.9, 0.38, 1.4, 0.38);
  }

  buildSedan() {
    const colors = [0x224488, 0x111113, 0xb0b5bc, 0xdedede];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const mats = this.getVehicleMaterials(color);

    this.collisionSize.set(1.82, 1.38, 4.6);

    const baseGeo = new THREE.BoxGeometry(1.76, 0.32, 4.5);
    const base = new THREE.Mesh(baseGeo, mats.darkTrim);
    base.position.set(0, 0.32, 0);
    this.group.add(base);

    const bodyGeo = new THREE.BoxGeometry(1.72, 0.44, 4.4);
    const body = new THREE.Mesh(bodyGeo, mats.body);
    body.position.set(0, 0.58, 0);
    this.group.add(body);

    const cabinGeo = new THREE.BoxGeometry(1.44, 0.46, 2.2);
    const cabin = new THREE.Mesh(cabinGeo, mats.body);
    cabin.position.set(0, 0.92, -0.05);
    this.group.add(cabin);

    this.addStandardLights(mats, 0.62, -2.2, 0.58, 2.21, 0.62);
    this.addStandardWheels(mats, 0.84, 0.32, 1.35, 0.32);
  }

  addStandardLights(mats, hlX, hlZ, hlY, tlZ, tlY) {
    [-hlX, hlX].forEach((x) => {
      const hlGeo = new THREE.BoxGeometry(0.3, 0.1, 0.05);
      const hl = new THREE.Mesh(hlGeo, mats.headlight);
      hl.position.set(x, hlY, hlZ);
      this.group.add(hl);
    });

    [-hlX, hlX].forEach((x) => {
      const tlGeo = new THREE.BoxGeometry(0.32, 0.12, 0.05);
      const tl = new THREE.Mesh(tlGeo, mats.taillight);
      tl.position.set(x, tlY, tlZ);
      this.group.add(tl);
    });
  }

  addStandardWheels(mats, xOff, yOff, zOff, radius) {
    const pos = [
      { x: -xOff, y: yOff, z: -zOff },
      { x: xOff, y: yOff, z: -zOff },
      { x: -xOff, y: yOff, z: zOff },
      { x: xOff, y: yOff, z: zOff }
    ];

    pos.forEach((p) => {
      const wheel = this.createSimpleWheel(mats, radius, 0.24);
      wheel.position.set(p.x, p.y, p.z);
      this.group.add(wheel);
      this.wheels.push(wheel);
    });
  }

  createSimpleWheel(mats, radius, width) {
    const assembly = new THREE.Group();
    const tireGeo = new THREE.CylinderGeometry(radius, radius, width, 18);
    tireGeo.rotateZ(Math.PI / 2);
    const tire = new THREE.Mesh(tireGeo, mats.tire);
    assembly.add(tire);

    const rimGeo = new THREE.CylinderGeometry(radius * 0.7, radius * 0.7, width + 0.02, 14);
    rimGeo.rotateZ(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, mats.rim);
    assembly.add(rim);

    return assembly;
  }

  spawn(laneIndex, zPos, speedKmh) {
    this.lane = laneIndex;
    this.speed = speedKmh;
    this.active = true;
    this.hasBeenOvertaken = false;
    this.isYielding = false;

    const laneX = CONFIG.LANES[laneIndex];
    this.targetX = laneX;
    this.group.position.set(laneX, 0, zPos);
    this.group.visible = true;

    this.updateBoundingBox();
  }

  // When player honks horn, traffic car yields to an adjacent free lane!
  yieldLane(activeVehicles) {
    if (this.isYielding) return;

    const candidates = [];
    if (this.lane > 0) candidates.push(this.lane - 1);
    if (this.lane < CONFIG.LANES.length - 1) candidates.push(this.lane + 1);

    for (const candLane of candidates) {
      const candX = CONFIG.LANES[candLane];
      const isBlocked = activeVehicles.some((other) => {
        if (other === this || !other.active) return false;
        const dz = Math.abs(other.group.position.z - this.group.position.z);
        const dx = Math.abs(other.group.position.x - candX);
        return dz < 20 && dx < 2.0;
      });

      if (!isBlocked) {
        this.lane = candLane;
        this.targetX = candX;
        this.isYielding = true;
        this.speed = Math.min(130, this.speed + 8);
        break;
      }
    }
  }

  despawn() {
    this.active = false;
    this.isYielding = false;
    this.group.visible = false;
    this.group.position.set(0, -100, 0);
  }

  update(playerSpeedKmh, delta) {
    if (!this.active) return;

    const forwardMs = (this.speed * 1000) / 3600;
    this.group.position.z -= forwardMs * delta;

    // Smooth lane shift when yielding
    if (this.targetX !== undefined) {
      const diffX = this.targetX - this.group.position.x;
      if (Math.abs(diffX) > 0.04) {
        this.group.position.x += Math.sign(diffX) * Math.min(Math.abs(diffX), delta * 4.4);
      } else {
        this.group.position.x = this.targetX;
        this.isYielding = false;
      }
    }

    const wheelRotDelta = (forwardMs / 0.45) * delta;
    this.wheelRotation -= wheelRotDelta;
    this.wheels.forEach((w) => {
      w.rotation.x = this.wheelRotation;
    });

    this.updateBoundingBox();
  }

  updateBoundingBox() {
    this._boxCenter.copy(this.group.position);
    this._boxCenter.y += this.collisionSize.y * 0.5;
    this.box.setFromCenterAndSize(this._boxCenter, this.collisionSize);
  }
}
