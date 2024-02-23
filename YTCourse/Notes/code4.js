/*
use map method write a function that take an array of names and returns a new array where each name is
prefix with mr

*/

const theNames = ["Babu", "jack", "hooks", "hale"];

const thePrefixName = theNames.map((currentName) => `Mr ${currentName}`);

//console.log(thePrefixName);

const numberArray = [1, 2, 3, 4, 5, 6, 7];
const usingMapWith = numberArray.map((cn) => cn + 1);
//console.log(usingMapWith);

//! Reduce

const productPrice = [2, 2];
const total = productPrice.reduce((acc, crt) => {
  // at the first here acc = 0, crt = 2
  return acc + crt; //then 2 +2 and 4 +2
}, 2);
//console.log(total);

//! the loop behind the reduce method
const productPrice2 = [2, 2];
let total2 = 2;

for (let i = 0; i < productPrice.length; i++) {
  total2 += productPrice[i];
}

//console.log(total2);

//! Index of <> lastIndexof
let myName = "Babu is the top web developer";

//console.log(myName.indexOf("n"));
console.log(Array.from(myName));
