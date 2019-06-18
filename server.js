var express = require('express'),
<<<<<<< HEAD
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');


  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/Tododb');

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  var routes = require ('./api/routes/todoListRoute');
  routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
=======

app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Task = require('./api/models/todoListModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoute');
routes(app)

app.listen(port);

app.use(function(req, res){
    res.status(404).send({url:req.originalUrl + ' not found'})
})

console.log('todo list RESTful API server started on: ' + port);
>>>>>>> 32ad5c30f8ef8ad03613eafcb6ecacc141220b5c
