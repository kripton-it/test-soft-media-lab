import React, { FC } from 'react';

import Hint from '../Hint';

import './Radio.scss';
import { IRadioProps } from './types';

const Radio: FC<IRadioProps> = ({ hint, id, input, label, value }) => {
  const checked = input.value === value;

  return (
    <div className='radio_wrapper'>
      <input
        type='radio'
        className='visually-hidden radio_input'
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