class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    if(fullname.length >= 5 && email.length >= 8 && password.length >= 6) {
      console.log('usuário criado com sucesso')
    } else {
      console.log('O nome ou o email e senha precisam de mais caracteres.')
    }
    return fullname, email, password
  }
}

const newUser = new User('Arthur Dias', 'arthur.email.com', '123456');

function login(loginEmail, loginPass) {
  this.loginEmail = loginEmail;
  this.loginPass = loginPass;
  if (loginEmail !== newUser.email || loginPass !== newUser.password) {
    console.log('email ou senha incorretos, verifique e tente novamente.')
  } else {
    console.log('Login feito com sucesso')
  }
}
console.log(newUser)
login('arthur.email.com', '123456')
