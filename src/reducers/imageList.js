import { ADD_IMAGE, REMOVE_IMAGE } from '../constants';
import _ from 'lodash';

export function imageList(state = [], action) {
  const { type, payload } = action;
  switch (type) {
      case ADD_IMAGE:
          return [...state, payload];
      case REMOVE_IMAGE:
          return _.reject(state, (el)=>el === payload);
      default:
          return state;
  }
}

