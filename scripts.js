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
var openList = '<li class="partner">';
var closeList = '</li>'

//create for loop to create the 6 images
for (var i=0; i<6; i++){
    //creat file name and add to array
    photos.push('<img src="images/partners/partner-' + fileSuffix[i] +'.png"' + ' alt="' + alts[i] + '">');
    image = openList + photos[i] + closeList;
    imageList.push(image);
}

//display our images
document.getElementById("partners").innerHTML=imageList.join(" ");