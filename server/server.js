var express    = require('express'),
    app        = express(),
    bodyparser = require('body-parser'),
    mongoose   = require('mongoose'),
    morgan     = require('morgan'),
    passport   = require('passport'),
    github    = require('passport-github').Strategy,
    jsonWT     = require('jsonwebtoken'),
    jwt        = require('express-jwt'),
    cookieParser = require('cookie-parser');


mongoose.connect('mongodb://localhost/weaknessjs');

passport.use(new github({
  clientID: '24a142e1ff7f3b6d5b73',
  clientSecret: '528dead090e5adf9a87b41eb0989bb2925752184'
}, function(token, tokenSecret, profile, done) {
  console.log(tokenSecret);
  console.log(profile);
  done(null, profile);
}));


var todos = [];
var id = 0;
var users = {};

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client'));
app.use(cookieParser());
app.use(bodyparser.json());
app.use(passport.initialize());

app.get('/github', passport.authenticate('github', {
  session: false
}));

app.get('/github/callback', passport.authenticate('github', {
  session: false
}), function(req, res) {
  var token = jsonWT.sign({id: req.user.id}, 'thisismydopesecret', {});
  res.cookie('__todos', token);
  res.redirect('/');
});

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

app.post('/login', function(req, res, next) {
  if(req.body.username in users && req.body.password === users[username]) {
    res.send(200);
  } else {
    res.send(401);
  }
});

app.post('/signup', function(req, res, next) {
  console.log(req.body);
  if(req.body.username in users) {
    res.send(500);
  } else {
    users[req.body.username] = req.body.password;
    res.cookie('my', 'cookie');
    res.send(200);
  }
});


module.exports = app;