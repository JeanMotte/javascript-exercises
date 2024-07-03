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

let bookOne = new Book("The Hobbit", "Tolkien", 295, true)
myLibrary.push(bookOne)
console.log(bookOne);

function addBookToLibrary(book) {
  myLibrary.push(book)
}

// DISPLAYING ON PAGE

let divBooks = document.querySelector(".books");
let displayFormBtn = document.querySelector(".add-btn");
let form = document.querySelector(".form");
let addBookToLibraryBtn = document.querySelector(".submit-btn")

myLibrary.forEach(book => {
  divBooks.insertAdjacentHTML('afterbegin', `<li>${book.title}</li>`)
});

displayFormBtn.addEventListener(("click"), (e) => {
  e.preventDefault();
  form.style.display = 'block';
})

addBookToLibraryBtn.addEventListener(("click"), (e) => {
  e.preventDefault();
  let newBook = new Book()
  addBookToLibrary(newBook)
})
