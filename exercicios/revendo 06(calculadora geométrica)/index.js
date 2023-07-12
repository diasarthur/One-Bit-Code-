let menu = "";

function triangulo(base, altura) {
  base = parseFloat(prompt("Digite em números, qual o valor da base."));
  altura = parseFloat(prompt("Digite em números, qual o valor da altura."));
  return alert("O valor da área desse triângulo é de: " + (base * altura) /2);
};

function retangulo(base, altura) {
  base = parseFloat(prompt("Digite em números, qual o valor da base."));
  altura = parseFloat(prompt("Digite em números, qual o valor da altura."));
  return alert("O valor da área desse retângulo é de: " + (base * altura));
};

function quadrado(lado) {
  lado = parseFloat(prompt("Digite em números, qual o valor de um dos lados do quadrados."));
  return alert("O valor da área desse quadrado é de: " + (lado * lado));
};

function trapezio(baseMaior, baseMenor, altura) {
  baseMaior = parseFloat(prompt("Digite em números, qual o valor da base maior."));
  baseMenor = parseFloat(prompt("Digite em números, qual o valor da base menor."));
  altura = parseFloat(prompt("Digite em números, qual o valor da altura."));
  return alert("O valor da área desse trapézio é de: " + ((baseMaior + baseMenor) * altura) / 2);
};

function circulo(raio) {
  raio = parseFloat(prompt("Digite em números, qual o valor do raio."));
  return alert("O valor da área desse círculo é de: " + ((raio * raio) * 3.14));
};

do {
  menu = parseFloat(prompt(
    "Bem vindo a Calculadora Geométrica!" + "\nEscolha uma das alternativas: " +
    "\n1) Calcular a área de um triângulo. \n2) Calcular a área de um retangulo." +
    "\n3) Calcular a área de um quadrado. \n4) Calcular a área de um trapézio." +
    "\n5) Calcular a área do círculo. \n6) Sair."
  ));

  switch(menu) {
    case 1:
      triangulo();
      break;
    case 2:
      retangulo();
      break;
    case 3:
      quadrado();
      break;
    case 4:
      trapezio();
      break;
    case 5:
      circulo();
      break;
    case 6:
      alert("Saindo...");
      break;
    default:
      alert("Você inseriu um valor inválido, favor tentar novamente...");
  };
} while (menu !== 6);