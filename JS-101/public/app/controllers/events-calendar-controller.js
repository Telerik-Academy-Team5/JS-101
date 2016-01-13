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
            eventClick: function(date, jsEvent, view) {
              $('#eventInfo #title').text(date.title);
              $('#eventInfo #speakers').text(date.speakers);
              $('#eventInfo #location').text(date.location);
              $('#eventInfo').show();

            },
          }
        };
        $scope.count = data.length;

      })
  }


  angular.module('myApp.controllers')
    .controller('EventsCalendarController', ['$scope', 'eventService', EventsCalendarController])
}());
