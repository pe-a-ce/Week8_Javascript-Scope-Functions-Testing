// named after file we are testing

const {sum, isEven} = require('./calculator');
// . means where we are right now
/*
to use the functions defined in calculator.js, need to import them here in test file. 
To import from a file, 'require' keyword and need to supply a relative filepath instead of a package name
*/

//a describe block to group together related tests
describe('addition functionality', () => { 

// test needs 2 args, string: what are we testing and definition for the test.
    test('can add two small positive numbers', ()=> {

    //Arrange - do any setup
    //Act - call the function to test

        const actual = sum(2,3);

    //Assert - call the assertion method

        const expected = 5;
        expect(actual).toBe(expected);

    //expect(value from calling method).toBe()
    // The toBe() method is an example of a matcher and defines how we are comparing the result with the expected value
    });

    test('2 is even', ()=> {
        expect(isEven(2)).toBe(true);
    })

    test('5 is not even', ()=> {
        expect(isEven(5)).toBe(false);
    })

})