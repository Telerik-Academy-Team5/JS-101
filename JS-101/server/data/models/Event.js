var mongoose = require('mongoose'),
  mongoosePaginate = require('mongoose-paginate');

module.exports.init = function() {
  var eventSchema = mongoose.Schema({
    topic: {
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
      require: '{PATH} is required'
    },
    end: {
      type: Date,
      default: Date.now,
      require: '{PATH} is required'
    }
  });

  eventSchema.plugin(mongoosePaginate);
  var Event = mongoose.model('Event', eventSchema);
};
