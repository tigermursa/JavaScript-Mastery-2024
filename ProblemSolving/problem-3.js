/*
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the 
previous value every subsequent time it is called (n, n + 1, n + 2, etc).

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.


Hint 1
In JavaScript, a function can return a closure. 
A closure is defined as a function and the variables declared around it (it's lexical environment).
Hint 2
A count variable can be initialized in the outer function and mutated in the inner function.

*/

const createCounter = (n) => {
  return () => {
    return n++;
  };
};

// Example 1
let counter1 = createCounter(10);
let output1 = ["call", "call", "call", "call"].map(() => counter1());
console.log(output1); // Output: [10, 11, 12]

// Example 2
let counter2 = createCounter(-2);
let output2 = ["call", "call", "call", "call", "call"].map(() => counter2());
console.log(output2); // Output: [-2, -1, 0, 1, 2]
