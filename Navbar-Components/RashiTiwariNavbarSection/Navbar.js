document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");

  function toggleNavbarBackground() {
    if (window.scrollY > 0) {
      navbar.classList.remove("top");
    } else {
      navbar.classList.add("top");
    }
  }

  window.addEventListener("scroll", toggleNavbarBackground);
});
