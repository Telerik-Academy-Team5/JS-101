var mongoose = require('mongoose'),
  UserModel = require('../data/models/User'),
  Event = require('../data/models/Event')
MessageModel = require('../data/models/Message');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;

  db.once('open', function(err) {
    if (err) {
      console.log('Database could not be opened: ' + err);
      return;
    }

    console.log('Database feeling fine and running...')
  });

  db.on('error', function(err) {
    console.log('Database error: ' + err);
  });

  UserModel.init();
  Event.init();
  MessageModel.init();
};
