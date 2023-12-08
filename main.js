import * as t from "three";

console.log(t);

// Initialise the scene
const scene = new t.Scene();

// Create a cube
const cubeGeometry = new t.BoxGeometry(1, 1, 1); // BoxGeometry is a geometry that creates a cube
const cubeMaterial = new t.MeshBasicMaterial({ color: "blue" }); // MeshBasicMaterial is a material that only shows the colour of the object
const cubeMesh = new t.Mesh(cubeGeometry, cubeMaterial); // Mesh is an object that takes a geometry, and applies a material to it

// Add the cube to the scene
scene.add(cubeMesh);

// Initialise the camera
const camera = new t.PerspectiveCamera(
  75, // Field of View - how much of the scene is visible at once
  window.innerWidth / window.innerHeight, // Aspect Ratio - the shape of the viewport
  0.1, // Near Clipping Plane (how close to the camera something can be before it is not rendered)
  1000 // Far Clipping Plane (how far from the camera something can be before it is not rendered)
);

camera.position.z = 5; // Move the camera back so we can see the cube

scene.add(camera); // Add the camera to the scene (optional depending on use case)

const canvas = document.querySelector("#canvas"); // Get the canvas element from the DOM

// Initialise the renderer
// WebGLRenderer is a renderer that renders 3D objects to a canvas, takes in the canvas element as an argument
const renderer = new t.WebGLRenderer({ canvas }); 

renderer.setSize(window.innerWidth, window.innerHeight); // Set the size of the renderer to the size of the window

renderer.render(scene, camera); // Render the scene and camera to the canvas