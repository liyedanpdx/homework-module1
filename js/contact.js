var contactSelect=document.getElementById('contactSelect');
contactSelect.addEventListener("onchange", contactInputShow);

function disableEmailShow(noShow){
    if (noShow==true){
        document.getElementById('enterEmailBlock').style.display=none;
    } else {
        document.getElementById('enterEmailBlock').style.display=block;
    }
}
function disablePhoneShow(noShow){
    if (noShow==true){
        document.getElementById('enterPhoneBlock').style.display=none;
    } else {
        document.getElementById('enterPhoneBlock').style.display=block;
    }
}

function contactInputShow(){
    var contactSelectValue=document.getElementById('contactSelect').value;
    if (contactSelectValue=='Email'){
        disableEmailShow(false);
        disablePhoneShow(true);
    } else if (contactSelectValue=='Phone'){
        disablePhoneShow(false);
        disableEmailShow(true);
    }else{
        disablePhoneShow(true);
        disableEmailShow(true);
    }
}

