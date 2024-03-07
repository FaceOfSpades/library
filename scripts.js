const addBtn = document.querySelector("#add");
const bookshelf = document.querySelector("#bookshelf");
const dialog = document.querySelector("dialog");
const bookTitle = document.querySelector("#book_title");
const authorName = document.querySelector("#author_name");
const pageCount = document.querySelector("#page_count");
const readStatus = document.querySelector("#read_status");
const submitBtn = document.querySelector("#submit_button");
const closeBtn = document.querySelector("#close_button");
const input = document.querySelector("input");
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

addBtn.addEventListener("click", () => {
    dialog.showModal();
});

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    display();
    dialog.close();
    resetForm();
});

closeBtn.addEventListener("click", () => {            
    resetForm();
});

function addBookToLibrary() {
    let title = bookTitle.value;
    let author = authorName.value;
    let pages = pageCount.value;
    let read = readStatus.value;
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
}

function resetForm() {
    document.getElementById("new_entry").reset();
}

function display() {
    while (bookshelf.firstChild) {
        bookshelf.removeChild(bookshelf.lastChild);
    };
    myLibrary.forEach((e) => {
        let div = document.createElement("div");
        let container = document.createElement("div")
        container.className = "bookCard-button-container";
        div.className = "bookCard";
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
        div.appendChild(container);
        container.appendChild(readBtn);
        container.appendChild(deleteBtn);
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