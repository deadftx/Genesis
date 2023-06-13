// Obtém o elemento do menu
const menu = document.getElementById("topMenu");

// Define a função para verificar a posição da rolagem
function toggleMenuBackground() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 1) {
        menu.classList.add("transparent");
        menu.classList.add("text-light");
    } else {
        menu.classList.remove("transparent");
        menu.classList.remove("text-light");
    }
}

// Adiciona um ouvinte de evento para a rolagem da página
window.addEventListener("scroll", toggleMenuBackground);



// Clientes
/*
const carousel = document.querySelector('.carousel.Client');
const slide = carousel.querySelector('.carousel-slide');
const prevBtn = carousel.querySelector('.carousel-prev');
const nextBtn = carousel.querySelector('.carousel-next');

const slideWidth = carousel.offsetWidth;

let currentSlide = 0;

nextBtn.addEventListener('click', () => {
  currentSlide++;
  slide.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

prevBtn.addEventListener('click', () => {
  currentSlide--;
  slide.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});
*/

//Paralax

window.addEventListener("scroll", function() {
    const parallax = document.querySelector(".parallax");
    const scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = -scrollPosition * 0.3 + "px"; // Ajuste a velocidade conforme necessário
  });
  





(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


       
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

