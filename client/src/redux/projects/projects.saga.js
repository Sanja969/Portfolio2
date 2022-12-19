import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import { fetchProjectsSuccess, fetchProjectsFailed, postProjectSuccess, postProjectFailed } from './projects.actions';
import { PROJECTS_ACTION_TYPES } from './projects.types';
import axios from 'axios';

const url = 'http://localhost:8000/v1/projects'

const getProjects = async() => {
  const response = await fetch(url);
  return response.json();
}

export function* fetchProjectsAsync() {
  try {
    const projectsArray = yield call(getProjects, 'projects');
    yield put(fetchProjectsSuccess(projectsArray));
  } catch (error) {
    yield put(fetchProjectsFailed(error));
  }
}

export function* onFetchProjects() {
  yield takeLatest(PROJECTS_ACTION_TYPES.FETCH_PROJECTS_START, fetchProjectsAsync);
}

const saveProject = async (payload) => {
  const formData = new FormData();
  formData.append('image', payload.project.img);
  Object.keys(payload.project).forEach(data => {
    if(payload.project[data] !== payload.project.img) {
      formData.append(data, payload.project[data]);
    }
  })
  axios.post(url, formData,
      { headers: {'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${payload.token}`}},
    );
}

export function* saveProjectAsync({payload}) {
  try {
    const projectSaved = yield call(saveProject, payload);
    yield put(postProjectSuccess(projectSaved));
  } catch (error) {
    yield put(postProjectFailed(error));
  }
}

export function* onPostProject() {
  yield takeLatest(PROJECTS_ACTION_TYPES.POST_PROJECT_START, saveProjectAsync);
}

export function* projectsSaga() {
  yield all([call(onFetchProjects), call(onPostProject)]);
}
