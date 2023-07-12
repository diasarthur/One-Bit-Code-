let queue = []
let optionss= ""

do {
  let pacientes = ""
  for (let i = 0; i < queue.length; i++) {
    pacientes += (i + 1) + "º - " + queue[i] + "\n"
  }

  optionss = prompt (
    "\nPacientes: \n" + pacientes +
    "\nEscolha uma ação;" +
    "\n1) Novo paciente\n2) Consultar paciente\n3) Sair"
    )

    switch (optionss) {
      case "1":
        const novoPaciente = prompt("Qual é o nome do paciente?")
        queue.push(novoPaciente)
        break
      case "2":
        const pacienteConsulta =  queue.shift()
        if (pacienteConsulta) {
          alert(pacienteConsulta + " vai ser atendido agora.")
        } else {
          alert("A fila está vazia")
        }

        break
      case "3":
        alert("Encerrando")
    }
} while (optionss !== "3")