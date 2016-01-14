var encryption = require('../utilities/encryption');
var users = require('../data/users');

var CONTROLLER_NAME = 'users';

module.exports = {
  getRegister: function(req, res, next) {
    res.render(CONTROLLER_NAME + '/register')
  },
  register: function(req, res, next) {
    var newUserData = req.body;
console.dir(newUserData);
    if (newUserData.password != newUserData.confirmPassword) {
      req.session.error = 'Passwords do not match!';
      res.redirect('/register');
    } else {
      newUserData.salt = encryption.generateSalt();
      newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, newUserData.password);
      users.create(newUserData, function(err, user) {
        if (err) {
          res.send({
            success: false,
            error: err
          });
          return;
        }

        req.logIn(user, function(err) {
          if (err) {
            res.status(400);
            return res.send({
              success: false,
              reason: err.toString()
            }); // TODO
          } else {
            res.send({success: true});
          }
        })
      });
    }
  },
  login: function(req, res, next) {
    res.render(CONTROLLER_NAME + '/login');
  }
};
