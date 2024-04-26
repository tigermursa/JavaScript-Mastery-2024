// ############################
// JAVA SCRIPT LOOPS
// ############################

//!1) FOR LOOP

/*
format 
for(let i = 0; i < 10 ; i++){
  console.log(i)
}


*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayOfEven = [];
const arrayOfOdd = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    arrayOfEven.push(arr[i]);
  } else {
    arrayOfOdd.push(arr[i]);
  }
}

// console.log("Even", arrayOfEven);
// console.log("Odd", arrayOfOdd);

//! 2) WHILE LOOP

/*
format 

let i = 0;
while( i < 10 ){
  console.log(i)
   i++;
}


*/

let i = 0;
while (i < arr.length) {
  if (arr[i] % 2 === 0) {
    arrayOfEven.push(arr[i]);
  } else {
    arrayOfOdd.push(arr[i]);
  }
  i++;
}

// console.log("Even", arrayOfEven);
// console.log("Odd", arrayOfOdd);

// 3) FOR IN LOOP (used for iterating over object properties):
const person = {
  name: "Apple",
  age: 35,
  city: "Dhaka Bangladesh",
};

for (key in person) {
  //console.log(person[key]);
}

// 4) FOR OF LOOP (used for iterating over iterable objects like arrays):
const colors = ["red", "green", "blue"];

for (parts of colors) {
  //console.log(parts);
}

// forEach Loop (method for arrays)
const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (number) {
//   console.log(number +10);
// });


//! Arrow function

numbers.forEach((num)=>{
console.log(num +1);
})