function register(ev) {
  const username =  ev.currentTarget.parentNode.children.username.value;
  const password = ev.currentTarget.parentNode.children.password.value;
  const passwordConfirmation = ev.currentTarget.parentNode.children.passwordConfirmation.value;
  if(username.length <= 4 || password.length <= 4 || passwordConfirmation.length <= 4) {
    alert('O usuário e a senha devem ter mais de 4 digitos.')
  } else if (username === password) {
    alert('A usuário e a senha não podem ser iguais.') 
  } else if (password !== passwordConfirmation) {
    alert('As senhas não coincidem')
  } else {
    alert('Usuário criado com sucesso.')
  }
}

const button = document.getElementById('register-button');

button.addEventListener('click', register)

function removeEvent() {
  button.removeEventListener('click', register)
  alert('removido')
}