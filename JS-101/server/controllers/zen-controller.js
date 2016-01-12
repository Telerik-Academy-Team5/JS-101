var path = require('path'),
    fs = require('fs');

module.exports = {
    get: function (req, res) {
        res.render('pages/zen');
    },
    submit: function (req, res) {
        var process = require('child_process'),
            child = process.spawn('node', [path.join(__dirname, '..', 'utilities', 'jsexecutor.js')]);


        child.stdin.write(req.body.code);

        child.stdout.on('data', function (result) {

            res.render('pages/zen', {
                result: {
                    output: result
                }
            });
        });

    }
}
