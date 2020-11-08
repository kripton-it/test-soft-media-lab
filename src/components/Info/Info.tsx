import React from 'react';

import { getSumInfo } from '../../util';
import { VAT_RATE } from '../../util/const';
import './Info.scss';

const Info: React.FC = ({ sum, withVat }: any) => {
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