function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        console.log(a + b + c + d);
      };
    };
  };
}

// Example usage:
const result = sum(1)(2)(3)(4);

const sum1 = (a) => (b) => (c) => (d) => {
  console.log(a + b + c + d);
};

const res = sum1(1)(2)(3)(4);



