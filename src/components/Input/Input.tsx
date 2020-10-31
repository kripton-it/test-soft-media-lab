import React from 'react';

import { getLabel } from '../../util';

const Input: React.FC = (field: any) => {
  const { id, input, paymentOption, ...rest } = field;
  const label = getLabel(paymentOption);
  return (
    <div>
      <input type="text" id={id} { ...input } { ...rest } />
      <label htmlFor={id}>{label}</label>
      {/* <Label>{field.label}</Label>
      <Input
        {...field.input}
        type={field.type}
        placeholder={field.placeHolder}
        max={field.maxDate}
        min={field.minDate}
        step={field.step}
        disabled={field.disabled}
      />
      {field.meta.touched && <p className="text-danger">{field.meta.error}</p>} */}
    </div>
  )
};

export default Input;