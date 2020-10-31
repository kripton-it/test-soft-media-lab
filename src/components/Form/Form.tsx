import React, { useState } from 'react';
import { Field } from 'redux-form';

import Input from '../Input';
import Radio from '../Radio';
import Toggle from '../Toggle';

import { PAYMENT_OPTIONS, PaymentOptionValue } from './consts';
import { IProps } from './types';

export const Form: React.FC<IProps> = (props) => {
  const { handleSubmit, paymentOption, withVat } = props;
  const isMinimalOptionSelected = paymentOption === PaymentOptionValue.MINIMAL;

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
        {!isMinimalOptionSelected && (
          <div>
            <Field
              name='withVat'
              component={Toggle}
              props={{ value: withVat }}
              id='withVat'
            />
            <Field
              name='sum'
              component={Input}
              id='sum'
            />
          </div>
        )}
      </fieldset>

    </form>
  );
}

export default Form;