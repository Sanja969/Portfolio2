const express = require('express');
const { httpGetAllBlogs, httpAddNewBlog, httpDeleteBlog } = require('./blogs.controller')
const { isLoggedIn } = require('../users/users.middleware')

const blogsRouter = express.Router();

blogsRouter.get('/', httpGetAllBlogs);
blogsRouter.post('/', isLoggedIn, httpAddNewBlog);
blogsRouter.delete('/:id', isLoggedIn, httpDeleteBlog);

module.exports = blogsRouter;