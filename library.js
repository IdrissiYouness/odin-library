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


Book.prototype.addBookToLibrary = function(book = new Book(title,author,pages,isRead,isArchived)){
  myLibrary.push(book)
}

Book.prototype.archiveBook = function(book){
    this.isArchived = !this.isArchived;
}


let ebook = new Book();

ebook.addBookToLibrary(ebook);
ebook.archiveBook(ebook);

myLibrary.forEach((book,index) => {
  console.log (`Book ${index+1} :`);
  console.log(`isArchived ${book.isArchived}`);
});
