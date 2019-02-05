import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
import { user } from './user';
import { error } from './status';
import { info, categories } from './categories';

const rootReducers = combineReducers({
  user,
  info,
  error,
  categories
});


// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

export const runSaga = () => sagaMiddleware.run(rootSaga);

