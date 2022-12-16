import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import { fetchProjectsSuccess, fetchProjectsFailed, postProjectSuccess, postProjectFailed } from './projects.actions';
import { PROJECTS_ACTION_TYPES } from './projects.types';

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

const saveProject = async (project) => {
  const response = await fetch(url,
    {
      method: 'POST',
      body: JSON.stringify({
        name: project.name,
        description: project.description,
        technologies: project.technologies,
        source: project.source,
        live: project.live,
        img: project.img,
      }),
      // headers: {"Content-Type": "multipart/form-data"}
    });

    return await response.json();
}

export function* saveProjectAsync({payload}) {
  try {
    console.log("Saving projectdddddd");
    const projectSaved = yield call(saveProject, payload);
    yield put(postProjectSuccess (projectSaved));
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
