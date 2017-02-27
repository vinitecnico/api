'use strict';
let MongoClient = require('mongodb').MongoClient;
let Q = require('q');
const urlDataBase = 'mongodb://admin:v8twanzo@ds163679.mlab.com:63679/timesheet';

module.exports = {

    connect: () => {
        var defer = Q.defer();
        MongoClient.connect(urlDataBase, function (err, db) {
            console.log("Connected correctly to server");
            defer.resolve(db);
        });
        return defer.promise;
    },
    close: (db) => {
        db.close();
    }
};