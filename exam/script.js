// Click handler for search button
const captureSearchValue = () => {
  let searched = document.getElementById('search-bar').value;
  return searched;
};

// Filter books based on search input
const filterBooks = (searchInput, books) => {
  let arrayToSearch = flattenObjectValuesIntoArray(books);
  let booksFiltrato = [];
  for (let i = 0; i < arrayToSearch.length; i++) {
    let tagsRicostruito = [];
    for (let j = 0; j < arrayToSearch[i].length; j++) {
      if (arrayToSearch[i][j] === searchInput) {
        for (let k = 2; k < arrayToSearch[i].length; k++) {
          tagsRicostruito.push(arrayToSearch[i][k]);
        }
        booksFiltrato.push({
          title: arrayToSearch[i][0],
          author: arrayToSearch[i][1],
          tags: tagsRicostruito,
        });
        break;
      }
    }
  }
  return booksFiltrato;
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (books) => {
  let bookList = document.getElementById('bookList');
  bookList.innerHTML = '';
  let bookDivs = []
  for (let i = 0; i < books.length; i++) {
    bookDivs.push(structureBookAsHtml(books[i]));
  }
  return bookDivs;
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (books) => {
  let booksFiltrato = filterBooks(captureSearchValue(), books);
  let bookList = document.getElementById('bookList');
  let htmlFiltrato = structureBooksAsHtml(booksFiltrato);
  for (let i = 0; i < htmlFiltrato.length; i++) {
    bookList.innerHTML += htmlFiltrato[i].outerHTML;
  }
  
}

// Grab search button from the DOM
let searchBtn = document.getElementById('search-btn');

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });
