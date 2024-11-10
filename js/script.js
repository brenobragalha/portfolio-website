// Year Counter

const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

// Menu Bar

const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const closeMenu = document.getElementById("close-menu");
const navLinks = document.querySelectorAll(".nav-menu ul li a");

menuIcon.addEventListener("click", () => {
  navMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

document.addEventListener("click", (event) => {
  if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
    navMenu.classList.remove("active");
  }
});
