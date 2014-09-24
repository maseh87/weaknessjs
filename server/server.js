var express    = require('express');
    app        = express();
    bodyparser = require('body-parser');
    mongoose   = require('mongoose');
    morgan     = require('morgan');

mongoose.connect('mongodb://localhost/weaknessjs');

var todos = [];
var id = 0;

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client'));
app.use(bodyparser.json());


app.get('/todos', function(req, res, next) {
  res.send(todos);
});

app.post('/todos', function(req, res, next) {
  req.body.id = id;
  id++;
  todos.push(req.body);
  res.send(req.body);
});

app.delete('/todos/:id', function(req, res, next) {
  for(var i = 0; i < todos.length; i++) {
    if(todos[i].id === parseInt(req.params.id)) {
      var id = todos[i].id;
      todos.splice(i, 1);
      res.send({id: id});
    }
  }
});

app.put('/todos', function(req, res, next) {
  for(var i = 0; i < todos.length; i++) {
    if(todos[i].id === req.body.id) {
      todos[i].todo = req.body.todo;
      res.send(todos);
    }
  }
});









module.exports = app;