import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as dat from "dat.gui";

function initRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas,
  });
  renderer.setSize(
    parseFloat(window.getComputedStyle(canvas).width),
    parseFloat(window.getComputedStyle(canvas).height)
  );
  renderer.setPixelRatio(window.devicePixelRation);
  renderer.setClearColor(0xffffff, 1);
  return renderer;
}

function initScene() {
  return new THREE.Scene();
}

function initCamera(renderer) {
  let width = parseFloat(window.getComputedStyle(renderer.domElement).width);
  let height = parseFloat(window.getComputedStyle(renderer.domElement).height);
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(25, 25, 25);
  camera.lookAt(0, 0, 0);
  return camera;
}

function initHelper(scene) {
  const gridHelper = new THREE.GridHelper(200, 200);
  scene.add(gridHelper);
  const axes = new THREE.AxesHelper(100);
  scene.add(axes);
  return { gridHelper: gridHelper, axes: axes };
}

function initLight(scene) {
  const light = new THREE.DirectionalLight(0xffffff);
  light.position.set(0, 20, 20);
  scene.add(light);
  return light;
}

function initControl(camera, renderer) {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;
  controls.autoRotate = false;
  controls.minDistance = 1;
  controls.maxDistance = 1000;
  controls.enablePan = true;
  return controls;
}

function initGuiControl(container) {
  const gui = new dat.GUI({ autoPlace: false });
  container.appendChild(gui.domElement);
  gui.width = parseFloat(window.getComputedStyle(container).width);
  let Axis = gui.addFolder("Axis");
  Axis.add(
    {
      X: "Red",
      Y: "Green",
      Z: "Blue",
    },
    "X"
  );
  Axis.add(
    {
      X: "Red",
      Y: "Green",
      Z: "Blue",
    },
    "Y"
  );
  Axis.add(
    {
      X: "Red",
      Y: "Green",
      Z: "Blue",
    },
    "Z"
  );
  Axis.open();
  return gui;
}

export {
  initRenderer,
  initScene,
  initCamera,
  initHelper,
  initLight,
  initControl,
  initGuiControl,
};
