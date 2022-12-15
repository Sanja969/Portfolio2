/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectProjectsReducer = (state) => state.projects;

export const selectProjectsSuccess = createSelector(
  [selectProjectsReducer],
  (projectsSlice) => projectsSlice.projects,
);

export const getProjects = createSelector(
  [selectProjectsSuccess],
  (projects) => {
   const result = projects.reduce((acc, project) => {
      const { projectNumber } = project;
      acc[projectNumber] = project;
      return acc;
    }, {})
    return result;
  },
);

export const selectProjectsIsLoading = createSelector(
  [selectProjectsReducer],
  (projectsSlice) => projectsSlice.isLoading,
);