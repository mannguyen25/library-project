class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
    info() {
        return `The ${this.title} by ${this.author}, ${this.pages}, ${this.readStatus}`
    }
}
