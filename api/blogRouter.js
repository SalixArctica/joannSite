const express = require('express');
const db = require('./db');

const blogRouter = express.Router();

blogRouter.get('/', (req, res) => {
  console.log(db.data);
  res.send(db.data.blogs);
});

blogRouter.get('/:blogId', (req, res) => {
  res.send(db.data.blogs[req.params.blogId]);
});

blogRouter.post('/', (req, res) => {
  let newBlog = req.body;
  newBlog.id = db.data.nextBlogId;
  db.data.nextBlogId++;

  db.data.blogs.push(newBlog);
  db.saveDb(db.data);
  res.status(204).send();
});

module.exports = blogRouter;
