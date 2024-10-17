let bookCollection = {
  "1": {
      title: "Menu Kos-kosan Sehat Menyenangkan",
      author: "Raffi Meks",
      publicationYear: 2007,
      category: "Kuliner"
  }
};

function insertBook(bookId, title, author, publicationYear, category) {
  bookCollection[bookId] = { title, author, publicationYear, category };
}

function fetchBookById(bookId) {
  return bookCollection[bookId];
}

function modifyBook(bookId, newTitle, newAuthor, newYear, newCategory) {
  if (bookCollection[bookId]) {
      if (newTitle !== undefined) bookCollection[bookId].title = newTitle;
      if (newAuthor !== undefined) bookCollection[bookId].author = newAuthor;
      if (newYear !== undefined) bookCollection[bookId].publicationYear = newYear;
      if (newCategory !== undefined) bookCollection[bookId].category = newCategory;
  }
}

function removeBook(bookId) {
  delete bookCollection[bookId];
}
