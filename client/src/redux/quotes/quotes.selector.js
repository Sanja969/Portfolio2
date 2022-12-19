/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectQuotesReducer = (state) => state.quotes;

export const selectQuote = createSelector(
  [selectQuotesReducer],
  (quotesSlice) => quotesSlice.quote,
);

export const selectQuotesIsLoading = createSelector(
  [selectQuotesReducer],
  (quotesSlice) => quotesSlice.isLoading,
);