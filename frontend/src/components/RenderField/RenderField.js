import React from 'react';
import { Input } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { Error } from 'shared/components/Error';
import classNames from 'classnames';
import classes from './RenderField.module.css';

export const RenderField = React.memo(
  ({ input, meta: { touched, error }, type, fieldValue }, ...rest) => {
    const { t: translate } = useTranslation();
    let fieldClasses = classNames(
      classes.Field,
      touched && error ? classes.Danger : ''
    );

    const types = {
      name: 'text',
      password: 'password',
      email: 'email',
      pointA: 'text',
      pointB: 'text',
      distance: 'text',
      price: 'number',
      date: 'date',
      description: 'textarea'
    };

    const placeholder = (key, fieldValue, type) => {
      switch (key) {
        case 'pointA':
        case 'pointB':
          return fieldValue ? fieldValue : translate(`form.${type}`);
        case 'distance':
          return `${fieldValue} km`;
        default:
          return translate(`form.${type}`);
      }
    };

    const fields = Object.entries(types).map(
      ([key, value], index) =>
        type === key && (
          <Input
            key={key + index}
            className={fieldClasses}
            placeholder={placeholder(key, fieldValue, type)}
            rows={value === 'textarea' ? 6 : 0}
            type={value}
            disabled={
              (key === 'pointA' || key === 'pointB' || key === 'distance') &&
              true
            }
            {...input}
          />
        )
    );

    return (
      <>
        {fields}
        {touched && error && <Error>{translate(error)}</Error>}
      </>
    );
  }
);
