function addPokemon() {
  const name = document.getElementById('name').value
  const number = document.getElementById('number').value
  const element = document.getElementById('element').value

  const confirmation = confirm("Pokemon: " + name + "\nNº: " + number + "\nElemento: " + element)

  if (confirmation) {
    const pokeTeam = document.getElementById('pokeTeam')
    const pokeItem = document.createElement('li')

    pokeItem.id = ('pokemon-' + number)
    pokeItem.innerText = name + ": " + element + " (" + number + ")"
    pokeTeam.appendChild(pokeItem)

    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
    document.getElementById('element').value = ''
  }
}

function removePokemon() {
  const remove = document.getElementById('removeNumber').value
  const pokemonToRemove = document.getElementById('pokemon-' + remove)

  const confirmation = confirm("Deseja remover o pokemon " + pokemonToRemove.innerText + "?")

  if (confirmation) {
    pokemonToRemove.remove()
    document.getElementById('removeNumber').value = ''
  }
}