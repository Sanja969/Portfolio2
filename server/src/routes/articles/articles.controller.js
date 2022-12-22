const fs = require('fs');
const { getAllArticles, createArticle, deleteArticle, ifExistArticle } = require('../../models/articles/articles.model');

async function httpGetAllArticles(req, res) {
  const articles = await getAllArticles()
  return res.status(200).json(articles);
}

async function httpAddNewArticle(req, res) {
  const article = req.body;

  if (!article.title) {
    return res.status(400).json({
      error: 'Missing required article title'
    })
  }

  if (!article.text) {
    return res.status(400).json({
      error: 'Missing required article text'
    })
  }

  if (!article.text) {
    return res.status(400).json({
      error: 'Missing required article link'
    })
  }

  await createArticle(article);
  const articles = await getAllArticles()
  return res.status(201).json(articles);
}

async function httpDeleteArticle(req, res) {
  const articleId = Number(req.params.id);
  const existArticle = await ifExistArticle(articleId)
  if (!existArticle) {
    return res.status(404).json({
      error: 'Article not found'
    })
  }
  await deleteArticle(articleId);
  const articles = await getAllArticles()
  return res.status(202).json(articles);
}

module.exports = {
  httpGetAllArticles,
  httpAddNewArticle,
  httpDeleteArticle,
}