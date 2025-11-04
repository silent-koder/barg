const header = document.getElementById("glassHeader");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

// Scroll blur effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.remove(
      "bg-white/5",
      "backdrop-blur-sm",
      "border-white/10"
    );
    header.classList.add(
      "bg-white/15",
      "backdrop-blur-md",
      "shadow-lg",
      "shadow-blue-900/20",
      "border-white/20"
    );
  } else {
    header.classList.remove(
      "bg-white/15",
      "backdrop-blur-md",
      "shadow-lg",
      "shadow-blue-900/20",
      "border-white/20"
    );
    header.classList.add("bg-white/5", "backdrop-blur-sm", "border-white/10");
  }
});

// Mobile menu toggle
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
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

// gggg
const fixedHeader = document.getElementById("glassHeader");
const navLinks = header.querySelectorAll("nav a");
const logo = header.querySelector("h1");
const fixedMenuBtn = document.getElementById("menuBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    // Bright mode for white backgrounds
    header.classList.remove("bg-white/10", "border-white/20", "text-white");
    header.classList.add(
      "bg-white/70",
      "border-gray-200",
      "text-gray-900",
      "shadow-md",
      "backdrop-blur-lg"
    );

    // Update link + icon colors
    navLinks.forEach((link) => link.classList.add("text-gray-900"));
    logo.classList.add("text-gray-900");
    menuBtn.classList.add("text-gray-900");
  } else {
    // Revert to dark overlay mode
    header.classList.add("bg-white/10", "border-white/20", "text-white");
    header.classList.remove(
      "bg-white/70",
      "border-gray-200",
      "text-gray-900",
      "shadow-md"
    );

    // Reset link + icon colors
    navLinks.forEach((link) => link.classList.remove("text-gray-900"));
    logo.classList.remove("text-gray-900");
    menuBtn.classList.remove("text-gray-900");
  }
});
