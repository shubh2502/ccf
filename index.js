var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  loginModel = require('./api/models/initiateModels'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ccf'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//initiate all routes
var routes = require('./api/routes/loginRoutes');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);