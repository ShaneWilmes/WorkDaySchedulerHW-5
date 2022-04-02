// Targeting DOM Elements
var currentDayEl = $('#current-day');
var timeBlockEl = $('#time-block');

// Displays current date 
function showToday() {
    var today = moment().format('dddd, MMMM Do YYYY')
    currentDayEl.text(today)
}

setInterval(showToday);



