export const tryConvert = (value, converter) => {
  if (
    !value ||
    isNaN(parseFloat(value)) ||
    !converter ||
    typeof converter !== "function"
  ) {
    return "";
  }

  return converter(value).toFixed(2);
};

const USD = 39.5686;
export const uahToUsdConverter = (uahValue) => uahValue / USD;
export const usdToUahConverter = (usdValue) => usdValue * USD;
