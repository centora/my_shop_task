import { SET_INFO, CLEAN_INFO } from './actions';
import {
  category as categoryInitial,
  info as infoInitial
} from '../initialState';

export const category = (state = categoryInitial, action) => {
  switch (action.type) {
    case 'default': {
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
