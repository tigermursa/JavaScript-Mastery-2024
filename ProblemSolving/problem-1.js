/*
Write a function createHelloWorld. It should return a new function that always returns "Hello World".

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".

*/

var createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};

// Example usage 1:
const f1 = createHelloWorld();
console.log(f1());

// Example usage 2:
const f2 = createHelloWorld();
console.log(f2({}, null, 42));