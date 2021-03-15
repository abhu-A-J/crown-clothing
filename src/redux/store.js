import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

/* Root reducers */
import { persistedReducer } from './rootReducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
export default store;
