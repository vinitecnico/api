'use strict';
let mongodb = require('./mongoDb');

module.exports = {

    insert: () => {
        mongodb.connect().then(function (response) {
            let db = response;

            db.collection('timesheet').insertOne({
                "date": new Date("2014-01-16T00:00:00Z"),
                "grade": "B",
                "score": 17
            });

            mongodb.close(db);
        });
    }
};