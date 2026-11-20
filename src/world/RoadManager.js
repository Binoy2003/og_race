// ==========================================
// SUPRA RUSH - RURAL BANGLADESH HIGHWAY & COUNTRYSIDE
// ==========================================

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { BangladeshProps } from './BangladeshProps.js';

export class RoadManager {
  constructor(scene) {
    this.scene = scene;
    this.segments = [];
    this.segmentLength = CONFIG.ROAD_SEGMENT_LENGTH;
    this.segmentCount = CONFIG.ROAD_SEGMENT_COUNT;
    this.roadWidth = CONFIG.ROAD_WIDTH;

    // Rural Bangladesh 3D Assets Builder
    this.props = new BangladeshProps();

    // Materials
    this.roadMaterial = null;
    this.paddyFieldMaterial = null;
    this.dirtVergeMaterial = null;
    this.culvertRailingMaterial = null;

    this.initMaterials();
    this.buildSegments();
  }

  initMaterials() {
    // 1. Smooth Dark Asphalt Road Texture via Canvas
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 2048;
    const ctx = canvas.getContext('2d');

    // Smooth dark road surface
    ctx.fillStyle = '#222329';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Fine texture grain
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 12;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
    ctx.putImageData(imgData, 0, 0);

    // Subtle lane wheel wear paths
    const lanes = [canvas.width * 0.23, canvas.width * 0.50, canvas.width * 0.77];
    ctx.fillStyle = 'rgba(16, 17, 22, 0.22)';
    lanes.forEach((lx) => {
      ctx.fillRect(lx - 50, 0, 36, canvas.height);
      ctx.fillRect(lx + 15, 0, 36, canvas.height);
    });

    // Solid White Edge Markings
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.08, 0);
    ctx.lineTo(canvas.width * 0.08, canvas.height);
    ctx.moveTo(canvas.width * 0.92, 0);
    ctx.lineTo(canvas.width * 0.92, canvas.height);
    ctx.stroke();

    // Dashed White Lane Divider Lines (separating the 3 driving lanes)
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 12;
    ctx.setLineDash([120, 140]);
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.36, 0);
    ctx.lineTo(canvas.width * 0.36, canvas.height);
    ctx.moveTo(canvas.width * 0.64, 0);
    ctx.lineTo(canvas.width * 0.64, canvas.height);
    ctx.stroke();

    const roadTexture = new THREE.CanvasTexture(canvas);
    roadTexture.wrapS = THREE.RepeatWrapping;
    roadTexture.wrapT = THREE.RepeatWrapping;
    roadTexture.repeat.set(1, 1);
    roadTexture.anisotropy = 8;

    this.roadMaterial = new THREE.MeshStandardMaterial({
      map: roadTexture,
      roughness: 0.82,
      metalness: 0.12
    });

    // 2. Lush Green Paddy Field Texture (Dhan Khet)
    const paddyCanvas = document.createElement('canvas');
    paddyCanvas.width = 512;
    paddyCanvas.height = 512;
    const pCtx = paddyCanvas.getContext('2d');
    pCtx.fillStyle = '#2e7d32'; // Vibrant lush paddy green
    pCtx.fillRect(0, 0, 512, 512);

    // Rice terrace crop rows
    pCtx.strokeStyle = '#388e3c';
    pCtx.lineWidth = 8;
    for (let y = 0; y < 512; y += 24) {
      pCtx.beginPath();
      pCtx.moveTo(0, y);
      pCtx.lineTo(512, y);
      pCtx.stroke();
    }
    // Earthen ridges (Ail)
    pCtx.strokeStyle = '#6d4c41';
    pCtx.lineWidth = 14;
    pCtx.strokeRect(0, 0, 512, 512);

    const paddyTexture = new THREE.CanvasTexture(paddyCanvas);
    paddyTexture.wrapS = THREE.RepeatWrapping;
    paddyTexture.wrapT = THREE.RepeatWrapping;
    paddyTexture.repeat.set(4, 8);

    this.paddyFieldMaterial = new THREE.MeshStandardMaterial({
      map: paddyTexture,
      roughness: 0.88,
      metalness: 0.05
    });

    // 3. Earthen Roadside Dirt Shoulder (Kacha Rasta / Verge)
    this.dirtVergeMaterial = new THREE.MeshStandardMaterial({
      color: 0x6b4f3b, // Reddish alluvial village soil
      roughness: 0.95
    });

    // 4. Whitewashed Rural Bridge / Culvert Parapet
    this.culvertRailingMaterial = new THREE.MeshStandardMaterial({
      color: 0xefefef,
      roughness: 0.7
    });
  }

  buildSegments() {
    for (let i = 0; i < this.segmentCount; i++) {
      const zPos = -i * this.segmentLength;
      const segment = this.createSegment(zPos, i);
      this.segments.push(segment);
      this.scene.add(segment.group);
    }
  }

  createSegment(zPos, index) {
    const group = new THREE.Group();
    group.position.z = zPos;

    // ----------------------------------------------------
    // 1. Three-Lane Asphalt Road Surface
    // ----------------------------------------------------
    const roadGeo = new THREE.PlaneGeometry(this.roadWidth, this.segmentLength);
    roadGeo.rotateX(-Math.PI / 2);
    const roadMesh = new THREE.Mesh(roadGeo, this.roadMaterial);
    roadMesh.receiveShadow = true;
    group.add(roadMesh);

    // ----------------------------------------------------
    // 2. Earthen Soil Verge / Shoulders (Left & Right)
    // ----------------------------------------------------
    const vergeWidth = 3.5;
    [-1, 1].forEach((side) => {
      const vergeGeo = new THREE.PlaneGeometry(vergeWidth, this.segmentLength);
      vergeGeo.rotateX(-Math.PI / 2);
      const verge = new THREE.Mesh(vergeGeo, this.dirtVergeMaterial);
      verge.position.set((this.roadWidth * 0.5 + vergeWidth * 0.5) * side, -0.01, 0);
      verge.receiveShadow = true;
      group.add(verge);
    });

    // ----------------------------------------------------
    // 3. Expansive Green Paddy Fields (Dhan Khet)
    // ----------------------------------------------------
    const fieldWidth = 60;
    [-1, 1].forEach((side) => {
      const fieldGeo = new THREE.PlaneGeometry(fieldWidth, this.segmentLength);
      fieldGeo.rotateX(-Math.PI / 2);
      const field = new THREE.Mesh(fieldGeo, this.paddyFieldMaterial);
      const fieldX = (this.roadWidth * 0.5 + vergeWidth + fieldWidth * 0.5) * side;
      field.position.set(fieldX, -0.05, 0);
      field.receiveShadow = true;
      group.add(field);
    });

    // ----------------------------------------------------
    // 4. Authentic Bangladeshi Roadside Elements
    // (Always placed safely outside road boundary X > 7.2m or X < -7.2m)
    // ----------------------------------------------------
    this.populateBangladeshiScenery(group, index);

    return {
      group,
      z: zPos
    };
  }

  populateBangladeshiScenery(group, index) {
    const p = this.props;

    // A. Rural Electric Poles (Palli Bidyut) with overhead wires along the right side
    const pole = p.createElectricPole();
    pole.position.set(this.roadWidth * 0.5 + 2.4, 0, 0);
    group.add(pole);

    // Overhead power lines running between segments
    const wirePoints = [
      new THREE.Vector3(this.roadWidth * 0.5 + 2.4, 7.8, -this.segmentLength * 0.5),
      new THREE.Vector3(this.roadWidth * 0.5 + 2.4, 7.1, 0), // natural sag
      new THREE.Vector3(this.roadWidth * 0.5 + 2.4, 7.8, this.segmentLength * 0.5)
    ];
    const wireCurve = new THREE.CatmullRomCurve3(wirePoints);
    const wireGeo = new THREE.TubeGeometry(wireCurve, 8, 0.02, 4, false);
    const wireMat = new THREE.MeshBasicMaterial({ color: 0x1f2421 });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    group.add(wire);

    // B. SPECIAL FOCUS: DESHI COWS (Tied to wooden posts or trees beside road)
    // Every segment features cows safely grazing on the roadside grassy verge
    const cowSide = index % 2 === 0 ? -1 : 1;
    const cowColor = index % 3 === 0 ? 'white' : (index % 3 === 1 ? 'brown' : 'black');
    const cow = p.createCow(cowColor);
    const cowX = (this.roadWidth * 0.5 + 2.8 + Math.random() * 1.5) * cowSide;
    const cowZ = -12 + Math.random() * 24;
    cow.position.set(cowX, 0, cowZ);
    cow.rotation.y = cowSide > 0 ? -Math.PI / 2 + (Math.random() - 0.5) * 0.6 : Math.PI / 2 + (Math.random() - 0.5) * 0.6;
    group.add(cow);

    // Occasionally add a second cow or calf grazing nearby
    if (index % 2 === 1) {
      const cow2 = p.createCow('brown');
      cow2.scale.set(0.75, 0.75, 0.75); // calf size
      cow2.position.set(cowX + (cowSide > 0 ? 3.0 : -3.0), 0, cowZ + 3.5);
      cow2.rotation.y = cow.rotation.y + 0.5;
      group.add(cow2);
    }

    // C. Traditional Village Houses (Tin er Ghor) & Homesteads
    if (index % 2 === 0) {
      const houseSide = -1; // Left side village homestead
      const house = p.createVillageHouse(index % 4 === 0);
      const houseX = (this.roadWidth * 0.5 + 11.5) * houseSide;
      house.position.set(houseX, 0, -10);
      house.rotation.y = Math.PI / 2;
      group.add(house);

      // Golden Haystack (Khorer Gada) near the house
      const haystack = p.createHaystack();
      haystack.position.set(houseX - 5.5, 0, 4);
      group.add(haystack);

      // Bamboo Fence (Bash er Bera) bordering the homestead
      const fence = p.createBambooFence(24);
      fence.position.set((this.roadWidth * 0.5 + 5.5) * houseSide, 0, -5);
      group.add(fence);
    }

    // D. Village Tea Stall (Cha er Tong) with benches
    if (index % 3 === 1) {
      const stallSide = 1;
      const stall = p.createTeaStall();
      stall.position.set((this.roadWidth * 0.5 + 5.8) * stallSide, 0, 12);
      stall.rotation.y = -Math.PI / 2;
      group.add(stall);

      // Coconut tree right next to the tea stall for shade
      const stallPalm = p.createCoconutTree();
      stallPalm.position.set((this.roadWidth * 0.5 + 9.0) * stallSide, 0, 16);
      group.add(stallPalm);
    }

    // E. Small Roadside Pond (Pukur) with Swimming Ducks
    if (index % 3 === 2) {
      const pondSide = -1;
      const pond = p.createPond(14, 22);
      pond.position.set((this.roadWidth * 0.5 + 13.0) * pondSide, 0, 5);
      group.add(pond);

      // Banana trees along pond bank
      for (let b = 0; b < 3; b++) {
        const banana = p.createBananaTree();
        banana.position.set(
          (this.roadWidth * 0.5 + 5.6 + Math.random() * 1.5) * pondSide,
          0,
          -4 + b * 6
        );
        group.add(banana);
      }
    }

    // F. Rural Culvert / Small Concrete Bridge Parapets (every 4th segment)
    if (index % 4 === 3) {
      [-this.roadWidth * 0.5 - 0.4, this.roadWidth * 0.5 + 0.4].forEach((rx) => {
        const parapetGeo = new THREE.BoxGeometry(0.35, 0.75, 14);
        const parapet = new THREE.Mesh(parapetGeo, this.culvertRailingMaterial);
        parapet.position.set(rx, 0.38, 0);
        parapet.castShadow = true;
        group.add(parapet);

        // Black and white hazard stripes on culvert edges
        [-7, 7].forEach((cz) => {
          const postGeo = new THREE.BoxGeometry(0.45, 0.9, 0.45);
          const post = new THREE.Mesh(postGeo, this.culvertRailingMaterial);
          post.position.set(rx, 0.45, cz);
          group.add(post);
        });
      });
    }

    // G. Lush Flora: Coconut Palms, Banana Trees, Bamboo Groves
    const treeSide = index % 2 === 0 ? 1 : -1;

    // Coconut tree
    const palm = p.createCoconutTree();
    palm.position.set((this.roadWidth * 0.5 + 7.5 + Math.random() * 5.0) * treeSide, 0, -22);
    group.add(palm);

    // Bamboo grove
    const bamboo = p.createBambooGrove();
    bamboo.position.set((this.roadWidth * 0.5 + 9.0 + Math.random() * 6.0) * (-treeSide), 0, 18);
    group.add(bamboo);

    // Banana tree
    const banana = p.createBananaTree();
    banana.position.set((this.roadWidth * 0.5 + 5.8 + Math.random() * 2.5) * treeSide, 0, 4);
    group.add(banana);

    // H. AUTHENTIC BANGLADESHI JATRI CHAWNI (যাত্রী ছাউনি / BUS STOP)
    // Roadside passenger shed with cute teenage couple sitting on the bench holding hands!
    if (index % 3 === 0) {
      const chawniSide = (index % 6 === 0) ? -1 : 1;
      const chawni = p.createJatriChawni();
      const chawniX = (this.roadWidth * 0.5 + 4.6) * chawniSide;
      chawni.position.set(chawniX, 0, -18);
      // Face toward the highway road so the romantic couple holding hands is visible!
      chawni.rotation.y = chawniSide > 0 ? -Math.PI / 2 : Math.PI / 2;
      group.add(chawni);
    }
  }

  // Update segments and rural animations as player moves forward along -Z
  update(playerZ, time) {
    // 1. Update animal & smoke animations
    this.props.update(time);

    // 2. Recycle segments falling behind player
    const recycleThreshold = playerZ + this.segmentLength;

    for (let i = 0; i < this.segments.length; i++) {
      const seg = this.segments[i];
      if (seg.group.position.z > recycleThreshold) {
        let minZ = 0;
        for (let j = 0; j < this.segments.length; j++) {
          if (this.segments[j].group.position.z < minZ) {
            minZ = this.segments[j].group.position.z;
          }
        }
        seg.group.position.z = minZ - this.segmentLength;
      }
    }
  }

  reset() {
    for (let i = 0; i < this.segments.length; i++) {
      this.segments[i].group.position.z = -i * this.segmentLength;
    }
  }
}
