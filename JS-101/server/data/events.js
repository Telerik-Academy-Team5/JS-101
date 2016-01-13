var Event = require('mongoose').model('Event');

module.exports = {
  create: function(event, callback) {
    Event.create(event, callback);
  },
  findById: function(id, callback) {
    Event.findOne({
      _id: id
    }, callback);
  },
  getAll: function(temp, query) {
    return Event.paginate({}, query).then(function(result) {
      return result;
    });
    //  Event.find(callback);
  }
}
