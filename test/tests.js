import isEven from '../is-even.js';
const test = QUnit.test;

test('is-even', function(assert) {
   //Arrange
   // Set up your parameters and expectations
    const x = 2;
    const expected = true;

   //Act
   // Call the function you’re testing and set the result to a const
    const remainder = isEven(x);

   //Assert
   // What should the result be?
    assert.equal(remainder, expected);
});