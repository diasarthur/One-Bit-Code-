let imoveis = []
let menu = ""

do {
  menu =  parseFloat(prompt(
    "Número de imóveis cadastrados: " + imoveis.length + "\nSelecione uma das opções." +
    "\n1) Salvar um imóvel. \n2) Mostrar os imóveis cadastrados. \n3) Sair."
    ))

    switch (menu) {
      case 1:
        const imovel = {}
        imovel.dono = prompt("Digite o nome do proprietário do ímovel.")
        imovel.quartos = parseFloat(prompt("Digite o número de quartos que esse imóvel possui."))
        imovel.banheiros = parseFloat(prompt("Digite o número de banheiros que esse imóvel possui."))
        imovel.garagem = prompt("Possui garagem? sim/não")

        const confirmacao = confirm(
          "Gostaria de salvar o imóvel?" + 
          "\nDono " + imovel.dono +
          "\nQuartos " + imovel.quartos +
          "\nBanheiros " + imovel.banheiros +
          "\nTem garagem? " + imovel.garagem
        )

        if (confirmacao) {
          imoveis.push(imovel)
        }

        break

      case 2:
        for (let i = 0; i < imoveis.length; i++) {
          alert(
            "Imóvel " + (i + 1) +
            "\nProprietário: " + imoveis[i].dono +
            "\nQuartos: " + imoveis[i].quartos +
            "\nBanheiros: " + imoveis[i].banheiros + 
            "\nPossui garagem?: " + imoveis[i].garagem
            )
        }
        break
      case 3:
        alert("Saindo...")
        break
      default:
        alert("Você inseriu um valor inválido, apenas as opções '1', '2' e '3' são aceitas pelo programa.")
    }

} while (menu !== 3)


