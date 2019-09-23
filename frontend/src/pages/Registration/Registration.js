import React from 'react';
import { useSelector } from 'react-redux';
import { FormGroup } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { Field } from 'redux-form';
import { useTranslation } from 'react-i18next';
import AuthForm from 'components/AuthForm';
import { RenderField } from 'components/RenderField';
import { Button } from 'shared/components/Button';
import { Link } from 'shared/components/Link';
import { register } from 'store/Registration/actions';
import {
  required,
  email,
  minNameValue,
  maxNameValue,
  minPasswordValue,
  maxPasswordValue
} from 'helpers';

const Registration = () => {
  const { t: translate } = useTranslation();
  const dispatch = useDispatch();
  const disabled = useSelector(state => state.registration.registering);

  const submit = (values, ...props) => {
    const [, { valid }] = props;
    valid && dispatch(register(values));
  };

  return (
    <AuthForm onSubmit={submit}>
      <FormGroup>
        <Field
          name='name'
          component={RenderField}
          type='name'
          validate={[required, minNameValue, maxNameValue]}
        />
      </FormGroup>
      <FormGroup>
        <Field
          name='email'
          component={RenderField}
          type='email'
          validate={[required, email]}
        />
      </FormGroup>
      <FormGroup>
        <Field
          name='password'
          component={RenderField}
          type='password'
          validate={[required, minPasswordValue, maxPasswordValue]}
        />
      </FormGroup>
      <FormGroup className='ButtonGroup'>
        <Button type='submit' disabled={disabled}>
          {translate('register.button')}
        </Button>
        <span className='Switch'>{translate('form.or')}</span>
        <Link to='/login'>{translate('login.button')}</Link>
      </FormGroup>
    </AuthForm>
  );
};

export default Registration;
