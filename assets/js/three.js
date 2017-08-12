// create a renderer,
// camera,
// scene,
// lights

const REND = new THREE.WebGLRenderer({canvas: document.getElementById('targetCanvas'),
                                        antialias: true
                                      });

REND.setClearColor(0x00ff00);
REND.setPixelRatio(window.devicePixelRatio);
REND.setSize(window.innerWidth, window.innerHeight);

const CAM = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
const SC = new THREE.Scene();

const LIGHT = new THREE.AmbientLight(0xfff, 0.5);
SC.add(LIGHT);

const LIGHT_REF = new THREE.PointLight(0xfff, 0.5);
SC.add(LIGHT_REF);

const GEO = new THREE.CubeGeometry(100, 100, 100);
const MAT = new THREE.MeshLambertMaterial();
const MESH = new THREE.Mesh(GEO, MAT);

MESH.position.set(0, 0, -1000);

SC.add(MESH);

requestAnimationFrame(render);

function render() {
  MESH.rotation.x += 0.1;
  MESH.rotation.y += 0.1;
  REND.render(SC, CAM);
  requestAnimationFrame(render);
}
