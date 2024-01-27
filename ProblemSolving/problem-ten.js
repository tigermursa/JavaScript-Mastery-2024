/*
Write a function that calculates the factorial of a given positive integer.
The factorial of a number is the product of all positive integers up to that number.
console.log(factorial(5)); // Should return 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // Should return 1 (by convention, the factorial of 0 is 1)
Example:
*/

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));
