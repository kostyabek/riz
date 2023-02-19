import styles from "./CartButton.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../../common";

export const CartButton = (props) => {
  return (
    <Button
      className={`${styles.container} ${props.className}`}
      onClick={props.onClick}
    >
      <Link
        to={"?cart"}
        className={styles["cart-link"]}
      >
        <div className={styles["text-container"]}>
          <p>CART</p>
          <p>{props.cartItemsQty}</p>
        </div>
      </Link>
    </Button>
  );
};
