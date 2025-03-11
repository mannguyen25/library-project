class Shelf {
    constructor(books=[]) {
        // properties for each shelf instance
        this.books = books;
    }
    addBook(book) {
        // method to add a book to the shelf
        this.books.push(book);
    }
    removeBook(book) {
        // method to remove a book from the shelf
        this.books = this.books.filter(element => element != book);
    }
}
  
class Book {
    constructor(title, author, pages, readStatus) {
        // properties for each book instance
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
    getInfo() {
        // method to return book details as an object
        return {title: this.title, author: this.author, pages: this.pages, readStatus: this.readStatus};
    }
    update(property, value) {
        // method to update book properties dynamically
        this[property] = value;
    }
    markAsRead() {
        // method to mark a book as read
        this.readStatus = true;
    }
    markAsUnread() {
        // method to mark a book as unread
        this.readStatus = false;
    }
    toggleReadStatus() {
        // method to toggle the read status of a book
        this.readStatus =!this.readStatus;
    }
}

const myShelf = new Shelf([new Book('Battle Mountain', 'C.J. Box', 368, true), new Book('Harry Potter', 'J.K. Rowling', 350, false)]);

const libraryContainer = document.querySelector('.library-container');

myShelf.books.reverse().forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-card');
    // properties
    const title = document.createElement('h2');
    title.textContent = book.title;
    bookElement.appendChild(title);

    const author = document.createElement('p');
    author.textContent = `By ${book.author}`;
    bookElement.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;
    bookElement.appendChild(pages);

    const actions = document.createElement('div');
    actions.classList.add('book-actions');

    const readStatus = document.createElement('button');
    readStatus.type = 'button';
    readStatus.textContent = 'Read';
    readStatus.classList.add(`${book.readStatus? 'read' : 'not-read'}`);
    readStatus.classList.remove(`${book.readStatus? 'not-read' : 'read'}`);
    actions.appendChild(readStatus);
    readStatus.addEventListener('click', () => {
        book.toggleReadStatus();
        readStatus.classList.add(`${book.readStatus? 'read' : 'not-read'}`);
        readStatus.classList.remove(`${book.readStatus? 'not-read' : 'read'}`);
    });

    const edit = document.createElement('button');
    edit.type = 'button';
    edit.textContent = "Edit"
    actions.appendChild(edit);
    bookElement.appendChild(actions);
    libraryContainer.insertBefore(bookElement, libraryContainer.firstChild);
});
