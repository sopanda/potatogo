import { CHANGE_TYPE } from './actionTypes';

const initialState = null;

export function contextMenuType(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TYPE:
      return action.payload;
    default:
      return state;
  }
}
