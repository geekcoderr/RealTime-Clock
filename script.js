const weekday = ["ravivar","sonvar","mangalvar","bhuddvar","bhraspatvar","shukravar","sanivar"];

const chaughadiya={
    "ravivar":{},
    "sonvar":{},
    "mangalvar":{},
    "bhuddvar":{},
    "bhraspatvar":{},
    "shukravar":{},
    "sanivar":{}

};


var ms = document.querySelector(".millisecond");
var second = document.querySelector(".second");
var minute = document.querySelector(".minute");
var hr = document.querySelector(".hour");
var session = document.querySelector('.session');
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = (dateTime.getSeconds()<10?('0'+dateTime.getSeconds()):dateTime.getSeconds());
    var millisecond=(dateTime.getMilliseconds() / 10 | 0);
    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }
    ms.innerText=millisecond;
    second.innerText=sec;
    minute.innerText=min;
    hr.innerText=hrs;
}
setInterval(displayTime, 1);