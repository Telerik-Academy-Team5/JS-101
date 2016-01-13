var mongoosePaginate = require('mongoose-paginate'),
    books = require('../data/books-data'),
    Book = require('mongoose').model('Book');

module.exports = {
    getBooks: function (req, res, next) {
        var page = req.query.page ? req.query.page : 1;
        var limit = req.query.take ? req.query.take : 10;
        var sortBy = {};
        var type = req.query.type;

        if (req.query.sortBy) {
            sortBy[req.query.sortBy] = type;
        }

        Book.paginate({}, {page: page, limit: limit, sort: sortBy}, function(err, result){
            if(err){
                console.log('Cannot load books: ' + err);
            }

            console.log(result.docs);
            res.render('pages/books/books', {books: result.docs});
        });
    },

    //
    addBook: function(req, res) {
        // TODO: Validation?
        console.log(req.body);
        books.create(req.body.book, (err, book) => {
            if (err) {
                res.status(400).json({
                    error: 'Error on saving in database. Please try again'
                });
            }
            res.status(200).json({
                book: book
            });
        });
    },
    allBooks: function(req, res) {
        // TODO: read query from user
        books.getAll({}, {
            page: 1,
            limit: 10
        }).then(function(data) {

            var listBooks = [];

            for (var book in data.docs) {
                if (data.docs[event] && data.docs.hasOwnProperty(book)) {
                    listBooks.push(data.docs[book]);
                }
            }
            console.log(listBooks);
            res.render('pages/books/public', {
                books: listBooks
            })
        })
    },
    form: function(req, res) {
        res.render('pages/books/add');
    },
    allPublic: function(req, res) {
        // TODO: read query from user
        books.getAll({}, {
            page: 1,
            limit: 10
        }).then(function(data) {

            var allBooks = [];

            for (var book in data.docs) {
                if (data.docs[book] && data.docs.hasOwnProperty(book)) {
                    allBooks.push(data.docs[book]);
                }
            }
            console.log(allBooks);
            res.send({
                data: books.slice(0, books.length - 1),
                total: books.length
            });
        })
    },
    findBookById: function(req, res) {

        books.findById(req.params.id, (err, book) =>{
            if (err) {
                res.status(500).json({
                    error: 'We have some problems.. Please Try again. Yes we will extract the messages in contsants :D'
                })
            } else if (!book) {
                res.status(400).json({
                    error: 'The book and the constants for the error messages are not found :)'
                });
            } else {
                console.log(book);
                res.render('pages/books/book-details', {
                    book: book
                });
            }
        })
    }
};

