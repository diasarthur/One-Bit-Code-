const nomePers1 = prompt("Digite o nome do primeiro personagem");
const poderPers1 = parseFloat(prompt("Digite em números, qual o poder de ataque desse personagem"));
const nomePers2 = prompt("Digite o nome do segundo personagem");
let lifePers2 = parseFloat(prompt("Digite em números, a quantidade de pontos de vida que o " + nomePers2 + " possui."));
const defPers2 = parseFloat(prompt("Digite em números a quantidade de poder de defesa que o " + nomePers2 + " possui."));
const shieldPers2 = prompt("O " + nomePers2 + " possui escudo? sim/não.")

let dmg = 0


if (poderPers1 > defPers2 && shieldPers2 === "não") {
  dmg = poderPers1 - defPers2
  lifePers2 -= dmg
} else if (poderPers1 > defPers2 && shieldPers2 === "sim") {
  dmg = (poderPers1 - defPers2) / 2
  lifePers2 -= dmg
} else {
  lifePers2 -= dmg
}

alert(
  "Personagem 1: " + "\nDamage =  " + dmg +
  "\nPersonagem 2: " + "\nVida: " + lifePers2 
  )