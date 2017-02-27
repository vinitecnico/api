'use strict';
let timeMiddleware = require('../middlewares/timeMiddleware');

module.exports = (app) => {

    app.get('/api/time', function (req, res) {
        res.json(timeMiddleware.get());
    });
};