//
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuBtn || !hamburgerIcon || !mobileMenu) return;

  let isOpen = false;

  menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    mobileMenu.classList.toggle("hidden");

    // Animate rotation
    hamburgerIcon.style.transform = isOpen ? "rotate(90deg)" : "rotate(0deg)";

    // Morph path between hamburger ↔ X
    const path = hamburgerIcon.querySelector("path");
    if (isOpen) {
      // Turn into an X
      path.setAttribute("d", "M6 6l12 12M6 18L18 6");
    } else {
      // Back to hamburger
      path.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
    }
  });
});

// Scroll-triggered card animations
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-show");
          }, index * 150);
        } else {
          // reset when scrolled out of view to repeat animation
          entry.target.classList.remove("animate-show");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
});

const tutorFadeElements = document.querySelectorAll(
  ".tutor-fade-left, .tutor-fade-right"
);

const tutorObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("tutor-in-view");
      } else {
        entry.target.classList.remove("tutor-in-view");
      }
    });
  },
  { threshold: 0.2 }
);

tutorFadeElements.forEach((el) => tutorObserver.observe(el));

const popImages = document.querySelectorAll(".pop-image");

const popObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("pop-in-view");
      } else {
        entry.target.classList.remove("pop-in-view");
      }
    });
  },
  { threshold: 0.3 } // triggers when 30% of image is visible
);

popImages.forEach((img) => popObserver.observe(img));
