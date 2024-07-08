// Add your code here
function fetchBooks() {
    // Fetch data from the API
    return fetch('https://anapioficeandfire.com/api/books')
      .then(response => response.json())  // Convert the response to JSON
      .then(data => renderBooks(data))  // Call renderBooks with the JSON data
      .catch(error => console.error('Error fetching books:', error));  // Handle any errors
  }
  
  function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name;
      main.appendChild(h2);
    });
  }
  
  function submitData(name, email) {
    // POST request to add a new user
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
      const main = document.querySelector('main');
      const p = document.createElement('p');
      p.textContent = `New user ID: ${data.id}`;
      main.appendChild(p);
    })
    .catch(error => {
      const main = document.querySelector('main');
      const p = document.createElement('p');
      p.textContent = `Error: ${error.message}`;
      main.appendChild(p);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Fetch books when the DOM content is loaded
    fetchBooks();
  
    // For testing in the console
    window.submitData = submitData;
  });
  