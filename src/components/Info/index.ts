import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { initialValues } from '../Form/consts';
import Info from './Info';
import { IStateToInfoProps } from './types';

const selector = formValueSelector('calculator');

export const mapStateToProps = (state: any): IStateToInfoProps => ({
  sum: selector(state, 'sum') || initialValues.sum,
  withVat: selector(state, 'withVat') || initialValues.withVat
})

export default connect(mapStateToProps)(Info);