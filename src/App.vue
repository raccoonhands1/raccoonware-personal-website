<script setup lang="ts">
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );

const lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = [];
points.push( new THREE.Vector3( -10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0) );
const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( lineGeometry, lineMaterial );
scene.add ( line );

const loader = new GLTFLoader();
loader.load( '/scene.gltf', function ( gltf: any ) {
	gltf.scene.scale.set( 20, 20, 20 );
	scene.add( gltf.scene );
}, undefined, function ( error: unknown ) {
	console.error( error );
} );

const pointLight = new THREE.PointLight( 0xff0000, 1, 100);
pointLight.intensity = 1000;
pointLight.position.set( 0, 0, 10 );
scene.add( pointLight );

camera.lookAt( 0, 0, 0 );
camera.position.z = 10;

let x = 5;
let y = 2;

window.addEventListener( 'pointermove', onPointerMove );

function animate() {
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	cube.rotation.z += 0.02;
	
	camera.position.x = 5 * Math.sin(x);
	x+=0.01;
	camera.position.y = 3 * Math.sin(y);
	y-=0.03;

	// update the picking ray with the camera and pointer position
	raycaster.setFromCamera( pointer, camera );

	// calculate objects intersecting the picking ray
	const intersects = raycaster.intersectObjects( scene.children );

	for ( let i = 0; i < intersects.length; i ++ ) {
		intersects[ i ].object.material.color.set( 0xff0000 );
	}

	renderer.render( scene, camera );
}

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove( event ) {
	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

renderer.setAnimationLoop( animate );

</script>
