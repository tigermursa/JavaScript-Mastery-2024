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

const productPrice = [2 + 2];
const total = productPrice.reduce((acc, crt) => {
  return acc + crt;
}, 2);
console.log(total);

//! the loop behind the reduce method
const productPrice2 = [2 + 2];
let total2 = 2;

for (let i = 0; i < productPrice.length; i++) {
  total2 += productPrice[i];
}

console.log(total2);