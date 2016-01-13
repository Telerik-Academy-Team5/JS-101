(function () {
    'use strict';

    let router = require('express').Router(),
        controllers = require('../../controllers'),
        prefix = '/books';

    router
        .get(prefix, controllers.books.getBooks)
        .post(prefix, controllers.books.addBook)
        .get(prefix + '/add', controllers.books.form)
        .get(prefix + '/:id', controllers.books.findBookById);

    module.exports = function (app) {
        app.use('/', router);
    }
}());
