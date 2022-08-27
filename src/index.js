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

// const geometry_area = new THREE.BoxGeometry(10, 3.8, 60);
// // const material_area = new THREE.MeshBasicMaterial({ color: 229954});
// const material_area = new THREE.MeshPhongMaterial({ color: 0x229944});
//  const area = new THREE.Mesh(geometry_area, material_area);
// scene.add(area);
const geometry_n = new THREE.CylinderGeometry( 5, 5, 20, 32 );
const material_n = new THREE.MeshPhongMaterial( {color: 0xffff00} );
const cylinder = new THREE.Mesh( geometry_n, material_n );
scene.add( cylinder );





const geometry = new THREE.BoxGeometry(2, 1.8, 5);
// const material = new THREE.MeshBasicMaterial({ color: 229954});
const material = new THREE.MeshPhongMaterial({ color: 0x229954});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
function animate() {
    cube.rotation.x += 0.01; 
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.02; 
    cylinder.rotation.x += 0.06; 
    camera.position.x += 0.01;
    camera.position.x -= 0.01; 
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
renderer.render(scene, camera)