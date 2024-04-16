const arr = [1, 3, 5, 7, 8, 9];
const newArray = arr.find((value) => {
  return value > 5;
});

console.log(newArray);


/*
Array method.
Returns the first element in the array that satisfies a provided condition.
Uses a callback function.
Callback function returns a boolean.
Returns undefined if no matching element is found.
Does not modify the original array.
Commonly used for searching for a specific element in an array based on a condition
*/