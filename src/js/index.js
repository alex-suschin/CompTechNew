import $ from "jquery";
import "./import/modules";
import "../../node_modules/bootstrap/js/dist/modal";

$(function() {


    $('.top-menu a').click(function() {
        var scroll_elem = $(this).attr('href');
        if ($(scroll_elem).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_elem).offset().top - 100
            }, 800);
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }
        return false;
    });

    $('#hamburger-icon').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.mob-menu').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('.mob-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        }
    });


    // $('.b-mobile_open_nav').click(function() {
    //     $(this).toggleClass('b-mobile_open_nav_active');
    //     if ($(this).hasClass('b-mobile_open_nav_active')) {
    //         $('.b-links').addClass('b-links_active');
    //         $('.b-links a').each(function(index, el) {
    //             setTimeout(function() {
    //                 $(el).addClass('showed');
    //             }, index * 100);
    //         });
    //     } else {
    //         var time = 0;
    //         $($('.b-links a').get().reverse()).each(function(index, el) {
    //             time = index * 100;
    //             setTimeout(function() {
    //                 $(el).removeClass('showed');
    //             }, time);
    //         });
    //         setTimeout(function() {
    //             $('.b-links').removeClass('b-links_active');
    //             $('.b-links').find('.showed').removeClass('showed');
    //         }, $('.b-links a').length * 100);
    //     }
    // });


    // $('input[type=tel]').bind("change keyup input click", function() {
    //     if (this.value.match(/[^\+0-9]/g)) {
    //         this.value = this.value.replace(/[^\+0-9]/g, '');
    //     }
    // });

    // $('input[type=tel]').on('focus', function() {
    //     if ($(this).val() == '') $(this).val('+7');
    // });

    // $('input[type=tel]').on('blur', function() {
    //     if ($(this).val() == '+7') $(this).val('');
    // });

    // $('.style-tab').click(function() {
    //     $('.style-tabs').find('.active').removeClass('active');
    //     $(this).addClass('active');
    //     $('.styles-elems').find('.styles-elem-item').hide();
    //     $('#' + $(this).data('switch')).show();
    // });

    $('.programms-btns a').click(function() {
        $('.programms-btns').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.programms-box').find('.programms-elem').hide();
        $('#' + $(this).data('switch')).show();
    });

    $(window).on('load resize scroll', function() {

        var width = $(window).width();

        if ((width > '700') && (width < '1000')) {

        }

    });



    //   $(document).on('af_complete', function(event, response) {
    //     if(response.success) $.fancybox.close();
    // })

});