$(document).ready(function () {
    //Слайдер
    $('#main-slider').owlCarousel({
        items: 1,
        smartSpeed: 350,
        nav: true,
        loop: true,
        animateOut: 'fadeOut',
        mouseDrag: false,
        autoplay: false,
        responsive: {
            0: {
                autoplay: false,
                navText: ['', ''],
            },
            484: {
                // autoplay: true,
                navText: ['<img src="img/стрелка-влево.png">', '<img src="img/стрелка-вправо.png">'],
            },
        }
    });

    // Меню для маленьких расширений
    var link = $('.menu-link');
    var nav = $('#header-menu');
    var nav_link = $('#header-menu li');

    link.click(function () {
        link.toggleClass('menu-link_active');
        nav.toggleClass('header-menu_active');
    });

    nav_link.click(function () {
        link.toggleClass('menu-link_active');
        nav.toggleClass('header-menu_active');
    });

//    Меню для мобильников
    var header = $('#header');
    header.removeClass('header_fixed');
    $(window).scroll(function () {
        if ((($(this).scrollTop() > 50) && ($(this).width() > 484)) || (($(this).scrollTop() > 200) && ($(this).width() <= 484))) {
            header.addClass('header_fixed').fadeIn('slow');
        }
        else {
            header.removeClass('header_fixed').fadeIn('slow');
        }
    });

    //wow animate
    new WOW().init();

//    Форма обратной связи
$('.form-feedback-box input, .form-feedback-box textarea').focus(function () {
    $(this).parent().addClass('focus');
}).blur(function () {
    if($(this).val() === '') {
        $(this).parent().removeClass('focus');
    }
})

//    Настройка анимации для слайдера



});
