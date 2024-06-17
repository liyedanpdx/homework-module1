var photos = [];
var fileSuffix = [
    "bustour",
    "cabinrental",
    "campingadv",
    "collegetours",
    "rentalbike",
    "tourgroup"
];
var alts=[
    "Partner Bus Tours",
    "Partner Cabin Rental",
    "Partner Camping Adventure",
    "Partner College Tours",
    "Partner Bike Rentals",
    "Partner Tour Group"
]
var imageList = [];
var image;
var openList = '<div class="col">';
var closeList = '</div>'

//create for loop to create the 6 images
for (var i=0; i<6; i++){
    //creat file name and add to array
    photos.push('<img src="images/partners/partner-' + fileSuffix[i] +'.png"' + ' alt="' + alts[i] + '" class="partner">');
    image = openList + photos[i] + closeList;
    imageList.push(image);
}

//display our images
document.getElementById("partners").innerHTML=imageList.join(" ");

/* ------------ RANDOM CODES ------------ */
//Note: submit button is initially disabled upon loading of this page - see <body> in html
var code = ' '; //to store generated codes and initialize to empty value
var getCode = ' ';//to store entered code
var btnvalue;//for button boolean value
//create variable to hold the type of characters we want to show as codes
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';