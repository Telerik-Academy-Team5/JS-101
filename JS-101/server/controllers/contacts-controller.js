var messages = require('../data/messages');

module.exports = {
    get: function (req, res) {
        res.render("pages/contacts");
    },
    createMessage: function (req, res, next) {
        var newMessage = req.body;

        if (newMessage.text.length < 50) {
            req.session.error = 'Please enter a longer message';
            res.redirect('/contacts');
        } else {
            messages.createMessage(newMessage, function (err, message) {
                if (err) {
                    req.session.error = 'Fail to save message';
                    res.redirect('contacts');
                    return;
                }

                console.log('Message was added!');
                res.redirect('/');
            });
        }
    }
};

