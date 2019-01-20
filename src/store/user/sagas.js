import { takeEvery, put, all } from 'redux-saga/effects';
import { checkUser } from 'services';
import { CHECK_USER, setUser } from './actions';

function* check() {
  const user = yield checkUser();
  yield put(setUser(user));
}


export function* watchUser() {
  yield all([
    takeEvery(CHECK_USER, check)
  ]);
}
