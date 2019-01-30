import { all, put } from 'redux-saga/effects';

import { watchUser } from './user';
import { watchCategory } from './categories';
import { setError } from './status';

export function* rootSaga() {
  try {
    yield all([
      watchUser(),
      watchCategory()
    ]);
  } catch (error) {
    yield put(setError(error));
  }
}
