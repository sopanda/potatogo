import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import { Link } from 'components/StyledComponents/Link';

const stories = storiesOf('Link', module);

stories.addDecorator(StoryRouter());

stories.add('to register page', () => (
  <Link to='/register'>Zarejestruj się</Link>
));
