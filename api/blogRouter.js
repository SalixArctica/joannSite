const express = require('express');
const db = require('./db');

const blogRouter = express.Router();

blogRouter.get('/', (req, res) => {
  res.send(db.data.blogs);
});

blogRouter.get('/:blogId', (req, res) => {
  res.send(db.data.blogs[req.params.blogId]);
});

blogRouter.delete('/:blogId', (req, res) => {
  db.data.blogs[req.params.blogId] = null;
  db.saveDb(db.data);
  res.status(204).send();
});

blogRouter.post('/', (req, res) => {
  let newBlog = req.body;
  newBlog.id = db.data.nextBlogId;
  db.data.nextBlogId++;
  newBlog.comments = [];

  db.data.blogs.push(newBlog);
  db.data.featured.blog = newBlog;
  db.saveDb(db.data);
  res.status(204).send();
});

blogRouter.post('/:blogId', (req, res) => {
  db.data.blogs[req.params.blogId].comments.push(req.body);
  db.saveDb(db.data);
  res.status(201).send();
});

blogRouter.put('/:blogId', (req, res) => {
  let editedBlog = req.body;
  editedBlog.comments = db.data.blogs[req.params.blogId].comments;

  db.data.blogs[req.params.blogId] = editedBlog;
  db.saveDb(db.data);
  res.status(200).send();
});

module.exports = blogRouter;
