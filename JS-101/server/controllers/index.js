var UsersController = require('./users-controller'),
  ZenController = require('./zen-controller');

module.exports = {
  users: UsersController,
  jsexecutor: ZenController
};
