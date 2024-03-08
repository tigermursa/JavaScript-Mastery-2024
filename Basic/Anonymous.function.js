//this is normal function

function square(num) {
  return num * num;
}

console.log("normal function:", square(2));

//this is arrow function

const square2 = (num) => {
  return num * num;
};
console.log("arrow function:", square2(2));

//anonymous function (inside an object)

const Obj = {
  myFunc: (num) => num * num,
};

console.log(Obj.myFunc(2));

/* 
An anonymous function in JavaScript is a function without a specified name. It is defined inline and often used for short-lived or 
one-time purposes, such as callbacks or object properties. Anonymous functions can be created using function expressions or 
arrow functions.

An anonymous function in JavaScript is like a secret helper that doesn't have a name. It's created on the spot when you need it 
and is handy for quick tasks, kind of like a tool you use briefly and then put away
*/

"hey I am back after long gap"