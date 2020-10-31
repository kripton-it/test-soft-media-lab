import { InjectedFormProps } from 'redux-form';

export interface IStateToFormProps {
  paymentOption: string
  withVat: string
}

export interface IFormData {
  paymentOption: string
  withVat: string
}

export type IProps = InjectedFormProps<IFormData> & IStateToFormProps