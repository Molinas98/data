$(document).ready(function() {
    $(window).scroll(function() {
        var footerTop = $('#pie-de-pagina').offset().top;
        var scrollTop = $(window).scrollTop();
        var distance = footerTop - scrollTop;
        var elementHeight = $('.menu-anhos').outerHeight();
        if (scrollTop > 180) {
          $('.menu-anhos').css('position', 'fixed');
          $('.menu-anhos').css('top', '0');
        } else {
          $('.menu-anhos').css('position', 'relative');
        }

        if (distance < elementHeight) {
           $('.menu-anhos').css('position', 'relative');
        }
      });
});

$(window).scroll(function() {
  var scrollPosition = $(this).scrollTop();
  if (scrollPosition > 0) {
    $('.nav-static').attr('style', 'position: fixed !important;');
    $('nav').css('background', 'linear-gradient(rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.0) 100%)');
    $('.nav-dark').css('background', 'linear-gradient(rgba(255,252,245,1) 0%, rgba(255,252,245,0.3) 60%, rgba(255,252,245,0.0) 100%)');
  } else {
    $('.nav-static').attr('style', 'position: static !important;');
    $('nav').css('background', 'transparent');
    $('.nav-dark').css('background', 'transparent');
  }
});