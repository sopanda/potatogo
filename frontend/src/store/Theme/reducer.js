// @flow
import { CHANGE_THEME } from './actionTypes';

const initialState = false;

function toggleTheme(state) {
  let newState = !state;
  return newState;
}

type ChangeThemeAction = { type: 'CHANGE_THEME' };

type Action = ChangeThemeAction;

export function dark(state: boolean = initialState, action: Action) {
  switch (action.type) {
    case CHANGE_THEME:
      return toggleTheme(state);
    default:
      return state;
  }
}
