let firstCarName = prompt("Digite o nome do primeiro carro")
let firstCarSpeed = prompt("Agora digite a velocidade do primeiro carro")
let secondCar = prompt("Digite o nome do segundo carro")
let secondCarSpeed = prompt("Agora digite a velocidade do segundo carro")
let firstCarFloat = parseFloat(firstCarSpeed)
let SecondCarFloat = parseFloat(secondCarSpeed)


if (firstCarFloat > SecondCarFloat) {
  alert("O véiculo um é mais rápido que o veículo dois")
} else if (SecondCarFloat > firstCarFloat) {
  alert("O véiculo dois é mais rápido que o veículo um") 
} else {
  alert("Eles tem a mesma velocidade")
}