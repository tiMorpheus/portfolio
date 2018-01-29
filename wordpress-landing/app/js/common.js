
$(document).ready(function() {
    // variables
    var header = ".main-header";
    var menu = ".toggle-menu";

    $("#portfolio-grid").mixItUp();
    $(".section-portfolio li").click(function() {
        $(".section-portfolio li").removeClass("active");
        $(this).addClass("active");
    });


    $(".popup-content").magnificPopup({
        type:"inline",
        midClick: true
    });

    AOS.init({
        easing: 'ease-out-back',
        duration: 1000,

    });



    // jQuery Resize Height START
    function heightDetect(){
        $(header).css("height", $(window).height());
    }

    heightDetect();

    $(window).resize(function(){
        heightDetect();
    });
    // jQuery Resize Height END

    //PARALLAX START
    // $(header).parallax({imageSrc: '../img/bg.jpg'});
    //PARALLAX END


    //SANDWICH MENU START
    $(".toggle-menu").click(function() {
        $(".sandwich").toggleClass("active");
    });
    //SANDWICH MENU END


    // MENU STAFF START
    $(".menu-list li a").click(function () {
        $(".top-menu").fadeOut(600);
        $(".top-content").css("opacity", 1);
        $(".sandwich").toggleClass("active");
    });



    $(menu).click(function () {
        if ($(".top-menu").is(":visible")) {
            $(".top-content").css("opacity", 1);
            $(".menu-list li a").removeClass("fadeInUp animated");
            $(".top-menu").fadeOut(600);
            $(".menu-list li a").addClass("fadeOutUp animated");
        } else {
            $(".top-content").css("opacity", .1);
            $(".menu-list li a").removeClass("fadeOutUp animated");
            $(".top-menu").fadeIn(600);
            $(".menu-list li a").addClass("fadeInUp animated");
        };
    })
    // MENU STAFF END


    $(".portfolio-item").each(function(i) {
        $(this).find("a").attr("href", "#work_" + i);
        $(this).find(".modal-wrap").attr("id", "work_" + i);
    });

    $("input, select, textarea").jqBootstrapValidation();

    $(".top-menu ul a").mPageScroll2id();

});

//PRELOADER START
$(window).on('load', function() {
    $(".loader-inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");


    // //HEADER TEXT ANIMATE
    //
    // $(".top-content h1").animated("fadeInDown", "fadeOutUp");
    // $(".top-content p").animated("fadeInUp", "fadeOutDown");
    // //



});
//PRELOADER END