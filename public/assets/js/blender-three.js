import * as THREE from 'three'
import './style.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

// const geometry = new THREE.SphereGeometry(3, 64, 64);
// const material = new THREE.MeshStandardMaterial({
//   color: '#00ff83'
// })
// const ballMesh = new THREE.Mesh(geometry, material)
// scene.add(ballMesh);

const gltfloader = new GLTFLoader();
gltfloader.load('./public/assets/Collins/Me.glb', function (gltf) {
    gltf.scene.scale.set(3, 3, 3)
    gltf.scene.position.y = -2.5
    scene.add(gltf.scene)
})

const size = {
    width : 500,
    height : 500
}

const light = new THREE.PointLight(0xffffff, 250, 100)
light.position.set(0, 5, 4)

const backlight = new THREE.PointLight(0xffffff, 250, 100)
backlight.position.set(0, 3, -5)
const ambLight = new THREE.AmbientLight(0x404040, 1)
scene.add(ambLight, light, backlight)

const camera = new THREE.PerspectiveCamera(45, size.width / size.height, 0.1, 100)
camera.position.z = 10
scene.add(camera)

// const lightHelper = new THREE.PointLightHelper(light, 1)
// const backlighttHelper = new THREE.PointLightHelper(backlight, 1)
// const gridHelper = new THREE.GridHelper(200, 50)
// scene.add(lightHelper, backlighttHelper, gridHelper) 

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas, alpha:true})
renderer.setSize(size.width, size.height)
renderer.render(scene, camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false

const loop = () => {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
  }
  loop()