function register(element) {
  const username = element.children.username.value
  const password = element.children.password.value
  const passwordConfirmation = element.children.passwordConfirmation.value

  if (password === username) {
    alert("O nome de usuário não pode ser igual a senha!")
  } else if (password !== passwordConfirmation) {
    alert("As senhas não coincidem!")
  } else {
    alert("Usuário: " + username + " criado com sucesso!")
  }
}