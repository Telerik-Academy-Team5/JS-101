var mongoose = require('mongoose');

module.exports.init = function() {
  var userSchema = mongoose.Schema({
    title: {
      type: String,
      require: '{PATH} is required'
    },
    description: {
      type: String,
      require: '{PATH} is required'
    },
    speakers: {
      type: String
    },
    location: {
      type: String
    },
    url: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now,
      require: '{PATH} is required',
      unique: true
    }
  });

  var Event = mongoose.model('Event', userSchema);
};
