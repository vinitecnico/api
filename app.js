

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const responseFormat = require('./helpers/responseFormatHelper');
const tokenHelper = require('./helpers/tokenHelper');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('tokenSecret', config.tokenSecret);


app.get('/', function(request, response) {
  response.send('test blá - blá - blá');
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
