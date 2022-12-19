/* eslint-disable import/prefer-default-export */
import { PROJECTS_ACTION_TYPES } from './projects.types';

export const fetchProjectsStart = () => (
  {
  type: PROJECTS_ACTION_TYPES.FETCH_PROJECTS_START,
})

export const fetchProjectsSuccess = (projects) => ({
  type: PROJECTS_ACTION_TYPES.FETCH_PROJECTS_SUCCESS,
  payload: projects,
})

export const fetchProjectsFailed = (error) => ({
  type: PROJECTS_ACTION_TYPES.FETCH_PROJECTS_FAILED,
  payload: error,
})

export const postProjectStart = (project, token) => (
  {
  type: PROJECTS_ACTION_TYPES.POST_PROJECT_START,
  payload: {
    project,
    token,
  },
})

export const postProjectSuccess = (project, token) =>( {
  type: PROJECTS_ACTION_TYPES.POST_PROJECT_SUCCESS,
  payload: {
    project,
    token,
  },
})

export const postProjectFailed = (error) => ({
  type: PROJECTS_ACTION_TYPES.POST_PROJECT_FAILED,
  payload: error,
})