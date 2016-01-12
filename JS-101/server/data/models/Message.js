var mongoose = require('mongoose');

module.exports.init = function () {
    var messageSchema = mongoose.Schema({
        firstName: {
            type: String,
            require: true
        },
        lastName: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        phone: {
            type: String
        },
        text: {
            type: String,
            require: true
        }
    });

    var Message = mongoose.model('Message', messageSchema);
};
