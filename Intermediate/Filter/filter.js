const arr = [1, 3, 5, 7, 8, 9];
const newArray = arr.filter((value) => {
  return value > 8;
});

console.log(newArray);

/*

Array method.
Creates a new array with elements that pass a provided condition.
Uses a callback function.
Callback function returns a boolean.
Does not modify the original array.
Commonly used for extracting elements based on a condition

*/
