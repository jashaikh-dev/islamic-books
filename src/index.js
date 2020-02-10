
import uniqueRandomArray from 'unique-random-array';
import bookList from './islamic-books.json';
var getRandomBook = uniqueRandomArray(bookList);

module.exports = {
    allBooks: bookList,
    randomBook
};

function randomBook(number) {
    if (number === undefined) {
        return getRandomBook();
    } else {
        var randomBooks = [];
        for(var i = 0; i< number; i++) {
            randomBooks.push(getRandomBook());
        }
        return randomBooks;
    } 
}