import React from 'react';

const Radio: React.FC = (field: any) => {
  const { id, input, label, ...rest } = field
  const checked = input.value === rest.value;
  return (
    <div>
      <input
        type='radio'
        id={id}
        { ...input }
        { ...rest }
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
};

export default Radio;