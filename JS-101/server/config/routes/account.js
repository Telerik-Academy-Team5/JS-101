(function() {
  'use strict';
  let router = require('express').Router(),
    auth = require('../auth'),
    controllers = require('../../controllers');

  router
    .get('/register', controllers.users.getRegister)
    .post('/register', controllers.users.register)
    .get('/login', controllers.users.login)
    .post('/login', auth.login)
    .get('/logout', auth.logout);

  module.exports = function(app) {
    app.use('/', router);
  }
}());
