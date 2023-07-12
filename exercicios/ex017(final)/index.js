const vagas = []


function vagasEmprego () {

}








do {
  menu =  parseFloat(prompt(
    "Escolha uma das alternativas: " +
    "\n1) Listar as vagas de emprego" +
    "\n2) Criar uma nova vaga de emprego" +
    "\n3) Visualizar uma vaga de emprego" +
    "\n4) Inscrever um candidato em uma vaga de emprego" +
    "\n5) Excluir uma vaga de emprego" +
    "\n6) Sair"
    ))

    switch (menu) {
      case 1:
        if (vagas.length > 0) {
          for (let i = 0; i < vagas.length; i++) {
            alert(
              "Indice: " + (i) +
              "\nNome da vaga: " + vagas[i].nomevaga +
              "\nInscritos: " + vagas[i].inscritos 
              )
          }
        } else {
          alert("Não há vagas cadastradas.")
        }
        break
      case 2:
        const emprego = {}
        emprego.nomevaga = prompt("Digite o nome dessa vaga.")
        emprego.descricao = prompt("Digite uma descrição para essa vaga.") 
        emprego.datamax = prompt("Digite a data limite para essa vaga")
        emprego.inscritos = 0
        emprego.nomeinscritos = ""

        const confirmacao = confirm(
          "Precisamos que você confirme as informações da vaga:" +
          "\nFunção: " + emprego.nomevaga +
          "\nDescrição: " + emprego.descricao +
          "\nData máxima: " + emprego.datamax

          )
          if (confirm) {
            vagas.push(emprego)
          }
        break
      case 3:
        const visuVaga = parseFloat(prompt("Digite o indice da vaga que você quer ver"))
        alert(
          "Indice da vaga: " + visuVaga +
          "\nNome da vaga: " + vagas[visuVaga].nomevaga +
          "\nDescrição da vaga: " + vagas[visuVaga].descricao +
          "\nData limite: " + vagas[visuVaga].datamax +
          "\nQuantidade de canditados inscritos: " + vagas[visuVaga].inscritos +
          "\nNome dos inscritos: " + vagas[visuVaga].nomeinscritos
          )
        break
      case 4:
        let newCandidato = prompt("Digite o nome do candidato")
        let indiceVaga = parseFloat(prompt("Digite o indice da vaga que quer adicionar o novo candidato"))
        vagas[indiceVaga].nomeinscritos +=  "'" + newCandidato + "'" +  ", "
        vagas[indiceVaga].inscritos ++
        console.log(vagas[0])
        break
      case 5:
        const deletar = parseFloat(prompt("Digite o indice da vaga que você deseja excluir"))
        alert(
        "Indice da vaga: " + deletar +
        "\nNome da vaga: " + vagas[deletar].nomevaga +
        "\nDescrição da vaga: " + vagas[deletar].descricao +
        "\nData limite: " + vagas[deletar].datamax +
        "\nQuantidade de canditados inscritos: " + vagas[deletar].inscritos +
        "\nNome dos inscritos: " + vagas[deletar].nomeinscritos
        )
        confirmarDeletar = confirm("Deseja realmente excluir a vaga anterior?")
        if(confirmarDeletar) {
          vagas.slice(deletar, deletar + 1)
        }
        break
      case 6:
        break
      default:
        alert("Você inseriu um valor inválido, favor tentar novamente.")
    }
} while (menu !== 6)