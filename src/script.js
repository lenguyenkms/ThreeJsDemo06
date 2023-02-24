import * as THREE from 'three'
import './style.css'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// const clock = new THREE.Clock();

// // const tick = () => {
// //     // console.log('tick')

// //     //mesh.position.x += 0.01
// //     // mesh.rotation.z += 0.5
// //     // mesh.rotation.y += 0.5
// //     const eTime = clock.getElapsedTime();
// //     mesh.position.y = Math.sin(eTime);
// //     mesh.position.x = Math.cos(eTime);

// //     renderer.render(scene, camera)

// //     window.requestAnimationFrame(tick)
// // }

// // tick()

gsap.to(mesh.position, { duration : 1, delay : 1, x: 2})
gsap.to(mesh.position, { duration : 1, delay : 2, x: 0})

const tick = () => {
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()