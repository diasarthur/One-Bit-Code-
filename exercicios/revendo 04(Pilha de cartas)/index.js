let menu = "";
let cards = [];

do {
  menu = parseFloat(prompt(
    "Baralho: \n" + "Quantidade de cartas no baralho: " + cards.length + 
    "\nEscolha uma das opções: " + "\n1) Adicionar uma carta ao baralho." +
    "\n2) Puxar uma carta do baralho." + "\n3) Sair."
    ));

    switch (menu) {
      case 1:
        let newCard = prompt("Digite no nome da carta");
        cards.push(newCard);
        break;
      case 2:
        let removeCard = cards.pop();
        if (removeCard) {
          alert("Você puxou a carta: " + removeCard + ".");
        } else {
          alert("Não há cartas no baralho.")
        }
        break;
      case 3:
        alert("Saindo...");
        break;
      default:
        alert("Você inseriu uma opção inválida, tente novamente...");
    }
} while (menu !== 3);