// Targeting DOM Elements
var currentDayEl = $('#current-day');
// var timeBlockEl = $('#time-block');
var saveButton = $('saveButton');



var taskInputEL = $('#tasks');



// Displays current date 
function showToday() {
    var today = moment().format('dddd, MMMM Do YYYY')
    currentDayEl.text(today)
}

// Calls showToday to display the current date
setInterval(showToday);





// function printDailyTask(dailyTask) {
//     var taskInputEL = $('<textarea>').addClass('p-2').text(dailyTask);

// }


// document.getElementById('tasks').innerHTML = function
// var saveButton = document.getElementById('#saveButton');
// localStorage.setItem('tasks');







