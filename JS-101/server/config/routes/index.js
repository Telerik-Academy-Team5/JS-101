(function() {
  'use strict';

  module.exports = function(app) {

    app.get("*", function(req, res, next) {
      res.locals.currentUser = req.user;
      next();
    });

    app.get('/', function(req, res) {
      res.render('index', {
        currentUser: req.user
      });
    });

    require('./account')(app);
  }
}());
