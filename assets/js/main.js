$(document).ready(function() {

  $("nav a").hover(function(){
    $(this).addClass('text-orange');
    filter_orange($(this));
  }, function(){
    $(this).removeClass('text-orange');
    $("nav a li img").attr("src", "./assets/images/iconos/arrow-black.png");
  });


  $('.accordion-button').click(function(){
    $('.accordion-collapse').collapse('hide');
  });

  $('.icono-nav').click(function(){
    if ($(this).attr("src").includes("2")) {
      $(this).attr("src","../assets/images/opciones.svg");
    } else {
      $(this).attr("src","../assets/images/opciones-2.svg");
    }
  });

  window.onclick = function(event) {
    if (!(event.target.classList.contains("op-menu") ||
    event.target.classList.contains("icono-nav") ||
    event.target.classList.contains("nav-item") || 
    event.target.classList.contains("sub-menu") ||
    event.target.classList.contains("navbar-nav") ||
    event.target.classList.contains("nav-responsive") ||
    event.target.classList.contains("nav-item-responsive") ||
    event.target.classList.contains("m-responsive") ||
    event.target.classList.contains("op-submenu") ||
    event.target.classList.contains("navbar"))) {
      $('.sub-menu').removeClass('show');
      $('.op-menu').removeClass('collapse');
      $('.op-menu').find('li img').removeClass('rotate');
      $('.op-menu').attr('aria-expanded', 'false');
      $('.icono-nav').attr("src","../assets/images/opciones.svg");
    }
  }

  $('.cd-servicios').click(function () {
    $('.cd-servicios').addClass('zoom-out-effect');
    $('#'+$(this).data('div')).removeClass("collapse");
    $('#'+$(this).data('div')).addClass('zoom-in-effect');
  });

  $('.ac-sercvicios').click(function () {
    $('.cd-servicios2').removeClass('zoom-in-effect');
    $('.cd-servicios2').addClass("collapse");
    $('.cd-servicios').removeClass('zoom-out-effect');
    $('.cd-servicios').addClass('zoom-out-effect');
    $('#'+$(this).data('div')).removeClass("collapse");
    $('#'+$(this).data('div')).addClass('zoom-in-effect');
  });

  $('.btn-producto').click(function () {
    $('#'+$(this).data('div')).removeClass("collapse");
    $('#'+$(this).data('div')).addClass('zoom-in-effect-2');
  });

  $('.producto-cerrar').click(function () {
    $('#'+$(this).data('div')).addClass("collapse");
    $('.caso_interna ').hide();
    $(this).closest('.modal-producto').removeClass("caso")
    $('.caso_principal').show();
    $('.producto-back').css("visibility","collapse");
  });

  $('.btn-cerrar').click(function () {
    $(this).closest('.cd-servicios2').removeClass('zoom-in-effect');
    $(this).closest('.cd-servicios2').addClass("collapse");
    $('.cd-servicios').removeClass('zoom-out-effect');
  });

  $('.op-menu').click(function () {
    //si se hace click sobre un menu que no esta expandido
    //oculta todos los menus antes de mostrar el menu
    $('.op-menu').not(this).find('li img').removeClass('rotate');
    $(this).find('li img').toggleClass('rotate');
    if($(this).attr('aria-expanded') == "false") {
        $('.sub-menu').removeClass('show');
        $('.op-menu').removeClass('collapse');
        $('.op-menu').attr('aria-expanded', 'false');
        $(this).attr('aria-expanded', 'true');
        $('.submenu').css('display','none');
        $('.nav-responsive .ico-row').removeClass('rotate');
    }
    //obtiene la posicion del menu y posiciona los submenus en su mismo eje x
    $('.links').css("left", ($(this).offset().left + 8)  + "px");
});

$('.nav-responsive').click(function() {
  $('.submenu').not($(this).next('.submenu')).slideUp();
  $(this).next('.submenu').slideToggle();
  $(this).find('.ico-row').toggleClass('rotate');
});

if ($(window).width() < 576) {
  $('.modal-producto').addClass('caso2');
} else {
  $('.modal-producto').removeClass('caso2');
}

$(window).on('resize', function() {
  if ($(window).width() < 576) { // 576px es el breakpoint de 'sm' en Bootstrap
      $('.modal-producto').addClass('caso2');
  } else {
      $('.modal-producto').removeClass('caso2');
  }
});

$('.carrusel-partners').slick({
  dots: false,
  infinite: true,
  arrows: true,
  autoplay:true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<img class="prev-2" src="./assets/images/iconos/prev-2.svg">',
  nextArrow: '<img class="next-2" src="./assets/images/iconos/next-2.svg">',
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
});


$('.carrusel-servicios').slick({
  dots: false,
  infinite: true,
  arrows: true,
  autoplay:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '<img class="next" src="./assets/images/iconos/siguiente.png">',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
});

  $('.carrusel_clientes').slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    nextArrow: '<img class="prev" src="./assets/images/iconos/anterior.png">',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          prevArrow: '<img class="next" src="./assets/images/iconos/siguiente.png">',
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          prevArrow: '<img class="next" src="./assets/images/iconos/siguiente.png">',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          prevArrow: '<img class="next" src="./assets/images/iconos/siguiente.png">',
        }
      }
    ]
  });


  $('.carrusel_lideres').slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<img class="prev-3" src="./assets/images/nosotros/prev-4.png">',
    nextArrow: '<img class="next-3" src="./assets/images/nosotros/next-4.png">',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });

  $('.carrusel_empleados').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });

  $('.carrusel_empleados_2').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });

  $('.carrusel_reconocimietos').slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<img class="prev-3" src="./assets/images/nosotros/prev-4.png">',
    nextArrow: '<img class="next-3" src="./assets/images/nosotros/next-4.png">',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });

  $('.carrusel-recursos-1').slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="prev" src="./assets/images/iconos/prev-1.svg">',
    nextArrow: '<img class="next" src="./assets/images/iconos/next-1.svg">',
  });

  $('.carrusel-recursos-2').slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="prev" src="./assets/images/iconos/prev.svg">',
    nextArrow: '<img class="next" src="./assets/images/iconos/next.svg">',
  });

  $('.line-historia').slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay:true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="prev" src="./assets/images/iconos/prev.svg">',
    nextArrow: '<img class="next" src="./assets/images/iconos/next.svg">',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  });

  $('.carrusel-reconocimientos2').slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay:true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="prev" src="./assets/images/iconos/prev.svg">',
    nextArrow: '<img class="next" src="./assets/images/iconos/next.svg">',
  });

  $('.galeria').magnificPopup({
    type: 'image',
    gallery:{
        enabled:false
    },
    callbacks: {
        open: function() {
            // Cuando se abre el modal, ajusta el tamaño de la imagen
            $('.mfp-content').css('height', '100%');
            $('.mfp-content').css('width', '82vh');
            $('.mfp-img').css('max-height', '100%');
        }
    }
  });

  $('.reconocimientos').magnificPopup({
    type: 'image',
    gallery:{
        enabled:false
    },
    callbacks: {
        open: function() {
            // Cuando se abre el modal, ajusta el tamaño de la imagen
            $('.mfp-content').css('height', '100%');
            $('.mfp-content').css('width', '100vh');
            $('.mfp-img').css('max-height', '100%');
        }
    }
  });

  $('.popup-video').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true
  });

  AOS.init();

  if ($(window).width() >= 800) {
    $(window).resize(function() {
      $('.imagenDeFondo').each(function() {
        efecto_pixel($(this));
      });
      $('.imagenDeFondo-2').each(function() {
        efecto_pixel($(this));
      });
      $('.imagenDeFondo-3').each(function() {
        efecto_pixel($(this));
      });
      $('.imagenDeFondo-4').each(function() {
        efecto_pixel_4($(this));
      });
    });
    $('.contenedor-fondoPixel').each(function() {
      efecto_pixel_5($(this));
    });
  }

  setInterval(moverImagenAleatoriamente, 2000);

  $(".anhos-letra").click(function() {
    $(".anhos-letra").removeClass('anho-seleccionado')
    $(this).addClass('anho-seleccionado');
    $('html, body').animate({
      scrollTop: $('#a-'+ $(this).data('anho')).offset().top
    }, 100);
  });
  
  $('.subscripcion').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
        url: 'newletter.php',
        method: 'POST',
        data: $(this).serialize(),
        success: function(response) {
            if (response.trim() === 'success') {
              $('.mensaje-exito').removeClass("collapse");
              alert("holaa")
            } else {
                alert('Hubo un error al enviar el mensaje. Inténtelo de nuevo.');
            }
        }
    });
});

  if ($(window).width() >= 800) {
    $('.imagenDeFondo').each(function() {
      efecto_pixel($(this));
    });
  
    $('.imagenDeFondo-2').each(function() {
      efecto_pixel($(this));
    });
  
    $('.imagenDeFondo-3').each(function() {
      efecto_pixel($(this));
    });
  
    $('.imagenDeFondo-4').each(function() {
      efecto_pixel_4($(this));
    });

    $('.imagenDeFondo-5').each(function() {
      efecto_pixel_4($(this));
    });
  }

  $('.contenedor-fondoPixel').each(function() {
    efecto_pixel_5($(this));
  });
});

$(window).scroll(function() {
  // var scrollPosition = $(this).scrollTop();
  // if (scrollPosition > 0) {
  //   $('.nav-static').attr('style', 'position: fixed !important;');
  //   $('nav').css('background', 'linear-gradient(rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.0) 100%)');
  //   $('.nav-dark').css('background', 'linear-gradient(rgba(255,252,245,1) 0%, rgba(255,252,245,0.3) 60%, rgba(255,252,245,0.0) 100%)');
  // } else {
  //   $('.nav-static').attr('style', 'position: static !important;');
  //   $('nav').css('background', 'transparent');
  //   $('.nav-dark').css('background', 'transparent');
  // }
});

function efecto_pixel(elemento) {
  var pixelT = 77;
  elemento.find('.pixel').remove();
  elemento.find('.pixel-estatico').remove();
  // Ajusta este número para cambiar el tamaño de los cuadrados de ancho
  var ancho = Math.floor($(window).width() * 1.25 / pixelT);
   // Ajusta este número para cambiar el tamaño de los cuadrados de alto
  var alto = Math.floor(350 / pixelT);
  var totalPixeles = ancho * alto;
  // 50% de los pixeles serán estáticos
  var pixelesEstaticos = Math.floor(totalPixeles * 0.5); 
  var pixeles = [];
  for (var i = 0; i < totalPixeles; i++) {
  //pixeles.push(i < pixelesEstaticos ? 'pixel-estatico' : 'pixel');
    if (i < ancho) {
      if(i < Math.floor(ancho / 2) - 1 || i > (Math.floor(ancho / 2) + 2)) {
        pixeles.push('pixel-estatico');
      } else {
        pixeles.push('pixel');
      }
    } else {
      if ((i / ancho <= 2) && ((i % ancho < Math.floor(ancho / 2) && i % ancho != 2 && i % ancho != 3 && i % ancho != 6) || (i == ancho))) {
        pixeles.push('pixel-estatico');
      } else {
        if(i / ancho < 2) {
          pixeles.push('pixel');
        } else if(i % ancho < Math.floor(ancho / 2) + 2) {
          pixeles.push('p');
        } else {
          pixeles.push('pixel');
        }
      }
    }
  }
  //pixeles.sort(function() { return 0.5 - Math.random() }); // Mezcla los pixeles
  for (var i = 0; i <= alto; i++) {
    for (var j = 0; j < ancho; j++) {
      if(elemento.hasClass('bottom')) {
        var pixel = $('<div>').addClass(pixeles[i * ancho + j]).css({
          bottom: i * pixelT + 'px',
          left: j * pixelT + 'px'
          // izquierda
          // left: i * 77 + 'px',
          // top: j * 77 + 'px'
          });
      } else {
        var pixel = $('<div>').addClass(pixeles[i * ancho + j]).css({
          top: i * pixelT + 'px',
          left: j * pixelT + 'px'
          });
      }
      elemento.append(pixel);
      if (pixel.hasClass('pixel')) {
      (function loop(pixel) {
        setTimeout(function() {
        pixel.css('opacity', 1);
        setTimeout(function() {
          pixel.css('opacity', 0);
          loop(pixel);
        }, 3000 * Math.random());
        }, 3000 * Math.random());
      })(pixel);
      }
    }

    if(elemento.hasClass('bottom')) {
      if ( i == alto) {
        elemento.append(pixel);
        var pixel = $('<div>').addClass('pixel-estatico').css({
          bottom: i * pixelT + 'px',
          right: '0px'
        });
        elemento.append(pixel);
        var pixel = $('<div>').addClass('pixel-estatico').css({
          bottom: i * pixelT + 'px',
          left: 'calc(100% - 77px)'
        });
        elemento.append(pixel);
        var pixel = $('<div>').addClass('pixel-estatico').css({
          bottom: i * pixelT + 'px',
          right: pixelT + 'px'
        });
        elemento.append(pixel);
        var pixel = $('<div>').addClass('pixel-estatico').css({
          bottom: (i+1) * pixelT + 'px',
          right: '0px'
        });
        elemento.append(pixel);
      }
    } else {
      if ( i == alto) {
        var pixel = $('<div>').addClass('pixel-estatico').css({
          top: i * pixelT + 'px',
          left: '0px'
        });
        elemento.append(pixel);
        var pixel = $('<div>').addClass('pixel-estatico').css({
          top: i * pixelT + 'px',
          right: '0px'
        });
        elemento.append(pixel);
        var pixel = $('<div>').addClass('pixel-estatico').css({
          top: i * pixelT + 'px',
          left: 'calc(100% - ' + pixelT + 'px)'
        });
        elemento.append(pixel);
        var pixel = $('<div>').addClass('pixel-estatico').css({
          top: i * pixelT + 'px',
          right: pixelT + 'px'
        });
        elemento.append(pixel);
        var pixel = $('<div>').addClass('pixel-estatico').css({
          top: (i+1) * pixelT + 'px',
          right: '0px'
        });
        elemento.append(pixel);
      }
    }

    // Si el ancho de la ventana no es un múltiplo de 77
    if ($(window).width() % pixelT !== 0) {
      if(elemento.hasClass('bottom')) {
        var pixel = $('<div>').addClass('pixel-estatico').css({
          bottom: i * pixelT + 'px',
          left: 'calc(100% - ' + pixelT + 'px)'
        });
      } else {
        var pixel = $('<div>').addClass('pixel-estatico').css({
          top: i * pixelT + 'px',
          left: 'calc(100% - ' + pixelT + 'px)'
        });
      }
      elemento.append(pixel);
    }
  }

}

function efecto_pixel_2(elemento) {
  elemento.find('.pixel').remove();
  var ancho = Math.floor($(window).width() *1.25 / 77);
  var alto = Math.floor(300 / 77);
  var totalPixeles = ancho * alto;
  var pixeles = [];
  for (var i = 0; i < totalPixeles; i++) {
    pixeles.push('pixel');
  }
  for (var i = 0; i <= alto; i++) {
    for (var j = 0; j < ancho; j++) {
      if(elemento.hasClass('bottom')) {
        var pixel = $('<div>').addClass(pixeles[i * ancho + j]).css({
          bottom: i * 77 + 'px',
          left: j * 77 + 'px'
          });
      } else {
        var pixel = $('<div>').addClass(pixeles[i * ancho + j]).css({
          top: i * 77 + 'px',
          left: j * 77 + 'px'
          });
      }
      elemento.append(pixel);
      if (pixel.hasClass('pixel')) {
      (function loop(pixel) {
        setTimeout(function() {
        pixel.css('opacity', 1);
        setTimeout(function() {
          pixel.css('opacity', 0);
          loop(pixel);
        }, 3000 * Math.random());
        }, 3000 * Math.random());
      })(pixel);
      }
    }
    if ($(window).width() % 77 !== 0) {
      if(elemento.hasClass('bottom')) {
        var pixel = $('<div>').addClass('pixel-estatico').css({
          bottom: i * 77 + 'px',
          left: 'calc(100% - 77px)'
        });
      } else {
        var pixel = $('<div>').addClass('pixel-estatico').css({
          top: i * 77 + 'px',
          left: 'calc(100% - 77px)'
        });
      }
      elemento.append(pixel);
    }
  }

}

function efecto_pixel_3(elemento) {
  elemento.find('.pixel-gris').remove();
  var ancho = Math.floor($(window).width() *1.25 / 77);
  var alto = Math.floor(300 / 77);
  var totalPixeles = ancho * alto;
  var pixeles = [];
  for (var i = 0; i < totalPixeles; i++) {
    pixeles.push('pixel-gris');
  }
  for (var i = 0; i <= alto; i++) {
    for (var j = 0; j < ancho; j++) {
      if(elemento.hasClass('bottom')) {
        var pixel = $('<div>').addClass(pixeles[i * ancho + j]).css({
          bottom: i * 77 + 'px',
          left: j * 77 + 'px'
          });
      } else {
        var pixel = $('<div>').addClass(pixeles[i * ancho + j]).css({
          top: 'calc(40% + ' + i * 77 + 'px)',
          left: j * 77 + 'px'
          });
      }
      elemento.append(pixel);
      if (pixel.hasClass('pixel-gris')) {
      (function loop(pixel) {
        setTimeout(function() {
        pixel.css('opacity', 1);
        setTimeout(function() {
          pixel.css('opacity', 0);
          loop(pixel);
        }, 3000 * Math.random());
        }, 3000 * Math.random());
      })(pixel);
      }
    }
    if ($(window).width() % 77 !== 0) {
      if(elemento.hasClass('bottom')) {
        var pixel = $('<div>').addClass('pixel-estatico-gris').css({
          bottom: i * 77 + 'px',
          left: 'calc(100% - 77px)'
        });
      } else {
        var pixel = $('<div>').addClass('pixel-estatico-gris').css({
          top: 'calc(40% + ' + i * 77 + 'px)',
          left: 'calc(100% - 77px)'
        });
      }
      elemento.append(pixel);
    }
  }

}

function efecto_pixel_4(elemento) {
  elemento.find('.pixel').remove();
  // Ajusta este número para cambiar el tamaño de los cuadrados de ancho
  var ancho = 3;
   // Ajusta este número para cambiar el tamaño de los cuadrados de alto
  var alto = Math.floor(elemento.height() / 77) + 1;
  var totalPixeles = ancho * alto;
  // 50% de los pixeles serán estáticos
  var pixeles = [];
  for (var i = 0; i < totalPixeles; i++) {
    pixeles.push('pixel');
  }
  //pixeles.sort(function() { return 0.5 - Math.random() }); // Mezcla los pixeles
  for (var i = 0; i <= ancho; i++) {
    for (var j = 0; j < alto; j++) {
      if(elemento.hasClass('right')) {
        var pixel = $('<div>').addClass(pixeles[i * alto + j]).css({
          right: i * 77 + 'px',
          top: j * 77 + 'px'
        });
      } else {
        var pixel = $('<div>').addClass(pixeles[i * alto + j]).css({
          // left: 'calc(15% + ' + i * 77 + 'px)',
          left: i * 77 + 'px',
          top: j * 77 + 'px'
        });  
      }
      elemento.append(pixel);
      if (pixel.hasClass('pixel')) {
      (function loop(pixel) {
        setTimeout(function() {
        pixel.css('opacity', 1);
        setTimeout(function() {
          pixel.css('opacity', 0);
          loop(pixel);
        }, 3000 * Math.random());
        }, 3000 * Math.random());
      })(pixel);
      }  
    }
  }
}

function efecto_pixel_5(elemento) {
  elemento.find('.pixel-2').remove();
  // Ajusta este número para cambiar el tamaño de los cuadrados de ancho
  var ancho = Math.floor(elemento.width() / 45);
   // Ajusta este número para cambiar el tamaño de los cuadrados de alto
  var alto = Math.floor(elemento.width() / 45);
  var totalPixeles = ancho * alto;
  // 50% de los pixeles serán estáticos
  var pixeles = [];
  for (var i = 0; i < totalPixeles; i++) {
    pixeles.push('pixel-2');
  }
  //pixeles.sort(function() { return 0.5 - Math.random() }); // Mezcla los pixeles
  for (var i = 0; i < ancho; i++) {
    for (var j = 0; j < alto; j++) {
      var pixel = $('<div>').addClass(pixeles[i * alto + j]).css({
        // left: 'calc(15% + ' + i * 77 + 'px)',
        left: i * 45 + 'px',
        top: j * 45 + 'px'
      });
      elemento.append(pixel);
      if (pixel.hasClass('pixel-2')) {
      (function loop(pixel) {
        setTimeout(function() {
        pixel.css('opacity', 1);
        setTimeout(function() {
          pixel.css('opacity', 0);
          loop(pixel);
        }, 1500 * Math.random());
        }, 1500 * Math.random());
      })(pixel);
      }  
    }
  }
}

function moverImagenAleatoriamente() {
  /*entre 35 y 15*/
  var posXAleatoria = Math.floor(Math.random() * (35 - 15 + 1)) + 15;
  /*entre 40 y 20*/
  var posYAleatoria = Math.floor(Math.random() * (40 - 20 + 1)) + 20;

  // Asigna la nueva posición a la imagen
  $('#animacion').css({
      right: posXAleatoria + "%",
      top: posYAleatoria + "%"
  });
}

function filter_orange (elemento) {
  setTimeout( function(){
    elemento.find("li img").attr("src", "./assets/images/iconos/arrow-orange.png");
  },100);
}

function cerrar_mensaje() {
  $('.mensaje-exito').addClass("collapse");
}