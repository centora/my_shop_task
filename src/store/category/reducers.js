import {
  SET_INFO,
  CLEAN_INFO,
  GET_CATEGORY,
  SET_CATEGORY,
  GET_CATEGORIES,
  UPDATE_CATEGORIES,
  SET_CATEGORIES,
} from './actions';
import {
  category as categoryInitial,
  info as infoInitial,
  categories as categoriesInitial
} from '../initialState';

export const category = (state = categoryInitial, action) => {
  switch (action.type) {
    case GET_CATEGORY: {
      return action.data;
    }
    case SET_CATEGORY: {
      return action.data;
    }
  }

  return state;
};

export const categories = (state = categoriesInitial, action) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      return action.data;
    }
    case SET_CATEGORIES: {
      return action.data;
    }
    case UPDATE_CATEGORIES: {
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
