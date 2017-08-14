// create a renderer,
// camera,
// scene,
// lights

const REND = new THREE.WebGLRenderer({canvas: document.getElementById('targetCanvas'),
                                        antialias: true,
                                      });

REND.setClearColor(0x000000);
REND.setPixelRatio(window.devicePixelRatio);
REND.setSize(window.innerWidth, window.innerHeight);

const CAM = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
const scene = new THREE.Scene();

const LIGHT = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(LIGHT);

const LIGHT_REF = new THREE.PointLight(0xffffff, 0.6);
scene.add(LIGHT_REF);

const loader = new THREE.TextureLoader();
loader.setCrossOrigin("anonymous");

const chessboard = loader.load('https://cdn.shopify.com/s/files/1/1297/3303/products/WE066220-2_1024x1024.jpg?v=1490394992');
chessboard.wrapS = chessboard.wrapT = THREE.RepeatWrapping;
chessboard.repeat.set( 5, 5 );
// chessboard.anisotropy = 16;

const crate = loader.load('https://static.turbosquid.com/Preview/2014/08/01__14_02_41/Crate22.jpgb12c5bae-74c1-477e-8d4e-fc3ff94fec3fLarger.jpg');
crate.wrapS = crate.wrapT = THREE.RepeatWrapping;

const ground = loader.load('https://burst.shopifycdn.com/photos/wooden-table-texture_4460x4460.jpg');
ground.wrapS = ground.wrapT = THREE.RepeatWrapping;
ground.repeat.set( 10, 10 );
// ground.anisotropy = 16;

const bgImage = loader.load('https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2012/09/Peter-West-Carey-Seattle2012-0908-6437-15.jpg?ssl=1');
bgImage.wrapS = bgImage.wrapT = THREE.RepeatWrapping;
// bgImage.repeat.set( 25, 25 );
// bgImage.anisotropy = 16;



const material = new THREE.MeshPhongMaterial({
  color: 0xD5A118,
  map: crate
});

const crateMaterial = new THREE.MeshPhongMaterial({
  color: 0xE57B37,
  map: crate
});

const boardMaterial = new THREE.MeshPhongMaterial({
  // color: 0x3B1A66,
  map: chessboard
});

const planeMaterial = new THREE.MeshLambertMaterial({
  map: ground
})

var bg = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 2, 0),
  new THREE.MeshBasicMaterial({map: bgImage})
);

// The bg plane shouldn't care about the z-buffer.
bg.material.depthTest = false;
bg.material.depthWrite = false;

var bgScene = new THREE.Scene();
var bgCam = new THREE.Camera();
bgScene.add(bgCam);
bgScene.add(bg);

const geometry = new THREE.BoxGeometry(100, 100, 100);
geometry.computeLineDistances();
const mesh = new THREE.Mesh(geometry, crateMaterial);
mesh.position.z = -2000;
mesh.position.x = -100;
mesh.position.y = -200;
scene.add(mesh);

const geometry2 = new THREE.SphereGeometry(50, 20, 20);
const mesh2 = new THREE.Mesh(geometry2, boardMaterial);
mesh2.position.z = -500;
mesh2.position.x = 100;
scene.add(mesh2);

const geometry3 = new THREE.SphereGeometry(20, 10, 10);
const mesh3 = new THREE.Mesh(geometry3, material);
mesh3.position.z = -500;
mesh3.position.x = 0;
scene.add(mesh3);

const geometry4 = new THREE.PlaneGeometry(500, 1000, 100, 100);
const mesh4 = new THREE.Mesh(geometry4, planeMaterial);
mesh4.rotation.x = -90 * Math.PI / 180;
mesh4.position.y = -100;
scene.add(mesh4);


// =================================================
// =================================================

// const GEO = new THREE.PlaneGeometry(100, 100);

// =================================================
// =================================================

// const CURVE = new THREE.SplineCurve3([
//   new THREE.Vector3( -5, 5, 5 ),
//   new THREE.Vector3( 0, 0, 0 ),
//   new THREE.Vector3( 10, 3, 0 ),
//   new THREE.Vector3( 4, -4, 5 ),
// ]);
//
// const GEO = new THREE.TubeGeometry(CURVE, 20, 2, 8, false);

// =================================================
// =================================================

// const x = 0;
// const y = 0;
// const heartShape = new THREE.Shape();
// heartShape.moveTo( x + 25, y + 25 );
// heartShape.bezierCurveTo( x + 25, y + 25, x + 20, y, x, y );
// heartShape.bezierCurveTo( x - 30, y, x - 30, y + 35, x - 30, y + 35 );
// heartShape.bezierCurveTo( x - 30, y + 55, x - 10, y + 77, x + 25, y + 95 );
// heartShape.bezierCurveTo( x + 60, y + 77, x + 80, y + 55, x + 80, y + 35 );
// heartShape.bezierCurveTo( x + 80, y + 35, x + 80, y, x + 50, y );
// heartShape.bezierCurveTo( x + 35, y, x + 25, y + 25, x + 25, y + 25 );
// const extrudeSettings = { amount: 100, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };
// const GEO = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );    //ExtrudeGeometry(shapes, options)

// =================================================
// =================================================

// const GEO = new THREE.TorusKnotGeometry(100, 30, 16, 100);

// =================================================
// =================================================

// const VERT = [
//   -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
//   -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
// ];
//
// const FACE = [
//   2,1,0,    0,3,2,
//   0,4,7,    7,3,0,
//   0,1,5,    5,4,0,
//   1,2,6,    6,5,1,
//   2,3,7,    7,6,2,
//   4,5,6,    6,7,4
// ];
//
// const GEO = new THREE.PolyhedronGeometry(VERT, FACE, 6, 2);

// =================================================
// =================================================


// const GEO = new THREE.CylinderGeometry(50, 200, 100, 20, 10);

// =================================================
// =================================================


// GEO.vertices.push(
//   new THREE.Vector3(-10, 10, 0),
//   new THREE.Vector3(-10, -10, 0),
//   new THREE.Vector3(10, -10, 0)
// );

// GEO.faces.push(new THREE.Face3(0, 1, 2));

// =================================================
// =================================================

// MESH.position.z = -1000;
// MESH.position.set(0, 0, -1000);

// requestAnimationFrame(render);
render();

// const delta = 0; // ask CJ why let is not an equivalent

function render() {
  mesh.rotation.x += 0.007;
  mesh.rotation.y += 0.007;

  mesh2.rotation.x += 0.007;
  mesh2.rotation.y += 0.007;

  mesh3.rotation.x += 0.007;
  mesh3.rotation.y += 0.007;

  // delta += 0.06;
  // GEO.vertices[0].x = -25 + Math.sin(delta) * 50;
  // GEO.verticesNeedUpdate = true;
  REND.autoClear = false;
  REND.clear();
  REND.render(bgScene, bgCam);
  REND.render(scene, CAM);
  requestAnimationFrame(render);
}
