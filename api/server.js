const express = require('express');
const db = require('./db');
const logging = require('morgan');
const bodyParser = require('body-parser');
const blogRouter = require('./blogRouter');
const recipeRouter = require('./recipeRouter')

const port = 5000;

const app = express();

app.use(logging('dev'));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/blog', blogRouter);

app.use('/api/recipes', recipeRouter);

app.listen(port, ()=> {
  console.log(`Server listening on port ${port}`);
});
