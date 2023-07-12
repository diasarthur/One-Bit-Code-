function addPlayer() {
  const name = document.getElementById('name').value
  const number = document.getElementById('number').value
  const position = document.getElementById('position').value
  const stars = document.getElementById('stars').value

  const confirmation = confirm(
    "Deseja adicionar o jogador: " + name + ", com a camisa de número: " + number + 
    ", que atua na posição: " + position + ", que tem um total de " + stars + " estrelas?"
    )

    if (confirmation) {
      const team = document.getElementById('team')
      const liTeam = document.createElement('li')
      liTeam.id = "player-" + number
      liTeam.innerText = name + " - " + position + " (" + number + ")" + " Nº de estrelas: " + stars  
      team.appendChild(liTeam)

      document.getElementById('name').value = ""
      document.getElementById('number').value = ""
      document.getElementById('position').value = ""
      document.getElementById('stars').value = ""
    }
}

function removePlayer() {
  const numberToRemove = document.getElementById('numberToRemove').value
  const remove = document.getElementById('player-' + numberToRemove)

  const confirmation = confirm("Deseja remover o jogador " + remove.innerText + "?")

  if (confirmation) {
    remove.remove()

    document.getElementById('numberToRemove').value = ""
  }


}