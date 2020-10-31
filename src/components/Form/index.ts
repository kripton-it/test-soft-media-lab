import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { initialValues } from './consts';
import Form from './Form';
import { IStateToFormProps } from './types';

const selector = formValueSelector('calculator');

export const mapStateToProps = (state: any): IStateToFormProps => ({
  paymentOption: selector(state, 'paymentOption') || initialValues.paymentOption,
  withVat: selector(state, 'withVat') || initialValues.withVat
})

export default connect(mapStateToProps)(Form);