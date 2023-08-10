class Book {
  // atributos (titulo, autor etc...)
  constructor(title) {
    this.title = title;
    this.published = false;
  };

  publish() {
    this.published = true
  }
}

const eragon = new Book("Eragon");
const cleanCode = new Book("Clean Code");

eragon.publish();

console.log(eragon)
console.log(cleanCode)