'use strict';

let app = require('express')();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const config = require('./config');
const responseFormat = require('./helpers/responseFormatHelper');
const tokenHelper = require('./helpers/tokenHelper');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

app.set('tokenSecret', config.tokenSecret);

let timeApi = require('./api/timeApi')(app);

app.get('/', function (req, res) {
  res.send('timeApi! method - get http://localhost:3000/api/time/20170228 - post http://localhost:3000/api/time {"date": "20170228"}');
});

app.post('/api/authenticate', function (req, res) {
  if (config.user == req.body.user && config.pwd == req.body.pwd) {
    const token = tokenHelper.create(app);    
    res.status(200).json({ success: true, message: 'Enjoy your token!', token: token });
    console.log('token:' + token);
  } else {
    res.status(500).json(responseFormat.error('Authentication failed. User not found.'));
    console.log('Authentication failed. User not found.');
  }
});

// const server = app.listen(8080, function () {
//   let host = server.address().address;
//   host = (host === '::' ? 'localhost' : host);
//   const port = server.address().port;
//   console.log('listening at http://%s:%s', host, port);
// });

var server = app.listen(5000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});
