"use strict";

console.log("Ladies and gentlemen, welcome to FizzBuzz");

// start a loop here
// go 'till here
// if number is divible by 3
// if number is divisible by 5
// if number is divisible by both

for(var i = 1; i <= 100; i+=1) {

	if(i % 3 === 0 && i % 5 === 0){
		console.log("FizzBuzz");
	} else if(i % 3 === 0) {
		console.log("Fizz");
	} else if(i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}