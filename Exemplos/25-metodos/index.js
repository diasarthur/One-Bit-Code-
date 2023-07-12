let pessoa = {
  nome: "Arthur",
  idade: 20,
  dizerOla() {
    console.log("Olá mundo. Meu nome é " + this.nome + " eu tenho " + this.idade + " anos.") 
  }
}
pessoa.dizerOla()
pessoa.nome = "Davi" 
pessoa.idade = 1
pessoa.dizerOla()