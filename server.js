var express = require('express');
var app = express();
var bodyparser = require('body-parser');


var todos = [];
app.use(express.static(__dirname));
app.use(bodyparser.json());


app.get('/todos', function(req, res, next) {
  res.send(todos);
});

app.post('/todos', function(req, res, next) {
  todos.push(req.body);
  res.send(req.body);
});

app.listen(3000);
console.log('Listening 3k');