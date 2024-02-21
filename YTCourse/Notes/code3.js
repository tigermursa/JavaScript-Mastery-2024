//! Array

const myArray = [12, 56, 3, 6, 9, 90];
//console.log(myArray.at(-2));

const name1 = {
  0: "hasan",
  1: "hossain",
};

const name2 = ["hasan", "hossain", "lala"];

// console.log(name1[1]);
// console.log(name2[1]);

// for (let item of name2) {
//   console.log(item);
// }

//! forEach vs map
// map return an array of value forEach don't

const usingMap = name2.map((names) => console.log(names));
