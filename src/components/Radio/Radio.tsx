import React from 'react';

import Hint from '../Hint';

import './Radio.scss';

const Radio: React.FC = (field: any) => {
  const { hint, id, input, label, value } = field;
  const checked = input.value === value;
  return (
    <div className='radio_wrapper'>
      <input
        type='radio'
        className='radio_input'
        id={id}
        { ...input }
        value={value}
        checked={checked}
      />
      <label htmlFor={id} className='radio_label'>
        {label}
      </label>
      {hint && <Hint text={hint} />}
    </div>
  )
};

export default Radio;