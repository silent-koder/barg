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

AOS.init({ duration: 800, once: false });
feather.replace();

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // staggered delay for a smooth reveal
        setTimeout(() => {
          entry.target.classList.add("animate-show");
        }, index * 150);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => observer.observe(card));
