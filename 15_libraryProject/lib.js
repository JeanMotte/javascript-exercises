const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read= read;
    this.info = function() {
      console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${(this.read) ? 'already read' : 'not read yet'}`)
    }
  }
}
let bookOne = new Book("The Hobbit", "Tolkien", 295, true)
myLibrary.push(bookOne)

function addBookToLibrary(book) {
  myLibrary.push(book)
}
