import React from 'react';
import NumberFormat from 'react-number-format';

import { getLabel } from '../../util';

import './Input.scss';

const Input: React.FC = (field: any) => {
  const { id, input, paymentOption, ...rest } = field;
  const label = getLabel(paymentOption);

  return (
    <div>
      <NumberFormat
        decimalScale={0}
        thousandSeparator=' '
        type="text"
        id={id}
        className='input_field'
        { ...input }
        { ...rest }
      />
      <label htmlFor={id} className='input_label'>
        &#8381;{label}
      </label>
    </div>
  )
};

export default Input;