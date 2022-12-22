import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import { 
  loginSuccess,
  loginFailed,
} from './users.actions';
import { USERS_ACTION_TYPES } from './users.types';
import axios from 'axios';
import { baseUrl } from '../urls';

const url = `${baseUrl}/admin/login`

const login = async (user) => {
  const response = axios.post(url, user,
      { headers: {'Content-Type': 'application/json'}},
    );
  response.then((data) => {localStorage.setItem('token', JSON.stringify(data.data.token))})

  return await response;
}

export function* loginAsync({payload}) {
  try {
    const userSaved = yield call(login, payload);
    yield put(loginSuccess(userSaved));
  } catch (error) {
    yield put(loginFailed(error));
  }
}

export function* onLogin() {
  yield takeLatest(USERS_ACTION_TYPES.LOGIN_START, loginAsync);
}

export function* usersSaga() {
  yield all([call(onLogin)]);
}
