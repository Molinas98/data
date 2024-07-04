$(document).ready(function() {
    $('.ct-video').click(function() {
        let video = $(this).data('div');
        $('.video-principal').hide();
        $('iframe').each(function() {
            $(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');    
        });
        $('#' + video).show();
    });

    $(".opcion-video").click(function() {
        $('html, body').animate({
            scrollTop: $('#video-principal').offset().top - 100
        }, 100);
    });

    if ($(window).width() < 992) {
        $("iframe").attr("height", "315");
    }

    $(window).resize(function() {
        if ($(window).width() < 992) {
            $("iframe").attr("height", "315");
        } else {
            $("iframe").attr("height", "550");
        }
    });
});