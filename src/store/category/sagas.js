import {
  takeEvery,
  put,
  all
} from 'redux-saga/effects';

import {
  updateCategory as updateCategoryService,
  getCategory as getCategoryService,
  createCategory as createCategoryService,
  deleteCategory as deleteCategoryService,
} from 'services';

import {
  GET_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  CREATE_NEW_CATEGORY,
  setCategory,
  clearCategory,
} from './actions';

function* fetchCategory({ data }) {
  try {
    const category = yield getCategoryService(data);
    yield put(setCategory(category));
  } catch (err) {
    console.log(err);
  }
}

function* putCategory({ data }) {
  try {
    const category = yield updateCategoryService(data);
    yield put(setCategory(category))
  } catch (err) {
    console.log(err);
  }
}

function* newCategory({ data }) {
  try {
    const category = yield createCategoryService(data);
    yield put(setCategory(category))
  } catch (err) {
    console.log(err);
  }
}

function* removeCategory({ data }) {
  try {
    yield deleteCategoryService(data);
    yield put(clearCategory)
  } catch (err) {
    console.log(err);
  }
}

export function* watchCategory() {
  yield all([
    takeEvery(GET_CATEGORY, fetchCategory),
    takeEvery(CREATE_NEW_CATEGORY, newCategory),
    takeEvery(UPDATE_CATEGORY, putCategory),
    takeEvery(DELETE_CATEGORY, removeCategory),
  ]);
}
