import * as THREE from 'three';
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);


export class Scene {
  constructor(webgl , object) {
    this.webgl = webgl
    this.obj = object
    this.scene = new THREE.Scene()
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.renderer = new THREE.WebGLRenderer({
      antialias: true
    })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setClearColor(new THREE.Color(0xCCCCCCC))
    this.renderer.setSize(this.width, this.height)
    this.geometry = null
    this.material = null
    this.mesh = null
    this.camera = null

    this.init()
  }

  init() {
    this.setting()
    this.onRaf()
    this.tl = gsap.timeline()
      .to(this.material.uniforms.progress, {
        value: 1,
        duration: 1,
        delay: 1.,
        ease: 'circ.inOut',
        scrollTrigger:{
          trigger: this.obj ,
          markers: true,
          start: "center center"
        }

      })
      .to('.text span', {
        y: '0%',
        duration: 0.9,
        stagger: 0.05,
        ease: 'circ.inOut'
      }, '-=0.4')
  }

  setting() {

    this.webgl.appendChild(this.renderer.domElement)

    this.camera = new THREE.PerspectiveCamera(
      2 * Math.atan((this.height / 2) / 100) * 180 / Math.PI,
      this.width / this.height,
      1,
      1000
    )

    this.camera.position.set(
      0,
      0,
      100
    )
    this.camera.updateProjectionMatrix()

    this._setMesh()

  }

  _setMesh() {
    this.geometry = new THREE.PlaneBufferGeometry(this.width, this.height, 100, 100)
    this.material = new THREE.ShaderMaterial({
      vertexShader: `
      varying vec2 vUv;
uniform vec2 uResolution;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
}

      `,
      fragmentShader: `
      varying vec2 vUv;
uniform float progress;
float PI = 3.141529;

void main() {
  vec2 newUV = vUv;
  float bottom = 1. - progress;
  float curveStrength = 1.;
  float waveStrength = 1.;
  // float curve = progress + sin(newUV.x * PI * waveStrength) * progress * bottom;
  float curve = progress + (sin(newUV.x * PI * waveStrength) * progress - progress) * bottom * curveStrength;
  float color = step(curve,newUV.y);
  gl_FragColor = vec4(color,color,color,1.);
}

      `,
      transparent: true,
      uniforms: {
        progress: {
          value: 0.0
        },
      }
    })

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }

  onResize() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.mesh.scale.x = this.width
    this.mesh.scale.y = this.height
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.camera.updateProjectionMatrix()
    console.log(this.obj.style);
  }

  onRaf() {
    this.renderer.render(this.scene, this.camera);

    window.requestAnimationFrame(() => {
      this.onRaf();
    })
  }
}


