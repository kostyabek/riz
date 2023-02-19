import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ItemDetailsFragment } from "./ItemDetailsFragment";

export const ItemDetailsContainer = () => {
  const { id } = useParams();
  const { item, currency } = useSelector((store) => {
    return {
      item: store.products.find((p) => p.id === parseInt(id)),
      currency: store.currency,
    };
  });
  const [currencyState, setCurrencyState] = useState(currency);
  const dispatch = useDispatch();

  const isUsd = currencyState === "USD";

  const currencyChangeHandler = () => {
    const currency = isUsd ? "UAH" : "USD";
    dispatch({ type: "currencyChange", currency });
    setCurrencyState(currency);
  };

  const displayPrice = `${item.price}${isUsd ? "$" : "₴"}`;

  return (
    <ItemDetailsFragment
      name={item.title}
      category={item.category}
      description={item.description}
      price={`${displayPrice}`}
      onCurrencyChange={currencyChangeHandler}
    />
  );
};
