let menu = ""
let value1 = ""
let value2 = ""
let value3 = ""

do {
  menu = prompt(
    "Escolha uma alternativa." + "\n1) Calcular a área de um triângulo. \n2) Calcular a área de um retângulo." +
    "\n3) Calcular a área de um quadrado. \n4) Calcular a área de um trapézio. \n5) Calcular a área de um circulo" +
    "\n6) Sair."
    )

  switch(menu) {
    case "1":
      function calcTriangulo(base, altura) {
        let triangulo = alert("Área do triângulo que você pediu: " + (base * altura) / 2)
        return triangulo
      }

      value1 = parseFloat(prompt("Primeiro, me diga a base desse triângulo:"))
      value2 = parseFloat(prompt("Agora, me diga a altura desse triângulo:"))

      calcTriangulo(value1, value2)
      break;
    case "2":
      function calcRetangulo(base, altura) {
        let retangulo = alert("Área do retângulo que você pediu: " + (base * altura))
        return retangulo
      }

      value1 = parseFloat(prompt("Primeiro, me diga a base desse retângulo: "))
      value2 = parseFloat(prompt("Agora, me diga a altura desse retângulo: "))

      calcRetangulo(value1, value2)
      break;
    case "3":
      function calcQuadrado(lado) {
        let quadrado = alert("Área do quadrado que você pediu: " + (lado * lado))
        return quadrado
      }

      value1 = parseFloat(prompt("Primeiro, me diga o lado desse quadrado: "))

      calcQuadrado(value1)
      break;
    case "4":
      function calcTrapezio(baseMaior, baseMenor, altura) {
        let trapezio = alert("Área do trapézio que você pediu: " + ((baseMaior + baseMenor) * altura) / 2)
        return trapezio
      }

      value1 = parseFloat(prompt("Primeiro, me diga a base maior do trapézio: "))
      value2 = parseFloat(prompt("Agora, me diga a base menor do trapézio: "))
      value3 =  parseFloat(prompt("E agora me diga a altura desse trapézio: "))

      calcTrapezio(value1, value2, value3)
      break;
    case "5":
      function calcCirculo (raio) {
        let circulo = alert("Área do circulo que você pediu: " + (3.14 * (raio * raio)))
        return circulo
      }

      value1 = parseFloat(prompt("Primeiro, me diga o raio desse circulo: "))

      calcCirculo(value1)
      break;
    case "6":
      alert("Saindo...")
      break;
    default:
      alert("Você inseriu: " + menu + "\nEsta opção não existe, favor verificar.")
  }
} while(menu !== "6")