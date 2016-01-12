var Book = require('mongoose').model('Book');

module.exports = {
    create: function(book, callback) {
        Book.create(book, callback);
    },
    findById: function(id, callback) {
        Book.findOne({
            _id: id
        }, callback);
    }
};
