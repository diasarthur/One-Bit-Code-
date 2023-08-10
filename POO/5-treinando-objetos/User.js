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
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log('Login feito com sucesso')
    } else {
      console.log('email ou senha incorretos, verifique e tente novamente.')
    }
  }
}

const newUser = new User('Arthur Dias', 'arthur.email.com', '123456');

console.log(newUser)

newUser.login('arthur.email.com', '123456')