var myAlert = alert("The Black Roses would like to know your location.");
console.log(myAlert);

function startCounting(duration, display) {
    var count = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(count / 60, 10);
        seconds = parseInt(count % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--count < 0) {
            count = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startCounting(fiveMinutes, display);
}; //code used from https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
  //author for this code is https://jsfiddle.net/ayyadurai/GXzhZ/1/
