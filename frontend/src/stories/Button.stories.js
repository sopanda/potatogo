import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from 'components/StyledComponents/Button';

storiesOf('Button', module)
  .add('default', () => <Button />)
  .add('with a value', () => <Button>Sign In</Button>)
  .add('disabled', () => <Button disabled>Decline</Button>);
