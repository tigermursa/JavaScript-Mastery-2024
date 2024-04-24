// ############################
// JAVA SCRIPT LOOPS
// ############################

//1) FOR LOOP

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
const newArray = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    newArray.push(arr[i]);
  }
}

console.log("for loop", newArray);

// 2) WHILE LOOP

let i = 0;
while (i <= 5) {
  //console.log("while", i);
  i++;
}

// 3) FOR IN LOOP (used for iterating over object properties):
const person = {
  name: "Apple",
  age: 35,
  city: "Dhaka Bangladesh",
};

for (const i in person) {
  //console.log(`${i}: ${person[i]}`);
}

// 4) FOR OF LOOP (used for iterating over iterable objects like arrays):
const colors = ["red", "green", "blue"];
for (let color of colors) {
  //console.log(color);
}

// forEach Loop (method for arrays)
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  //console.log(number);
});
