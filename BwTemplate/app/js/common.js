$(document).ready(function(){



    // main-header resize function
    function heightDetect() {
        $(".header").css("height", $(window).height());
    };

    heightDetect();

    $(window).resize(function() {
        heightDetect();
    });

});