const express = require('express');
const db = require('./db');
const fileUpload = require('express-fileupload');

const recipeRouter = express.Router();

recipeRouter.get('/', (req, res) => {
  res.json({recipes: db.recipes});
});

recipeRouter.get('/:recipeId', (req, res) => {
  res.json({recipe: db.recipes[req.params.recipeId]});
});

recipeRouter.use(fileUpload());

recipeRouter.post('/', (req, res) => {
  res.status(200).send();
/*
  let img = req.files.img;
  let recipe = req.body;

  recipe.image = img.name;

  img.mv('../public/assets/' + img.name, err => {
    if(err)
      return res.status(500).send(err);

    console.log('it worked!');
  })
  */
});

module.exports = recipeRouter;
