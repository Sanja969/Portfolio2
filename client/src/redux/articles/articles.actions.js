/* eslint-disable import/prefer-default-export */
import { ARTICLES_ACTION_TYPES } from './articles.types';

export const fetchArticlesStart = () => (
  {
  type: ARTICLES_ACTION_TYPES.FETCH_ARTICLES_START,
})

export const fetchArticlesSuccess = (articles) => ({
  type: ARTICLES_ACTION_TYPES.FETCH_ARTICLES_SUCCESS,
  payload: articles,
})

export const fetchArticlesFailed = (error) => ({
  type: ARTICLES_ACTION_TYPES.FETCH_ARTICLES_FAILED,
  payload: error,
})

export const postArticleStart = (article, token) => (
  {
  type: ARTICLES_ACTION_TYPES.POST_ARTICLE_START,
  payload: {
    article,
    token,
  },
})

export const postArticleSuccess = (article, token) =>({
  type: ARTICLES_ACTION_TYPES.POST_ARTICLE_SUCCESS,
  payload: {
    article,
    token,
  },
})

export const postArticleFailed = (error) => ({
  type: ARTICLES_ACTION_TYPES.POST_ARTICLE_FAILED,
  payload: error,
})