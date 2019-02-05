import { all, put } from 'redux-saga/effects';

import { watchUser } from './user';
import { watchCategories } from './categories';
import { watchCategory } from './category';
import { setError } from './status';
import { watchProducts } from './products';

export function* rootSaga() {
  try {
    yield all([
      watchUser(),
      watchCategories(),
      watchCategory(),
      watchProducts(),
    ]);
  } catch (error) {
    yield put(setError(error));
  }
}
