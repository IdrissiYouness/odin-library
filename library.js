"use strict";

class Book {
    constructor(title = "", author = "", pages = 0 ,isRead = false ,isArchived = false){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.isArchived = isArchived;
    }
}


const  myLibrary = [];
let  idCounter = 0;
let newBook;




Book.prototype.addBookToLibrary = function(){
  myLibrary.push(this)
  this.id = idCounter++;
}

Book.prototype.archiveBook = function(){
    this.isArchived = !this.isArchived;
}

Book.prototype.toggleRead = function(){
    this.isRead = !this.isRead;
}

function TogglePopUp () {
  const popup = document.getElementById('add-book-dialog');
  popup.classList.toggle("show");
}

 const addNewBookBtn = document.querySelector('.btn.addBookBtn');



 addNewBookBtn.addEventListener('click', (event)=>{

    event.preventDefault();

    const libraryHolder = document.querySelector(".books-container");

    const title = document.querySelector("#title-input").value;
    const author = document.querySelector("#author-input").value;
    const numberOfPages = document.querySelector("#pages-input").value;
    const isRead = document.querySelector("#read-input").checked;

    newBook = new Book(title,author,numberOfPages,isRead);
    newBook.addBookToLibrary();

    const BookCard = RenderBookCard(newBook);
    libraryHolder.appendChild(BookCard);

    TogglePopUp();
    console.log(`book number ${newBook.id} created`);

 });


function RenderBookCard(book){

  const bookHolder = document.createElement("div");
  bookHolder.setAttribute("class", "book-card");
  bookHolder.setAttribute("id",`book-${book.id}`);

  const titleHolder = document.createElement("h2");
  titleHolder.setAttribute("class", "book-title");

  const authorHolder = document.createElement("h3");
  authorHolder.setAttribute("class", "book-author");

  const pagesNbrHolder = document.createElement("h4");
  pagesNbrHolder.setAttribute("class", "book-pages");

  const BookOptionsHolder = document.createElement("div");
  BookOptionsHolder.setAttribute("class", "book-options");


  bookHolder.appendChild(titleHolder);
  bookHolder.appendChild(authorHolder);
  bookHolder.appendChild(pagesNbrHolder);
  bookHolder.appendChild(BookOptionsHolder);


  const readToggleBtn = document.createElement("button");
  readToggleBtn.classList.add('btn','read-toggle-btn');

  const archiveBtn = document.createElement("button");
  archiveBtn.classList.add('btn','archive-btn');


  BookOptionsHolder.appendChild(readToggleBtn);
  BookOptionsHolder.appendChild(archiveBtn);


  //rendering data from created book

  titleHolder.innerText = book.title;
  authorHolder.innerText = book.author;
  pagesNbrHolder.innerText = book.pages;
  readToggleBtn.innerText = book.isRead ? "Read" : "Not Yet";
  archiveBtn.innerText = "Archive"



  archiveBtn.addEventListener('click',function(event){

    event.preventDefault();

    const targetBookCard = event.currentTarget.parentElement.parentElement;

    const bookId = targetBookCard.id.match(/\d+/)[0];

    myLibrary[bookId].archiveBook();

    console.log(`book number : ${myLibrary[bookId].id} is archived`);

    targetBookCard.style.display = "none";

  })


  readToggleBtn.addEventListener('click',function(event){

    event.preventDefault();

    const targetBookCard = event.currentTarget.parentElement.parentElement;

    const bookId = targetBookCard.id.match(/\d+/)[0];

    myLibrary[bookId].toggleRead();

    console.log(`book number : ${myLibrary[bookId].id} is toggled read ${myLibrary[bookId].isRead}`);

    event.currentTarget.innerText = myLibrary[bookId].isRead ? "Read" : "Not Yet";


  })

  return bookHolder;
}











