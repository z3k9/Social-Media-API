const express = require('express');
const api = express.Router();
const authRouter = require('./routes/auth/auth.controller');
const authenticationMiddleware = require('');
const blogRouter = require('./routes/blogs/blog.controller');

api.use('/auth', authRouter);
api.use('/blogs', authenticationMiddleware, blogRouter);
module.exports = api;