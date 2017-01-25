import { ADD_IMAGE } from '../constants';

export function addImage(payload) {
  return {
    type: ADD_IMAGE,
    payload: payload
  };
}
