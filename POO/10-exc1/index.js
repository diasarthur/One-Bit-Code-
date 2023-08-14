const Coin = require("./Coin");

const coin1 = new Coin("Coin1", 3)
coin1.addSold(233)
coin1.growthRate = coin1.addSold / 100
console.log(coin1)

