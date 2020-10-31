import React from 'react';

import { getSumInfo } from '../../util';

const Info: React.FC = ({ sum, withVat }: any) => {
  const sumInfo = getSumInfo(sum, withVat);

  return (
    <div>
      <p>{sumInfo.withoutVat} Р сотрудник будет получать на руки</p>
      <p>{sumInfo.vat} Р НДФЛ, 13% от оклада</p>
      <p>{sumInfo.withVat} Р за сотрудника в месяц</p>
    </div>
  )
};

export default Info;