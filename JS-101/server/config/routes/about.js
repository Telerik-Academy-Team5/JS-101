(function() {
    'use strict';

    let router = require('express').Router(),
        controllers = require('../../controllers');

    router
        .get('/about', controllers.about.get);

    module.exports = function(app) {
        app.use('/', router);
    }
}());
