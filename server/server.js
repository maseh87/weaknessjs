var express    = require('express');
    app        = express();
    bodyparser = require('body-parser');
    mongoose   = require('mongoose');
    morgan     = require('morgan');

mongoose.connect('mongodb://localhost/weaknessjs');

var todos = [];
var id = 1;

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

app.delete('/todos', function(req, res, next) {

});

module.exports = app;