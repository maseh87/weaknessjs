var express    = require('express');
    app        = express();
    bodyparser = require('body-parser');
    mongoose   = require('mongoose');
    morgan     = require('morgan');

mongoose.connect('mongodb://localhost/weaknessjs');

var todos = [];

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client'));
app.use(bodyparser.json());


app.get('/todos', function(req, res, next) {
  res.send(todos);
});

app.post('/todos', function(req, res, next) {
  todos.push(req.body);
  res.send(req.body);
});

module.exports = app;