const express = require('express');
const api = express.Router();
const authRouter = require('./auth/auth.route');
const authenticationMiddleware = require('../services/authentication');
const blogRouter = require('./blogs/blog.route');

api.use('/auth', authRouter);
api.use('/blogs', authenticationMiddleware, blogRouter);

module.exports = api;