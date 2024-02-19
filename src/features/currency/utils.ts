export const convertToCurrency = (price: number, newCurrency: string) => {
  switch (newCurrency) {
    case "EUR":
      return Number(0.93 * price).toFixed(2);
    case "GBP":
      return Number(0.79 * price).toFixed(2);
    case "UAH":
      return Number(38.06 * price).toFixed(2);
    default:
      return price;
  }
};

export const getCurrencySymbol = (currency: string) => {
  switch (currency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "UAH":
      return "₴";
    default:
      return "¤";
  }
};
