const INITIAL_STATE = {}
const GET_PROJECT_DATA = "GET_PROJECT_DATA";

export const projectReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_PROJECT_DATA:
      return payload;
    default:
      return state;
  }
}

export const getProject = (project) => ({
  type: GET_PROJECT_DATA,
  payload: project
})