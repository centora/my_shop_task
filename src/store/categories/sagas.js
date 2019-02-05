import {
  takeEvery,
  put,
  all
} from 'redux-saga/effects';

import {
  getInfo,
  updateCategory as updateCategoryService,
  getCategories as getCategoriesService
} from 'services';

import {
  GET_INFO,
  setInfo,
  UPDATE_CATEGORIES,
  GET_CATEGORIES,
  setCategories,
  getCategories,
} from './actions';

function* info() {
  try {
    const info = yield getInfo();
    yield put(setInfo(info));

  } catch (err) {
    console.log(err)
  }
}

function* fetchCategories() {
  try {
    const categories = yield getCategoriesService();
    yield put(setCategories(categories));
  } catch (err) {
    console.log(err);
  }
}

function* putCategory({ data }) {
  try {
    yield updateCategoryService(data);
    yield put(getCategories())
  } catch (err) {
    console.log(err);
  }
}

export function* watchCategories() {
  yield all([
    takeEvery(GET_INFO, info),
    takeEvery(GET_CATEGORIES, fetchCategories),
    takeEvery(UPDATE_CATEGORIES, putCategory),
  ]);
}
