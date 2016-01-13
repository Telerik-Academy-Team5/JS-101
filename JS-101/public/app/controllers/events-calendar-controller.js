(function() {
  'use strict';

  function EventsCalendarController($scope, eventService) {
    var vm = this,
      dataSource = {};
    eventService.getAll()
      .then(function(data) {
        dataSource = data;
        $scope.uiConfig.events = data;
        console.log(dataSource);
      })

    $scope.eventSource = {
      url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
      className: 'gcal-event', // an option!
      currentTimezone: 'America/Chicago' // an option!
    };
    $scope.uiConfig = {
      calendar: {
        height: 450,
        editable: true,
        header: {
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        ka: [
          {
            title: 'All Day Event',
            start: new Date(),
            backgroundColor: "#f56954", //red
            borderColor: "#f56954" //red
          },
          {
            title: 'Long Event',
            start: new Date(2016, 13, 1),
            end: new Date(2016, 13, 1),
            backgroundColor: "#f39c12", //yellow
            borderColor: "#f39c12" //yellow
          }
        ],
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };

    $scope.eventSources = [];
  }


  angular.module('myApp.controllers')
    .controller('EventsCalendarController', ['$scope', 'eventService', EventsCalendarController])
}());
