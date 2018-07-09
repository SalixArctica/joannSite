const express = require('express');
const db = require('./db');
const multer = require('multer');

const recipeRouter = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/assets')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

recipeRouter.get('/', (req, res) => {
  res.json({recipes: db.recipes});
});

recipeRouter.get('/:recipeId', (req, res) => {
  res.send(db.recipes[req.params.recipeId]);
});

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

module.exports = recipeRouter;
