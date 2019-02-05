import {
  takeEvery,
  put,
  all
} from 'redux-saga/effects';

import {
  getProducts as getProductsService
} from 'services';

import {
  GET_PRODUCTS,
  setProducts
} from './actions';

function* fetchProducts() {
  try {
    const products = yield getProductsService();
    yield put(setProducts(products));
  } catch (err) {
    console.log(err);
  }
}

export function* watchProducts() {
  yield all([
    takeEvery(GET_PRODUCTS, fetchProducts),
  ]);
}
