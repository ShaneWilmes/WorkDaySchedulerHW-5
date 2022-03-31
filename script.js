// Targeting DOM Elements
var currentDayEl = $('#currentDay');

function showToday() {
    var today = moment().format('dddd, MM Do YY')
    currentDayEl.text(today)
}

setInterval(showToday);