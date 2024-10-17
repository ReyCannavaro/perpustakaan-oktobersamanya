let books = {
    "1": {
        judul: "Menu Kos-kosan Sehat Menyenangkan",
        penulis: "Raffi Meks",
        tahunTerbit: 2007,
        genre: "Kuliner"
    }
};

function addBook(id, judul, penulis, tahunTerbit, genre) {
  books[id] = { judul, penulis, tahunTerbit, genre };
}

function getBookById(id) {
  return books[id];
}

function updateBook(id, updatedJudul, updatedPenulis, updatedTahunTerbit, updatedGenre) {
    if (books[id]) {
        if (updatedJudul !== undefined) books[id].judul = updatedJudul;
        if (updatedPenulis !== undefined) books[id].penulis = updatedPenulis;
        if (updatedTahunTerbit !== undefined) books[id].tahunTerbit = updatedTahunTerbit;
        if (updatedGenre !== undefined) books[id].genre = updatedGenre;
    }
}

function deleteBook(id) {
  delete books[id];
}
