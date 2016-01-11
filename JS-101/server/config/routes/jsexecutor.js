(function() {
  'use strict';
  let router = require('express').Router(),
    controllers = require('../../controllers');

  router
    .get('/zen', controllers.jsexecutor.get)
    .post('/zen', controllers.jsexecutor.submit)

  module.exports = function(app) {
    app.use('/', router);
  }
}());
