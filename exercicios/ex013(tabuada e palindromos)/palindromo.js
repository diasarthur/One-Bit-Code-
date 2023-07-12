let askWord = prompt("Digite uma palavra para que possamos analisar se ela é um palíndromo")
let reverseWord = ""
for(let i = askWord.length -1; i >= 0 ; i--){
  reverseWord += askWord[i]
}
if (reverseWord === askWord) {
  alert("São palíndromos: " + "\n" + reverseWord)
  } else {
  alert("Não são palíndromos: " + "\n" + reverseWord)
}
