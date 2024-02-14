// class expression

const CarClass = class {
  constructor(brand, price, stock) {
    this.company = brand;
    this.dam = price;
    this.totalStock = stock;
  }

  //instance method
  totalProfit() {
    return this.dam * this.totalStock;
  }

  //static method (we can access this with Class name = CarClass.hi() but not with the proto)
  static hi() {
    console.log(" sorry I have computer");
  }
};

const Primo = new CarClass("Toyota", 3, 5);
const Panda = new CarClass("BMW", 30, 2);

console.log(Primo.totalProfit());
//console.log(Panda.__proto__);
CarClass.hi();
