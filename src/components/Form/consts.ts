export enum PaymentOptionValue {
  DAY = 'day',
  HOUR = 'hour',
  MINIMAL = 'minimal',
  MONTH = 'month'
};

export enum PaymentOptionLabel {
  DAY = 'Оклад за день',
  HOUR = 'Оклад за час',
  MINIMAL = 'МРОТ',
  MONTH = 'Оклад за месяц'
};

export interface IOption {
  label: string
  value: string
}

export const PAYMENT_OPTIONS: IOption[] = [
  {
    label: PaymentOptionLabel.MONTH,
    value: PaymentOptionValue.MONTH
  },
  {
    label: PaymentOptionLabel.MINIMAL,
    value: PaymentOptionValue.MINIMAL
  },
  {
    label: PaymentOptionLabel.DAY,
    value: PaymentOptionValue.DAY
  },
  {
    label: PaymentOptionLabel.HOUR,
    value: PaymentOptionValue.HOUR
  }
];

export const initialValues = {
  paymentOption: PaymentOptionValue.MONTH,
  sum: '0',
  withVat: false
};

export const toggleLabels = {
  yes: 'Указать с НДФЛ',
  no: 'Без НДФЛ'
}
