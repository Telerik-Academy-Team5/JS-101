(function() {

    function ZenController(zenService) {
        var vm = this;
        vm.submit = function(code) {
            zenService.submit(code)
                .then(function(result) {
                    vm.output = result.output;
                })
        }
    }

    angular.module('myApp.controllers')
        .controller('ZenController', ['zenService', ZenController])
}());
