/* eslint-disable import/prefer-default-export */
import { QUOTES_ACTION_TYPES } from './quotes.types';

export const fetchQuoteStart = () => (
  {
  type: QUOTES_ACTION_TYPES.FETCH_QUOTE_START,
})

export const fetchQuoteSuccess = (quote) => ({
  type: QUOTES_ACTION_TYPES.FETCH_QUOTE_SUCCESS,
  payload: quote,
})

export const fetchQuoteFailed = (error) => ({
  type: QUOTES_ACTION_TYPES.FETCH_QUOTE_FAILED,
  payload: error,
})

export const postQuoteStart = (quote, token) => (
  {
  type: QUOTES_ACTION_TYPES.POST_QUOTE_START,
  payload: {
    quote,
    token,
  },
})

export const postQuoteSuccess = (quote, token) =>( {
  type: QUOTES_ACTION_TYPES.POST_QUOTE_SUCCESS,
  payload: {
    quote,
    token,
  },
})

export const postQuoteFailed = (error) => ({
  type: QUOTES_ACTION_TYPES.POST_QUOTE_FAILED,
  payload: error,
})