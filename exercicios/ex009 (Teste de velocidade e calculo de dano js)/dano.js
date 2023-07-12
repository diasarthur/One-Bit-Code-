let nameFirstPers = prompt("Digite o nome do primeiro personagem")
let powerDamageFirstPers = parseFloat(prompt("Agora digite em números a força do poder")) 

let nameSecondPers = prompt("Digite o nome do segundo personagem")
let lifeSecondPers = parseFloat(prompt("Digite em números a quantidade de vida do personagem"))
let powerDefSecondPers = parseFloat(prompt("Digite em números o poder de defesa o seu personagem?"))
let shieldConfirm = prompt("Seu personagem possui shield? SIM/NÃO")

let dmg = 0

if(powerDamageFirstPers > powerDefSecondPers && shieldConfirm == "NÃO") {
  dmg = powerDamageFirstPers - powerDefSecondPers
} else if ( powerDamageFirstPers > powerDefSecondPers && shieldConfirm == "SIM") {
  dmg = (powerDamageFirstPers - powerDefSecondPers) /2
}

lifeSecondPers -= dmg

alert("O personagem " + nameSecondPers + " tomou " + dmg + " de dano")
alert(
  "\n" + nameFirstPers +":" +
  "\nPoder: " + powerDamageFirstPers +
  "\n\n" + nameSecondPers + ":" +
  "Vida atual : " + lifeSecondPers +
  "\nPoder de defesa atual: " + powerDefSecondPers +
  "\n Possui escudo?: " + shieldConfirm
)





