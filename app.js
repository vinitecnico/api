'use strict';

let app = require('express')();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let timeApi = require('./api/timeApi')(app);



app.get('/', function (req, res) {
  res.send('Hello World!');
});

const server = app.listen(3000, function () {
  var host = server.address().address;
  host = (host === '::' ? 'localhost' : host);
  var port = server.address().port;
  console.log('listening at http://%s:%s', host, port);
});