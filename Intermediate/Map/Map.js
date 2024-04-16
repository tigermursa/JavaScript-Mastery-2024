const arr = [1, 3, 5, 7, 8, 9];
const newarr = arr.map((value) => {
  let result = value + 1;
  return result;
});

console.log(newarr);

/*
A HOF
It is an array method.
Returns a new array.
Applies a function to each element of the original array.
The callback function can take up to three parameters: current element, index, and array.
Returns the result of the callback function for each element in the new array.
!Does not mutate the original array.
Commonly used for transforming elements in an array.

*/