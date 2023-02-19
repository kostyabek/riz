import { Dialog } from "../../common";
import { CartItem } from "./elements";
import styles from "./CartDialogFragment.module.css";

export const CartDialogFragment = (props) => {
  return (
    <Dialog
      isOpen={props.isOpen}
      className={styles.dialog}
      closeLink={props.closeLink}
    >
      {props.cartItems.length > 0 ? (
        props.cartItems.map((e, i) => (
          <CartItem
            key={`${e.title} ${i}`}
            title={e.title}
          />
        ))
      ) : (
        <h3>Cart is empty.</h3>
      )}
    </Dialog>
  );
};
