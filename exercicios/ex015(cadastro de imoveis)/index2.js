let properties = []
let menu = ""

do {
  menu = parseFloat(prompt(
    "Número de imóveis cadastrados: " + properties.length +
    "\nEscolha uma das opções: " +
    "\n1) Adicionar um novo imóvel. \n2) Olhar os imóveis salvos. \n3) Sair."
    ))
   
    switch (menu) {
      case 1:
        let imovel = {}
        imovel.proprietario = prompt("Digite o nome do proprietário.")
        imovel.quartos = prompt("Digite quantos quartos possui este imóvel.")
        imovel.banheiros = prompt("Digite quantos banheiros possui este imóvel.")
        imovel.garagem = prompt("Esté imóvel possui garagem? sim/não.")

        let confirmacao = confirm(
          "Para adicionar esse imóvel você precisa confirmar as informações do imóvel: " +
          "\nNome do proprietário: " + imovel.proprietario +
          "\nNúmero de quartos: " + imovel.quartos +
          "\nNúmero de banheiros: " + imovel.banheiros +
          "\nPossui garagem?: " + imovel.garagem
          )

          if (confirmacao) {
            properties.push(imovel)
          }
        break
      case 2:
          for (let i = 0; i < properties.length; i++) {
            alert (
            "Imóvel " + (i + 1) +
            "\nProprietário: " + properties[i].proprietario +
            "\nQuartos: " + properties[i].quartos +
            "\nBanheiros: " + properties[i].banheiros + 
            "\nPossui garagem?: " + properties[i].garagem
            )
          }
        break
      case 3:
          alert("Saindo...")
        break
      default:
        alert("Você inseriu um valor inválido, escolha entre as opções '1', '2' e '3'.")
    }

} while (menu !== 3)