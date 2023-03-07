import { useDispatch, useSelector } from "react-redux";

export const useCurrencyToggle = () => {
  const currencyData = useSelector((store) => store.currencyData);
  const dispatch = useDispatch();

  const isUsd = currencyData.currency === "USD";
  const newCurrencyData = isUsd
    ? { currency: "UAH", symbol: "₴" }
    : { currency: "USD", symbol: "$" };

  return () => {
    dispatch({ type: "currencyChange", currencyData: newCurrencyData });
  };
};
