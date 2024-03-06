const addBtn = document.querySelector("#add");
const bookshelf = document.querySelector("#bookshelf");

addBtn.addEventListener("click", () => {
    addBookToLibrary();
    display();
});

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = "Hi";
    let author = "My name";
    let pages = "300";
    let read = "Yes";
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
}

function display() {
    while (bookshelf.firstChild) {
        bookshelf.removeChild(bookshelf.lastChild);
    };
    myLibrary.forEach((e) => {
        let div = document.createElement("div");
        div.className = "bookCard";
        let indexDiv = document.createElement("div");
        let titleDiv = document.createElement("div");
        let authorDiv = document.createElement("div");
        let pagesDiv = document.createElement("div");
        let readDiv = document.createElement("div");
        let index = myLibrary.indexOf(e);
        bookshelf.appendChild(div);
        titleDiv.textContent = "Title: " + e.title;
        div.appendChild(titleDiv);
        authorDiv.textContent = "Author: "+ e.author;
        div.appendChild(authorDiv);
        pagesDiv.textContent = "Page Count: " + e.pages;
        div.appendChild(pagesDiv);
        readDiv.textContent = "Have Read: " + e.read;
        div.appendChild(readDiv);
        let deleteBtn = document.createElement("button");
        let readBtn = document.createElement("button");
        deleteBtn.textContent = "DELETE";
        readBtn.textContent = "READ";
        div.appendChild(readBtn);
        div.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            display();
        });
        readBtn.addEventListener("click", () => {
            if (e.read == "Yes") {
                e.read = "No";
            } else {
                e.read = "Yes";
            };
            display();
        });
    });
}