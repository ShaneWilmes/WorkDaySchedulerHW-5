// Targeting DOM Elements
// var currentDayEl = $('#current-day');  Not needed
var saveButton = $('saveButton');
var timeBlockEL = $('time-block');



// Displays current date 
function showToday() {
    var today = moment().format('dddd, MMMM Do YYYY')
    currentDayEl.text(today)
}

// Calls showToday to display the current date
setInterval(showToday);


var textInput = document.getElementById('tasks');
var saveButtonA = document.getElementById('saveButtonA');


textInput.value = localStorage.getItem('text7');

function setAppointment() {
    var updateText = $("#tasks").val();
        localStorage.setItem('text7', updateText);
}

saveButtonA.addEventListener('click', setAppointment);



