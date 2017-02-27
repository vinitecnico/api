'use strict';
const responseFormat = require('../helpers/responseFormatHelper');
const timeMongoDb = require('../db/timeMongoDb');


module.exports = {
	get: (req, res, next) => {
		timeMongoDb.insert();
		return responseFormat.success({test: 'aaaa'});
	}
};