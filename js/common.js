
$(".main").onepage_scroll({
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",// "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
    pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {
        if(index == 1) {
            $('.wrapper_page_1_titel h1').animated('fadeIn', 'fadeOut');
            $('.well_big p').animated('fadeIn', 'fadeOut');
            $('header nav ul li').animated('fadeIn','fadeOut');
            $('.wrapper_page_1_titel p').animated('fadeIn','fadeOut');
            $('.hamburger').css('opacity','0');
            $('.page_1_btn_left').animated('fadeInRight','fadeOutLeft');
            $('.page_1_btn_right').animated('fadeInLeft','fadeOutLeft');
            $('.page_1 .wrapper_page_1_titel a').animated('fadeIn', 'fadeOut');
            $('.service h2').removeClass('fadeInDown');
            $('.service p').removeClass('fadeInDown');
            $('.service li').removeClass('fadeInDown');
            $('.service h2').css('opacity', '0');
            $('.service p').css('opacity', '0');
            $('.service li').css('opacity', '0');
        }
        if(index == 3) {
            $('.who_name').animated('fadeInDown', 'fadeOut');
            $('.who_we_are .col-md-6:nth-child(1) p').animated('fadeInDown', 'fadeOut');
            $('.who_we_are .col-md-6:nth-child(1) ul li').animated('fadeInLeft','fadeOutLeft');
            $('.who_we_are .col-md-6:nth-child(2) .wrapper_for_foto img').animated('fadeInRight','fadeOutLeft');
            $('.who_we_are .col-md-6:nth-child(1) h2').animated('fadeInUp','fadeOutLeft');
            $('.who_we_are .col-md-6:nth-child(2) .wrapper_for_foto .half_block_foto .top').animated('fadeInUp','fadeOutLeft');
            $('.who_we_are .col-md-6:nth-child(2) .wrapper_for_foto .half_block_foto .bottom').animated('fadeInDown','fadeOutLeft');

        }
    },  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {
        if (index == 3) {
            $('.service h2').removeClass('fadeInDown');
            $('.service h2').css('opacity', '0');
            $('.service p').removeClass('fadeInDown');
            $('.service p').css('opacity', '0');
            $('.service li').removeClass('fadeInDown');
            $('.service li').css('opacity', '0');
            $('.who_name').animated('fadeInDown', 'fadeOut');
            $('.who_we_are .col-md-6:nth-child(1) p').animated('fadeInDown', 'fadeOut');
            $('.who_we_are .col-md-6:nth-child(1) ul li').animated('fadeInLeft','fadeOutLeft');
            $('.who_we_are .col-md-6:nth-child(2) .wrapper_for_foto img').animated('fadeInLeft','fadeOutLeft');
            $('.who_we_are .col-md-6:nth-child(1) h2').animated('fadeInUp','fadeOutLeft');
            $('.who_we_are .col-md-6:nth-child(2) .wrapper_for_foto .half_block_foto .top').animated('fadeInUp','fadeOutLeft');
            $('.who_we_are .col-md-6:nth-child(2) .wrapper_for_foto .half_block_foto .bottom').animated('fadeInDown','fadeOutLeft');
            $('header .lang_and_soc').css('display','flex');

        }
        if(index == 4) {
            $('.who_name').removeClass('fadeInDown');
            $('.who_we_are .col-md-6:nth-child(1) p').removeClass('fadeInDown');
            $('.who_we_are .col-md-6:nth-child(1) ul li').removeClass('fadeInLeft');
            $('.who_we_are .col-md-6:nth-child(2) .wrapper_for_foto img').removeClass('fadeInRight');
            $('.who_we_are .col-md-6:nth-child(1) h2').removeClass('fadeInUp');
            $('.who_we_are .col-md-6:nth-child(2) .wrapper_for_foto .half_block_foto .top').removeClass('fadeInUp');
            $('.who_we_are .col-md-6:nth-child(2) .wrapper_for_foto .half_block_foto .bottom').removeClass('fadeInDown');
            $('.page_1_btn_left').animated('fadeInRight','fadeOutLeft');
            $('.page_1_btn_right').animated('fadeInLeft','fadeOutLeft');
            $('.page_4 .contact h2').animated('fadeInDown', 'fadeOut');
            $('.page_4 .contact p').animated('fadeInDown', 'fadeOut');
            $('.page_4 .contact form input, .page_4 .contact form textarea').animated('fadeInLeft','fadeOutLeft');
            $('.page_4 .contact form .box-input label').animated('fadeInUp','fadeOutLeft');
            $('.page_4 .contact form button').animated('fadeIn', 'fadeOut');
            $('header .lang_and_soc').css('display','none');
        }
        if(index == 2) {
            $('.well_big p').animated('fadeOut');
            $('.wrapper_page_1_titel h1').animated('fadeOut');
            $('.wrapper_page_1_titel p').animated('fadeOut');
            $('header nav ul li').animated('fadeOut');
            $('.hamburger').css('opacity','1');
            $('.hamburger').animated('fadeIn','fadeOut');
            $('.page_1_btn_left').animated('fadeOutLeft');
            $('.page_1_btn_right').animated('fadeOutLeft');
            $('.page_1 .wrapper_page_1_titel a').animated('fadeOut');
            $('.service h2').animated('fadeInDown','fadeIn');
            $('.service p').animated('fadeInDown','fadeIn');
            $('.service ul li').animated('fadeInDown','fadeIn');
            $('header .lang_and_soc').css('display','flex');
        }
    },   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
});

$(document).ready(function() {

    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
    });

    $('.wrapper_page_1_titel h1').animated('fadeIn');
    $('.wrapper_page_1_titel p').animated('fadeIn');
    $('.logo img').animated('fadeIn');
    $('.well_big p').animated('fadeIn');
    $('header nav ul li').animated('fadeIn');
    $('.page_1_btn_left').animated('fadeInRight');
    $('.page_1_btn_right').animated('fadeInLeft');
    $('.page_1 .wrapper_page_1_titel a').animated('fadeIn');

    $('header nav ul li:nth-child(1)').on('click', function () {
        $('.onepage-wrapper').css({"transform": "translate3d(0px, -100%, 0px)"});
        $('.page_1').removeClass('active');
        $('.page_2').addClass('active');
        $('.service h2').addClass('animated fadeInDown');
        $('.service p').addClass('animated fadeInDown');
        $('.service ul li').addClass('animated fadeInDown');
    });
    $('header nav ul li:nth-child(2)').on('click', function () {
        $('.onepage-wrapper').css({"transform": "translate3d(0px, -200%, 0px)"});
        $('.page_1').removeClass('active');
        $('.page_2').removeClass('active');
        $('.page_4').removeClass('active');
        $('.page_3').addClass('active');
        $('.who_name').addClass('animated fadeInDown');
        $('.who_we_are .col-md-6:nth-child(1) p').addClass('animated fadeInDown');
        $('.who_we_are .col-md-6:nth-child(1) ul li').addClass('animated fadeInLeft');
        $('.who_we_are .col-md-6:nth-child(2) .wrapper_for_foto img').addClass('animated fadeInRight');
        $('.who_we_are .col-md-6:nth-child(1) h2').addClass('animated fadeInUp');
        $('.who_we_are .col-md-6:nth-child(2) .wrapper_for_foto .half_block_foto .top').addClass('animated fadeInUp');
        $('.who_we_are .col-md-6:nth-child(2) .wrapper_for_foto .half_block_foto .bottom').addClass('animated fadeInDown');
    });
    $('header nav ul li:nth-child(3)').on('click', function () {
        $('.onepage-wrapper').css({"transform": "translate3d(0px, -200%, 0px)"});
        $('.page_1').removeClass('active');
        $('.page_2').removeClass('active');
        $('.page_3').removeClass('active');
        $('.page_4').addClass('active');
        $('.page_1_btn_left').addClass('animated fadeInRight');
        $('.page_1_btn_right').addClass('animated fadeInLeft');
        $('.page_4 .contact h2').addClass('animated fadeInDown');
        $('.page_4 .contact p').addClass('animated fadeInDown');
        $('.page_4 .contact form input, .page_4 .contact form textarea').addClass('animated fadeInLeft');
        $('.page_4 .contact form .box-input label').addClass('animated fadeInUp');
        $('.page_4 .contact form button').addClass('animated fadeIn');
    });

    $('.who_we_are').slick(
        {
            adaptiveHeight: true,
            arrows: false,
            dots: true,
            draggable: false,
            fade: true,
            cssEase: 'linear'
        }
    );

    $('.hamburger').on('click',function () {
        if($('.hamburger').hasClass('is-active')) {
            $('.menu').css('right', '0');
        } else {
            $('.menu').css('right', '-100%');
        }

    })


});




