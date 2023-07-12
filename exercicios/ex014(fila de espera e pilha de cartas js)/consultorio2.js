let queue = []
let options = ""

do {
  let pacientes = ""
  for (let i = 0; i < queue.length; i++) {
    pacientes = (i + 1) + "° - " + queue[i] + "\n"
  }
  options = prompt (
    "Fila de espera:\n" + pacientes + "\nEscolha uma opção: " +
    "\n1) Adicionar um paciente" + "\n2) Remover um paciente" + "\n3) Sair"
  )
  
  switch(options){
    case "1":
      novoPaciente = prompt("Digite o nome do novo paciente")
      queue.push(novoPaciente)
      break
    case "2":
      let pacienteConsulta = queue.shift()
        if (pacienteConsulta) {
          alert(pacienteConsulta + " será atendido agora")
        } else {
          alert("Não tem paciente na fila")
        }
        break
    case "3":
      alert("Encerrando")
      break
    default:
      alert("Você inseriu '" + options + "' e ele é um valor invalido, favor tentar novamente") 
  }



} while (options !== "3")