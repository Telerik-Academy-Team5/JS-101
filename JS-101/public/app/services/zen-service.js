(function() {
    'use strict';

    function zenService(data) {
        var ZEN_URL = 'zen';

        function submit(code) {
            return data.post(ZEN_URL, {
                code: code
            });
        }
        return {
            submit: submit
        }
    }

    angular.module('myApp.services')
        .factory('zenService', ['data', zenService])
}());
