/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectUsersReducer = (state) => state.users;

export const loginAuth = createSelector(
  [selectUsersReducer],
  (usersSlice) => usersSlice.token,
);

export const selectUsersIsLoading = createSelector(
  [selectUsersReducer],
  (usersSlice) => usersSlice.isLoading,
);