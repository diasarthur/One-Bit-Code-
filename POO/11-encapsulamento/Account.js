class Account {

  // encapsulation 
  #password
  #balance

  constructor(user){
    this.email = user.email;
    this.#password = user.password;
    this.#balance = 9
  }



  // show balance  
  #authenticate(email, password) {
    return this.email === email && this.#password === password
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance
    } else {
      return null
    }
  }
}

// user 
const user = {
  email: 'arthur@gmail.com',
  password: '123456'
}

const myAccount = new Account(user)

console.log(myAccount, myAccount.getBalance('arthur@gmail.com', '123456'));

