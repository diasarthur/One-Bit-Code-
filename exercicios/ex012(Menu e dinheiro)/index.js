let options =  ""

do {
  options =  prompt(
    "\nSeja bem vindo, escolha uma das opções" +
    "\n1)Não escolha essa" +
    "\n2)Nem essa" +
    "\n3)Muito menos essa" +
    "\n4)Deixa de ser maluco essa não" +
    "\n5)Escolha essa" 
  )
  switch(options){
    case "1":
      alert("Você escolheu a errada, eu avisei")
      break
    case "2":
      alert("Você escolheu a errada, eu avisei")
      break
    case "3":
      alert("Você escolheu a errada, eu avisei")
      break
    case "4":
      alert("Você escolheu a errada, eu avisei")
      break
    case "5":
      alert("Até que enfim acertou")
      break
    default:
      alert("insira um valor válido")
  }
} while(options !== "5") 