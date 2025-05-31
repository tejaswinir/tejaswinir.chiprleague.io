$(document).ready(function(){
    let windowWidth = $(window).outerWidth();
    // leagues explained
    if(windowWidth <= 991.98) {
        var slider = $('.league-swag-seasons-carousel');
        slider.slick({
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            arrows: true,
        });
    }
});
      