// global variables
var nClicks = 0; 
var startTime = new Date();

// user-defined functions

function startStopWatch() {
	if (nClicks == 0) {
		document.getElementById("clickButton").innerHTML = "Click";
		startTime = new Date();