(function() {
  'use strict';
  let router = require('express').Router(),
    controllers = require('../../controllers');

  router
    .get('/events', controllers.events.allPublic)
    .post('/events', controllers.events.add)

  module.exports = function(app) {
    app.use('/', router);
  }

}());
