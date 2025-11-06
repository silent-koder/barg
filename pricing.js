initFixedHeader({
  desktopScrollTrigger: 80, // header changes after 80px scroll
  mobileScrollTrigger: 50, // header changes earlier on mobile
});

window.addEventListener("scroll", () => {
  // Stop effect if mobile menu is open
  if (mobileMenu && !mobileMenu.classList.contains("hidden")) return;

  const scrollTrigger = isMobile() ? mobileScrollTrigger : desktopScrollTrigger;

  if (window.scrollY > scrollTrigger) {
    // Clear white styles
    fixedHeader.classList.remove("bg-white", "border-gray-200", "shadow-md");

    // Apply solid black styles for both mobile and desktop
    fixedHeader.classList.add("bg-black", "shadow-md");

    // Only darken text on desktop (keep your existing nav logic)
    if (!isMobile()) {
      navLinks.forEach((link) => link.classList.add("text-gray-900"));
      logo.classList.add("text-gray-900");
      if (fixedMenuBtn) fixedMenuBtn.classList.add("text-gray-900");
    }
  } else {
    // Reset to white header when at top
    fixedHeader.classList.add("bg-white", "border-gray-200", "shadow-sm");
    fixedHeader.classList.remove("bg-black", "shadow-md");

    // Reset link colors on desktop (keep existing logic)
    if (!isMobile()) {
      navLinks.forEach((link) => link.classList.remove("text-gray-900"));
      logo.classList.remove("text-gray-900");
      if (fixedMenuBtn) fixedMenuBtn.classList.remove("text-gray-900");
    }
  }
});
