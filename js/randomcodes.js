/* ------------ RANDOM CODES ------------ */

//Function to generate combination of characters
function generateCode(){
    //Create variables to store generated codes and the typof characters we want to show as codes
    var code='';//initialize to null value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    //Generate character multiple times using a loop
    for (i=1; i <= 8; i++){
        var char = Math.random()*str.length; //random select a character from variable and then store in a new variable
        code += str.charAt(char); //accumulate the generated character into a string of 8 characters
    }
    return code; //return the final accumulated string when loop ends;
}

//Get HTML element to display
code = generateCode()
document.getElementById("codes").innerHTML = code;

//Determine who to able or disable button
function disableButton(btnvalue){
    document.getElementById("submit").disabled = btnvalue //able/disable button
    if (btnvalue == true) { //test if button is disabled or enabled
        //set button and label color translucent
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255,255,255,0.5)";
    } else {
        //set button and label color with no transparency
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255,255,255,1)";
    }
}

//listen to user input code
var codebox = document.getElementById("codeentered"); // get textbox
codebox.addEventListener("input", evaluateCode); // listen to code entered in textbox

//run function if detected user had entered a character in textbox
function evaluateCode(){
    getCode = document.getElementById("codeentered").value; //get character entered
    var charset1 = getCode.trim(); //remove any hidden characters generated
    var charset2 = code.trim(); //remove any hidden characters generated
    console.log("charset1:"+charset1+", charset2:"+charset2);
    //test if code entered matches the number of generated characters
    if (charset1.length == charset2.length && charset1 == charset2){
        disableButton(false);//if match, run the function to enable button
    } else {
        disableButton(true);//if not match, run the function to disable button
    }
}

