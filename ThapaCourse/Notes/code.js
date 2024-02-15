// what is the type of the null

const person = null;
console.log(typeof person); // object

// convert that string to a number

let myNumber = "2024";

console.log(typeof myNumber); // string
console.log(typeof +myNumber); // number
console.log(typeof Number(myNumber)); // number

// convert that number to a string

let myString = 2024;
console.log("MyString now:", typeof myString); // number
console.log("MyString now:", typeof String(myString)); // string
console.log("MyString now:", typeof myString + ""); // number
console.log("MyString now:", typeof (myString + "")); // string
console.log("MyString now:", typeof myString.toString ); // function
console.log("MyString now:", typeof myString.toString() ); // function
