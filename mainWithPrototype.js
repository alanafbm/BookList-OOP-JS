// Book constructor
function Book(title, author, description){
    this._title = title;
    this._author = author;
    this._description = description;
}


// UI constructor
function UI(){}
// Add book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
                <td>${book._title}</td>
                <td>${book._author}</td>
                <td>${book._description}</td>
                <td><a href='#' class="delete">X</a></td>
                `;
    list.appendChild(row);
}

// Show alert
UI.prototype.showAlert = function(message, className){
    // Create div
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div,form);

    // Timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 2000);
}

// Delete book
UI.prototype.deleteBook = function(target){
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
};

// Clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('description').value = "";

}

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

    // show alert
    ui.showAlert('Book removed!', 'success')
    e.preventDefault
});