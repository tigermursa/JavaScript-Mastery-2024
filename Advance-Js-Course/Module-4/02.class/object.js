// / Making Object Using Object.Create()

const CarProto = {
  totalProfit() {
    return this.price * this.stock;
  },
  real(brand, price, stock) {
    //real can be any name not fixed
    this.company = brand;
    this.price = price;
    this.stock = stock;
  },
};

const M31 = Object.create(CarProto);

// M31.brand = "Sam";
// M31.price = 15;
// M31.stock = 12;
M31.real("sam", 2, 4);

console.log(M31.totalProfit());
