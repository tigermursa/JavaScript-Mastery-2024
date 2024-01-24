/*
Find the smallest & largest number of this array 😊
a) make a function for that 
b) use reduce
c) use math function
*/

const arr = [6, 8, 9, 4, 3, 23, 2, 5];

// solution a :
//using function
const smallestAndLargestNumber = (a) => {
  let smallest = a[0];
  let largest = a[0];
  for (let j = 0; j < a.length; j++) {
    if (a[j] > largest) {
      largest = a[j];
    }
    if (a[j] < smallest) {
      smallest = a[j];
    }
  }
  return { smallest, largest };
};

console.log("by using function : ", smallestAndLargestNumber(arr));

//solution b :
//using reduce method
const usingReduce = arr.reduce((min, current) =>
  min < current ? min : current
);
const usingReduceLargest = arr.reduce((large, current) =>
  large > current ? large : current
);
console.log("from reduce smallest :", usingReduce);
console.log("from reduce largest :", usingReduceLargest);

// solution c :
//using math build in function

const small = Math.min(...arr);
const large = Math.max(...arr);
console.log("from Math Function smallest :", small);
console.log("from Math Function largest :", large);
