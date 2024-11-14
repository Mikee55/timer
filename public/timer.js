$(document).ready(function() {

    let intervalIdTop;
    let intervalIdBottom;
    let secondsTop = 60;
    let secondsBottom = 60;
    let minutesTop = 5;
    let minutesBottom = 5;
    let isTopTimerRunning = false;
    let isBottomTimerRunning = false;

    $("#circle-button-one").on('click', function() {
        clearInterval(intervalIdBottom);

        if (!isTopTimerRunning) {
            minutesBottom--;
            isTopTimerRunning = true;
        }

        intervalIdTop = setInterval(() => {

            console.log("top button clicked");
            
            secondsBottom--;
            if (secondsBottom === 0) {
                minutesBottom--;
                secondsBottom = 60;
            }
            $('#bottom-timer').text(`${minutesBottom.toString().padStart(2, '0')}:${secondsBottom.toString().padStart(2, '0')}`);
        }, 1000);
    });
    $("#circle-button-two").on('click', function() {
        clearInterval(intervalIdTop);

        if (!isBottomTimerRunning) {
            minutesTop--;
            isBottomTimerRunning = true;
        }

        intervalIdBottom = setInterval(() => {
            secondsTop--;
            if (secondsTop === 0) {
                minutesTop--;
                secondsTop = 60;
            }
            console.log("bottom button clicked");
            $('#top-timer').text(`${minutesTop.toString().padStart(2, '0')}:${secondsTop.toString().padStart(2, '0')}`);
        }, 1000);
    });
    $("#clear-button").on('click', function() {
        clearInterval(intervalIdBottom);
        clearInterval(intervalIdTop);
        secondsTop = 60;
        secondsBottom = 60;
        minutesTop = 5;
        minutesBottom = 5;
        $('#bottom-timer').text(`${minutesBottom.toString().padStart(2, '0')}:00`);
        $('#top-timer').text(`${minutesTop.toString().padStart(2, '0')}:00`);
    });
});