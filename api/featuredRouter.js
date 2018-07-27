const express = require('express');
const db = require('./db');
const multer = require('multer');

const featuredRouter = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/../public/assets')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

featuredRouter.post('/product', upload.single('img'), (req, res, next) => {
  try {
    let newProduct = {};
    newProduct.name = JSON.parse(req.body.name);
    newProduct.description = JSON.parse(req.body.description);
    newProduct.image = req.file.filename;
    db.uploadToS3('images/' + req.file.filename, req.file.path, true);

    db.data.featured.product = newProduct;
    db.saveDb(db.data);
  } catch (err) {
    res.status(500).json({message: "error on upload"});
    next(err);
  }
  res.status(201).json({message: "upload successful!"});
});

featuredRouter.post('/recipe', (req, res) => {
  db.data.featured.recipe = req.body;
  db.saveDb(db.data);
});

featuredRouter.get('/', (req, res) => {
  res.json(db.data.featured);
});

module.exports = featuredRouter;
