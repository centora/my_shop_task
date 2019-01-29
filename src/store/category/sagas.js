import {
  takeEvery,
  put,
  all
} from 'redux-saga/effects';

import { getInfo, getCategory } from 'services';

import {
  GET_INFO,
  setInfo,
  GET_CATEGORY,
  setCategory,
} from './actions';


function* info() {
  const info = yield getInfo();
  yield put(setInfo(info));
}

function* category() {
  const category = yield getCategory(action.data);
  yield put(setCategory(category));
}

export function* watchCategory() {
  yield all([
    takeEvery(GET_INFO, info),
    takeEvery(GET_CATEGORY, category),
  ]);
}
