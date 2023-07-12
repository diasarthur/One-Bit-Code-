/*
1- chamar um prompt com 5 opções 
2- todas as opções exceto a ultima, manter o código em repetição
3- mostrar na tela qual opção foi selecionada
*/

let message = "";

do {
  message = parseFloat(prompt(
    "Olá, selecione uma das opções (somente a opção '5' encerrara o programa" +
    "\n1)Não escolha essa.\n2)Nem essa.\n3)Essa também não.\n4)Muito menos essa.\n5)Encerrar..."
  ));
  alert("Você selecionou a opção de número " + message);
} while (message !== 5)
alert("Encerrando");