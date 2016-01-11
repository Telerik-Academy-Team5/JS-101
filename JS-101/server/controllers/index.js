var UsersController = require('./users-controller'),
  ZenController = require('./zen-controller'),
  AdminController = require('./admin-controller');

module.exports = {
  users: UsersController,
  jsexecutor: ZenController,
  admin: AdminController
};
