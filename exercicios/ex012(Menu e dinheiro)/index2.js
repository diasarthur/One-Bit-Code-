let money = parseFloat(prompt("Olá, digite apenas usando números, a quantia inicial de dinheiro que você tem"))
let ask = ""


do{
  ask = prompt(
  "Voce tem " + money + " reais, digite apenas o número que representa uma das opções que você deseja" +
  "\n1) Adicionar dinheiro" +
  "\n2) Remover Dinheiro" +
  "\n3) Sair"
  )
  switch(ask) {
    case "1":
      money += parseFloat(prompt("Digite em números quanto de dinheiro você quer adicionar"))
      break
    case "2":
      money -= parseFloat(prompt("Digite em números quanto de dinheiro você quer remover"))
      break
  }
} while (ask !== "3")
