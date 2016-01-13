var Book = require('mongoose').model('Book');

module.exports = {
    create: function(book, callback) {
        Book.create(book, callback);
    },
    getAll: function(temp, query) {
        return Book.paginate({}, query).then(function (result) {
            return result;
        })
    },
    findById: function(id, callback) {
        Book.findOne({
            _id: id
        }, callback);
    }
};
