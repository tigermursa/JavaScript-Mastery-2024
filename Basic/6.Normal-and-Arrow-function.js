// normal function :

function sumCal(num1, num2) {
  return num1 + num2;
}

console.log(sumCal(2, 5));

// arrow  function :

const sumCal2 = (num1, num2) => {
  return num1 + num2;
};

console.log(sumCal2(2, 5));

/* why arrow function came in javaScript ?

=Arrow functions were introduced with ECMAScript 6 (ES6) as part of the effort to enhance JavaScript's syntax and functionality. 
They are commonly used in modern JavaScript development for their concise and convenient syntax.

1)Concise Syntax:
Arrow functions provide a shorter syntax for writing function expressions.

2)Lexical Scoping of this:
Arrow functions inherit the this value from the surrounding code, avoiding issues with the this keyword in certain situations.

3)No Binding of arguments:
Arrow functions do not have their own arguments object, which can be advantageous in certain scenarios.

4)Implicit Return:
Arrow functions allow for implicit return when the function body is a single expression, making the code more readable.
*/

