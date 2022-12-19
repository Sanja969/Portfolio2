/* eslint-disable import/prefer-default-export */
import { all, call } from 'redux-saga/effects';
import { projectsSaga } from './projects/projects.saga';
import { blogsSaga } from './blogs/blogs.saga';
import { articlesSaga } from './articles/articles.saga';
import { usersSaga } from './user/users.saga';
import { quotesSaga } from './quotes/quotes.saga';

export function* rootSaga() {
  yield all([call(projectsSaga), call(blogsSaga), call(articlesSaga), call(usersSaga), call(quotesSaga)]);
}