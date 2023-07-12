let askNumber = parseFloat(prompt("Olá, digite um número que você queira ver sua tabuada"))
let tabuada=""
for (let i = 0; i <=20; i++) {
  tabuada += "\n" + askNumber + " X " + i + " = " + (askNumber * i)


}
alert(tabuada)