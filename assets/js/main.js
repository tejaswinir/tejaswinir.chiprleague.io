window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
      navbar.classList.add("shrink");
  } else {
      navbar.classList.remove("shrink");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (typeof Marquee3k !== "undefined") {
      Marquee3k.init();
  } else {
      console.error("Marquee3k is not loaded.");
  }

  AOS.init();
});