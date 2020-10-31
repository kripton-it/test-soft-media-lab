import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { initialValues } from '../Form/consts';
import Input from './Input';
import { IStateToInputProps } from './types';

const selector = formValueSelector('calculator');

export const mapStateToProps = (state: any): IStateToInputProps => ({
  paymentOption: selector(state, 'paymentOption') || initialValues.paymentOption
})

export default connect(mapStateToProps)(Input);