$(function() {

    /*
    Define game board object
     */
    var board = {
        field0: null,
        field1: null,
        field2: null,
        field3: null,
        field4: null,
        field5: null,
        field6: null,
        field7: null,
        field8: null
    };

    /*
    Initialize possible fields array
     */
    var freeFields = [];

    /*
    The Game
     */
    $(".field").click(function() {

        /*
        User action
         */
        $(this).html('<i class="fa fa-times fa-5" aria-hidden="true"></i>');
        board[this.id] = 'x';

        /*
        Computer move, after 500ms
         */
        setTimeout(function() {

            /*
             Find free fields, and put them into volatile array
             */
            $.each(board, function (key, value) {
                if (value === null) {
                    freeFields.push(key);
                }
            });

            /*
             AI thing (monkey way)
             */
            var randomField = freeFields[Math.floor(Math.random() * (freeFields.length > 1) ? (freeFields.length - 1) : freeFields.length)];
            if(randomField != undefined) {
                $("#" + randomField).html('<i class="fa fa-circle-o fa-5" aria-hidden="true"></i>');
                board[randomField] = 'o';
            }

        }, 500);

        /*
        Clear possible fields array
         */
        freeFields.length = 0;
    });

    /*
    Clear button action
     */
    $("#clear-button").click(function() {

        /*
        Clear the board
         */
        $(".field").each(function() {
            $(this).empty();
        });

        /*
        Clear board object
         */
        $.each(board, function(key, value) {
            board[key] = null;
        });
    });

});
