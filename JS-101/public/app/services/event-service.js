(function() {
  'use strict';

  function eventService(data) {
    var EVENTS_URL = 'events';

    function create(event) {
      return data.post(EVENTS_URL, {
        event: event
      });
    }

    function getAll() {
      return data.get(EVENTS_URL + '/calendar');
    }

    return {
      create: create,
      getAll: getAll
    }
  }

  angular.module('myApp.services')
    .factory('eventService', ['data', eventService])
}());
