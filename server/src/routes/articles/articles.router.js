const express = require('express');
const { httpGetAllArticles, httpAddNewArticle, httpDeleteArticle } = require('./articles.controller')
const { isLoggedIn } = require('../users/users.middleware')

const articlesRouter = express.Router();

articlesRouter.get('/', httpGetAllArticles);
articlesRouter.post('/', isLoggedIn, httpAddNewArticle);
articlesRouter.delete('/:id', isLoggedIn, httpDeleteArticle);

module.exports = articlesRouter;