import styles from "./CartItem.module.css";
import { Card } from "../../../../uiLayer";

export const CartItem = (props) => {
  return (
    <Card>
      <p>{props.title}</p>
    </Card>
  );
};
