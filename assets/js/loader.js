$(document).ready(function(){
    $(window).on('load', function() {
        // Hide the loader and show the page content
        $('#loader').fadeOut('slow', function() {
            $('#page-content').fadeIn('slow');
        });
    });
});