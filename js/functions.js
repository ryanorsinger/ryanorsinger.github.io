"use strict";
 
var myNameIs = 'Bob'; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.
function sayHello(name) {
	console.log("Hello from " + name);
} 

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
sayHello(myNameIs);
sayHello("John");
sayHello("Ringo");
sayHello("Paul");
sayHello("George");

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.
var result = (number % 2 == 0) ? false : true; 

function isOdd(number) {
	var result;

	if(number % 2 == 0) {
		result = false;
	} else {
		result = true;
	}
	return result;
}

if(isOdd(random)) {
	console.log(random + " is odd");
} else {
	console.log(random + " is even");
}

if(isOdd(1)) {
	console.log("One is the loneliest number and it's odd");
}



