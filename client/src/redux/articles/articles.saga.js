import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import { 
  fetchArticlesSuccess,
  fetchArticlesFailed,
  postArticleSuccess,
  postArticleFailed,
  deleteArticleSuccess,
  deleteArticleFailed,
} from './articles.actions';
import { ARTICLES_ACTION_TYPES } from './articles.types';
import axios from 'axios';
import { baseUrl } from '../urls';

const url = `${baseUrl}/articles`

const getArticles = async() => {
  const response = await fetch(url);
  return await response.json();
}
export function* fetchArticlesAsync() {
  try {
    const articlesArray = yield call(getArticles, 'articles');
    yield put(fetchArticlesSuccess(articlesArray));
  } catch (error) {
    yield put(fetchArticlesFailed(error));
  }
}

export function* onFetchArticles() {
  yield takeLatest(ARTICLES_ACTION_TYPES.FETCH_ARTICLES_START, fetchArticlesAsync);
}

const saveArticle = async (payload) => {
  axios.post(url, payload.article,
      { headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${payload.token}`}},
    );
}

export function* saveArticleAsync({payload}) {
  try {
    const articleSaved = yield call(saveArticle, payload);
    yield put(postArticleSuccess(articleSaved));
  } catch (error) {
    yield put(postArticleFailed(error));
  }
}

export function* onPostArticle() {
  yield takeLatest(ARTICLES_ACTION_TYPES.POST_ARTICLE_START, saveArticleAsync);
}

const deleteArticle = async (payload) => {
  const response = await fetch(`${url}/${payload.articleNumber}`,
  {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json', 'Authorization': `Bearer ${payload.token}`
    },
  }
  )
  return await response.json();
}

export function* deleteArticleAsync({payload}) {
  try {
    const ArticleSaved = yield call(deleteArticle, payload);
    yield put(deleteArticleSuccess(ArticleSaved));
  } catch (error) {
    yield put(deleteArticleFailed(error));
  }
}

export function* onDeleteArticle() {
  yield takeLatest(ARTICLES_ACTION_TYPES.DELETE_ARTICLE_START, deleteArticleAsync);
}

export function* articlesSaga() {
  yield all([call(onFetchArticles), call(onPostArticle), call(onDeleteArticle)]);
}
