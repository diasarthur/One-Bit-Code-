/* 
   1- Pedir um valor em metros, ja converter o valor para que ele não va para o switch em forma de string
   2- Perguntar para qual medida ele quer que converta
   3- Criar um switch que converta o valor em mm, cm, dm, dam, hm e km
   4- Caso não seja inserido um valor correto, o programa deve devolver uma mensagem dizendo que o valor é invalido
   5- Devolver esse valor na tela
*/

const number = parseFloat(prompt(
  "Olá, seja bem vindo ao conversor de medidas online \nDigite o valor em metros que você quer que seja convertido" +
  "\n\nSOMENTE VALORES EM NÚMEROS SERÃO ACEITOS."
))

const measurements = parseFloat(prompt(
  "Ótimo, agora digite a opção correspondente a medida para qual será convertido o seu valor em metros digitado anteriormente" +
  "\n1)Milímetros (mm)\n2)Centímetros (cm)\n3)Decímetros (dm)\n4)Decâmetros (dam)\n5)Hectômetros (hm)\n6)Quilômetro (km)"
))

switch (measurements) {
  case 1:
    alert("a conversão de " + number + " metros, na medida que você pediu, é de " + (number*1000) + " mm");
    break;
  case 2:
    alert("a conversão de " + number + " metros, na medida que você pediu, é de " + (number*100) + " cm");
    break;
  case 3:
    alert("a conversão de " + number + " metros, na medida que você pediu, é de " + (number*10) + " dm");
    break;
  case 4:
    alert("a conversão de " + number + " metros, na medida que você pediu, é de " + (number/10) + " dam");
    break;
  case 5:
    alert("a conversão de " + number + " metros, na medida que você pediu, é de " + (number/100) + " hm");
    break;
  case 6:
    alert("a conversão de " + number + " metros, na medida que você pediu, é de " + (number/1000) + " km");
    break;
  default:
    alert("Você inseriu um valor inválido, recarregue a página e tente novamente.");
    break;
}
