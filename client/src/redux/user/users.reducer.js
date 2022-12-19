/* eslint-disable default-case */
/* eslint-disable no-undef */
import { USERS_ACTION_TYPES } from './users.types';

const INITIAL_STATE = {
  token: JSON.parse(localStorage.getItem('token')) || '',
  isLoading: false,
  error: null
}

export const usersReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {

    case USERS_ACTION_TYPES.LOGIN_START:
      return { ...state,  isLoading: true }
    case USERS_ACTION_TYPES.LOGIN_SUCCESS:
      return { ...state,  isLoading: false, token: payload.data.token };
    case USERS_ACTION_TYPES.LOGIN_FAILED:
      return { ...state,  error: payload, isLoading: false }
    default:
      return state;
  }
}
