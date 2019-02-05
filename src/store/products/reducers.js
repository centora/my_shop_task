import {
  CLEAR_PRODUCTS,
  SET_PRODUCTS,
} from './actions';
import {
  products as productsInitial
} from '../initialState';

export const products = (state = productsInitial, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return action.data;
    }
    case CLEAR_PRODUCTS: {
      return productsInitial
    }
  }

  return state;
};
