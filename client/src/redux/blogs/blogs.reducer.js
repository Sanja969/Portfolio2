/* eslint-disable default-case */
/* eslint-disable no-undef */
import { BLOGS_ACTION_TYPES } from './blogs.types';

const INITIAL_STATE = {
  blogs: [],
  isLoading: false,
  error: null
}

export const blogsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case BLOGS_ACTION_TYPES.FETCH_BLOGS_START:
      return { ...state, isLoading: true }
    case BLOGS_ACTION_TYPES.FETCH_BLOGS_SUCCESS:
      return { ...state, blogs: payload, isLoading: false }
    case BLOGS_ACTION_TYPES.FETCH_BLOGS_FAILED:
      return { ...state, error: payload, isLoading: false }
    case BLOGS_ACTION_TYPES.POST_BLOG_START:
      return { ...state,  isLoading: true }
    case BLOGS_ACTION_TYPES.POST_BLOG_SUCCESS:
      return { ...state, blogs: payload, isLoading: false }
    case BLOGS_ACTION_TYPES.POST_BLOG_FAILED:
      return { ...state,  error: payload, isLoading: false }
    case BLOGS_ACTION_TYPES.DELETE_BLOG_START:
      return { ...state, isLoading: true }
    case BLOGS_ACTION_TYPES.DELETE_BLOG_SUCCESS:
      return { ...state, blogs: payload, isLoading: false }
    case BLOGS_ACTION_TYPES.DELETE_BLOG_FAILED:
      return { ...state,  error: payload, isLoading: false }
    default:
      return state;
  }
}
