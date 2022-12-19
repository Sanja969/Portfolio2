/* eslint-disable default-case */
/* eslint-disable no-undef */
import { PROJECTS_ACTION_TYPES } from './projects.types';

const INITIAL_STATE = {
  projects: [],
  isLoading: false,
  error: null
}

export const projectsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PROJECTS_ACTION_TYPES.FETCH_PROJECTS_START:
      return { ...state, isLoading: true }
    case PROJECTS_ACTION_TYPES.FETCH_PROJECTS_SUCCESS:
      return { ...state, projects: payload, isLoading: false }
    case PROJECTS_ACTION_TYPES.FETCH_PROJECTS_FAILED:
      return { ...state, error: payload, isLoading: false }
    case PROJECTS_ACTION_TYPES.POST_PROJECT_START:
      return { ...state,  isLoading: true }
    case PROJECTS_ACTION_TYPES.POST_PROJECT_SUCCESS:
      return state;
    case PROJECTS_ACTION_TYPES.POST_PROJECT_FAILED:
      return { ...state,  error: payload, isLoading: false }
    default:
      return state;
  }
}
