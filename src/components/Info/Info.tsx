import React, { FC } from 'react';

import { getSumInfo } from '../../util';
import { VAT_RATE } from '../../util/const';
import { IInfoProps } from './types';
import './Info.scss';

const Info: FC<IInfoProps> = ({ sum, withVat }) => {
  const sumInfo = getSumInfo(sum, withVat);

  return (
    <div className='info_wrapper'>
      <p>
        <span className='info_sum'>{sumInfo.withoutVat} &#8381;</span> сотрудник будет получать на руки
      </p>
      <p>
        <span className='info_sum'>{sumInfo.vat} &#8381;</span> НДФЛ, {VAT_RATE * 100}% от оклада
      </p>
      <p>
        <span className='info_sum'>{sumInfo.withVat} &#8381;</span> за сотрудника в месяц
      </p>
    </div>
  )
};

export default Info;