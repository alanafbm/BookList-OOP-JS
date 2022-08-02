import Store from "./LocalStore.js"
import Book from "./Book.js";
import UI from "./UI.js";
// DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event Listeners for add book
document.getElementById('book-form').addEventListener('submit', function(e){
    // Get form Values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          description = document.getElementById('description').value;

    // Instantiate book
    const book = new Book(title, author, description);

    // Instantiate UI
    const ui = new UI();

    // validate
    if (title === '' || author === '' || description === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {

    // Add book to list
    ui.addBookToList(book);
    //add to localstorage
    Store.addBook(book);

    // Show success
    ui.showAlert('Book added!', 'success');

    // Clear fields
    ui.clearFields()
    }


    e.preventDefault();
});


// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    
    const ui = new UI();

    ui.deleteBook(e.target);

    // Remove from localStorage
    let val = Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // show alert
    ui.showAlert('Book removed!', 'success')
    e.preventDefault
})