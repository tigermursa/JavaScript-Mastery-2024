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

const createHelloWorld = () => {
  return () => {
    let value = "Hello World ✔";
    return value;
  };
};

//Example 1:

const fn = createHelloWorld();
const runFn = fn();
console.log("1:", runFn);
console.log("2:", fn({}, null, 45));
//Example 2:
