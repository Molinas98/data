$(document).ready(function() {
    $('.btn-caso').click(function() {
        $('.caso_principal').hide();
        $(this).closest('.modal-producto').addClass("caso");
        $('#'+$(this).data('div')).show();
        $('.producto-back').css("visibility","visible");
    });

    $('.producto-back').click(function() {
        $('.caso_interna ').hide();
        $(this).closest('.modal-producto').removeClass("caso")
        $('.caso_principal').show();
        $('.producto-back').css("visibility","collapse");
    });
});