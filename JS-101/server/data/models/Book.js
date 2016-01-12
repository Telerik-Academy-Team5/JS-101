var mongoose = require('mongoose'),
    mongoosePaginate = require('mongoose-paginate');

module.exports.init = function() {
    var bookSchema = mongoose.Schema({
        title: {
            type: String,
            require: '{PATH} is required'
        },
        description: {
            type: String
        },
        authors: {
            type: String,
            require: '{PATH} is required'
        },
        difficultLevel: {
            type: String
        },
        pages: {
            type: Number,
            require: '{PATH} is required'
        },
        publishDate: {
            type: Date
        }
    });

    bookSchema.plugin(mongoosePaginate);

    var Book = mongoose.model('Book', bookSchema);
};
