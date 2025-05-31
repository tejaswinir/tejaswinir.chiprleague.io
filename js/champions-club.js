$(document).ready(function(){
    let windowWidth = $(window).outerWidth();
    var slider = $('.carousel');
    // leagues explained
    if(windowWidth <= 767) {
        var slider = $('.exclusive-rewards-slider');
        slider.slick({
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            arrows: true,
        });
    }
});
      