/*
 Definition: A variable is a (named storage location) in a program that holds data,

it serves as a symbolic identifier for a value, allowing manipulation and retrieval during execution. 
Variables have specific data types and can be updated, providing adaptability. 
In mathematics, variables represent unknown or arbitrary values in equations and formulas


so in short :

A variable is a named storage location in a program that holds data .



There are total 3 type variable in JavaScript 
1) var   =  before ES6 + functional scope + none block scope + hoisted
2) let   =  after ES6 in 2015 + block-scoped + none hoisted + can be update
3) const = after ES6 in 2015  +  block-scoped + none hoisted + can't be update

*/

// Var is non block scope
{
  // var scoping = "Can you see me ?";
}

//console.log(scoping);
// we can see from outside of the scope { } , but let const are block-scoped
