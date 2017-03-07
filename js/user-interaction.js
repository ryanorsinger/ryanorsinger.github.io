"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
// recursion 

function getName() {
	// prompt user their name
	var name = prompt("Please input your name");

	// if their response is empty
	if(name == "" || !isNaN(name)) {
		// call getName again
		return getName();
	} else {
		return name;
	}
}

// calling code
var name = getName();

alert("Well howdy there, " + name + "!");

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var likesPizza = confirm("Do you like pizza pie?");

if(likesPizza) {
	alert("Good! We're having a pizza party!");
} else {
	alert("OK then, we're having an ice cream party!");
}
