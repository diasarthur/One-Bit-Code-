/*
1- Perguntar quanto dinheiro atualmente a pessoa tem disponivel e armazenar
2- mostrar na tela quanto dinheiro a pessoa tem, juntamente com um promp contendo 3 opções, adicionar, remover e sair
3- o programa deve continuar até o usuario clicar em sair
*/

let money = parseFloat(prompt(
  "Olá, seja bem vindo ao controle de finanças\n\nDigite apenas em valores numéricos, quanto dinheiro você possui atualmente"
  ))
let options = ""
  do {
    options = parseFloat(prompt(
      "Você possui um total de " + money + " reais, selecione a opção que lhe interessa" +
      "\n\n1)Adicionar dinheiro.\n2)Remover dinheiro.\n3)Sair."
      ))
    switch(options) {
      case 1:
        let adicionar = parseFloat(prompt("digite apenas em valores numéricos, quanto você gostaria de adicionar a sua conta"))
        money += adicionar
        console.log(money)
        break
      case 2: 
        let remover = parseFloat(prompt("digite apenas em valores numéricos, quanto você gostaria de remover da sua conta"))
        money -= remover
        break
      }
  } while (options !== 3)

alert("Encerrando...")