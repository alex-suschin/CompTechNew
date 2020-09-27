import $ from "jquery";
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
import "./import/modules";
import "../../node_modules/bootstrap/js/dist/modal";

$(function() {


    $('.top-menu a, .footer-anchor').click(function() {
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
        $('.price-tables').find('.price-tables__elem').hide();
        $('#' + $(this).data('switch')).show();
    });

    $('.btn-more').click(function() {
        $('.table-price-row').css('display', 'table-row');
        $(this).hide();
    });

    var swiper = new Swiper('.our-team-slider', {
        autoHeight: true,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    jQuery(function($) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.header').addClass('fixed');
                $('body').css('padding-top', '80px');
            } else if ($(this).scrollTop() < 100) {
                $('.header').removeClass('fixed');
                $('body').css('padding-top', '100px');
            }
        });
    });

    $(window).on('load resize scroll', function() {

        var width = $(window).width();

        if ((width > '700') && (width < '1000')) {

        }

    });

});