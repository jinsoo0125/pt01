$(function () {







    const MVS = new Swiper('.main_visual_slide', {
        loop: true,




        pagination: {
            clickable: true,
            el: '.main_visual .inner .itm_area .page',
        },

        on: {
            slideChangeTransitionStart: function () {
                console.log(this.realIndex);
                $('.main_visual .inner .desc_area .itm').removeClass('on');
                $('.main_visual .inner .desc_area .itm').eq(this.realIndex).addClass('on');



            }
        },

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },


    })


    // 반응형 
    const MMS = new Swiper('.main_movie_slide', {

        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },



        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            540: {
                slidesPerView: 3,

            }
        }

    })


    const MPS = new Swiper('.main_program_slide', {

        loop: true,





        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 3,

            }
        }




    })







});



$(function () {
    $('.main_news .tab_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.main_news .tab_menu button').removeClass('on');
        $(this).addClass('on');
        $('.main_news .tab_content .con').removeClass('on');
        $('.main_news .tab_content .con').eq(idx).addClass('on')
    })
});

// 반응형

$(function () {

    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('on');

        $('.header .gnb').toggleClass('on')

    });

    $('.header .gnb>ul>li>a').on('click', function (e) {

        if ($('.header .gnb').hasClass('on')) {

            e.preventDefault();
            $('.header .gnb>ul ul').stop().slideUp();
            $(this).next().stop().slideDown()

        }

    });

    $(window).on('resize', function () {
        $('.header .mbtn').removeClass('on');
        $('.header .gnb').removeClass('on');
        $('.header .gnb>ul ul').removeAttr('style');

    });

    $('header .gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    })


})


$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 600) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    })


})