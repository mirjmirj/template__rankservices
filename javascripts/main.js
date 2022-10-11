(function($, window, undefined) {

    // Slide to
    //
    $('nav a, header a').on('click', function(e) {
        e.preventDefault();
        $link = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $($link).offset().top - 10
        }, 800 );
    });

    // Nav Menu
    //
    $(window).on('mousewheel DOMMouseScroll', function(e) {
        var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        var headerHeight = $('header').height();
        if ($(window).scrollTop() > headerHeight && delta >= 0) {
            $('#sticky-nav').css({ top: '0' });
        } else {
            $('#sticky-nav').css({ top: '-37px' });
        }
    }); 
})(jQuery, window);
