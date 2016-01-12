(function() {
  'use strict';
  console.log('wellcome');
  angular.module('myApp.services', []);
  angular.module('myApp.directives', []);
  angular.module('myApp.controllers', ['myApp.services']);
  angular.module('myApp', ['myApp.controllers', 'myApp.directives', 'myApp.services'])
    .constant('baseServiceUrl', 'http://localhost:8888');

  $.material.init();

}());
