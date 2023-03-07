import { useSelector } from "react-redux";

export const usePriceTag = () => {
  const currencySymbol = useSelector((store) => store.currencyData.symbol);
  return (price) => `${price}${currencySymbol}`;
};
