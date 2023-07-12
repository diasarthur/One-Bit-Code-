let menu = prompt(
  "Seja bem vindo caro visitante, digite o número da opção que você deseja" +
  "\n" +"1) Não clique aqui" +
  "\n" +"2) Não clique aqui" +
  "\n" +"3) Não clique aqui" +
  "\n" +"4) Não clique aqui" +
  "\n" +"5) clique aqui"
)

while(menu < 5){
  alert("Você selecionou o o número " + menu + " tente novamente")
  menu = prompt(
    "Seja bem vindo caro visitante, digite o número da opção que você deseja" +
    "\n" +"1) Não clique aqui" +
    "\n" +"2) Não clique aqui" +
    "\n" +"3) Não clique aqui" +
    "\n" +"4) Não clique aqui" +
    "\n" +"5) Encerrar"
  )

}

alert("Estamos encerrando")
window.close()