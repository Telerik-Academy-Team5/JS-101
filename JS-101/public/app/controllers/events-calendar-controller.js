(function() {
  'use strict';

  function EventsCalendarController($scope, eventService) {
    var vm = this,
      dataSource = {};
    eventService.getAll()
      .then(function(data) {
        dataSource = data;

        console.log(dataSource);

        $scope.uiConfig = {
          calendar: {
            height: 450,
            editable: true,
            header: {
              left: 'month basicWeek basicDay agendaWeek agendaDay',
              center: 'title',
              right: 'today prev,next'
            },
            events: data,
            // dayClick: $scope.alertEventOnClick,
          }
        };

      })
  }


  angular.module('myApp.controllers')
    .controller('EventsCalendarController', ['$scope', 'eventService', EventsCalendarController])
}());
