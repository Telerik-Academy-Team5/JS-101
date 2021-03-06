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
                        $window.location.href = '/';
                    } else {
                        vm.error = 'Wrong username or password';
                    }

                })
        }

        vm.register = function(username, password) {
            console.log(username + password);
            userService.register(username, password)
                .then(function(result) {
                    console.log(result);
                    if(result.success){
                        console.log('logged');
                        $window.location.href = '/';
                        vm.error = '';
                    } else {
                        if(result.error.code == 11000) {
                            vm.error = 'This username already exists!';
                        } else {
                            vm.error = result.error.errmsg;
                        }
                    }

                })
        }
    }

    angular.module('myApp.controllers')
        .controller('UserController', ['$window', 'userService', UserController])
}());
