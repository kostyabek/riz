import { useSelector } from "react-redux";

export const useCartLogger = () => {
  const cartItemIds = useSelector((store) => store.cartItemIds);
  return () => console.log(cartItemIds);
};
