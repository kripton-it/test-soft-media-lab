import { InjectedFormProps } from 'redux-form';

export interface IStateToFormProps {
  paymentOption: string
  // withVat: boolean
}

export interface IFormData {
  paymentOption: string
  withVat: boolean
}

export type IProps = InjectedFormProps<IFormData> & IStateToFormProps