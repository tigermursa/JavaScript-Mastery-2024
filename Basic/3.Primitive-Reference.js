/*

Primitive :
Definition: Basic building blocks of data, like simple values. Examples include numbers, strings, and booleans.

1)Immutable: Data type whose state cannot be changed after creation.

let num = 42;
num = 50; // Valid assignment, but it creates a new value

2)Stored by value :Actual value is stored in memory.

let a = 10;
let b = a; // b now contains a copy of the value of a

Reference :
Definition: Complex data types that refer to a location in memory rather than holding the actual value directly.
Examples include objects, arrays, and functions.
1)Mutable :  Data type that can be modified after creation.

let person = { name: 'John', age: 25 };
person.age = 26; // Modifying the existing object

2)Stored by reference : Memory reference is stored, not the actual value.

let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 now references the same array as arr1
arr1.push(4); // This modifies both arr1 and arr2



*/
