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

// 11AM
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm A');
$(".block3").text(time3);

// 12PM
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm A');
$(".block4").text(time4);

// 1PM
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm A');
$(".block5").text(time5);

// 2PM
var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh:mm A');
$(".block6").text(time6);

// 3PM
var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh:mm A');
$(".block7").text(time7);

// 4PM
var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh:mm A');
$(".block8").text(time8);

// 5PM
var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh:mm A');
$(".block9").text(time9);