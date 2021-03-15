import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import createSagaMiddleware  from 'redux-saga';

/* Root reducers */
import { persistedReducer } from './rootReducer';

/* Root sags */
import {rootSaga} from './rootSaga';

const sagaMiddleware=createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);
export default store;
