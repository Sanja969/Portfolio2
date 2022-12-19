/* eslint-disable import/prefer-default-export */
import { BLOGS_ACTION_TYPES } from './blogs.types';

export const fetchBlogsStart = () => (
  {
  type: BLOGS_ACTION_TYPES.FETCH_BLOGS_START,
})

export const fetchBlogsSuccess = (blogs) => ({
  type: BLOGS_ACTION_TYPES.FETCH_BLOGS_SUCCESS,
  payload: blogs,
})

export const fetchBlogsFailed = (error) => ({
  type: BLOGS_ACTION_TYPES.FETCH_BLOGS_FAILED,
  payload: error,
})

export const postBlogStart = (blog, token) => (
  {
  type: BLOGS_ACTION_TYPES.POST_BLOG_START,
  payload: {
    blog,
    token,
  },
})

export const postBlogSuccess = (blog, token) =>( {
  type: BLOGS_ACTION_TYPES.POST_BLOG_SUCCESS,
  payload: {
    blog,
    token,
  },
})

export const postBlogFailed = (error) => ({
  type: BLOGS_ACTION_TYPES.POST_BLOG_FAILED,
  payload: error,
})