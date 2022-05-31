/*
A variable's scope determines where it can be accessed or reassigned from, or even if it can be reassigned at all.
*/

let numbers = [1,2,3,4,5];
const numbersSquared = [];

// temporary variable called number is assigned to the next value from the array before we print out its current value
// the let keyword gives us "block scope" - can only access within this block
for (let number of numbers){
    numbersSquared.push(number ** 2);
}
/**
 * We can still access our number variable outside of the loop.
 * console.log(`numbers outside of the loops: ${numbers}`);
 * That's because the variable has been declared in the global scope, which means it can be accessed from anywhere in our program.
 */

console.log(numbersSquared);