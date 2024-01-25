/*
Write an arrow function called checkOddEven that takes a numerical input and returns a message 
indicating whether the number is odd or even.
The function should handle both positive and negative integers.

console.log(checkOddEven(7)); // Output: 'Odd'
console.log(checkOddEven(-4)); // Output: 'Even'
console.log(checkOddEven(0)); // Output: 'Even'
*/

const oddOrEven = (x) => {
  if (x % 2 === 0) {
    return `Your input number ${x} is a Even number!`;
  } else {
    return `Your input number ${x} is a Odd number!`;
  }
};

const result = oddOrEven(5555556);
console.log(result);
