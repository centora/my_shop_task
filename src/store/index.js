import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import { user } from './user';
import { rootSaga } from './rootSaga';

const rootReducers = combineReducers({
  user
});

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
