import { SET_ERROR, CLEAN_ERROR } from './actions';
import { error as initial } from '../initialState';

export const error = (state = initial, action) => {
  switch (action.type) {
    case SET_ERROR: {
      return action.data;
    }
    case CLEAN_ERROR: {
      return initial;
    }
  }

  return state;
};
