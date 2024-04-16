const arr = [1, 3, 5, 7, 8, 9];

arr.forEach((value, index, arrs) => {
  arr[index] = value - 1;
  console.log(arrs);
});
//console.log(arr);

// here is the simple forEach loop

/*
Iterates over arrays.
Uses a callback function.
Callback function can take up to three parameters: current element, index, and array.
!Does not return anything.
Does not mutate the original array.
No built-in way to break out of the loop.
Commonly used for performing an action on each element of an array 


!forEach is a method in JavaScript, specifically it's a method of arrays. 
It's not a loop like for or while,
but rather a higher-order function that iterates 
over the elements of an array and executes a callback function once for each element.



*/
