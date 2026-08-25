// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const burger = document.getElementById("navBurger");
const links = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  const isOpen = links.classList.toggle("nav__links--open");
  burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// Close mobile nav after clicking a link
links.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("nav__links--open");
  });
});

// Shrink nav background slightly on scroll
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.style.boxShadow = window.scrollY > 10 ? "0 1px 0 rgba(0,0,0,0.4)" : "none";
});
