(function() {

  function EventsCreateController($location, eventService) {
    var vm = this;
    vm.createEvent = function(newEvent) {
      console.log(newEvent);
      eventService.create(newEvent)
        .then(function(result) {
          console.log(result);
          window.location.href = '/admin/events/details/' + result.event._id;
        })
    }
  }

  angular.module('myApp.controllers')
    .controller('EventsCreateController', ['$location', 'eventService', EventsCreateController])
}());
