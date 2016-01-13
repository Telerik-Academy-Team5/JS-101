(function () {

    function BooksController($scope, $location, booksService) {
        var vm = this;
        console.log('here');

        /*
         dataSource = new kendo.data.DataSource({
         transport: {
         read: {
         url: "http://localhost:8888/books/all",
         type: 'POST',
         dataType: "json"
         },
         // update: {
         //   url: "http://localhost:8888/events",
         //   dataType: "json",
         //   type: "PUT"
         // },
         // destroy: {
         //   url: "http://localhost:8888/events",
         //   dataType: "json",
         //   type: "DELETE"
         // },
         parameterMap: function(data, type) {
         console.log(data);
         return data;
         }
         },
         serverPaging: true,
         serverFiltering: true,
         serverSorting: true,
         batch: true,
         pageSize: 5,
         schema: {
         data: 'data',
         total: 'total',
         model: {
         id: "_id",
         fields: {
         title: {
         type: "string",
         validation: {
         required: true
         }
         },
         description: {
         type: "string"
         },
         authors: {
         type: "string",
         validation: {
         required: true
         }
         },
         difficultLevel: {
         type: "string"
         },
         pages: {
         type: "number",
         validation: {
         required: true
         }
         },
         publishDate: {
         type: "date"
         }
         }
         }
         }
         });

         $scope.mainGridOptions = {
         dataSource: dataSource,
         filterable: true,
         sortable: true,
         pageable: true,
         columns: [
         {
         field: "topic",
         title: "Topic",
         width: "100px"
         },
         {
         field: "description",
         title: "Description",
         width: "100px"
         },
         {
         field: "location",
         title: "Location",
         width: "100px"
         },
         {
         field: "speakers",
         title: "Speaker/Coach",
         width: "100px"
         },
         {
         field: "url",
         title: "Information URL",
         width: "100px",
         template: '<a href="#=url#" target="_blank" class="btn btn-default">More info</a>'
         },
         {
         field: "date",
         title: "Date",
         width: "100px",
         template: "#= kendo.toString(kendo.parseDate(date, 'yyyy-MM-dd hh:mm'), 'MM/dd/yyyy hh:mm') #"
         },
         {
         command: ["edit", "destroy"],
         title: "//TODO ",
         width: "120px"
         }
         ],
         editable: "popup"
         };
         */
    }

    angular.module('myApp.controllers')
        .controller('BooksController', ['$scope', '$location', 'booksService', BooksController])
}());
