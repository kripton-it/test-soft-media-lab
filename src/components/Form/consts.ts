export enum PaymentOptionValue {
  DAY = 'day',
  HOUR = 'hour',
  MINIMAL = 'minimal',
  MONTH = 'month'
};

export enum PaymentOptionLabel {
  DAY = 'Оплата за день',
  HOUR = 'Оплата за час',
  MINIMAL = 'МРОТ',
  MONTH = 'Оклад за месяц'
};

export interface IOption {
  hint?: string
  label: string
  value: string
}

export const PAYMENT_OPTIONS: IOption[] = [
  {
    label: PaymentOptionLabel.MONTH,
    value: PaymentOptionValue.MONTH
  },
  {
    hint: 'МРОТ - минимальный размер оплаты труда. Разный для разных регионов',
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
