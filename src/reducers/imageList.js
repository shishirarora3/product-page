import { ADD_IMAGE } from '../constants';

export function imageList(state = [], action) {
  const { type, payload } = action;
  switch (type) {
      case ADD_IMAGE:
      return [...state, payload];
    default:
      return state;
  }
}

