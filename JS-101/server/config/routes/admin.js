(function() {
  'use strict';
  let router = require('express').Router(),
    controllers = require('../../controllers');

  router
    .get('/panel', controllers.admin.get)
    .get('/events', controllers.events.all)
    .get('/events/add', controllers.events.form)
    .get('/events/details/:id', controllers.events.byId)

  module.exports = function(app) {
    // TODO: Authentication
    app.use('/admin', router);
  }
}());
