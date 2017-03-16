'use strict';

// const TimeMiddleware = require('../middlewares/timeMiddleware');
// const tokenHelper = require('../helpers/tokenHelper');
const config = require('../config');
const Q = require('q');

module.exports = {

//     app.get('/api/time/:date', function (req, res) {
//         var date = req.param('date');
//         const timeMiddleware = new TimeMiddleware();
//         timeMiddleware.get(date).then(function (response) {
//             res.status(200).json(response);
//         }).catch(function (e) {
//             res.status(500, {
//                 error: e
//             });
//         });
//     });

//     app.post('/api/time', function (req, res) {
//         const token = req.body.token || null;
//         tokenHelper.validate(app, token).then(response => {
//             if (response) {
//                 const date = req.body.date;
//                 const timeMiddleware = new TimeMiddleware();
//                 timeMiddleware.post(date).then(function (response) {
//                     res.status(200).json(response);
//                 }).catch(function (e) {
//                     res.status(500, {
//                         error: e
//                     });
//                 });
//             } else {
//                 return res.status(403).send({
//                     success: false,
//                     message: 'No token provided.'
//                 });
//             }
//         });
//     });
};
