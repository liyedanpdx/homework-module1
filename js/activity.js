$(document).ready(function() {
    $("tbody tr td:not(:first-child)").each(function(){
        if($(this).text() !== 'Not Available'){
            $(this).css('cursor', 'pointer');
        }
    });
    
    $("tbody tr td:not(:first-child)").click(function(){
        $(this).toggleClass("tdhighlight"); //add or remove class when cell is selected
        var content = $(this).text(); //get content of cell



        if($(this).text() !== 'Not Available'){
            if($(this).hasClass("tdhighlight")) {//checkif selected cell has class
                $(this).css({
                    "background-color": "rgb(157,208,51)",
                    "color": "white",
                    "font-weight": "bold"
                });


                // Get the index of the clicked td within its row
                var columnIndex = $(this).index();
                // Find the th element in the header row corresponding to the clicked td
                var thText = $("thead tr").find("th").eq(columnIndex).text();
                $('#displaySelected').css("visibility","visible");//make display box visible
                $('#displaySelected').css("margin-top","2em"); //add spaces above display box
                $('#result').append("<p>"+content+" at "+thText+"</p>"); //add child element with contents of cell

            
            } else {//if selected cell don't have class
                $(this).css({
                    "background-color": "#EEFFE6",
                    "color": "black",
                    "font-weight": "normal"
                });
                $('#result p:contains('+content+')').remove(); //remove child element
                
                if($('#result').has('p').length == false) {//check if there are any child elements within parent
                    $('#displaySelected').css("visibility","hidden"); //make display box hidden
                    $('#displaySelected').css("margin-top","0");//remove spaces above display box
                }
            }
        }
    });
});