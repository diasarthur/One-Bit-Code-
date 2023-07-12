let askNumberOne = prompt("Digite um número de 0 a 1000")
let askNumberTwo = prompt("Novamente digite um número de 0 a 1000")
 
let askNumberOneNumber = parseFloat(askNumberOne)
let askNumberTwoNumber = parseFloat(askNumberTwo)

let addition = askNumberOneNumber + askNumberTwoNumber
let subtraction = askNumberOneNumber - askNumberTwoNumber
let multiplication = askNumberOneNumber * askNumberTwoNumber
let division = askNumberOneNumber / askNumberTwoNumber

alert(
  "\nA adição de " + askNumberOne + " e " + askNumberTwo + " é de " + addition + 
  "\nA subtração do mesmo dos mesmo números que você me falou é de  " + subtraction + 
  "\nA multiplicação deles é de " + multiplication + 
  "\nE por fim a divisão deles é de " + division
  )