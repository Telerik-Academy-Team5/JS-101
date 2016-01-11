'use strict';
var vm = require('vm'),
  fs = require('fs'),
  output = [],
  results = [],
  options = {};

var sandbox = {
  console: {
    log: function(arg) {
      output.push(arg.toString());
    }
  }
};
process.stdin.on('data', function(code) {

  code = "'use strict';\n" + (code || '');
  options.timeout = 1000;
  // TODO: Handling errors
  try {
    vm.runInNewContext(code, sandbox, [options]);
  } finally {
    process.stdout.write(output.toString());
  }

});
