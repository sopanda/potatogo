import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'shared/components/Switch';
import { CHANGE_THEME } from 'store/Theme/actionTypes';

const ThemeSwitcher = ({ toggle }) => {
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch({ type: CHANGE_THEME });
    toggle && toggle();
  };

  return (
    <Switch>
      <input type='checkbox' id='switch' onClick={() => changeTheme()} />
      <label htmlFor='switch'>Toggle</label>
    </Switch>
  );
};

export default ThemeSwitcher;
