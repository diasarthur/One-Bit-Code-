const years = prompt("Qual sua idade")
const yearsFloat = parseFloat(years)
const validationYear = yearsFloat >= 18 ? 
  "Você é maior de idade, pode entrar" : 
  "Você é menor de idade, não pode entrar"
alert(validationYear)