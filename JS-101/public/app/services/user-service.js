(function() {
    'use strict';

    function userService(data) {
        var LOGIN_URL = 'login';

        function login(username, password) {
            var url = LOGIN_URL + '?username=' + username + '&password=' + password;
            return data.post(url);
        }
        return {
            login: login
        }
    }

    angular.module('myApp.services')
        .factory('userService', ['data', userService])
}());
