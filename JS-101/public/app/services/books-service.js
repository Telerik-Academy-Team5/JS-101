(function() {
    'use strict';

    function booksService(data) {
        var BOOKS_URL = 'books';

        function create(book) {
            return data.post(BOOKS_URL, {
                book: book
            });
        }
        return {
            create: create
        }
    }

    angular.module('myApp.services')
        .factory('booksService', ['data', booksService])
}());
