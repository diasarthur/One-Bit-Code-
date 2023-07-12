let menu = "" 
const imoveis = []


do {
 menu = parseFloat(prompt(
  "Imóveis Cadastrados: " + imoveis.length +
  "\nEscolha uma das opções: " + "\n1) Cadastrar um novo imóvel." + 
  "\n2) Mostrar imóveis cadastrados." + "\n3) Sair."
  ))

  switch(menu) {
    case 1:
      let imovel = {}

      imovel.proprietario = prompt("Digite o nome completo do proprietário do imóvel.");
      imovel.quartos = prompt("Digite apenas em números, quantos quartos possui esse imóvel.")
      imovel.banheiros = prompt("Digite apenas em números, quantos banheiros possui esse imóvel.")
      imovel.garagem = prompt("Digite 'sim' se o imóvel possui garagem e 'não se ele não possuir.")

      const confirmar = confirm(
        "Para salvarmos, gostariamos que você confirmasse as seguintes informações: " +
        "\nProprietário: " + imovel.proprietario + "\nNº de quartos: " + imovel.quartos + 
        "\nNº de banheiros: " + imovel.banheiros + "\nPossui garagem? " + imovel.garagem
        )
        
        if(confirmar === true) {
          imoveis.push(imovel)
        } 
      break;
    case 2:
      if (imoveis.length > 0) {
        for (let i = 0; i < imoveis.length; i++) {
          alert(
            "Imóvel " + (i + 1) +
            "\nProprietário: " + imoveis[i].proprietario + "\nNº de quartos: " + imoveis[i].quartos + 
            "\nNº de banheiros: " + imoveis[i].banheiros + "\nPossui garagem? " + imoveis[i].garagem
            )
        }
      } else {
        alert("Não possuem imóveis cadastrados.")
      }
      break;
    case 3:
      alert("Saindo...")
      break;
    default:
      alert("Você inseriu um valor inválido, favor tentar novamente...")
  }
} while (menu !== 3)