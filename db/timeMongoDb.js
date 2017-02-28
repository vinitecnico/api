'use strict';
const mongodb = require('./mongoDb');
const Q = require('q');
const moment = require('moment');
const _ = require('lodash');

class timeMongoDb {

    constructor() {

    }

    insert(date) {
        const defer = Q.defer();
        mongodb.connect().then(response => {
            let db = response;            
            this.select(date).then(time => {
                var cursor = time;
                cursor.count().then(response => {
                    if (response == 0) {
                        const time = {
                            date: moment().format('YYYYMMDD'),
                            times: [{
                                start: moment().toDate(),
                                end: ''
                            }]
                        };
                        db.collection('timesheet').insertOne(time);

                        defer.resolve(time);
                    } else {
                        cursor = time;
                        let times = [];
                        cursor.toArray(function (err, docs) {
                            if (docs != null) {
                                times = _.head(docs).times;

                                if (!_.last(times).end) {
                                    _.last(times).end = moment().toDate();
                                } else {
                                    times.push({
                                        start: moment().toDate(),
                                        end: ''
                                    });
                                }

                                db.collection('timesheet').updateMany(
                                    { "date": date },
                                    {
                                        $set: {
                                            'times': times
                                        }
                                    }
                                    ,
                                    function (err, results) {
                                        console.log(results);
                                        const time = _.head(docs);
                                        time.times = times;
                                        defer.resolve(time);
                                        mongodb.close(db);
                                    });
                            }

                        });
                    }
                });
            });
        });
        return defer.promise;
    }

    select(date) {
        const defer = Q.defer();
        mongodb.connect().then(function (response) {
            let db = response;
            defer.resolve(db.collection('timesheet').find({ "date": date }));
        });
        return defer.promise;
    }
}

module.exports = timeMongoDb;