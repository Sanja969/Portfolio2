/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectBlogsReducer = (state) => state.blogs;

export const selectBlogsSuccess = createSelector(
  [selectBlogsReducer],
  (blogsSlice) => blogsSlice.blogs,
);

export const getBlogs = createSelector(
  [selectBlogsSuccess],
  (blogs) => {
   const result = blogs.reduce((acc, blog) => {
      const { blogNumber } = blog;
      acc[blogNumber] = blog;
      return acc;
    }, {})
    return result;
  },
);

export const selectBlogsIsLoading = createSelector(
  [selectBlogsReducer],
  (blogsSlice) => blogsSlice.isLoading,
);