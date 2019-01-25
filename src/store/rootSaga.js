import { all, put } from 'redux-saga/effects';

import { watchUser } from './user';
import { setError } from './status';

export function* rootSaga() {
  try {
    yield all([
      watchUser(),
    ]);
  } catch (error) {
    yield put(setError(error));
  }
}
