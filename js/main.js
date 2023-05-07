var h = 0;

$(document).ready(function () {

    }), $(document).ready(function () {
        $(".faq-item").each(function () {
            var e = $(this);
            $(this).index();
            $(".faq-item-question__header", e).on("click", function () {
                e.hasClass("active") ? $(".faq-item").removeClass("active") : ($(".faq-item").removeClass("active"), e.addClass("active"))
            })
           
        })
    }), 
    /*
    $(document).ready(function () {
        $(".gallery-slider").owlCarousel({
            items: 3,
            margin: 20,
            navElement: "div",
            nav: !0,
            navText: !1,
            dots: !0,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                576: {
                    items: 2,
                    margin: 20
                },
                768: {
                    items: 2,
                    margin: 20
                },
                992: {
                    items: 2,
                    margin: 20
                },
                1200: {
                    items: 3,
                    margin: 20
                }
            }
        }), $(".team-slider").owlCarousel({
            items: 3,
            margin: 20,
            navElement: "div",
            nav: false,
            navText: !1,
            dots: !0,
            loop: false,
            responsive: {
                0: {
                    items: 2,
                    margin: 20
                },
                576: {
                    items: 2,
                    margin: 20
                },
                768: {
                    items: 2,
                    margin: 20
                },
                992: {
                    items: 2,
                    margin: 20
                },
                1200: {
                    items: 3,
                    margin: 20
                }
            }
        }), 
        $(".result-slider").owlCarousel({
            items: 1,
            navElement: "div",
            nav: !0,
            navText: !1,
            dots: !0
        })
    }),
    */
    $(document).ready(function () {
        $(".braces-tabs-item").on("click", function () {
            var e = $(this).index();
            $(".braces-tabs-item").removeClass("active").eq(e).addClass("active"), $(".braces-item").removeClass("active").eq(e).addClass("active")
        })
    }), $(".main-visual-label").each(function () {
        var e = $(this);
        $(".main-visual-label-open-button", e).on("click", function () {
            $(".main-visual-label").removeClass("active"), e.addClass("active")
        }), $(".main-visual-label-close", e).on("click", function () {
            $(".main-visual-label").removeClass("active")
        })
    }), AOS.init({
        duration: 700
    }),


    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js", function () {
        $(".jmp__input_tel").mask("+7 (999) 999-99-99");
        $.fn.setCursorPosition = function (pos) {
            if ($(this).get(0).setSelectionRange) {
                $(this).get(0).setSelectionRange(pos, pos);
            } else if ($(this).get(0).createTextRange) {
                var range = $(this).get(0).createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
        $('.jmp__input_tel').click(function () {
            $(this).setCursorPosition(4); // set position number
        });

    })
var sections = $('section'),
    nav = $('.header__menu'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').parent().removeClass('active');
            sections.removeClass('active');

            $(this).parent().addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
        }
    });
});

nav.find('a').on('click', function () {
    $(".header-menu").removeClass("active"), $(".header").removeClass("alt")
    var $el = $(this),
        id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height + 10
    }, 500);

    return false;
});



function is_mob() {

    if ((/iphone|ipod|ipad|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) && (screen.width < 992)) {
        return true
    } else {
        return false
    }
}
if (is_mob()) {
    $(".bracket-table .owl-carousel").owlCarousel({
        items: 2,
        margin: 12,
        navElement: "div",
        nav: false,
        navText: false,
        dots: !0,
        loop: true
    })
}

function SendPost() {
    $('#myform > .btn').closest('#myform').submit();
}

$.getScript("https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.16.0/jquery.validate.min.js", function () {
    $("#myform").validate({
        ignore: ".ignore",
        focusInvalid: true,
        errorPlacement: function (error, element) {
            return true;
        },
        rules: {
            phone: {
                required: true,
                minlength: 18
            }
        },
        submitHandler: function (form) {
            var phone = document.getElementById("phone_num").value;

            $.ajax({
                url: 'https://b2b.rocketcrm.bz/api/channels/site/form?hash=70c6d17a73',
                method: 'post',
                dataType: 'html',
                data: {
                    phone: phone
                },
                success: function (data) {
                    var modal = $('.modal-consult')
                    modal.find('.modal-title').html('Спасибо за обращение!')
                    modal.find('.modal-text').html(
                        'Наши специалисты обязательно свяжутся с вами в ближайшее время'
                    )
                    modal.find('.form-input').remove()
                    modal.find('.btn').html('Вернуться на главную')
                    modal.find('.modal-footer').remove()
                }
            });


            $.ajax({
                url: '/ajax.php',
                method: 'post',
                dataType: 'html',
                data: {
                    phone: phone
                },
                success: function (data) {
                    var modal = $('.modal-consult')
                    modal.find('.modal-title').html('Спасибо за обращение!')
                    modal.find('.modal-text').html(
                        'Наши специалисты обязательно свяжутся с вами в ближайшее время'
                    )
                    modal.find('.form-input').remove()
                    modal.find('.btn').html('Вернуться на главную')
                    modal.find('.modal-footer').remove()
                    ComagicWidget.sitePhoneCall({captcha_key: '', captcha_value: '', phone: phone, group_id: '343750'}, function(resp){console.log(resp)});
                }
            });


        },
        invalidHandler: function (form, validator) {}
    });

});

$(document).ready(() => {

    var footerMob = $('.index-footer--mob');
    var footerWidget = $('.widget_o');

    //if(is_mob()) { alert('mob'); }

    //if (footerMob.length > 0 && is_mob()) {
    if (footerMob.length > 0 && is_mob()) {    

        footerMob.slideUp();
        footerMob.removeClass('visible')

        $(window).scroll(function (e) {
            if ($(window).scrollTop() >= window.innerHeight) {
                footerMob.slideDown();
                footerWidget.addClass('visible')
                footerMob.addClass('visible')

            } else {
                footerMob.slideUp();
                footerWidget.removeClass('visible')
                footerMob.removeClass('visible')

            }
        });

    }
})