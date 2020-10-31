import React from 'react';

const Toggle: React.FC = (field: any) => {
  const { id, input, withVat } = field;

  return (
    <div>
      <label htmlFor={id}>Указать с НДФЛ</label>
      <input
        type='checkbox'
        id={id}
        { ...input }
        checked={withVat}
      />
      <label htmlFor={id}>Без НДФЛ</label>
    </div>
  )
};

export default Toggle;