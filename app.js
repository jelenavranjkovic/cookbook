var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('Hello ludi!');
});

require("./config/routes.js")(app);

app.listen(3000, function() {
  console.log('Cookbook listening on port 3000');
});
