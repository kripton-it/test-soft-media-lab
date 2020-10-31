import { WrappedFieldProps } from 'redux-form';

export interface IStateToInputProps {
  paymentOption: string
}

export type IProps = WrappedFieldProps & IStateToInputProps