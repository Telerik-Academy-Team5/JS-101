var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://pesho:pesho@ds043324.mongolab.com:43324/js101',
    port: process.env.PORT || 8888
  }
};
