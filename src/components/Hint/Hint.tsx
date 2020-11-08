import React, { FC, useState } from 'react';

import './Hint.scss';
import { IHintProps } from './types';

const Hint: FC<IHintProps> = ({ text }) => {
  const [isFixed, setIsFixed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const onButtonClick = () => {
    setIsFixed(!isFixed);
  }

  const onButtonMouseEnter = () => {
    setIsHovered(true);
  }

  const onButtonMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <div className='hint_wrapper'>
      <button
        className='hint_button'
        onClick={onButtonClick}
        onMouseEnter={onButtonMouseEnter}
        onMouseLeave={onButtonMouseLeave}
        type='button'
      >
        {isFixed ? 'x' : 'i'}
      </button>
      {(isFixed || isHovered) && <div className='hint_content'>{text}</div>}
    </div>
  )
};

export default Hint;