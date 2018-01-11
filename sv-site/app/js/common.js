$(document).ready(function ($) {


    /*======= Skillset *=======*/


    $('.level-bar-inner').css('width', '0');

    $(window).on('scroll', function () {

        $('.level-bar-inner').each(function () {
            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 2000);
        });
    });

    var counter = 0;

    $("button.load-test").bind('click', function () {

        $.getJSON("projects.json", function (data) {



            $("button.load-test").before(
                '<div class="item">' +
                '<span class="project-title counter-'+counter+'"><a href=' + data.projects[counter].link + '></a></span> - ' +
                '<span class="project-tagline">' + data.projects[counter].description + '</span>' +
                '</div>'
            );

            $('.counter-'+counter+' a').html(data.projects[counter].title);
            counter++;

            if (counter >= data.projects.length){

                $("button.load-test").remove();
                $(".intro p").after(
                    '<a href="https://github.com/timorpheus">Code style and other projects you can find on my github</a>'
                ).remove();
            }
        })
    });


    AOS.init({
        easing: 'ease-out-back',
        duration: 1000,

    });


});