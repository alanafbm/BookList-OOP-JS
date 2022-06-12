export default class UI {
    addBookToList(book){
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
    showAlert(message, className){
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
    deleteBook(target){
        if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
    }
    clearFields(){
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('description').value = "";
    }
}