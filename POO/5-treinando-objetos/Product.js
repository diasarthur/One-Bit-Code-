class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description =description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(value) {
    const discount = (value * this.price) / 100;
    this.price -= discount;
  }
}
const addDescription = "Bolacha sabor chocolate com 30% menos de gordura."

const bolacha = new Product('bolacha', addDescription, 4);
bolacha.addToStock(25);
bolacha.calculateDiscount(10);
console.log(bolacha)
