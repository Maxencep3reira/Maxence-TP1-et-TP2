let library = [];

function addBook(book) {
    
library.push(book);
 
}

const form = document.getElementById("add-form");
const title = document.getElementById("add-title");
const author = document.getElementById("add-author");
const year = document.getElementById("add-year");


form.addEventListener("submit", (e) => {
  e.preventDefault();

 const addedbook = {
    title: title.value,
    author: author.value,
    year: year.value,
    borrowed: false
  };

addBook(addedbook)
  const addResult = document.getElementById("add-result");
  if (addedbook) {
    addResult.textContent = `Le livre ${addedbook.title} de ${addedbook.author} de l'année ${addedbook.year} est ajouté.`;
    
  } 
  
});







function getAvailableBooks() {
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    if (book.borrowed === false) {
      console.log(book);
    }
  }
}

/*
    library.forEach(book => {
if (book.borrowed === false) {
    console.log(book)
}
    })

}
    */

function searchByTitle(title) {
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    if (book.title === title) {
      return book;
    }
  }
}

const searchForm = document.getElementById("search-form");
const searchTitle = document.getElementById("search-title");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchedBook = searchByTitle(searchTitle.value);
  const searchResult = document.getElementById("search-result");
  if (searchedBook) {
    searchResult.textContent = `Le livre ${searchedBook.title} de ${searchedBook.author} est ${searchedBook.borrowed ? "emprunté" : "disponible"} et publié en ${searchedBook.year}.`;
    
  } 
});



// Emprunter un livre
function borrow(title) {
  const book = searchByTitle(title);
  if (book && !book.borrowed) {
    book.borrowed = true;
    return book;
  }
  return null;
}


// Gestion formulaire emprunt
const borrowForm = document.getElementById("borrow-form");
const borrowTitle = document.getElementById("borrow-book");

borrowForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const borrowedBook = borrow(borrowTitle.value);
  const borrowResult = document.getElementById("borrow-result");

  if (borrowedBook) {
    borrowResult.textContent = ` Le livre "${borrowedBook.title}" a été emprunté.`;
    borrowResult.style.color = "green";
  } else {
    borrowResult.textContent = `Le livre "${borrowTitle.value}" est introuvable ou déjà emprunté.`;
    borrowResult.style.color = "red";
  }
});




function returnBook(title) {
  const book = searchByTitle(title);
  if (book && book.borrowed) {
    book.borrowed = false;
    return book;
  }
  return null;
}



const returnForm = document.getElementById("return-form");
const returnTitle = document.getElementById("return-book");

returnForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const returnedBook = returnBook(returnTitle.value);
  const returnResult = document.getElementById("return-result");

  if (returnedBook) {
    returnResult.textContent = `Le livre "${returnedBook.title}" a été retourné.`;
    returnResult.style.color = "green";
  } else {
    returnResult.textContent = `Le livre "${returnTitle.value}" est introuvable ou n'était pas emprunté.`;
    returnResult.style.color = "red";
  }
});














addBook({
  title: "Le Hobbit",
  author: "JRR Tolkien",
  year: 1937,
  borrowed: false,
});



addBook({
  title: "Neuromancien",
  author: "William Gibson",
  year: 1984,
  borrowed: true,
});

addBook({
  title: "Les Furtifs",
  author: "Alain Damasso",
  year: 2019,
  borrowed: false,
});

console.table(library);
getAvailableBooks();

console.log("le livre que tu cherche est:");
console.log(searchByTitle("le hobbit"));
