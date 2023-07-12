/*
1- perguntar o nome do turista
2- perguntar se ele já visitou alguma cidade
3- caso a resposta seja sim, perguntar qual nome da cidade que ele visitou
4- armazenar a resposta
5- continuar perguntando até a resposta dele ser nã-
6- no fim tem que exibir o nome do turista, quantas e quais cidades ele visitou
*/
const askName = prompt("Olá turista, me diga qual é seu nome.")
let citys = ""
let contador = 0

let askVisit = prompt("Você já visitou alguma cidade? Sim/Não")

while(askVisit === "Sim") {
  city = prompt("Qual nome da cidade que você visitou?")
  citys += "--> " + city + "\n"
  contador ++
  askVisit = prompt("Você já visitou mais alguma cidade? Sim/Não")
}

alert(
  "\n" + askName + " você visitou um total de " + contador + " cidades" +
  "\nNome das cidades que você visitou?"+
  "\n" + citys
  )