import { PaymentOptionValue } from "../components/Form/consts";
import { VAT_RATE } from './const';

export const getLabel = (paymentOption: string): string => {
  switch (paymentOption) {
    case PaymentOptionValue.DAY:
      return "рублей в день";

    case PaymentOptionValue.HOUR:
      return "рублей в час";

    case PaymentOptionValue.MONTH:
      return "рублей";
    
    default:
      return '';
  }
};

interface ISumInfo {
  withoutVat: string
  vat: string
  withVat: string
}

export const getSumInfo = (value: string, withVat: boolean): ISumInfo => {
  const sum = Number(value.split(' ').join(''));
  const sumWithoutVat = withVat
    ? (1 - VAT_RATE) * sum
    : sum;

  const sumVat = withVat
    ? sum * VAT_RATE
    : sum * (VAT_RATE / (1 - VAT_RATE));

  const sumWithVat = withVat
    ? sum
    : sum / (1 - VAT_RATE);

  const formatter = new Intl.NumberFormat('ru');

  return {
    withoutVat: formatter.format(Math.round(sumWithoutVat)),
    vat: formatter.format(Math.round(sumVat)),
    withVat: formatter.format(Math.round(sumWithVat))
  }
}
