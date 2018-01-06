
$(document).ready(function($) {


    /*======= Skillset *=======*/


    $('.level-bar-inner').css('width', '0');

    $(window).on('scroll', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 2000);

        });

    });



});