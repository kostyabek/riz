import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { CartDialogFragment } from "./CartDialogFragment";

export const CartDialogContainer = () => {
  const getCartItems = (store) => {
    return store.cartItemIds.map((id) => {
      const product = store.products.find((p) => p.id === id);
      return {
        title: product.title,
      };
    });
  };

  const cartItems = useSelector((store) => getCartItems(store));
  const location = useLocation();

  const isCartPath = location.search.substring(1) === "cart";

  return (
    <CartDialogFragment
      isOpen={isCartPath}
      cartItems={cartItems}
      closeLink={location.pathname}
    />
  );
};
