// Theme Toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  const body = document.body;
  const theme = body.getAttribute("data-theme");
  body.setAttribute("data-theme", theme === "light" ? "dark" : "light");
});

// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("open");
});

// GSAP Scroll Animations
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Reveal Animation
  document.querySelectorAll(".reveal").forEach((section) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      }
    );
  });

  // Floating Hero Image
  gsap.to(".hero-floating", {
    y: -20,
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "ease.inOut",
  });
});
