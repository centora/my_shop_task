import {
  takeEvery,
  put,
  all
} from 'redux-saga/effects';
import { checkUser, login } from 'services';
import {
  CHECK_USER,
  setUser,
  LOGIN_USER
} from './actions';

function* check() {
  let user;
  try {
    user = yield checkUser();
    yield put(setUser(user));
  } catch (error) {
    console.log(error);
  }
}

function* loginSaga(action) {
  const user = yield login(action.data);
  yield put(setUser(user));
}

export function* watchUser() {
  yield all([
    takeEvery(CHECK_USER, check),
    takeEvery(LOGIN_USER, loginSaga)
  ]);
}
