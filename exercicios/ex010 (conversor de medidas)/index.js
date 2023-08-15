
const medidas = prompt(
  "\nDigite a letra correspondente a qual você quer converter os metros. \na)mm \nb)cm \nc)dm \nd)dam \ne)hm \nf)km"
  )
  
const askMedidas = parseFloat(prompt("Digite o número em metros para qual você quer converter"))
  
switch(medidas) {
  case "a":
    alert("O seu valor em milímetros é de: " + askMedidas * 1000)
    break
  case "b":
    alert("O seu valor em centímentros é de: " + askMedidas * 100)
    break
  case "c":
    alert("O seu valor em decìmetros é de: " + askMedidas * 10)
    break
  case "d":
    alert("O seu valor em decâmetros é de: " + askMedidas / 10)
    break
  case "e":
    alert("O seu valor em hectômetros é de: " + askMedidas / 100)
    break
  case "f":
    alert("O seu valor em quilômetros é de: " + askMedidas / 1000)
    break
  default:
    alert("Você inseriu um valor inválido, por favor, tente novamente.")
}