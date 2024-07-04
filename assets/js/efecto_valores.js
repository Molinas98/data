$(document).ready(function() {
    $("#base-1").click(function() {
        $(".valores-adn-info").animate({
            scrollTop: 0
        }, 1000);
    });
    $("#base-2").click(function() {
        $(".valores-adn-info").animate({
            scrollTop: 500
        }, 1000);
    });
    $("#base-3").click(function() {
        $(".valores-adn-info").animate({
            scrollTop: 1000
        }, 1000);
    });
    $("#base-4").click(function() {
        $(".valores-adn-info").animate({
            scrollTop: 1500
        }, 1000);
    });

    $(".valores-adn-info").scroll(function() {
        var contenedor = $(this);
        var scrollTop = contenedor.scrollTop();
        if (scrollTop >= 0 && scrollTop < 500) {
            $("#base-1").addClass("efecto-brillo");
            $("#base-2").removeClass("efecto-brillo");
            $("#base-3").removeClass("efecto-brillo");
            $("#base-4").removeClass("efecto-brillo");
        } else if (scrollTop >= 500 && scrollTop < 1000) {
            $("#base-1").removeClass("efecto-brillo");
            $("#base-2").addClass("efecto-brillo");
            $("#base-3").removeClass("efecto-brillo");
            $("#base-4").removeClass("efecto-brillo");
        } else if (scrollTop >= 1000 && scrollTop < 1300) {
            $("#base-1").removeClass("efecto-brillo");
            $("#base-2").removeClass("efecto-brillo");
            $("#base-3").addClass("efecto-brillo");
            $("#base-4").removeClass("efecto-brillo");
        } else {
            $("#base-1").removeClass("efecto-brillo");
            $("#base-2").removeClass("efecto-brillo");
            $("#base-3").removeClass("efecto-brillo");
            $("#base-4").addClass("efecto-brillo");
        }
    });
});