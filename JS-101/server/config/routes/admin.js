(function() {
  'use strict';
  let router = require('express').Router(),
    controllers = require('../../controllers');

  router
    .get('/admin', controllers.admin.get);

  module.exports = function(app) {
    app.use('/', router);
  }
}());
