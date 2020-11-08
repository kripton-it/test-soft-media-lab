import React, { FC } from 'react';
import { Field } from 'redux-form';

import Info from '../Info';
import Input from '../Input';
import Radio from '../Radio';
import Toggle from '../Toggle';

import { PAYMENT_OPTIONS, PaymentOptionValue, toggleLabels } from './consts';
import { IProps } from './types';

import './Form.scss';

export const Form: FC<IProps> = (props) => {
  const { handleSubmit, paymentOption } = props;
  const isMinimalOptionSelected = paymentOption === PaymentOptionValue.MINIMAL;

  return (
    <form onSubmit={handleSubmit} noValidate={true} className='form'>
      <fieldset className='form_fieldset'>
        <legend className='form_legend'>Сумма</legend>
        <ul className='form_payment-options-list'>
          {
            PAYMENT_OPTIONS.map(option => (
              <li key={option.value}>
                <Field
                  name='paymentOption'
                  component={Radio}
                  props={{ ...option }}
                  // label={label}
                  id={option.value}
                />
              </li>
            ))
          }
        </ul>
        {!isMinimalOptionSelected && (
          <div className='form_input'>
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