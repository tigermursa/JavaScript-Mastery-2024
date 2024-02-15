function sum(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}

//this is call method
sum.call({ a: 10, b: 20 }, 30, 40);
//this is apply method
sum.apply({ a: 10, b: 20 }, [30, 40]);
//this is bind method
// const theBindFunction = sum.bind({ a: 10, b: 20 }, 30, 40);
// theBindFunction()
const theBindFunction = sum.bind({ a: 10, b: 20 });
theBindFunction(30,40)

// function sum2() {
//   let theObj = {
//     a: 10,
//     b: 20,
//   };
//   console.log(theObj);
// }

// sum2.call()
