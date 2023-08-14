class Coin {
  constructor(name, valueInDolar) {
    this.name = name;
    this.valueInDolar = valueInDolar;
    this.sold = 0;
    this.growthRate = 0;
  }

  addSold(value) {
    this.sold += value;
  }
  growthRateAdjust() {

  }
}

module.exports = Coin