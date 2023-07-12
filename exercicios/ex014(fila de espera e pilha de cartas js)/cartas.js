let cards = []
let menu = ""
do {
  menu = prompt (
    "Número de cartas no baralho: " + cards.length +
    "\nEscolha uma das opções: \n1) Adicionar uma carta \n2) Puxar uma carta \n3) Sair"
  )
  switch (menu) {
    case "1":
      let newCard = prompt("Digite o nome da carta que você quer adicionar")
      cards.unshift(newCard)
      break
    case "2":
      let removeCard = cards.pop()
      if (removeCard) {
        alert("Você removeu a carta " + "'" + removeCard + "'" + " do baralho.")
      } else {
        alert("Não possui carta alguma no baralho.")
      }
      break
    case "3":
      alert("Encerrando...")
      break
    default: 
      alert("Você inseriu um valor inválido.")
      break
  }
} while (menu != 3)