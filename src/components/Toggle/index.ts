import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import Toggle from './Toggle';
import { IStateToToggleProps } from './types';

const selector = formValueSelector('calculator');

export const mapStateToProps = (state: any): IStateToToggleProps => ({
  withVat: selector(state, 'withVat')
})

export default connect(mapStateToProps)(Toggle);