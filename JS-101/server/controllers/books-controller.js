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

            res.render('pages/books', {books: result.docs});
        });
    }
};

