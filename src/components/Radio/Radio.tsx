import React from 'react';

const Radio: React.FC = (field: any) => {
  const { id, input, label, value } = field;
  const checked = input.value === value;
  return (
    <div>
      <input
        type='radio'
        id={id}
        { ...input }
        value={value}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
};

export default Radio;