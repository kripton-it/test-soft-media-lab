import { PaymentOptionValue } from "../components/Form/consts";

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
