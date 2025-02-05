
document.addEventListener("DOMContentLoaded", function () {
    let parentContainer = document.querySelector(".forge-milestone-md");
    if(parentContainer){
    var svgElement = parentContainer.getElementsByTagName("svg")
    }
    function checkVisibility(){
        let rect = parentContainer.getBoundingClientRect();

        let isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            svgElement[0].classList.add("active");
        }
        else{ 
          svgElement[0].classList.remove("active");
        }
    }

    window.addEventListener("scroll", function () {
      let navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
          navbar.classList.add("shrink");
      } else {
          navbar.classList.remove("shrink");
      }
    });
  window.addEventListener("scroll", checkVisibility);
  // Run once on page load
  AOS.init();
});