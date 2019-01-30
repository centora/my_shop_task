import {
  takeEvery,
  put,
  all
} from 'redux-saga/effects';

import {
  getInfo,
  updateCategory as updateCategoryService,
  getCategories
} from 'services';

import {
  GET_INFO,
  setInfo,
  updateCategories,
  GET_CATEGORIES,
  UPDATE_CATEGORIES,
  setCategories,
} from './actions';

function* info() {
  const info = yield getInfo();
  yield put(setInfo(info));
}

function* fetchCategories() {
  try {
    const categories = yield getCategories();
    yield put(setCategories(categories));
  } catch (err) {
    console.log(error);
  }
}

function* putCategory({ data }) {
  try {
    const category = yield updateCategories(data);
    yield put(updateCategoryService(category));
    yield put(getCategories())
  } catch (err) {
    console.log(error);
  }
}

export function* watchCategory() {
  yield all([
    takeEvery(GET_INFO, info),
    takeEvery(GET_CATEGORIES, fetchCategories),
    takeEvery(UPDATE_CATEGORIES, putCategory),
  ]);
}
