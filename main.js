function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    //Add a zero in front of numbers<10
    min = checkTime(min);
    document.getElementById("clock").innerHTML = hr + ":" + min;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var date = curWeekDay+", "+curDay+" "+curMonth;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}