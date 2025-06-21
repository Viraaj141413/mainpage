// Array of games

import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  // Enhance the entry animation for the header
  gsap.from(".header", { opacity: 0, duration: 1.5, y: -60, ease: "power3.out" });
  
  // Smooth scroll to sections
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        gsap.to(window, { scrollTo: { y: target, offsetY: 70 }, duration: 1 });
      }
    });
  });

  // Create a staggered animation effect for the tool cards
  gsap.from(".tool-card", {
    opacity: 0,

import * as THREE from 'three';

function setupThreeJS() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Add lighting
  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
}

setupThreeJS();

    duration: 0.8,
    y: 40,
    stagger: 0.3,
    delay: 0.5,
    ease: "elastic.out(1, 0.3)"
  });
});

const games = [
    { title: "Perfect Circle", img: "perfect_circle_thumbnail.png", link: "https://perfectcircle.netlify.app/" },
    { title: "Spacebar Clicker", img: "spacebar_clicker_thumbnail.png", link: "https://spacebarclickpeaks.netlify.app/" }
];

// Function to load games into the container
function loadGames() {
    const container = document.getElementById('gameContainer');
    container.innerHTML = ""; // Clear the container
    games.forEach(game => {
        const gameElement = document.createElement("a");
        gameElement.href = game.link;
        gameElement.target = "_blank"; // Open in new tab
        gameElement.style.textDecoration = "none"; // Remove underline
        gameElement.innerHTML = `
            <div class="game">
                <img src="${game.img}" alt="${game.title}">
                <div class="game-title">${game.title}</div>
            </div>
        `;
        container.appendChild(gameElement);
    });
}

// Function to filter games based on search input
function filterGames() {
    const query = document.getElementById("search").value.toLowerCase();
    const filtered = games.filter(game => game.title.toLowerCase().includes(query));
    document.getElementById("gameContainer").innerHTML = ""; // Clear the container
    filtered.forEach(game => {
        const gameElement = document.createElement("a");
        gameElement.href = game.link;
        gameElement.target = "_blank";
        gameElement.style.textDecoration = "none";
        gameElement.innerHTML = `
            <div class="game">
                <img src="${game.img}" alt="${game.title}">
                <div class="game-title">${game.title}</div>
            </div>
        `;
        document.getElementById("gameContainer").appendChild(gameElement);
    });
}

// Load games when the page loads
loadGames();
