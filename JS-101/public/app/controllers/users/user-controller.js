(function() {

    function UserController($window, userService) {
        var vm = this;
        vm.login = function(username, password) {
            userService.login(username, password)
                .then(function(result) {
                    console.log(result);
                    if(result.success){
                        console.log('logged');
                        vm.error = '';
                        $window.location.href = '/'
                    } else {
                        vm.error = 'Wrong username or password';
                    }

                })
        }
    }

    angular.module('myApp.controllers')
        .controller('UserController', ['$window', 'userService', UserController])
}());
