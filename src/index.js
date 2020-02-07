
var uniquireRandomArray = require('unique-random-array');
var bookList = require('./islamic-books.json');

module.exports = {
    allBooks: bookList,
    randomBook : uniquireRandomArray(bookList)
};