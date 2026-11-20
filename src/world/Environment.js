// ==========================================
// SUPRA RUSH - RURAL BANGLADESH ATMOSPHERE & SKY
// ==========================================

import * as THREE from 'three';

export class Environment {
  constructor(scene) {
    this.scene = scene;

    this.dirLight = null;
    this.hemiLight = null;
    this.skyDome = null;
    this.treeLines = [];
    this.birdsGroup = null;
    this.birds = [];

    this.initAtmosphere();
    this.initLighting();
    this.initDistantTreeLine();
    this.initFlyingBirds();
  }

  initAtmosphere() {
    // Soft tropical morning haze
    this.scene.fog = new THREE.FogExp2(0xb2dfdb, 0.0038);
    this.scene.background = new THREE.Color(0xb2dfdb);

    // Procedural Sky Dome with Warm Tropical Bengali Sky Gradient
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0.0, '#1565c0'); // Deep tropical azure blue
    grad.addColorStop(0.35, '#42a5f5'); // Cerulean sky
    grad.addColorStop(0.70, '#80deea'); // Pale turquoise
    grad.addColorStop(0.90, '#fff9c4'); // Warm golden sun glow
    grad.addColorStop(1.0, '#ffe082'); // Horizon amber

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Soft fluffy white clouds
    ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
    const drawCloud = (cx, cy, r) => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.arc(cx + r * 0.7, cy - r * 0.2, r * 0.8, 0, Math.PI * 2);
      ctx.arc(cx - r * 0.7, cy - r * 0.1, r * 0.7, 0, Math.PI * 2);
      ctx.arc(cx + r * 1.3, cy + r * 0.1, r * 0.6, 0, Math.PI * 2);
      ctx.fill();
    };

    drawCloud(140, 240, 45);
    drawCloud(380, 280, 55);
    drawCloud(260, 200, 38);

    // Warm Tropical Sun Disc
    const sunGrad = ctx.createRadialGradient(256, 380, 15, 256, 380, 120);
    sunGrad.addColorStop(0.0, 'rgba(255, 255, 240, 1.0)');
    sunGrad.addColorStop(0.2, 'rgba(255, 235, 140, 0.9)');
    sunGrad.addColorStop(0.6, 'rgba(255, 200, 80, 0.35)');
    sunGrad.addColorStop(1.0, 'rgba(255, 180, 50, 0.0)');
    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(256, 380, 120, 0, Math.PI * 2);
    ctx.fill();

    const skyTexture = new THREE.CanvasTexture(canvas);
    const skyGeo = new THREE.SphereGeometry(480, 32, 16);
    const skyMat = new THREE.MeshBasicMaterial({
      map: skyTexture,
      side: THREE.BackSide
    });
    this.skyDome = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(this.skyDome);
  }

  initLighting() {
    // Tropical Hemisphere Light (Lush green earth bounce, bright sky)
    this.hemiLight = new THREE.HemisphereLight(0xfff9e6, 0x2e7d32, 0.85);
    this.scene.add(this.hemiLight);

    // Warm Tropical Sunlight
    this.dirLight = new THREE.DirectionalLight(0xfff3d6, 1.35);
    this.dirLight.position.set(40, 55, -60);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 2048;
    this.dirLight.shadow.mapSize.height = 2048;
    this.dirLight.shadow.camera.near = 10;
    this.dirLight.shadow.camera.far = 170;
    this.dirLight.shadow.camera.left = -28;
    this.dirLight.shadow.camera.right = 28;
    this.dirLight.shadow.camera.top = 28;
    this.dirLight.shadow.camera.bottom = -28;
    this.dirLight.shadow.bias = -0.0005;
    this.scene.add(this.dirLight);
    this.scene.add(this.dirLight.target);
  }

  initDistantTreeLine() {
    // Distant tropical tree line silhouettes bordering the paddy fields
    const treeMat = new THREE.MeshStandardMaterial({
      color: 0x1b5e20, // Deep lush foliage green
      roughness: 0.9,
      flatShading: true
    });

    [-1, 1].forEach((side) => {
      const group = new THREE.Group();
      const count = 28;

      for (let i = 0; i < count; i++) {
        const height = 12 + Math.random() * 18;
        const radius = 6 + Math.random() * 8;
        const geo = new THREE.ConeGeometry(radius, height, 6);
        const tree = new THREE.Mesh(geo, treeMat);

        const xPos = (55 + Math.random() * 30) * side;
        const zPos = -i * 18;
        tree.position.set(xPos, height * 0.5 - 2, zPos);
        tree.rotation.y = Math.random() * Math.PI;
        group.add(tree);
      }

      this.scene.add(group);
      this.treeLines.push(group);
    });
  }

  initFlyingBirds() {
    // Flock of white cranes / egrets (Bok / Shalik) flying across the sky
    this.birdsGroup = new THREE.Group();
    const birdMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });

    const birdCount = 8;
    for (let i = 0; i < birdCount; i++) {
      const bird = new THREE.Group();

      // Wing Left
      const wingLGeo = new THREE.PlaneGeometry(0.8, 0.35);
      wingLGeo.translate(-0.4, 0, 0);
      const wingL = new THREE.Mesh(wingLGeo, birdMat);
      bird.add(wingL);

      // Wing Right
      const wingRGeo = new THREE.PlaneGeometry(0.8, 0.35);
      wingRGeo.translate(0.4, 0, 0);
      const wingR = new THREE.Mesh(wingRGeo, birdMat);
      bird.add(wingR);

      bird.position.set(
        -25 + Math.random() * 50,
        18 + Math.random() * 12,
        -40 - i * 8
      );

      this.birdsGroup.add(bird);
      this.birds.push({
        mesh: bird,
        wingL,
        wingR,
        seed: Math.random() * 10,
        speed: 14 + Math.random() * 6
      });
    }

    this.scene.add(this.birdsGroup);
  }

  update(playerZ, time) {
    if (this.skyDome) {
      this.skyDome.position.z = playerZ - 80;
    }

    if (this.dirLight) {
      this.dirLight.position.z = playerZ - 60;
      this.dirLight.target.position.z = playerZ;
    }

    this.treeLines.forEach((group) => {
      group.position.z = playerZ;
    });

    // Animate flying birds (wing flap and smooth forward flight)
    if (this.birdsGroup) {
      this.birdsGroup.position.z = playerZ - 30;

      this.birds.forEach((b) => {
        const flap = Math.sin(time * 8.0 + b.seed) * 0.55;
        b.wingL.rotation.z = flap;
        b.wingR.rotation.z = -flap;
        b.mesh.position.x += Math.sin(time * 0.4 + b.seed) * 0.05;
      });
    }
  }
}
