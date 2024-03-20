// ############################
// JAVA SCRIPT LOOPS
// ############################

//1) FOR LOOP

for (let i = 0; i <= 5; i++) {
  console.log("for", i);
}

// 2) WHILE LOOP

let i = 0;
while (i <= 5) {
  console.log("while", i);
  i++;
}

// 3) FOR IN LOOP (used for iterating over object properties):
const person = {
  name: "Apple",
  age: 35,
  city: "Dhaka Bangladesh",
};

for (const i in person) {
  console.log(`${i}: ${person[i]}`);
}

// 4) FOR OF LOOP (used for iterating over iterable objects like arrays):
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// forEach Loop (method for arrays)
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});
