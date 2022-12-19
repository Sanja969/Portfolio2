import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import { 
  fetchBlogsSuccess,
  fetchBlogsFailed,
  postBlogSuccess,
  postBlogFailed,
} from './blogs.actions';
import { BLOGS_ACTION_TYPES } from './blogs.types';
import axios from 'axios';

const url = 'http://localhost:8000/v1/blogs'

const getBlogs = async() => {
  const response = await fetch(url);
  return response.json();
}
export function* fetchBlogsAsync() {
  try {
    const blogsArray = yield call(getBlogs, 'blogs');
    yield put(fetchBlogsSuccess(blogsArray));
  } catch (error) {
    yield put(fetchBlogsFailed(error));
  }
}

export function* onFetchBlogs() {
  yield takeLatest(BLOGS_ACTION_TYPES.FETCH_BLOGS_START, fetchBlogsAsync);
}

const saveBlog = async (payload) => {
  axios.post(url, payload.blog,
      { headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${payload.token}`}},
    );
}

export function* saveBlogAsync({payload}) {
  try {
    const blogSaved = yield call(saveBlog, payload);
    yield put(postBlogSuccess(blogSaved));
  } catch (error) {
    yield put(postBlogFailed(error));
  }
}

export function* onPostBlog() {
  yield takeLatest(BLOGS_ACTION_TYPES.POST_BLOG_START, saveBlogAsync);
}

export function* blogsSaga() {
  yield all([call(onFetchBlogs), call(onPostBlog)]);
}
