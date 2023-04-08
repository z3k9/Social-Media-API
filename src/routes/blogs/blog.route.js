const express = require('express');

const blogRouter = express.Router();

const { getAllBlogs, getABlog, createABlog, updateABlog, deleteABlog} = require("./blog.controller");

blogRouter.route('/').get(getAllBlogs).post(createABlog);
blogRouter.route('/:id').get(getABlog).post(updateABlog).delete(deleteABlog);

module.exports = blogRouter;