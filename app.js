function odliczanie() {
    var currentTime = new Date();

    var day = currentTime.getDate();
    var month = currentTime.getMonth()+1;
    var year = currentTime.getFullYear();

    var hour = currentTime.getHours();
    if (hour < 10) hour = "0" + hour;

    var minute = currentTime.getMinutes();
    if (minute < 10) minute = "0" + minute;

    var second = currentTime.getSeconds();
    if (second < 10) second = "0" + second;

    document.getElementById("zegar").innerHTML = day + '/' + month + '/' + year + ' | ' + hour + ':' + minute + ':' + second;

    setTimeout("odliczanie()", 1000);
}