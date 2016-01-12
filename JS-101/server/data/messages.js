var Message = require('mongoose').model('Message');

module.exports = {
    createMessage: function(message, callback){
        Message.create(message, callback);
    }
};