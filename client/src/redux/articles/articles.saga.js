import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import { 
  fetchArticlesSuccess,
  fetchArticlesFailed,
  postArticleSuccess,
  postArticleFailed,
} from './articles.actions';
import { ARTICLES_ACTION_TYPES } from './articles.types';
import axios from 'axios';
import { baseUrl } from '../urls';

const url = `${baseUrl}/articles`

const getArticles = async() => {
  const response = await fetch(url);
  return response.json();
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

export function* articlesSaga() {
  yield all([call(onFetchArticles), call(onPostArticle)]);
}
