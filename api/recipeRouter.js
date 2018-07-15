const express = require('express');
const db = require('./db');
const multer = require('multer');

const recipeRouter = express.Router();

//multer setup
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/assets')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

//get all recipes
recipeRouter.get('/', (req, res) => {
  res.json({recipes: db.recipes});
});

//get single recipe
recipeRouter.get('/:recipeId', (req, res) => {
  res.send(db.recipes[req.params.recipeId]);
});

//post recipe
recipeRouter.post('/', upload.single('img'), (req, res) => {
  let newRecipe = {};
  newRecipe.id = db.nextRecipeId;
  newRecipe.name = req.body.name;
  newRecipe.ingredients = JSON.parse(req.body.ingredients);
  newRecipe.instructions = JSON.parse(req.body.instructions);
  newRecipe.image = req.file.filename;

  db.recipes.push(newRecipe);
  db.nextRecipeId++;

  res.status(204).send();
});

//post comment
recipeRouter.post('/:recipeId', (req, res) => {
  db.recipes[req.params.recipeId].comments.push(req.body)
  res.status(204).send();
});

module.exports = recipeRouter;
