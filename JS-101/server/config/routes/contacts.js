(function () {
    'use strict';

    let router = require('express').Router(),
        controllers = require('../../controllers'),
        prefix = '/contacts';

    router
        .get(prefix, controllers.contacts.get)
        .post(prefix, controllers.contacts.createMessage);

    module.exports = function (app) {
        app.use('/', router);
    }
}());
