import { all, put } from 'redux-saga/effects';

import { watchUser } from './user';
import { watchCategories } from './categories';
import { watchCategory } from './category';
import { setError } from './status';

export function* rootSaga() {
  try {
    yield all([
      watchUser(),
      watchCategories(),
      watchCategory(),
    ]);
  } catch (error) {
    yield put(setError(error));
  }
}
