import React from 'react';
import { FormGroup } from 'reactstrap';
import { RenderField } from 'components/RenderField';
import { Field } from 'redux-form';
import { useTranslation } from 'react-i18next';
import AuthForm from 'components/AuthForm';
import { Button } from 'shared/components/Button';
import { Link } from 'shared/components/Link';
import { required, email } from 'helpers';
import { useDispatch } from 'react-redux';
import { login } from 'store/Login/actions';

const Login = () => {
  const { t: translate } = useTranslation();
  const dispatch = useDispatch();

  const submit = values => {
    const { email, password } = values;
    email && password && dispatch(login(values));
  };

  return (
    <AuthForm onSubmit={submit}>
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
          validate={[required]}
        />
      </FormGroup>
      <FormGroup className='ButtonGroup'>
        <Button type='submit'>{translate('login.button')}</Button>
        <span className='Switch'>{translate('form.or')}</span>
        <Link to='/register'>{translate('register.button')}</Link>
      </FormGroup>
    </AuthForm>
  );
};

export default Login;
