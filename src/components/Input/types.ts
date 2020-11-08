import { WrappedFieldProps } from 'redux-form';

interface IInputOwnProps {
  id: string
}

export interface IStateToInputProps {
  paymentOption: string
}

export type IInputProps = WrappedFieldProps & IStateToInputProps & IInputOwnProps;