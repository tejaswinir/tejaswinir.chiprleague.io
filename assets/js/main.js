
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      let navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
          navbar.classList.add("shrink");
      } else {
          navbar.classList.remove("shrink");
      }
    });
  // Run once on page load
  AOS.init();
});