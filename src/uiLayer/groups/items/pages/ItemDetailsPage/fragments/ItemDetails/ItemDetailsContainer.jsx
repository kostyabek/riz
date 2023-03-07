import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCurrencyToggle, usePriceTag } from "../../../../../../../dataLayer";
import { ItemDetailsFragment } from "./ItemDetailsFragment";

export const ItemDetailsContainer = () => {
  const { id } = useParams();
  const item = useSelector((store) => {
    return store.products.find((p) => p.id === parseInt(id));
  });
  const currencyChangeHandler = useCurrencyToggle();
  const priceTagFactory = usePriceTag();
  const displayPrice = priceTagFactory(item.price);

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
