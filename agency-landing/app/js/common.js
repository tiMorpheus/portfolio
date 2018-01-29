;

$(document).ready(function(){
    // main-header nav sandwich
    $("#sandwich, .menu_item").click(function() {
        $("#sandwich").toggleClass("active");
    });


    // main-header resize function
    function heightDetect() {
        $(".main-header").css("height", $(window).height());
        $(".menu").css("height", $(window).height());
    };

    heightDetect();

    $(window).resize(function() {
        heightDetect();
    });


    // about-us owl carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: true,
        responsive:{
            0: {
                items: 1
            }
        }
    });






    //hover
    $('.dh-container').directionalHover({

    });

    $(".popup").magnificPopup({type:"image"});


    $(".popup-content").magnificPopup({
        type:"inline",
        midClick: true
    });



});