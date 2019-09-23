import { CHANGE_THEME } from './actionTypes';
import { changeTheme } from './actions';
import { dark } from './reducer';

describe('Theme Reducer', () => {
  it('Should return default state', () => {
    const newState = dark(false, {});
    expect(newState).toEqual(false);
  });

  it('Should return new state when Theme changed', () => {
    const newState = dark(false, {
      type: CHANGE_THEME
    });
    expect(newState).toEqual(true);
  });
});

describe('Theme Actions', () => {
  it('Should return proper action when theme changed', () => {
    expect(changeTheme()).toEqual({ type: CHANGE_THEME });
  });
});
