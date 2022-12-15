/* eslint-disable import/prefer-default-export */
import { all, call } from 'redux-saga/effects';
import { projectsSaga } from './projects/projects.saga';

export function* rootSaga() {
  yield all([call(projectsSaga)]);
}