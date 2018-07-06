const express = require('express');
const db = require('./db');

const blogRouter = express.Router();

blogRouter.get('/', (req, res) => {
  res.json({blogs: db.blogs});
});

blogRouter.get('/:blogId', (req, res) => {
  res.json({blog: db.blogs[req.params.blogId]});
});

blogRouter.post('/', (req, res) => {
  let newBlog = req.body;
  newBlog.id = db.nextBlogId;
  db.nextBlogId++;

  db.blogs.push(newBlog);
  console.log(db.blogs);
  res.status(204).send();
});

module.exports = blogRouter;
