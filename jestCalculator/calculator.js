// Our calculator functions will each take two arguments, perform the operation and return the result
const sum = function(a, b){
    return a + b;
};

const isEven = function(a){
    if (a%2 ==0){
    return true
} else {return false}}
// we need to explicitly export the function first, to access this function in the test file in order to make sure it works.
module.exports = {sum, isEven};