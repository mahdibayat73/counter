let count = 0;
let countInterval;
let Counter = document.getElementById('counter');
let startButton = document.getElementsByClassName('start')[0];
let stopButton = document.getElementsByClassName('puse')[0];

function Star() {
    countInterval = setInterval(function(){
        count += 1;
        Counter.innerHTML = count;
        startButton.disabled = true;
        startButton.style.cursor = 'not-allowed';
        stopButton.disabled = false;
        stopButton.style.cursor = 'pointer';
    },1000)
}

function Stop() {
    clearInterval(countInterval);
    startButton.disabled = false;
    startButton.style.cursor = 'pointer';
    stopButton.disabled = true;
    stopButton.style.cursor = 'not-allowed';
}