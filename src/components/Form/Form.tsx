import React, { useState } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import Radio from '../Radio';

import { PAYMENT_OPTIONS, PaymentOptionValue } from './consts';

export const Form: React.FC<InjectedFormProps<{}>> = (props: any) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} noValidate={true}>
      {PAYMENT_OPTIONS.map(({ label, value }) => (
         <Field
         name='paymentOption'
         component={Radio}
         props={{ value }}
         label={label}
         id={value}
       />
      ))}
    </form>
  );
}

export default reduxForm<{}>({
  form: 'calculator',
  initialValues: {
    paymentOption: PaymentOptionValue.MONTH
  }
})(Form);