(function() {
  'use strict';

  function eventService(data) {
    var EVENTS_URL = 'events';

    function create(event) {
      return data.post(EVENTS_URL, {
        event: event
      });
    }
    return {
      create: create
    }
  }

  angular.module('myApp.services')
    .factory('eventService', ['data', eventService])
}());
