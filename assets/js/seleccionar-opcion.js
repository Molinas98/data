$(document).ready(function() {
    $('.tarjeta').hide();
    $('#info-descripcion').show();
    $('.menu-info li').first().addClass('seleccionado');
  
    $('.menu-info li').click(function() {
      $('.tarjeta').hide();
      $('#' + $(this).data('div')).show();
      $('.menu-info li').removeClass('seleccionado');
      $(this).addClass('seleccionado');
    });
    
});

