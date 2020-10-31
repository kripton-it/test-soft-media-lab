import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';

import Radio from '../Radio';
import Toggle from '../Toggle';

import { initialValues, PAYMENT_OPTIONS } from './consts';
import { IFormData, IProps } from './types';

export const Form: React.FC<IProps> = (props) => {
  const { handleSubmit, paymentOption, withVat } = props;

  return (
    <form onSubmit={handleSubmit} noValidate={true}>
      <fieldset>
        <legend>Сумма</legend>
        {PAYMENT_OPTIONS.map(({ label, value }) => (
          <Field
            name='paymentOption'
            component={Radio}
            props={{ value }}
            label={label}
            id={value}
          />
        ))}
        <Field
          name='withVat'
          component={Toggle}
          props={{ value: withVat }}
          // label={label}
          id='withVat'
        />
      </fieldset>

    </form>
  );
}

export default reduxForm<IFormData>({
  form: 'calculator',
  initialValues
})(Form as any);