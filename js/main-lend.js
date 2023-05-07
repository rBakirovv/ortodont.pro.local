$(window).scroll(function () {
    if(!is_mob()) {
        var e = $(window).scrollTop();
        $('.banner_first').height() < e ? $(".header").addClass("header_fixed") : $(".header").removeClass("header_fixed")
        if ($(this).scrollTop() > 100) {
            $('.move-up').fadeIn();
        } else {
            $('.move-up').fadeOut();
        }
        $('.move-up').click(function () {
            $("html, body").animate({scrollTop: 0}, 600);
            return false;
        });
    }
})

function is_mobile() {
    var mobile = (/iphone|ipod|ipad|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) && (screen.width < 767)
    if (mobile) {
        return true
    } else {
        return false
    }
}

if (is_mobile()) {
    window.onload = function () {
        $('.widget_o').addClass('widget_o_fade')
    }

}
if ($('.swiper-photo').length > 0) {
    var swiperPhoto = new Swiper('.swiper-container.swiper-photo', {
        loop: true, pagination: {
            el: '.swiper-pagination', clickable: true
        }, navigation: {
            nextEl: '.swiper-photo .swiper-button-next', prevEl: '.swiper-photo .swiper-button-prev',
        }
    })
}
if ($('.swiper-banner').length > 0) {
    var getTimeout = function () {
        var e = setTimeout, b = {};
        setTimeout = function (a, c) {
            var d = e(a, c);
            b[d] = [Date.now(), c];
            return d
        };
        return function (a) {
            return (a = b[a]) ? Math.max(a[1] - Date.now() + a[0], 0) : NaN
        }
    }();

    function sanitisePercentage(i) {
        return Math.min(100, Math.max(0, i));
    }

    // Slider
    var percentTime;
    var tick;
    var progressBar = document.querySelector('.swiper-progress');
    var swiperBanner = new Swiper('.swiper-container.swiper-banner', {
        loop: true,
        watchOverflow: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        roundLengths: true,
        autoplay: {
            delay: 5000, disableOnInteraction: false
        },
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination', clickable: true
        },
        navigation: {
            nextEl: '.swiper-banner .swiper-button-next', prevEl: '.swiper-banner .swiper-button-prev',
        },
        on: {
            slideChange: function () {
                var swiper = this;
                var defaultSlideDelay = swiper.params.autoplay.delay;
                var currentIndex = swiper.realIndex + 1;
                var currentSlide = swiper.slides[currentIndex];
                var currentSlideDelay = currentSlide.getAttribute('data-swiper-autoplay') || defaultSlideDelay;

                updateSwiperProgressBar(progressBar, currentSlideDelay);
            }
        }
    })

    function updateSwiperProgressBar(bar, slideDelay) {
        function startProgressBar() {
            resetProgressBar();
            tick = setInterval(progress, 50);
        }

        function progress() {
            var timeLeft = getTimeout(swiperBanner.autoplay.timeout);

            if (swiperBanner.autoplay.running && !swiperBanner.autoplay.paused) {

                percentTime = sanitisePercentage(100 - Math.round(timeLeft / slideDelay * 100));
                bar.style.width = percentTime + '%';

                if (percentTime > 100) {
                    resetProgressBar();
                }
            }

            if (swiperBanner.autoplay.paused) {
                percentTime = 0;
                bar.style.width = 0;
            }

        }

        function resetProgressBar() {
            percentTime = 0;
            bar.style.width = 0;
            clearInterval(tick);
        }

        startProgressBar();

    }
}
var e = $(window).scrollTop(), a = $(window).width();
0 < e && 768 < a ? $(".header").addClass("header_fixed") : $(".header").removeClass("header_fixed")


if ($('.slider-mobile').length > 0) {
    if (is_mobile()) {
        var plansSwiper = new Swiper('.swiper-container.slider-mobile', {
            loop: true, slidesPerView: 'auto', spaceBetween: 10, pagination: {
                el: '.swiper-pagination', clickable: true
            }

        });
    }
}


$(".gallery-list").lightGallery();
AOS.init({
    duration: 700
})
$('.header__burger').on('click', function () {
    $('.panel').addClass('panel-open')
    $('body').addClass('panel-open-body')
    return false;
});
$('.panel__close').on('click', function () {
    $('.panel').removeClass('panel-open')
    $('body').removeClass('panel-open-body')

    return false;
});
$(document).mouseup(function (e) {
    var div = $(".panel__content");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.panel').removeClass('panel-open')
        $('body').removeClass('panel-open-body')

    }
});


if ($('.slide-certificate ').length > 0) {
    var slideCertificate = new Swiper('.slide-certificate', {
        effect: 'slide',
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        grabCursor: true,
        spaceBetween: 24,
        grabCursor: false,
        keyboard: {
            enabled: true, onlyInViewport: true
        },
        watchOverflow: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        pagination: {
            el: '.slide-certificate .swiper-pagination', clickable: true, dynamicBullets: true, dynamicMainBullets: 5
        },
        navigation: {
            nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',
        },
    });
}
if ($('.slide-photo').length > 0) {
    var slidePhoto = new Swiper('.slide-photo', {
        effect: 'slide',
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 24,
        grabCursor: false,
        keyboard: {
            enabled: true, onlyInViewport: true
        },
        watchOverflow: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        roundLengths: true,
        pagination: {
            el: '.slide-photo .swiper-pagination', clickable: true, dynamicBullets: true, dynamicMainBullets: 5
        }, // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',
        },
    });
}
if ($('.slide-braces').length > 0) {
    var slideBracesThumbs = new Swiper('.slide-braces-thumbs', {
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        grabCursor: false,
        watchSlidesProgress: true,
        breakpoints: {
            991: {
                spaceBetween: 20,
            }, 1367: {
                spaceBetween: 24
            }
        }
    });
    var slideBraces = new Swiper('.slide-braces', {
        effect: 'slide',
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 24,
        grabCursor: false,
        keyboard: {
            enabled: true, onlyInViewport: true
        },
        watchOverflow: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        roundLengths: true,
        thumbs: {
            swiper: slideBracesThumbs
        },
        pagination: {
            el: '.slide-braces .swiper-pagination', clickable: true
        }, // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',
        },


    });


}


if ($('.doctor-slider').length > 0) {

    var doctorThumbs = new Swiper('.doctor-thumbs', {
        spaceBetween: 24,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        grabCursor: false,
        watchSlidesProgress: true,
        breakpoints: {
            991: {
                spaceBetween: 15
            }, // when window width is >= 640px
            1367: {
                spaceBetween: 20,
            }
        }
    });

    var bannerTop = new Swiper('.doctor-slider', {
        effect: 'slide',
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 24,
        grabCursor: false,
        keyboard: {
            enabled: true, onlyInViewport: true
        },
        watchOverflow: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        roundLengths: true,
        thumbs: {
            swiper: doctorThumbs
        },
        pagination: {
            el: '.swiper-pagination', clickable: true
        },

    });
}

const showMenuLinks = (e) => {
    const subMenuLink = e.parentNode;
    const subMenu = subMenuLink.querySelector('.sub-menu');
    const oeOverlay = document.querySelector('.oe_overlay');
    subMenuLink.classList.add('hovered', 'slided', 'selected');
    subMenu.style.display = "inline-block";
    subMenu.style.zIndex = "9999";
    oeOverlay.style.opacity = '0.6';
    oeOverlay.style.transition = "all 0.2s linear";
    oeOverlay.classList.add('hovered');
}

var $oe_menu = $('.header__menu');
var $oe_menu_items = $oe_menu.children('.sub-menu-link');
var $oe_overlay = $('#oe_overlay');

$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".sub-menu"); // тут указываем ID элемента
    var divParent = $(".sub-menu-link"); // тут указываем ID элемента
    var showMenuBtn = $('.header__menu-link');

    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0 && !showMenuBtn.is(e.target)) { // и не по его дочерним элементам и не по кнопку раскрывающая меню
        divParent.removeClass('hovered slided selected');
        divParent.find('.sub-menu').css('z-index', '1').stop(true, true).fadeOut(100, function () {
            $oe_menu_items.not('.slided').find('.sub-menu').hide();
            $(this).removeClass('slided');
        });
        $oe_overlay.stop(true, true).fadeTo(200, 0);
        $oe_overlay.removeClass('hovered');
    }
});

// $('.sub-menu-link .header__menu-link').on('click', function () {
//     var $this = $('.sub-menu-link')
//     $this.addClass('hovered slided selected');
//     $this.find('.sub-menu').css('z-index', '9999').stop(true, true).fadeIn(100, function () {
//         $oe_menu_items.not('.slided').find('.sub-menu').hide();
//         $(this).removeClass('slided');
//     });
//     $oe_overlay.stop(true, true).fadeTo(200, 0.6);
//     $oe_overlay.addClass('hovered');
//
// })


$("a.scroll-link").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
    }, 800);
});