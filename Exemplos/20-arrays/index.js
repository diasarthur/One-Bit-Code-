let pokemon = ["Gogoat", "Sceptile", "Wormadam", "Venusaur", "Kricketune", "Accelgor", "Pinsir", "Beedrill"];

// // Adicionar elementos ao final do array.
// // push
// pokemon.push("Torterra")
// console.log(pokemon)

// Adicionar elementos ao começo de um array.
// unshift
// pokemon.unshift("Scyther")
// console.log(pokemon)

// Remover o último elemento de um array.
// pop
// let ultimoPokemon = pokemon.pop()
// console.log(ultimoPokemon)
// console.log(pokemon)

// Remover o primeiro elemento de um array.
// shift
// const primeiroPokemon = pokemon.shift();
// console.log(primeiroPokemon);
// console.log(pokemon)

// pesquisar por um elemento de um array.
// includes
// const inclui = pokemon.includes("Gogoat");
// console.log(inclui)

// pesquisar o indice de um elemento de um array.
// indexOf
// const indice = pokemon.indexOf("Wormadam")
// console.log(indice)

// cortar
// .slice
// const primeirosPokes = pokemon.slice(0, 3)
// const outrosPokes = pokemon.slice(-5)
// console.log(outrosPokes)
// console.log(primeirosPokes)

// // concatenar
// // .concat
// const todosPokes = primeirosPokes.concat(outrosPokes, "Scizor", "Vespiquen", "Shiftry")
// console.log(todosPokes)

// Substituição dos elementos (ou trocar por nada)
// .splice()
// const removidos = pokemon.splice(3, 3, "bulbasaur", "kricketot", "shelmet")
// console.log(removidos)
// console.log(pokemon)

// Iterar sobre os elementos
// for
for (let i = 0; i < pokemon.length; i++) {
  const iterarPokes = pokemon[i]
  console.log("O pokemon " + iterarPokes + " se encontra no indice " + i)
}
