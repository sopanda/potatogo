import React from 'react';
import { reduxForm } from 'redux-form';
import { Form } from 'reactstrap';
import { OfferCreationFormWrapper } from 'components/Wrappers/OfferCreationFormWrapper';

const OfferCreationFormBase = ({ handleSubmit, children }) => (
  <OfferCreationFormWrapper>
    <Form onSubmit={handleSubmit}>{children}</Form>
  </OfferCreationFormWrapper>
);

const OfferCreationForm = reduxForm({
  form: 'offerCreation'
})(OfferCreationFormBase);

export default OfferCreationForm;
