// ==========================================
// BANGLADESH TRUCK RUSH - SMART TRAFFIC SYSTEM
// (With Cow-Loaded Trucks & Highway Buses)
// ==========================================

import * as THREE from 'three';
import { TrafficVehicle } from '../models/TrafficVehicles.js';
import { CONFIG, isMobileDevice } from '../config.js';

export class TrafficManager {
  constructor(scene) {
    this.scene = scene;
    this.pool = [];
    this.activeVehicles = [];

    this.spawnTimer = 0;
    this.nextSpawnInterval = 1.4;

    this.initPool();
  }

  initPool() {
    const types = ['cow_truck', 'truck', 'bus', 'sedan', 'suv'];
    const isMobile = isMobileDevice();
    const totalPoolSize = isMobile ? 14 : 25;

    for (let i = 0; i < totalPoolSize; i++) {
      const type = types[i % types.length];
      const vehicle = new TrafficVehicle(type);
      vehicle.despawn();
      this.pool.push(vehicle);
      this.scene.add(vehicle.group);
    }
  }

  getInactiveVehicle(typePreference = null) {
    if (typePreference) {
      const match = this.pool.find((v) => !v.active && v.type === typePreference);
      if (match) return match;
    }
    return this.pool.find((v) => !v.active) || null;
  }

  // Update traffic positions, check near misses, recycle off-screen cars
  update(playerTruck, playerSpeedKmh, distanceMeters, delta, onNearMiss) {
    const playerZ = playerTruck.group.position.z;
    const playerX = playerTruck.group.position.x;

    // Difficulty scaling
    const difficulty = Math.min(1.0, distanceMeters / 4500);
    const minInterval = THREE.MathUtils.lerp(1.3, 0.8, difficulty);
    const maxInterval = THREE.MathUtils.lerp(2.2, 1.4, difficulty);

    // Spawn Timer
    this.spawnTimer += delta;
    if (this.spawnTimer >= this.nextSpawnInterval) {
      this.spawnTimer = 0;
      this.nextSpawnInterval = THREE.MathUtils.lerp(minInterval, maxInterval, Math.random());
      this.trySpawnTraffic(playerZ, difficulty);
    }

    // Update active vehicles
    for (let i = this.activeVehicles.length - 1; i >= 0; i--) {
      const vehicle = this.activeVehicles[i];
      vehicle.update(playerSpeedKmh, delta);

      // Despawn behind truck
      if (vehicle.group.position.z > playerZ + CONFIG.TRAFFIC.DESPAWN_DISTANCE) {
        vehicle.despawn();
        this.activeVehicles.splice(i, 1);
        continue;
      }

      // Check Near-Miss / Close Call
      if (!vehicle.hasBeenOvertaken) {
        const distZ = Math.abs(vehicle.group.position.z - playerZ);
        const distX = Math.abs(vehicle.group.position.x - playerX);

        if (
          distZ < CONFIG.SCORING.NEAR_MISS_DIST_Z &&
          distX < CONFIG.SCORING.NEAR_MISS_DIST_X &&
          distX > 0.5 &&
          playerSpeedKmh > vehicle.speed + 12
        ) {
          vehicle.hasBeenOvertaken = true;
          if (onNearMiss) {
            onNearMiss(vehicle);
          }
        } else if (playerZ < vehicle.group.position.z - 4.0) {
          vehicle.hasBeenOvertaken = true;
        }
      }
    }
  }

  // Solvable traffic spawner (Guarantees at least 1 lane is free)
  trySpawnTraffic(playerZ, difficulty) {
    const spawnZ = playerZ - CONFIG.TRAFFIC.SPAWN_DISTANCE;
    const bufferDist = 34;
    const occupiedLanes = new Set();

    this.activeVehicles.forEach((v) => {
      if (Math.abs(v.group.position.z - spawnZ) < bufferDist) {
        occupiedLanes.add(v.lane);
      }
    });

    const availableLanes = [0, 1, 2].filter((lane) => !occupiedLanes.has(lane));
    if (availableLanes.length === 0) return;
    if (availableLanes.length === 1 && occupiedLanes.size >= 2) return;

    const chosenLane = availableLanes[Math.floor(Math.random() * availableLanes.length)];

    // Vehicle Type based on lane
    let type = 'cow_truck';
    const rand = Math.random();
    if (chosenLane === 0) {
      // Right lane has cow trucks and heavy commercial trucks
      type = rand > 0.45 ? 'cow_truck' : 'truck';
    } else if (chosenLane === 1) {
      // Center lane has buses, sedans, cow trucks
      type = rand > 0.5 ? 'bus' : (rand > 0.25 ? 'cow_truck' : 'suv');
    } else {
      // Left lane has faster buses and sedans
      type = rand > 0.45 ? 'bus' : 'sedan';
    }

    const vehicle = this.getInactiveVehicle(type);
    if (!vehicle) return;

    const speedRange = CONFIG.TRAFFIC.SPEEDS[type] || [65, 85];
    const trafficProgressBonus = difficulty * 35; // Traffic speeds up smoothly as distance increases
    const speed = THREE.MathUtils.lerp(speedRange[0], speedRange[1], Math.random()) + trafficProgressBonus;

    vehicle.spawn(chosenLane, spawnZ, speed);
    this.activeVehicles.push(vehicle);

    // Staggered second vehicle at higher difficulty
    if (difficulty > 0.5 && Math.random() < 0.35 && availableLanes.length >= 2) {
      const remainingLanes = availableLanes.filter((l) => l !== chosenLane);
      if (remainingLanes.length > 0) {
        const secondLane = remainingLanes[Math.floor(Math.random() * remainingLanes.length)];
        const secondType = Math.random() > 0.5 ? 'cow_truck' : 'bus';
        const secondVehicle = this.getInactiveVehicle(secondType);
        if (secondVehicle) {
          const secondSpawnZ = spawnZ - (28 + Math.random() * 20);
          const secondSpeedRange = CONFIG.TRAFFIC.SPEEDS[secondType] || [65, 80];
          const secondSpeed = THREE.MathUtils.lerp(secondSpeedRange[0], secondSpeedRange[1], Math.random()) + trafficProgressBonus;

          secondVehicle.spawn(secondLane, secondSpawnZ, secondSpeed);
          this.activeVehicles.push(secondVehicle);
        }
      }
    }
  }

  // Interactive Horn reaction: vehicle directly ahead yields to open lane!
  onPlayerHorn(playerTruck) {
    const playerZ = playerTruck.group.position.z;
    const playerX = playerTruck.group.position.x;

    for (let i = 0; i < this.activeVehicles.length; i++) {
      const v = this.activeVehicles[i];
      const distZ = playerZ - v.group.position.z; // positive when vehicle is ahead
      const distX = Math.abs(v.group.position.x - playerX);

      if (distZ > 4 && distZ < 65 && distX < 2.4 && !v.isYielding) {
        v.yieldLane(this.activeVehicles);
        break;
      }
    }
  }

  checkCollision(playerTruck) {
    for (let i = 0; i < this.activeVehicles.length; i++) {
      const v = this.activeVehicles[i];
      if (playerTruck.box.intersectsBox(v.box)) {
        return v;
      }
    }
    return null;
  }

  reset() {
    this.activeVehicles.forEach((v) => v.despawn());
    this.activeVehicles.length = 0;
    this.spawnTimer = 0;
  }
}
