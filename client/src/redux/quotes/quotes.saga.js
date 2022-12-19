import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import { 
  fetchQuoteSuccess,
  fetchQuoteFailed,
  postQuoteSuccess,
  postQuoteFailed,
} from './quotes.actions';
import { QUOTES_ACTION_TYPES } from './quotes.types';
import axios from 'axios';

const url = 'http://localhost:8000/v1/quotes'

const getQuote = async() => {
  const response = await fetch(url);
  return response.json();
}
export function* fetchQuoteAsync() {
  try {
    const quotesArray = yield call(getQuote, 'Quotes');
    yield put(fetchQuoteSuccess(quotesArray));
  } catch (error) {
    yield put(fetchQuoteFailed(error));
  }
}

export function* onFetchQuote() {
  yield takeLatest(QUOTES_ACTION_TYPES.FETCH_QUOTE_START, fetchQuoteAsync);
}

const saveQuote = async (payload) => {
  axios.post(url, payload.quote,
      { headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${payload.token}`}},
    );
}

export function* saveQuoteAsync({payload}) {
  try {
    const quoteSaved = yield call(saveQuote, payload);
    yield put(postQuoteSuccess(quoteSaved));
  } catch (error) {
    yield put(postQuoteFailed(error));
  }
}

export function* onPostQuote() {
  yield takeLatest(QUOTES_ACTION_TYPES.POST_QUOTE_START, saveQuoteAsync);
}

export function* quotesSaga() {
  yield all([call(onFetchQuote), call(onPostQuote)]);
}
