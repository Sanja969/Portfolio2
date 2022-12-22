/* eslint-disable default-case */
/* eslint-disable no-undef */
import { ARTICLES_ACTION_TYPES } from './articles.types';

const INITIAL_STATE = {
  articles: [],
  isLoading: false,
  error: null
}

export const articlesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ARTICLES_ACTION_TYPES.FETCH_ARTICLES_START:
      return { ...state, isLoading: true }
    case ARTICLES_ACTION_TYPES.FETCH_ARTICLES_SUCCESS:
      return { ...state, articles: payload, isLoading: false }
    case ARTICLES_ACTION_TYPES.FETCH_ARTICLES_FAILED:
      return { ...state, error: payload, isLoading: false }
    case ARTICLES_ACTION_TYPES.POST_ARTICLE_START:
      return { ...state,  isLoading: true }
    case ARTICLES_ACTION_TYPES.POST_ARTICLE_SUCCESS:
      return { ...state, articles: payload, isLoading: false }
    case ARTICLES_ACTION_TYPES.POST_ARTICLE_FAILED:
      return { ...state,  error: payload, isLoading: false }
    case ARTICLES_ACTION_TYPES.DELETE_ARTICLE_START:
      return { ...state, isLoading: true }
    case ARTICLES_ACTION_TYPES.DELETE_ARTICLE_SUCCESS:
      return { ...state, articles: payload, isLoading: false }
    case ARTICLES_ACTION_TYPES.DELETE_ARTICLE_FAILED:
      return { ...state,  error: payload, isLoading: false }
    default:
      return state;
  }
}
