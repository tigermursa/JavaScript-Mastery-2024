// class expression

const CarClass = class {
  constructor(brand, price, stock) {
    this.company = brand;
    this.dam = price;
    this.totalStock = stock;
  }

  //instance method(উদাহরণ)
  totalProfit() {
    return this.dam * this.totalStock;
  }

  //static method স্থির (we can access this with Class name = CarClass.hi() but not with the proto)
  static hi() {
    console.log(" sorry I have computer");
  }
};

const Primo = new CarClass("Toyota", 3, 5);
const Panda = new CarClass("BMW", 30, 2);

console.log(Primo.totalProfit());
//console.log(Panda.__proto__);
CarClass.hi();

//Therefore, the prototype in this context is CarClass.prototype

//class expression
const SchoolStudent = class {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
};

const rollOne = new SchoolStudent("Alvi", 12, 4.8);
console.log(rollOne);

//constructor function
function collageStudent(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}

// instance
const rollTwo = new collageStudent("Xayeem", 16, 5.8);
console.log(rollTwo);

/*
A constructor function in JavaScript is a special type of function that is used to create and initialize objects. 
It serves as a blueprint for creating instances of objects by defining their properties and methods. 
Constructor functions are invoked with the new keyword, and they typically use the this keyword to assign 
values to the properties of the newly created object.

*/
