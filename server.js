var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

// GET homepage
app.get('/', function(req, res) {
  res.send('Todo API root');
});

// GET /todos
app.get('/todos', function(req, res) {
  res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function(req, res) {
  
  var todoId = parseInt(req.params.id, 10);
  var matchedTodo = _.findWhere(todos, {id: todoId});

  if (matchedTodo) {
    res.json(matchedTodo);
  } else {
    res.status(404).send();  
  }
});

// POST /todos
app.post('/todos', function(req, res) {
  var body = _.pick(req.body, 'description', 'completed');

  if (!_.isBoolean(body.completed)) {
    return res.status(400).send("Completed is not a boolean.");
  } else if ( !_.isString(body.description) ) {
    return res.status(400).send("Description is not a string.");
  } else if ( body.description.trim().length === 0 ) {
    return res.status(400).send("Description must be present.")
  }

  body.description = body.description.trim();

  body.id = todoNextId++;
  todos.push(body);

  res.json(body);
});

// DELETE /todos/:id
app.delete('/todos/:id', function(req, res) {
  var todoId = parseInt(req.params.id, 10);
  var matchedTodo = _.findWhere(todos, {id: todoId});

  if (matchedTodo) {
    todos.splice((todoId-1), 1);
    res.json({matchedTodo, "success": "Item was successfully destroyed."});
  } else {
    res.status(404).json({"error": "No todo found with that id."});  
  }
})

app.listen(PORT, function() {
  console.log("Express listening on port " + PORT + "!");
});