


$(document).ready(function ($) {

    $("#sandwich, .menu_item").click(function() {
        $("#sandwich").toggleClass("active");
        $(".menu").toggleClass("menu-active");
    });


    $('.banner-carousel').slick({
        autoplay: true,
        arrows: false,
        dots: true,

    });

});