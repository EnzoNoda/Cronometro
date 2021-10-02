window.onload = function() {
    var sec = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSec = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset")
    var interval ;

    buttonStart.onclick = function(){
        clearInterval(interval) 
            interval = setInterval(startTimer, 10);
        
        
    }
    buttonStop.onclick = function() {
        clearInterval(interval);
    }


    buttonReset.onclick = function() {
        clearInterval(interval);
        tens = "00";
        sec = "00"; 
        appendTens.innerHTML = tens;
        appendSec.innerHTML = sec;
    }

    function startTimer() {
        tens++;

        if(tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if(tens > 99) {
            console.log("seconds");
            sec++;
            appendSec.innerHTML = "0" + sec;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (sec > 9) {
            appendSec.innerHTML = sec;
        }
    }

    








}