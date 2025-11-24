// Mobile nav toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// ScrollReveal animations
if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    distance: "30px",
    duration: 900,
    easing: "ease-out",
    origin: "bottom",
    reset: false,
  });

  sr.reveal(".sr-line-1", { delay: 100 });
  sr.reveal(".sr-line-2", { delay: 200 });
  sr.reveal(".sr-line-3", { delay: 300 });

  sr.reveal(".sr-bullet", {
    delay: 400,
    interval: 120,
    origin: "left",
  });

  sr.reveal(".sr-cta", {
    delay: 650,
    origin: "bottom",
    distance: "40px",
  });
}
