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


    $('.price-btns a').click(function() {
        $('.price-btns').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.price-tables').find('.table-price').hide();
        $('#' + $(this).data('switch')).show();
    });

    $('.btn-more').click(function() {
        $('.table-price-row').css('display', 'table-row');
        $(this).hide();
    });

    $(window).on('load resize scroll', function() {

        var width = $(window).width();

        if ((width > '700') && (width < '1000')) {

        }

    });

});