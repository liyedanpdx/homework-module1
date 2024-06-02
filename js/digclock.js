//Time
function currentTime(){
    //Declare variables
    var d = new Date(); //Get current date
    var hr = d.getHours(); //Get current hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); //Get current seconds
    var ampm; //Declare empty variable to storeAM Or PM

    var utchr = d.getUTCHours(); //Get current Greeenwich Mean Time (GMT)
    console.log(utchr)
    var timeDiff; //To store time difference between GMT hour and Local hour
    var adjTimeDiff; //To store time difference converted to positive number
    var timeZone; //To store the 4 time zones (PT,MT,CT,ET)

    //Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    //Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }

    //Determine AM or PM string
    if (hr == 12) {
        ampm = "PM";//Set to PM
    } else if (hr > 12) {
        hr -= 12; //Deduct 12 from hours greater than 12 (military time)
        ampm = "PM";//Set to PM
    } else {
        ampm = "AM";//Set to AM
    }

    // Check if current date is within Daylight Saving Time period
    var dstStart = new Date(d.getFullYear(), 2, 8); // Daylight Saving Time starts on March 8th
    var dstEnd = new Date(d.getFullYear(), 10, 1); // Daylight Saving Time ends on November 1st
    var isDst = d.getTime() >= dstStart.getTime() && d.getTime() < dstEnd.getTime();

    utchr12 = utchr % 12 || 12
    timeDiff = utchr12 - hr;
    // Adjust UTC hour if DST is in effect
    adjTimeDiff = timeDiff < 0 ? timeDiff + 12 : timeDiff;
    if (isDst) {
        adjTimeDiff += 1; // Adjust UTC hour by 1 if DST is in effect
    }

    switch (adjTimeDiff) {
        case 5:
            timeZone = "ET"; 
            break;
        case 6:
            timeZone = "CT"; 
            break;
        case 7:
            timeZone = "MT"; 
            break;
        case 8:
            timeZone = "PT"; 
            break;
        default:
            timeZone = ""; 
    }

    //Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    //Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time;//adding time
    

    //Run time data function every 1 second
    setInterval(currentTime, 1000); //setting timer
}
//Initial run of time data function
currentTime();