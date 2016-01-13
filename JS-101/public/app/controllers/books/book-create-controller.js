(function() {

    function BooksCreateController($location, booksService) {
        var vm = this;
        vm.createBook = function(newBook) {
            console.log(newBook);
            booksService.create(newBook)
                .then(function(result) {
                    console.log(result);
                    window.location.href = '/books/' + result.book._id;
                })
        }
    }

    angular.module('myApp.controllers')
        .controller('BooksCreateController', ['$location', 'booksService', BooksCreateController])
}());
