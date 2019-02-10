var name='Nishal';
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