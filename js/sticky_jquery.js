$(document).ready(function () {
    $('#navbar').each(function () {
        var $window = $(window),
            $header = $(this),
            headerOffsetTop = $header.offset().top;
        $window.on('scroll', function () {
            if ($window.scrollTop() > headerOffsetTop) {
                $header.addClass('is_fixed');
            } else {
                $header.removeClass('is_fixed');
            }
        });
        $window.trigger('scroll');
    });
});
