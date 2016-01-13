(function() {
  'use strict';

  angular.module('myApp.services', []);
  angular.module('myApp.directives', []);
  angular.module('myApp.controllers', ['myApp.services']);
  angular.module('myApp', ['myApp.controllers', 'myApp.directives', 'myApp.services', 'kendo.directives', 'ui.calendar'])
    .constant('baseServiceUrl', 'http://localhost:8888');

  $.material.init();

}());
