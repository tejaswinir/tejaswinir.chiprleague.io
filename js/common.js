$(function(){
    // Goodle Analytics
    let gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-447224583";
    $("head").append(gaScript);

    let gaInit = document.createElement('script');
    gaInit.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-447224583');
    `;
    $("head").append(gaInit);

    // active page
    $('.nav-item .mav-link').removeClass('active')
    setTimeout(() => {
        if(document.activePage == 'season') {
            $('.nav-item .season').addClass('active')
        }
        if(document.activePage == 'epic') {
            $('.nav-item .epic').addClass('active')
        }
        if(document.activePage == 'champions') {
            $('.nav-item .champions').addClass('active')
        }
        if(document.activePage == 'league') {
            $('.nav-item .league').addClass('active')
        }
        if(document.activePage == 'forge') {
            $('.nav-item .forge').addClass('active')
        }
        if(document.activePage == 'faqs') {
            $('.nav-item .faqs').addClass('active')
        }
    }, 100);

    window.addEventListener('scroll', function() {
        let navbar = document.querySelector('.navbar');
        if (window.scrollY > 20) {
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    });

    // Show hidden text
    $('.top-slider').on('mouseenter', (event) => {
        $(event.currentTarget).addClass('show-hidden-text')
    })

    // scroll down on branner arrow click
    $(".scroll-down-container").click(function(event) {
        // event.preventDefault();
        var x = $(this).offset().top;
        $('html,body').animate({scrollTop: x }, 500);
    });
});

let resizeTimeout;
let lastWidth = window.innerWidth;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Ignore resize if in fullscreen mode
        if (!document.fullscreenElement && window.innerWidth !== lastWidth) {
            lastWidth = window.innerWidth;
            location.reload();
        }
    }, 500); // Adjust debounce time if needed
});