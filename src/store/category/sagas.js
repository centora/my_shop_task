import {
  takeEvery,
  put,
  all
} from 'redux-saga/effects';

import { getInfo, getCategory, getCategories } from 'services';

import {
  GET_INFO,
  setInfo,
  GET_CATEGORY,
  GET_CATEGORIES,
} from './actions';


function* info() {
  const info = yield getInfo();
  yield put(setInfo(info));
}

function* category(action) {
  yield getCategory(action.data);
}

function* categories() {
  yield getCategories();
}

export function* watchCategory() {
  yield all([
    takeEvery(GET_INFO, info),
    takeEvery(GET_CATEGORY, category),
    takeEvery(GET_CATEGORIES, categories),
  ]);
}
