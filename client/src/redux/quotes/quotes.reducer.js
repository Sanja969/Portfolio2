/* eslint-disable default-case */
/* eslint-disable no-undef */
import { QUOTES_ACTION_TYPES } from './quotes.types';

const INITIAL_STATE = {
  quote: {},
  isLoading: false,
  error: null
}

export const quotesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case QUOTES_ACTION_TYPES.FETCH_QUOTE_START:
      return { ...state, isLoading: true }
    case QUOTES_ACTION_TYPES.FETCH_QUOTE_SUCCESS:
      return { ...state, quote: payload, isLoading: false }
    case QUOTES_ACTION_TYPES.FETCH_QUOTE_FAILED:
      return { ...state, error: payload, isLoading: false }
    case QUOTES_ACTION_TYPES.POST_QUOTE_START:
      return { ...state,  isLoading: true }
    case QUOTES_ACTION_TYPES.POST_QUOTE_SUCCESS:
      return state;
    case QUOTES_ACTION_TYPES.POST_QUOTE_FAILED:
      return { ...state,  error: payload, isLoading: false }
    default:
      return state;
  }
}
