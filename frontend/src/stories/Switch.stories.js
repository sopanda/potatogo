import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from 'store';

import ThemeSwitch from 'components/ThemeSwitcher';

const withProvider = story => <Provider store={store}>{story()}</Provider>;

storiesOf('ThemeSwitch', module)
  .addDecorator(withProvider)
  .add('default', () => <ThemeSwitch />);
