$(document).ready(function(){
    let windowWidth = $(window).outerWidth();
    // slick carousel
    var slider = $('.carousel');
    slider.slick({
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        infinite: false,
        dots: true,
        dotsClass: 'slick-dots',
        arrows: false,
        initialSlide: 2
    });
  

    slider.on('afterChange', function(event, slick, currentSlide){
        // If it's the last slide, wait 5 seconds and go to the first slide
        if (currentSlide === slick.slideCount - slick.options.slidesToShow) {
            setTimeout(function(){
                slider.slick('slickGoTo', 0);
            }, 5000); // 5 seconds delay
        }
    });

    // leagues explained
    if(windowWidth <= 767) {
        var slider = $('.leagues-carousel');
        slider.slick({
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            arrows: true,
        });
    } 

    // Slider text animation
    let words = ["Compete.", "Win.", "Repeat."];
    let index = 0;

    setInterval(function(){
        index = (index + 1) % words.length;
        $(".top-slider .change-text").fadeOut(1000, function() {
            $(this).text(words[index]).fadeIn(1000);
        });
    }, 2000);
});
      