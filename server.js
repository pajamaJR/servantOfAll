var express = require('express');
var app = express();



var port = 8080;

app.use(express.static(__dirname + '/dist'));

//require('./app/routes')(app);

app.listen(port, function () {
  console.log('servantOfAll app listening on port ' + port + '!');
});

//exports = module.exports = app;
