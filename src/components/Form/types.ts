import { InjectedFormProps } from 'redux-form';

export interface IStateToFormProps {
  paymentOption: string
}

export interface IFormData {
  paymentOption: string
  withVat: boolean
}

export type IFormProps = InjectedFormProps<IFormData> & IStateToFormProps