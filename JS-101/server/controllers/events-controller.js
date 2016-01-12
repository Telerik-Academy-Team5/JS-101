var events = require('../data/events');

module.exports = {
  add: function(req, res) {
    // TODO: Validation?
    console.log(req.body);
    events.create(req.body.event, (err, event) => {
    if (err) {
      res.status(400).json({
        error: 'Error on saving in database. Please try again'
      });
    }
    res.status(200).json({
      event: event
    });
    });
  },
  all: function(req, res) {
    events.getAll((err, events) => {
    if (err) {
      res.status(404).json({
        error: 'No events found'
      });
    }
    console.log(events);
    res.render('admin/events/all', {
      events: events
    });
    })
  },
  form: function(req, res) {
    res.render('admin/events/add');
  },
  allPublic: function(req, res) {
    throw {
      pesho: 'gosho'
    }
  },
  byId: function(req, res) {
    console.log(req.url);
    events.findById('5695823d503f5500231db67b', (err, event) =>{
    if (err) {
      res.status(500).json({
        error: 'We have some problems.. Please Try again. Yes we will extract the messages in contsants :D'
      })
    } else if (!event) {
      res.status(400).json({
        error: 'The event and the constants for the error messages are not found :)'
      });
    } else {
      res.render('admin/events/details', {
        event: event
      });
    }
    })
  }
}
