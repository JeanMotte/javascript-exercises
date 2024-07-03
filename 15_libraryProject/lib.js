const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read === "true";
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${(this.read) ? 'already read' : 'not read yet'}`);
    };
}

let bookOne = new Book("The Hobbit", "Tolkien", 295, "true");
myLibrary.push(bookOne);

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(library, container) {
    container.innerHTML = '';
    library.forEach((book, index) => {
        container.insertAdjacentHTML('afterbegin', `<li>${book.title}, ${book.read ? 'already read' : 'not read yet'} <button type="button" class="btn-close" aria-label="Close" data-index="${index}"></button><svg data-index="${index}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</li>`);
    });

    let removeBtns = document.querySelectorAll(".btn-close");
    removeBtns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            let index = btn.getAttribute('data-index');
            myLibrary.splice(index, 1);
            displayBooks(myLibrary, container);
        });
    });

    let readBtns = document.querySelectorAll(".size-6");
    readBtns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            let index = btn.getAttribute('data-index');
            myLibrary[index].read = !myLibrary[index].read;
            displayBooks(myLibrary, container);
        });
    });
}

let divBooks = document.querySelector(".books");
let displayFormBtn = document.querySelector(".add-btn");
let form = document.querySelector(".form");
let addBookToLibraryBtn = document.querySelector(".submit-btn");

displayBooks(myLibrary, divBooks);

displayFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form.style.display = 'block';
});

addBookToLibraryBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let readValue = form.querySelector('#read').value;
    let newBook = new Book(form.title.value, form.author.value, form.pages.value, readValue);
    addBookToLibrary(newBook);
    displayBooks(myLibrary, divBooks);
    form.style.display = 'none';
    form.reset();
});
