import React from 'react';

import './Toggle.scss';

const Toggle: React.FC = (field: any) => {
  const { id, input, labels, withVat } = field;

  return (
    <div className='toggle_wrapper'>
      <label htmlFor={id} className={`toggle_label${!withVat ? ' toggle_label--muted' : ''}`}>
        {labels.yes}
      </label>
      <div className='toggle_input'>
        <input
          type='checkbox'
          className='toggle_checkbox'
          id={id}
          { ...input }
          checked={withVat}
        />
        <span className='toggle_knobs' />
        <span className='toggle_layer' />
      </div>
      <label htmlFor={id} className={`toggle_label${withVat ? ' toggle_label--muted' : ''}`}>
        {labels.no}
      </label>
    </div>
  )
};

export default Toggle;