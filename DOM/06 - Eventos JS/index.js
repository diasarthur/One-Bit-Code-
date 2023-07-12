function register(ev) {
  const sectionElement = ev.currentTarget.parentNode
  const username = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value

  if (password !== passwordConfirmation) {
    alert("As senhas não coincidem. Rever as senhas...")
  } else {
    alert("Usuário criado com sucesso.")
  }
}

const button = document.getElementById('register-button');

button.addEventListener('click', register);

function removeListener() {
  button.removeEventListener('click', register)
  alert('Event removed')
}

button.addEventListener('mouseover', function (ev) {
  console
})