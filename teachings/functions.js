// function 1 - Named function
 /* 
keyword function to indicate that we are declaring a function,
then assign a name. parentheses after the function name, 
then a code to execute.
*/

function greet(timeOfDay, name){
    console.log(`Good ${timeOfDay}, ${name}!`);
}
 greet("morning", "Joseph", "extra argument");
 greet("afternoon", "Nikesh");


// The values we pass in to the function are known as arguments. 
// JS function will still run if we provide the incorrect number of arguments.
// Any extras will be ignored, while any missing will be undefined inside the function.


/*
function greet(timeOfDay, name){
    retun `Good ${timeOfDay}, ${name}!`;
}
const greeting = greet("morning", "Joseph");
console.log(greeting);
*/

// Anonymous Functions 

/**

  Functions are first-order objects =  anything we could do with any other type of object, 
  such as adding them to an array or assigning them to a variable, can be done with functions too.
 
 We assign our function to a variable which we can then use to call our function elsewhere.
 
 */

const sum = function(number1, number2){
    return number1 + number2;
}

const total = sum(1,2)
console.log(total);

// Arrow Function
/*
does not need the function keyword
uses =>

*/

const multiply = (number1, number2) => {
    return number1 * number2;
}
// implicit return: const multiply = (number1, number2) => number1 * number2;
const product = multiply(4,5)
console.log(product)