import React, { useState } from 'react';
import { Field } from 'redux-form';

import Info from '../Info';
import Input from '../Input';
import Radio from '../Radio';
import Toggle from '../Toggle';

import { PAYMENT_OPTIONS, PaymentOptionValue, toggleLabels } from './consts';
import { IProps } from './types';

export const Form: React.FC<IProps> = (props) => {
  const { handleSubmit, paymentOption, withVat } = props;
  const isMinimalOptionSelected = paymentOption === PaymentOptionValue.MINIMAL;


  return (
    <form onSubmit={handleSubmit} noValidate={true}>
      <fieldset>
        <legend>Сумма</legend>
        {PAYMENT_OPTIONS.map(option => (
          <Field
            name='paymentOption'
            component={Radio}
            props={{ ...option }}
            // label={label}
            id={option.value}
          />
        ))}
        {!isMinimalOptionSelected && (
          <div>
            <Field
              name='withVat'
              component={Toggle}
              props={{ labels: toggleLabels }}
              id='withVat'
            />
            <Field
              name='sum'
              component={Input}
              id='sum'
            />
          </div>
        )}
        {paymentOption === PaymentOptionValue.MONTH && <Info />}
      </fieldset>

    </form>
  );
}

export default Form;