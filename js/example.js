"use strict";

var dataTypesInJS = [
	'null',
	'boolean',
	'number',
	'undefined',
	'string',
	'function',
	'array',
	'object'
];


// write a function that checks to see if today is Friday
// name the function isFriday;
// function parameter is a string containing the day of the week
// the parameter should be called currentDay

function isFriday(today) {
 	if(today == "friday" || today == "Friday") {
 		return true;
 	} else {
 		return false;
 	}
}


var today = "Wednesday";

if(isFriday(today)) {
	document.getElementById("messageOfTheDay").innerText = "TGIF";
} else {
	document.getElementById("messageOfTheDay").innerText = "get back to to work :D";
}











document.addEventListener("keyup", function(event) {

})