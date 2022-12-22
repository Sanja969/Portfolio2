import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import { 
  fetchBlogsSuccess,
  fetchBlogsFailed,
  postBlogSuccess,
  postBlogFailed,
  deleteBlogSuccess,
  deleteBlogFailed,
} from './blogs.actions';
import { BLOGS_ACTION_TYPES } from './blogs.types';
import axios from 'axios';
import { baseUrl } from '../urls';

const url = `${baseUrl}/blogs`

const getBlogs = async() => {
  const response = await fetch(url);
  return await response.json();
}
export function* fetchBlogsAsync() {
  console.log(url)
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
  const response = await fetch(url,
      {
        method: 'POST',
        body: JSON.stringify(payload.blog),
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${payload.token}`}},
    );
    return await response.json();
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

const deleteBlog = async (payload) => {
  const response = await fetch(`${url}/${payload.blogNumber}`,
  {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json', 'Authorization': `Bearer ${payload.token}`
    },
  }
  )
  return await response.json();
}

export function* deleteBlogAsync({payload}) {
  try {
    const BlogSaved = yield call(deleteBlog, payload);
    yield put(deleteBlogSuccess(BlogSaved));
  } catch (error) {
    yield put(deleteBlogFailed(error));
  }
}

export function* onDeleteBlog() {
  yield takeLatest(BLOGS_ACTION_TYPES.DELETE_BLOG_START, deleteBlogAsync);
}

export function* blogsSaga() {
  yield all([call(onFetchBlogs), call(onPostBlog), call(onDeleteBlog)]);
}
