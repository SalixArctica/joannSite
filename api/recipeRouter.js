const express = require('express');
const db = require('./db');
const multer = require('multer');

const recipeRouter = express.Router();

//multer setup
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/../public/assets')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

//get all recipes
recipeRouter.get('/', (req, res) => {
  res.json({recipes: db.data.recipes});
});

//get single recipe
recipeRouter.get('/:recipeId', (req, res) => {
  res.send(db.data.recipes[req.params.recipeId]);
});

recipeRouter.delete('/:recipeId', (req, res) => {
  db.data.recipes[req.params.recipeId] = null;
  res.status(204).send();
});

//post recipe
recipeRouter.post('/', upload.single('img'), (req, res, next) => {
  try {
    let newRecipe = {};
    newRecipe.id = db.data.nextRecipeId;
    newRecipe.name = req.body.name;
    newRecipe.ingredients = JSON.parse(req.body.ingredients);
    newRecipe.instructions = JSON.parse(req.body.instructions);
    newRecipe.image = req.file.filename;
    newRecipe.comments = [];
    db.uploadToS3('images/' + req.file.filename, req.file.path, true);

    db.data.recipes.push(newRecipe);
    db.data.nextRecipeId++;
    db.saveDb(db.data);
  } catch (err) {
    res.status(500).json({message: "error on upload"});
    next(err);
  }
  res.status(201).json({message: "upload successful!"});
});

//post comment
recipeRouter.post('/:recipeId', (req, res) => {
  db.data.recipes[req.params.recipeId].comments.push(req.body);
  db.saveDb(db.data);
  res.status(201).send();
});

module.exports = recipeRouter;
