var Event = require('mongoose').Model('Event');

module.exports = {
  create: function(event, callback) {
    Event.create(event, callback);
  },
  findById: function(id, callback) {
    Event.findOne({
      _id: id
    }, callback);
  }
}
