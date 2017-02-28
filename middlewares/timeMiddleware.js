'use strict';
const responseFormat = require('../helpers/responseFormatHelper');
const TimeMongoDb = require('../db/timeMongoDb');
const Q = require('q');

class timeMiddleware {

	constructor() {

	}

	get(date) {
		const defer = Q.defer();
		const timeMongoDb = new TimeMongoDb();
		timeMongoDb.select(date).then(response => {			
			let cursor = response;			
			cursor.toArray(function (err, docs) {
				defer.resolve(responseFormat.success(docs));
			 });
		});

		return defer.promise;
	}

	post(date) {
		const defer = Q.defer();
		const timeMongoDb = new TimeMongoDb();
		timeMongoDb.insert(date).then(response => {
			defer.resolve(responseFormat.success(response));
		});

		return defer.promise;
	}
}

module.exports = timeMiddleware;