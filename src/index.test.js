var expect = require('chai').expect;
var islamicBooks = require('./index');

describe('islamic-books', function() {
    describe('allBooks', function() {
        it('should be an array of stings', function() {
            expect(islamicBooks.allBooks).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array){
                return array.every( function(book) {
                    return typeof book === 'string'
                })
            }
        })

        it('should contain `Quran`', function() {
            expect(islamicBooks.allBooks).to.include('Quran');
        })
    })

    describe('random book', function() {
        it('should return a random book from the list', function() {
            var randomBook = islamicBooks.randomBook();
            expect(islamicBooks.allBooks).to.include(randomBook);
        })
        it('should return an array of random books if passed a number', function(){
            var randomBooks = islamicBooks.randomBook(2);
            expect(randomBooks).to.have.length(2);
            randomBooks.forEach(function(book) {
                expect(islamicBooks.allBooks).to.include(book);
            })
        })
    })

    
})