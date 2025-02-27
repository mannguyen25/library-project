class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
    getInfo() {
        return {title: this.title, author: this.author, pages: this.pages, readStatus: this.readStatus};
    }
    update(property, value) {
        this[property] = value;
    }
}
