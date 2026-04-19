document.addEventListener("DOMContentLoaded", function () {
  // ===========================
  // 📌 1. Navigation Dropdown
  // ===========================
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("mouseenter", function () {
      this.querySelector(".dropdown-content").style.display = "block";
    });
    dropdown.addEventListener("mouseleave", function () {
      this.querySelector(".dropdown-content").style.display = "none";
    });
  });

  // ===========================
  // 📌 2. Mobile Menü Toggle
  // ===========================
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  }

  // ===========================
  // 📌 3. Slideshow
  // ===========================
  const slideshowContainer = document.querySelector(".slideshow-container");
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");
  let currentSlideIndex = 0;

  function updateSlides() {
    slides.forEach((slide) => (slide.style.display = "none"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[currentSlideIndex].style.display = "block";
    if (dots[currentSlideIndex]) {
      dots[currentSlideIndex].classList.add("active");
    }
  }

  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlides();
  }

  function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlides();
  }

  function initSlideshow() {
    updateSlides();
    setInterval(nextSlide, 10000); // Auto-Slide alle 10s

    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    if (prev && next) {
      prev.addEventListener("click", prevSlide);
      next.addEventListener("click", nextSlide);
    }
  }

  initSlideshow();
});

