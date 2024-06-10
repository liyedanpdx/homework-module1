$(document).ready(function() {
    $("tbody tr td").click(function(){
        console.log('click');
        if($(this).css("background-color") === "rgb(238, 255, 230)"){
            $(this).css("background-color", "green");
        } else {
            $(this).css("background-color", "#EEFFE6");
        }
    });
});