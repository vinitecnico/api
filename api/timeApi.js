'use strict';
let TimeMiddleware = require('../middlewares/timeMiddleware');
const Q = require('q');

module.exports = (app) => {

    app.get('/api/time/:date', function (req, res) {
        var date = req.param('date');
        const timeMiddleware = new TimeMiddleware();
        timeMiddleware.get(date).then(function (response) {
            res.status(200).json(response);
        }).catch(function (e) {
            res.status(500, {
                error: e
            });
        });
    });

    app.post('/api/time', function (req, res) {
        const date = req.body.date;
        const timeMiddleware = new TimeMiddleware();
        timeMiddleware.post(date).then(function (response) {
            res.status(200).json(response);
        }).catch(function (e) {
            res.status(500, {
                error: e
            });
        });
    });
};