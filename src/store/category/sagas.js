import {
  takeEvery,
  put,
  all
} from 'redux-saga/effects';

import { getInfo } from 'services';

import {
  GET_INFO,
  setInfo,
} from './actions';


function* info() {
  const info = yield getInfo();
  yield put(setInfo(info));
}

export function* watchCategory() {
  yield all([
    takeEvery(GET_INFO, info),
  ]);
}
