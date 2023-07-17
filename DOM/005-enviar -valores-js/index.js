function register(element) {
  const username = element.children.user.value;
  const password = element.children.pass.value;
  const passConfirmation = element.children.passConfirm.value;


  if (username.length <= 6 || password.length <= 6 || passConfirmation <= 6) {
    alert('O usuário e a senha devem ter 6 digitos no mínimo.')
  } else if(username === password) {
    alert('O nome de usuário e a senha não podem ser iguais.');
    element.children.user.value = ''
    element.children.pass.value = ''
    element.children.passConfirm.value = ''
  } else if (password !==passConfirmation) {
    alert('As senhas não coincidem, favor preencher novamente.');
    element.children.user.value = ''
    element.children.pass.value = ''
    element.children.passConfirm.value = ''
  } else {
    alert('Usuário criado com sucesso.');
  }
}