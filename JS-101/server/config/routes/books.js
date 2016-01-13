(function () {
    'use strict';

    let router = require('express').Router(),
        controllers = require('../../controllers'),
        prefix = '/books';

    router
        .get(prefix, controllers.books.getBooks)
        .get(prefix + '/:id', controllers.books.findBookById);

    module.exports = function (app) {
        app.use('/', router);
    }
}());
