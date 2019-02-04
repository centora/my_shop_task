import {
  SET_INFO,
  CLEAN_INFO,
  GET_CATEGORIES,
  SET_CATEGORIES,
} from './actions';
import {
  info as infoInitial,
  categories as categoriesInitial
} from '../initialState';

export const categories = (state = categoriesInitial, action) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      return state;
    }
    case SET_CATEGORIES: {
      return action.data;
    }
  }

  return state;
};

export const info = (state = infoInitial, action) => {
  switch (action.type) {
    case SET_INFO: {
      return action.data;
    }
    case CLEAN_INFO: {
      return infoInitial;
    }
  }

  return state;
};
