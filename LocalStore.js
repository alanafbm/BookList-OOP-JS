import UI from "./UI.js"
export default class Store {
    static getBooks(){
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    // display in the UI

    static displayBooks(){
        const books = Store.getBooks();

        books.forEach(function(book){
            const ui = new UI;

            // Add book to UI
            ui.addBookToList(book);
        })

    }
    static addBook(book){
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));

    }
    static removeBook(description){
        const books = Store.getBooks();
        books.forEach(function(book, index){
        if (book._description === description) {
            books.splice(index, 1);
        }
        });

        localStorage.setItem('books', JSON.stringify(books));

    }
}