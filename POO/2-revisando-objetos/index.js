function Book (title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = function addOnStock (quantity) {
    this.inStock += quantity;
  }
  this.save = function save () {
    const confirm = confirm(`Deseja salvar o livro ${title}?`)
    if (confirm) {
      console.log('livro salvo com sucesso!');
    }
  }
}

const author = { name: "Christopher Paolini" }
const tags = ["Adventurer", "Imagination"]

const eragon  = new Book ('eragon', '460', tags, author)

console.log(eragon)