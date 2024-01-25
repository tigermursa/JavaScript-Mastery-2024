/*
make a arrow function that will say the input number is odd or even;
*/

const oddOrEven = (x) => {
  if (x % 2 === 0) {
    return `Your input number ${x} is a Even number!`;
  } else {
    return `Your input number ${x} is a Odd number!`;
  }
};

const result = oddOrEven(5555556);
console.log(result);
