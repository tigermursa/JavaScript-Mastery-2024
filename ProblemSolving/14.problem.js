// Sum all the numbers in the array using reducer

const arr = [1, 2, 3, 4, 5];
initialValue = 0;
const res = arr.reduce((acc, item) => {
  return acc + item;
}, initialValue); //initial value is zero (0)

console.log(res);

// make a function for that now>>>

const myArr = [5, 5];

const sumTheArrayValues = (arr) => {
  initialValue = 0;
  const res = arr.reduce((acc, item) => {
    return acc + item;
  }, initialValue); //initial value is zero (0)
  return res;
};

console.log(sumTheArrayValues(myArr));
