/* eslint-disable import/prefer-default-export */
import { USERS_ACTION_TYPES } from './users.types';

export const loginStart = (user) => (
  {
  type: USERS_ACTION_TYPES.LOGIN_START,
  payload: user,
})

export const loginSuccess = (user) => ({
  type: USERS_ACTION_TYPES.LOGIN_SUCCESS,
  payload: user,
})

export const loginFailed = (error) => ({
  type: USERS_ACTION_TYPES.LOGIN_FAILED,
  payload: error,
})
