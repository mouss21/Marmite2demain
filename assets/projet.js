
// slider
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

// Fonction pour montrer la slide suivante
function showNextSlide() {
  slides[currentIndex].classList.remove("active"); // Cache la slide active
  currentIndex = (currentIndex + 1) % slides.length; // Passe à la slide suivante
  slides[currentIndex].classList.add("active"); // Affiche la nouvelle slide
}

// Défilement automatique toutes les 3 secondes
setInterval(showNextSlide, 3000);
