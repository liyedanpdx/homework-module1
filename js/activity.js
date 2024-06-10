$(document).ready(function() {
    $("tbody tr td:not(:first-child)").each(function(){
        if($(this).text() !== 'Not Available'){
            $(this).css('cursor', 'pointer');
        }
    });
    $("tbody tr td:not(:first-child)").click(function(){
        console.log($(this).css("background-color"));
        if($(this).text() !== 'Not Available'){
            if($(this).css("background-color") !== "rgb(157, 208, 51)"){
                $(this).css({
                    "background-color": "rgb(157,208,51)",
                    "color": "white",
                    "font-weight": "bold"
                });
            } else {
                $(this).css({
                    "background-color": "#EEFFE6",
                    "color": "black",
                    "font-weight": "normal"
                });
            }
        }
    });
});