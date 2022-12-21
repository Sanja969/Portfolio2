const articles = require('./articles.mongo');

async function getAllArticles() {
  return await articles.find({}, {
    '_id': 0, '__v': 0,
  })
}

async function getLatestArticleNumber() {
  const latestArticle = await articles.
  findOne()
  .sort('-articleNumber');

  if (!latestArticle) return 1;

  return latestArticle.articleNumber;
}

async function saveArticle(article) {
  await articles.findOneAndUpdate( 
    { articleNumber: article.articleNumber },
    article, 
    { upsert: true }
  )
}

async function createArticle(article) {
  const newArticleNumber = await getLatestArticleNumber() + 1;
  const newArticle = Object.assign(article,
    {
    articleNumber: newArticleNumber,
  });
  await saveArticle(newArticle);
}

async function findArticle(filter) {
  return await articles.findOne(filter);
}

async function ifExistArticle(id) {
  return await findArticle({articleNumber: id});
}

async function deleteArticle(ArticleId) {
  await articles.deleteOne({articleNumber: ArticleId})
}

module.exports = {
  getAllArticles,
  createArticle,
  ifExistArticle,
  deleteArticle,
}