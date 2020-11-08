import { WrappedFieldProps } from 'redux-form';

interface IRadioOwnProps {
  id: string
  hint?: string
  label: string
  value: string
}

export type IRadioProps = WrappedFieldProps & IRadioOwnProps;