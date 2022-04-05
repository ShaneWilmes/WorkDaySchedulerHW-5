// Targeting DOM Elements
var currentDayEl = $('#current-day');  
var saveButton = $('.saveButton');
// var timeBlockEL = $('.time-block');
// // var HourEl = $('.hour');
// var taskEl = $('.task');



// Displays current date 
$('#current-day').text(moment().format('dddd, MMMM Do YYYY'));


// Color coded time blocks to indicate the time as past, present or future
function timeBlockDisplay() {
    var hour = moment().hours();

    $('.time-block').each(function() {
        var currentTime = parseInt($(this). attr('id'));

        if (currentTime > hour) {
            $(this).addClass('future');
            
        } else if (currentTime === hour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
    })
};

// Clicking the save button for event to be saved in local storage
saveButton.on('click', function() {

    var time = $(this).siblings('.hour').text();
    var task = $(this).siblings('.task').val();

    localStorage.setItem(time, task);
});

// Saved Events are displayed after page refresh/reload
function dayPlanner() {

    $('.hour').each(function() {
        var hour = $(this).text();
        var currentTask = localStorage.getItem(hour);

        if(currentTask !== null) {
            $(this).siblings('.plan').val(currentTask)
        }
    })

};

// Call functions to operate page

timeBlockDisplay();
dayPlanner();

    
