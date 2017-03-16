const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('test blá - blá - blá');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
