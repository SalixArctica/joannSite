const express = require('express');
const db = require('./db.js');
const logging = require('morgan');

const port = 5000;

const app = express();

app.use(logging('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/recipes/0', (req, res) => {
  res.json({recipe: db.recipes[0]});
});

app.listen(port, ()=> {
  console.log(`Server listening on port ${port}`);
});
