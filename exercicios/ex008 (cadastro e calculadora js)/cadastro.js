let firstName = prompt("Qual seu primeiro nome?")
let secondName = prompt("Qual seu sobrenome?")
let askStudy = prompt("O que você estuda?")
let askYearBirth =  prompt("Em que ano você nasceu?")
let mathBirth =  2023 - askYearBirth

alert(
  "\nSeu nome é " + firstName + " " + secondName + 
  "\n estudante de " + askStudy + 
  "\n e tem " + mathBirth + " anos.")
