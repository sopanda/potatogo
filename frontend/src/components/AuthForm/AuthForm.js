import React from 'react';
import { reduxForm } from 'redux-form';
import { useSelector } from 'react-redux';
import { Form } from 'reactstrap';
import { AuthWrapper } from 'components/Wrappers/AuthWrapper';

const AuthFormBase = ({ handleSubmit, children }) => {
  const black = useSelector(state => state.dark);

  return (
    <AuthWrapper black={black}>
      <Form className='AuthForm' onSubmit={handleSubmit}>
        {children}
      </Form>
    </AuthWrapper>
  );
};

const AuthForm = reduxForm({
  form: window.location.pathname
})(AuthFormBase);

export default AuthForm;
