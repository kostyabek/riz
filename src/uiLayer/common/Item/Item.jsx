import { useState } from "react";
import { useDispatch } from "react-redux";
import { Card } from "..";
import styles from "./Item.module.css";
import { Link } from "react-router-dom";

export const Item = (props) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(props.isInCart);

  const changeHandler = () => {
    const actionType = !isChecked ? "addItem" : "removeItem";
    dispatch({ type: actionType, itemId: props.itemId });
    setIsChecked(!isChecked);
  };

  return (
    <Card className={styles.item}>
      <div>
        <input
          type='checkbox'
          name='addToCard'
          className={styles.checkbox}
          checked={isChecked}
          onChange={changeHandler}
        />
      </div>
      <Link
        to={props.detailsLink}
        className={styles["item-link"]}
      >
        <div className={styles["text-container"]}>
          <p className={styles.title}>{props.title}</p>
          <hr />
          <p className={styles["short-description"]}>
            {props.shortDescription}
          </p>
          <p>{`${props.price}`}</p>
        </div>
      </Link>
    </Card>
  );
};
