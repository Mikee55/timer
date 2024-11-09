$(document).ready(function() {

    let intervalIdTop;
    let intervalIdBottom;
    let secondsTop = 0;
    let secondsBottom = 0;
    let minutesTop = 0;
    let minutesBottom = 0;

    $("#circle-button-one").on('click', function() {
        clearInterval(intervalIdBottom);

        intervalIdTop = setInterval(() => {

            console.log("top button clicked");
            secondsBottom++;
            if (secondsBottom === 10) {
                minutesBottom++;
                secondsBottom = 0;
            }
            $('#bottom-timer').text(`${minutesBottom.toString().padStart(2, '0')}:${secondsBottom.toString().padStart(2, '0')}`);
        }, 1000);
    });
    $("#circle-button-two").on('click', function() {
        clearInterval(intervalIdTop);

        intervalIdBottom = setInterval(() => {
            console.log("bottom button clicked");
            $('#top-timer').text(`${minutesTop.toString().padStart(2, '0')}:${secondsTop.toString().padStart(2, '0')}`);
        }, 1000);
    });
});