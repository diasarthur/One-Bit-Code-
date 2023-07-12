let palavra = prompt("Digite uma palavra que você queira saber se é um palíndromo")
let reverse = ""

for (let i = palavra.length -1; i >= 0; i--) {
  reverse += palavra[i]
}
if(reverse === palavra) {
  alert("É um palíndromo = " + reverse)
} else {
  alert("Não é um palíndromo = " + reverse)
}

