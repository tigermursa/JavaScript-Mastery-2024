//this is normal function

function square(num) {
  return num * num;
}

console.log("normal function:", square(2));

//this is arrow function

const square2 = (num) => {
  return num * num;
};
console.log("arrow function:", square2(2));

//anonymous function

const Obj = {
  myFunc: (num) => num * num,
};

console.log(Obj.myFunc(2));