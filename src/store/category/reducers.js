import {
  CLEAR_CATEGORY,
  SET_CATEGORY,
} from './actions';
import {
  category as categoryInitial,
} from '../initialState';

export const category = (state = categoryInitial, action) => {
  switch (action.type) {
    case SET_CATEGORY: {
      return action.data;
    }
    case CLEAR_CATEGORY: {
      return categoryInitial;
    }
  }

  return state;
};
