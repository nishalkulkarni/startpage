var name='Nishal';
//Time and Date updater
function startTime() {
    var today = new Date();
    var hr = parseInt(today.getHours());
    var min = parseInt(today.getMinutes());
    //Add a zero in front of numbers<10
    if (min < 10) {
        min = "0" + min;
    }
    document.getElementById("clock").innerHTML = hr + ":" + min;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var date = curWeekDay+", "+curDay+" "+curMonth;
    document.getElementById("date").innerHTML = date;

    var greettime = 'evening';
    if(hr>=0&&hr<12){
        greettime = 'morning';
    }else if(hr>=12&&hr<17){
        greettime = 'afternoon';
    }
    var greeting = 'Good '+greettime+', '+name+'.';
    document.getElementById("greeting").innerHTML = greeting;

    var time = setTimeout(function(){ startTime() }, 1000);
}
// Weather Updater
//Get your own API Key from apixu.com
var city = 'Pune';
let url = 'https://api.apixu.com/v1/current.json?key='+config.weather_api_key+'&q='+city;

fetch(url)
.then(res => res.json())
.then((out) => {
    var temp_c = out.current.feelslike_c;
    // var temp_f = out.current.feelslike_f;
    var tempHTML = document.getElementById('temp')
    var tempIconHTML = document.getElementById('temp-icon');
    var iconDescriptionHTML = document.getElementById('icon-description');
    tempHTML.innerHTML = temp_c+'<span>'+'C'+'</span>';
    tempIconHTML.style = "background:url(https:"+out.current.condition.icon+") no-repeat center;";
    iconDescriptionHTML.innerHTML = out.current.condition.text;
    //   console.log('Checkout this JSON! ', out.current.condition.text+' '+out.current.condition.icon);
})
.catch(err => { throw err });