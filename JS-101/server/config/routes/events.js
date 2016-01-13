(function() {
  'use strict';
  let router = require('express').Router(),
    controllers = require('../../controllers');

  router
    .get('/events', controllers.events.get)
    .get('/events/calendar', controllers.events.calendar)
    .post('/events/all', controllers.events.allPublic)
    .post('/events', controllers.events.add)

  module.exports = function(app) {
    app.use('/', router);
  }

}());
