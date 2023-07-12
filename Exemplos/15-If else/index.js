let number = prompt("Digite um número de 0 a 10")
let numberFloat = parseFloat(number)

if (numberFloat >= 0 && numberFloat <=4) {
  alert("Seu número é maior que 0 e menor ou igual a 4")
} else if (numberFloat > 4 && numberFloat <= 7) {
  alert("Seu número é maior que 4 e menor ou igual a 7")
} else {
  alert("Seu número é maior que 7")
}


