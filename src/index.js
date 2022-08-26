const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1, 1000
);
scene.background = new THREE.Color(0x1C2833); 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera)



const ambient_light = new THREE.AmbientLight(0xB03A2E);
const directional_light = new THREE.DirectionalLight(0x884EA0E ,1);
ambient_light.add(directional_light);
scene.add(ambient_light);



const geometry = new THREE.BoxGeometry(2, 1.8, 5);
// const material = new THREE.MeshBasicMaterial({ color: 229954});
const material = new THREE.MeshPhongMaterial({ color: 229954});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
function animate() {
    cube.rotation.x += 0.01; 
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.02; 
    camera.position.x += 0.01;
    camera.position.x -= 0.01; 
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
renderer.render(scene, camera)