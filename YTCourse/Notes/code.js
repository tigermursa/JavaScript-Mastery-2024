// what is the type of the null

const person = null;
console.log(typeof person); // object

// convert that string to a number

let myNumber = "2024";

console.log(typeof myNumber); // string
console.log(typeof +myNumber); // number
console.log(typeof Number(myNumber)); // number
console.log(typeof parseInt(myNumber)); // number

// convert that number to a string

let myString = 2024;
console.log("MyString now:", typeof myString); // number
console.log("MyString now:", typeof String(myString)); // string
console.log("MyString now:", typeof myString + ""); // number
console.log("MyString now:", typeof (myString + "")); // string
console.log("MyString now:", typeof myString.toString); // function
console.log("MyString now:", typeof myString.toString()); // string
/* all the falsy values
1) 0 
2) " "
3) false
4) null
5) undefine
6)NaN
*/

var a = undefined;
var b = null;
var c = "false";
if (!c) {
  console.log("I am True dear");
} else {
  console.log("I am falsy sorry!");
}

// parseInt vs parseFloat

let theString = 45.96;
console.log(parseInt(theString)); //45
console.log(parseFloat(theString)); //45.96

//Interesting..
let theString2 = "000078";
console.log(parseInt(theString2)); //78
console.log(parseFloat(theString2)); //478

//using Math.floor and Math.ceil

let numberOne = 4.4;
console.log(Math.floor(numberOne)); //4
console.log(Math.ceil(numberOne)); //5
console.log(parseFloat(Math.ceil(numberOne))); //5

//
function roundToNearestInteger(number) {
  return number % 1 >= 0.5 ? Math.ceil(number) : Math.floor(number);
}

let theNumber1 = 9.2;
let theNumber2 = 9.6;

console.log(roundToNearestInteger(theNumber1)); // 9 (floor)
console.log(roundToNearestInteger(theNumber2)); // 10 (ceil)

// arrow function
const roundToNearestInteger2 = (num) => {
  if (num % 1 >= 0.5) {
    return Math.ceil(num);
  } else {
    return Math.floor(num);
  }
};

let num1 = 8.2;
let num2 = 8.6;

console.log(roundToNearestInteger2(num1));
console.log(roundToNearestInteger2(num2));

//NaN

console.log(parseInt("hello")); //NaN

let numberNine = 9;
let stringNine = "nine";
let stringNineButInsideNumber = "9";

console.log(stringNine * numberNine); //NaN
console.log(stringNineButInsideNumber * numberNine); //81
console.log(isNaN(numberNine)); //false
console.log(isNaN(stringNine)); //true
console.log(isNaN(stringNineButInsideNumber)); //false

// !NaN === NaN, why is it false??

console.log("mursalin" - "hossain"); //NaN
console.log(true + true + true - false); //3 (1 + 1 + 1) - 0 true = 1 , false = 0
