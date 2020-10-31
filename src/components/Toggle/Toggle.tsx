import React from 'react';

const Toggle: React.FC = (field: any) => {
  // console.log(field)
  const { id, input, ...rest } = field
  console.log(input.value, rest)
  const checked = input.value === rest.value;
  return (
    <div>
      <label htmlFor={id}>Указать с НДФЛ</label>
      <input
        type='checkbox'
        id={id}
        { ...input }
        { ...rest }
        checked={checked}
      />
      <label htmlFor={id}>Без НДФЛ</label>
    </div>
  )
};

export default Toggle;