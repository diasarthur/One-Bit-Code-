let askNumber = parseFloat(prompt("Digite o número que você quer que faça a tabuada"))
let numberMultiply = parseFloat(prompt("Digite até quanto você quer multiplicar"))

for(let i = 0; i <= numberMultiply; i++){
  console.log(askNumber + " x " + i + "= " + askNumber*i)
}