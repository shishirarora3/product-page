import { REMOVE_IMAGE } from '../constants';

export function removeImage(payload) {
  return {
    type: REMOVE_IMAGE,
    payload: payload
  };
}
