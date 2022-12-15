import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();


const middleWares = [logger, sagaMiddleware].filter(Boolean);
export const store = configureStore({ reducer: rootReducer, middleware: middleWares });

sagaMiddleware.run(rootSaga);