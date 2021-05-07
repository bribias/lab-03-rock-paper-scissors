// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { didUserGuessCorrect } from '../utils.js';

const test = QUnit.test;

test('didUserGuessCorrect takes in a random number if that number is 1 its rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserGuessCorrect(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
