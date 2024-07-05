$(document).ready(function() {
    $('.tarjeta').hide();
    $('#info-servicios').show();
    $('#info-servers').show();
    $('#info-smart').show();
    $('#info-pantalla').show();
    $('#info-muntifuncionales').show();
  
    $('.ap1 .menu-info li').click(function() {
      $('.ap1 .tarjeta').hide();
      $('#' + $(this).data('div')).show();
      $('.ap1 .menu-info li').removeClass('seleccionado');
      $(this).addClass('seleccionado');
    });

    $('.ap2 .menu-info li').click(function() {
      $('.ap2 .tarjeta').hide();
      $('#' + $(this).data('div')).show();
      $('.ap2 .menu-info li').removeClass('seleccionado');
      $(this).addClass('seleccionado');
    });

    $('.ap3 .menu-info li').click(function() {
      $('.ap3 .tarjeta').hide();
      $('#' + $(this).data('div')).show();
      $('.ap3 .menu-info li').removeClass('seleccionado');
      $(this).addClass('seleccionado');
    });

    $('.ap4 .menu-info li').click(function() {
      $('.ap4 .tarjeta').hide();
      $('#' + $(this).data('div')).show();
      $('.ap4 .menu-info li').removeClass('seleccionado');
      $(this).addClass('seleccionado');
    });

    $('.ap5 .menu-info li').click(function() {
      $('.ap5 .tarjeta').hide();
      $('#' + $(this).data('div')).show();
      $('.ap5 .menu-info li').removeClass('seleccionado');
      $(this).addClass('seleccionado');
    });
    
});

