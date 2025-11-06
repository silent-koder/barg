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
