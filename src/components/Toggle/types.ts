import { WrappedFieldProps } from 'redux-form';

interface ILabels {
  no: string
  yes: string
}

interface IToggleOwnProps {
  id: string
  labels: ILabels
}

export interface IStateToToggleProps {
  withVat: boolean
}

export type IToggleProps = IToggleOwnProps & IStateToToggleProps & WrappedFieldProps;