// class expression

const CarClass = class {
  constructor(brand, price, stock) {
    this.company = brand;
    this.dam = price;
    this.totalStock = stock;
  }
};

const Primo = new CarClass("Toyota", 30, 7);

console.log(Primo);