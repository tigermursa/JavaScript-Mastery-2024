
const car = {
    imported: 250,
    price: 26500000,
    calc: function () {
     console.log(this.price * this.imported);
    },
   };
   const bike = {
    imported: 150,
    price: 2200000,
   };
   
   bike.calc();
   