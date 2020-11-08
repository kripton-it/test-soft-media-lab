import { connect } from 'react-redux';
import { formValueSelector, reduxForm } from 'redux-form';

import { initialValues } from './consts';
import Form from './Form';
import { IFormData, IStateToFormProps } from './types';

const selector = formValueSelector('calculator');

export const mapStateToProps = (state: any): IStateToFormProps => ({
  paymentOption: selector(state, 'paymentOption') || initialValues.paymentOption/* ,
  withVat: selector(state, 'withVat') || initialValues.withVat */
})

const reduxFormWrapper = reduxForm<IFormData>({
  form: 'calculator',
  initialValues
})(Form as any);

export default connect(mapStateToProps)(reduxFormWrapper);