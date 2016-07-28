$(function() {
    $(".field").click(function() {
        $(this).html('<i class="fa fa-times fa-5" aria-hidden="true"></i>');
    });
    $("#clear-button").click(function() {
        $(".field").each(function() {
            $(this).empty();
        });
    });
});
