
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('blankCanvas'),
  antialias: true,
});

renderer.setSize( window.innerWidth, window.innerHeight );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const LIGHT = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(LIGHT);

const LIGHT_REF = new THREE.PointLight(0xffffff, 0.6);
scene.add(LIGHT_REF);

const material = new THREE.MeshLambertMaterial({
  color: 0xff0000,
  wireframe: true
});

const material2 = new THREE.MeshPhongMaterial({
  color: 0xEB650f,
});

// go over the docs!

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const geometry2 = new THREE.IcosahedronGeometry(10, 0);
const geometry3 = new THREE.IcosahedronGeometry(50, 2);

const donut = new THREE.Mesh(geometry, material);
const icos = new THREE.Mesh(geometry2, material2);
const icos2 = new THREE.Mesh(geometry3, material);

icos.position.z = -200;
icos.position.x = 0;

icos2.position.z = -200;
icos2.position.x = 0;

scene.add(icos);
scene.add(icos2);
scene.add(donut);

camera.position.z = 50;

function animate() {
  donut.rotation.x += 0.007;
  donut.rotation.y += 0.007;

  icos.rotation.x += 0.007;
  icos.rotation.y += 0.007;

  icos2.rotation.x += 0.007;
  icos2.rotation.y += 0.007;

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
