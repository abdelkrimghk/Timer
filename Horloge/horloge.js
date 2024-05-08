let seeconds = 00;
let tens = 00;
let my_seconds = document.querySelector('.secondes');
let my_tens = document.querySelector('.tens');
let starter = document.querySelector('.start');
let stoper = document.querySelector('.stop');
let reseter = document.querySelector('.reset');


starter.addEventListener('click', () => {
    setInterval(start_timer, 10)
})

function start_timer() {


    tens++;
    if (tens <= 9) {
        my_tens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        my_tens.innerHTML = tens;
    }
    if (tens > 99) {
        my_seconds++;
        my_seconds.innerHTML = '0' + seeconds;
        tens = 0;
        my_tens.innerHTML = '0' + 0;

    }
    if (seeconds > 9) {
        my_seconds.innerHTML = seeconds;
    }
    if (seeconds > 99) {
        my_seconds.innerHTML = '0' + 0;
    }
}