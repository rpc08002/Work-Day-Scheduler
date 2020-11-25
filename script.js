// Targeting ID to display current date using moment.min.js format
document.getElementById("displayJsDate").textContent = moment().format('dddd, MMMM Do YYYY');
// Moment Current Time
var currentTime = moment()
// Returned Current Time To Nearest Hour
currentTime = currentTime.startOf("hour");
// Calculates the Start of Day
var beforeTime = moment().startOf("day").add(9, "hours");

// Time Blocks
// 9AM
var time1 = beforeTime.add(0, "h");
time1 = time1.format('hh:mm A');
$(".block1").text(time1);

// 10AM
var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm A');
$(".block2").text(time2);
