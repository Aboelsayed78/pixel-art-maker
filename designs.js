/*jslint plusplus: true*/
/*global console, $*/

$(document).ready(function () {
    "use strict";
    
    // The Drawing Function //
    $("#btn").click(function (color, rows, cols) {
        
        // Declaration Of Parameters //
        color = $("#colorPicker").val();
        rows = $("#input_height").val();
        cols = $("#input_width").val();
        var i, j;

        // Draw The Rows Of The Grid //
        for (i = 0; i < rows / 2; i++) {
            $("#pixel_canvas").append("<tr><tr/>");
        }
        
        // Draw The Columns Of The Grid //
        for (j = 0; j < cols / 2; j++) {
            $("tr").append("<td><td/>");
        }
        
        // Apply The Choosen Color On The Cell //
        $("td").click(function () {
            $(this).css("background-color", color);
        });
        
        // Reset The Color Of The Cell //
        $("td").dblclick(function () {
            $(this).css("background-color", "#FFF");
        });
        
        // Reset The Color Of The Grid //
        $("#rst").click(function () {
            $("td").css("background-color", "#FFF");
        });

    });

});
