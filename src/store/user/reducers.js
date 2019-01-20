import { CHECK_USER, SET_USER } from './actions';
import initialState from '../initialState';

export const user = (state = initialState.user, action) => {
  switch (action.type) {
    case SET_USER: {
      return action.data;
    }
    case CHECK_USER: {
      return action.data;
    }
  }
  return state;
};
