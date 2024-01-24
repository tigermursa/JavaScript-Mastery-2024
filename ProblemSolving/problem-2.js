/*
Find the smallest number of this array 😊
*/

const arr = [44, 32, 55, 33, 4, 23, 2, 66];

function smallestOfTheArray(x) {
  let smallest = x[0];
  for (let i = 0; i < x.length; i++) {
    if (x[i] < smallest) {
      smallest = x[i];
    }
  }
  return smallest;
}

const result = smallestOfTheArray(arr);
console.log(result);

const smallestNumber = Math.min(...arr);
console.log(smallestNumber);
