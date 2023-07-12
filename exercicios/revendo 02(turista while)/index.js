/*
1- Pedir o nome do turista e armazenar
2- Perguntar se ele ja visitou alguma cidade
3- criar uma váriavel para anotar o nome das cidades
4- caso a resposta seja sim perguntar o nome da cidade, e pergunte novamente até que seja não
5- exibir o nome do turista, quantas cidade ele visitou e quais são elas.
*/

const askName = prompt ("Olá turista, me diga, qual é seu nome?");
let askVisit =  prompt (
  askName + ", agora me diga, você já visitou alguma cidade \nDigite 'sim' para verdadeiro e 'não' para falso"
  );

let city = "";
let numberCity = 0

while (askVisit === "sim") {
  let askCity = prompt("Já que sua resposta foi sim, me diga qual o nome da cidade que você visitou");
  city += "\n" + askCity;
  numberCity ++
  askVisit = prompt(
    askName + 
    ", agora me diga, você já visitou mais alguma cidade \nDigite 'sim' para verdadeiro e 'não' para falso."
    );
};

const end = prompt(
  askName + ", você visitou um total de " + numberCity + " cidades, são elas:" + city
  )