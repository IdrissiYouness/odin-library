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
let newBook;


Book.prototype.addBookToLibrary = function(){
  myLibrary.push(this)
}

Book.prototype.archiveBook = function(){
    this.isArchived = !this.isArchived;
}

function TogglePopUp (id) {
  const popup = document.getElementById(id);
  popup.classList.toggle("show");
}

 const addNewBookBtn = document.querySelector('.btn.addBookBtn');



 addNewBookBtn.addEventListener('click', (event)=>{

    event.preventDefault();

    const title = document.querySelector("#title-input").value;
    const author = document.querySelector("#author-input").value;
    const numberOfPages = document.querySelector("#pages-input").value;
    const isRead = document.querySelector("#read-input").checked;

    newBook = new Book(title,author,numberOfPages,isRead);
    newBook.addBookToLibrary();
    console.log(myLibrary);

 });








