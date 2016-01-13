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
    // TODO: read query from user
    events.getAll({}, {
      page: 1,
      limit: 10
    }).then(function(data) {

      var events = [];

      for (var event in data.docs) {
        if (data.docs[event] && data.docs.hasOwnProperty(event)) {
          events.push(data.docs[event]);
        }
      }
      res.render('admin/events/all', {
        events: events
      })
    })
  },
  form: function(req, res) {
    res.render('admin/events/add');
  },
  allPublic: function(req, res) {

    var sortBy = {},
      query = {
        page: req.body.page,
        limit: req.body.take,
        sort: req.body.sort
      };

    if (query.sort) {
      query.sort = query.sort[0];
      sortBy[query.sort.field] = query.sort.dir;
      query.sort = sortBy;
    }

    events.getAll({}, query).then(function(data) {
      var result = [];
      for (var event in data.docs) {
        if (data.docs[event] && data.docs.hasOwnProperty(event)) {
          result.push(data.docs[event]);
        }
      }

      events.count((err,count) => {

      res.send({
        data: result,
        total: count
      });
      })

    })
  },
  byId: function(req, res) {

    events.findById(req.params.id, (err, event) =>{
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
