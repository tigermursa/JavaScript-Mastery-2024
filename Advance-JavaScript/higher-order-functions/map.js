/*
In JavaScript, the map() method is a higher-order function that is used to iterate over elements of an array and create a new array
by applying a provided function to each element of the original array.
The map() method does not modify the original array; instead, 
it returns a new array with the results of applying the provided function to each element.
*/



const myArray = [1,2,5,6,7,9];

const usingMap = myArray.map((x)=>{
    return x +1;
},index)

console.log(index);
