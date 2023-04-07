const express = require('express');

const blogRouter = express.Router();

const { getBlogs, getABlog, createABlog, updateABlog, deleteBlog} = require('./blog.controller');

blogRouter.route('/').get(getBlogs).post(createABlog);
blogRouter.route('/:id').get(getABlog).post(updateABlog).delete(deleteBlog);

module.exports = blogRouter;