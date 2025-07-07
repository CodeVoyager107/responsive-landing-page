// Get the navbar
const navbar = document.getElementById("navbar");

// When the user scrolls, add "scrolled" class
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

