function register(element) {
  const username = element.children.user.value;
  const password = element.children.pass.value;
  const passConfirmation = element.children.passConfirm.value;


  if(username.length <= 0 || password.length <= 0 || passConfirmation <=0)
  }else if(username === password) {
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