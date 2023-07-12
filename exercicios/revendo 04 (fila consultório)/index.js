let menu = "";
const pacientes = [];

do {
  let paciente  = "";
  for (let i = 0; i < pacientes.length; i++) {
    paciente += (i + 1) + "º " + pacientes[i] + "\n"
  }

  menu = parseFloat(prompt(
    "Consultório do Dr. Arthur" +
    "\nPacientes na fila: \n" + paciente +
    "\nEscolha uma das opções: " + 
    "\n1) Adicionar um paciente." +
    "\n2) Consultar um paciente." +
    "\n3) Sair"
  ));

  switch(menu) {
    case 1:
      let newPaciente = prompt("Digite o nome do novo paciente.");
      pacientes.push(newPaciente);
      break;
    case 2:
      let consultarPaciente = pacientes.shift();
      if (consultarPaciente) {
        alert("Paciente: " + consultarPaciente + " será atendido(a) agora.");
      } else {
        alert("Não há pacientes na fila.")
      }
      break;
    case 3:
      alert("Saindo...");
      break;
    default:
      alert("Parece que você não inseriu um valor válido...");
  }
  
} while (menu !== 3);