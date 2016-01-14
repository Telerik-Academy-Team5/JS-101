(function() {
    'use strict';

    function userService(data) {
        var LOGIN_URL = 'login';
        var REGISTER_URL = 'register';

        function login(username, password) {
            var url = LOGIN_URL + '?username=' + username + '&password=' + password;
            return data.post(url);
        }

        function register(username, password) {
            return data.post(REGISTER_URL,{
                username: username,
                password: password,
                confirmPassword: password
            });
        }

        return {
            login: login,
            register: register
        }
    }

    angular.module('myApp.services')
        .factory('userService', ['data', userService])
}());
