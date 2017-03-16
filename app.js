

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const responseFormat = require('./helpers/responseFormatHelper');
// const tokenHelper = require('./helpers/tokenHelper');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('tokenSecret', config.tokenSecret);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

app.get('/', function(request, response) {
  response.send('test blá - blá - blá');
});

app.get('/', function (req, res) {
   res.send('timeApi! method - get http://localhost:3000/api/time/20170228 - post http://localhost:3000/api/time {"date": "20170228"}');
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
