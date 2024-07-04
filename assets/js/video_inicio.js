$(document).ready(function() {
    var video = document.getElementById('video-intro');
    video.play();

    $('.video-cerrar').click(function () {
        $('.contenedor-intro').hide();
    });
});

// Detener el video al terminar
$('#video-intro').on('ended', function() {
    $('.contenedor-intro').hide();
});