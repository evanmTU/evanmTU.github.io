import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.rotation.x = -1*(Math.PI / 12);
camera.position.set(0, 1.5, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);
const loader = new GLTFLoader();



const mycubegeometry = new THREE.BoxGeometry(1, 1, 1);
const mypyrgeometry = new THREE.ConeGeometry(0.5, 1, 4);
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const pyramid1 = new THREE.Mesh(mypyrgeometry, material);
scene.add(pyramid1);
const cube1 = new THREE.Mesh(mycubegeometry, material);
scene.add(cube1);
const pyramid2 = new THREE.Mesh(mypyrgeometry, material);
scene.add(pyramid2);
const cube2 = new THREE.Mesh(mycubegeometry, material);
scene.add(cube2);
const pyramid3 = new THREE.Mesh(mypyrgeometry, material);
scene.add(pyramid3);
const cube3 = new THREE.Mesh(mycubegeometry, material);
scene.add(cube3);
const pyramid4 = new THREE.Mesh(mypyrgeometry, material);
scene.add(pyramid4);
const cube4 = new THREE.Mesh(mycubegeometry, material);
scene.add(cube4);
const pyramid5 = new THREE.Mesh(mypyrgeometry, material);
scene.add(pyramid5);
const cube5 = new THREE.Mesh(mycubegeometry, material);
scene.add(cube5);
cube1.position.set(-2, 1, 0);
cube2.position.set(-1, 1, 0);
cube3.position.set(0, 1, 0);
cube4.position.set(1, 1, 0);
cube5.position.set(2, 1, 0);
pyramid1.position.set(-2, 1, 0);
pyramid2.position.set(-1, 1, 0);
pyramid3.position.set(0, 1, 0);
pyramid4.position.set(1, 1, 0);
pyramid5.position.set(2, 1, 0);
const myplanegeometry = new THREE.PlaneGeometry(100, 100);
const planematerial = new THREE.MeshStandardMaterial({ color: 0x0066aa, side: THREE.DoubleSide });
const plane = new THREE.Mesh(myplanegeometry, planematerial);
scene.add(plane);
plane.position.set(0, -0.6, -40);
plane.rotation.x = (Math.PI/2);
const light = new THREE.PointLight(0xffffff, 100, 100);
light.position.set(0, 4, 2);
scene.add(light);
const amblight = new THREE.AmbientLight(0x999999);
scene.add(amblight);
/*
loader.load('webanimationstuff.glb', function (gltf) {

    const gltfmesh = gltf.scene;
    gltfmesh.scale.set(0.5, 0.5, 0.5);
    gltfmesh.position.set(0, 0, -1);
    //gltf.asset.material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    //const basic = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    //const gltfmesh = new THREE.Mesh(gltf.asset, basic);

    scene.add(gltfmesh);

}, undefined, function (error) {

    console.error(error);

});
*/
camera.position.z = 5;
var startTime = Date.now();
function animate() {
    var reltime = Date.now() - startTime;
    requestAnimationFrame(animate);

    
    cube1.rotation.y += 0.01;
    pyramid1.rotation.y += 0.01;
    cube1.scale.set(Math.abs(Math.cos(reltime / 1000)), Math.abs(Math.cos(reltime / 1000)), Math.abs(Math.cos(reltime / 1000)));
    pyramid1.scale.set(Math.abs(Math.cos((reltime / 1000) + (Math.PI / 2))), Math.abs(Math.cos((reltime / 1000) + (Math.PI / 2))), Math.abs(Math.cos((reltime / 1000) + (Math.PI / 2))));
    cube2.rotation.y += 0.01;
    pyramid2.rotation.y += 0.01;
    cube2.scale.set(Math.abs(Math.cos((reltime / 1000) + 0.2)), Math.abs(Math.cos((reltime / 1000) + 0.2)), Math.abs(Math.cos((reltime / 1000) + 0.2)));
    pyramid2.scale.set(Math.abs(Math.cos((reltime / 1000) + 0.2 + (Math.PI / 2))), Math.abs(Math.cos((reltime / 1000) + 0.2 + (Math.PI / 2))), Math.abs(Math.cos((reltime / 1000) + 0.2 + (Math.PI / 2))));
    cube3.rotation.y += 0.01;
    pyramid3.rotation.y += 0.01;
    cube3.scale.set(Math.abs(Math.cos((reltime / 1000) + 0.4)), Math.abs(Math.cos((reltime / 1000) + 0.4)), Math.abs(Math.cos((reltime / 1000) + 0.4)));
    pyramid3.scale.set(Math.abs(Math.cos((reltime / 1000) + 0.4 + (Math.PI / 2))), Math.abs(Math.cos((reltime / 1000) + 0.4 + (Math.PI / 2))), Math.abs(Math.cos((reltime / 1000) + 0.4 + (Math.PI / 2))));
    cube4.rotation.y += 0.01;
    pyramid4.rotation.y += 0.01;
    cube4.scale.set(Math.abs(Math.cos((reltime / 1000) + 0.6)), Math.abs(Math.cos((reltime / 1000) + 0.6)), Math.abs(Math.cos((reltime / 1000) + 0.6)));
    pyramid4.scale.set(Math.abs(Math.cos((reltime / 1000) + 0.6 + (Math.PI / 2))), Math.abs(Math.cos((reltime / 1000) + 0.6 + (Math.PI / 2))), Math.abs(Math.cos((reltime / 1000) + 0.6 + (Math.PI / 2))));
    cube5.rotation.y += 0.01;
    pyramid5.rotation.y += 0.01;
    cube5.scale.set(Math.abs(Math.cos((reltime / 1000) + 0.8)), Math.abs(Math.cos((reltime / 1000) + 0.8)), Math.abs(Math.cos((reltime / 1000) + 0.8)));
    pyramid5.scale.set(Math.abs(Math.cos((reltime / 1000) + 0.8 + (Math.PI / 2))), Math.abs(Math.cos((reltime / 1000) + 0.8 + (Math.PI / 2))), Math.abs(Math.cos((reltime / 1000) + 0.8 + (Math.PI / 2))));
    renderer.render(scene, camera);
}
animate();