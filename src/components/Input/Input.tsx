import React from 'react';
import NumberFormat from 'react-number-format';

import { getLabel } from '../../util';

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
        { ...input }
        { ...rest }
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
};

export default Input;