/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectArticlesReducer = (state) => state.articles;

export const selectArticlesSuccess = createSelector(
  [selectArticlesReducer],
  (articlesSlice) => articlesSlice.articles,
);

export const getArticles = createSelector(
  [selectArticlesSuccess],
  (articles) => {
   const result = articles.reduce((acc, article) => {
      const { articleNumber } = article;
      acc[articleNumber] = article;
      return acc;
    }, {})
    return result;
  },
);

export const selectArticlesIsLoading = createSelector(
  [selectArticlesReducer],
  (articlesSlice) => articlesSlice.isLoading,
);