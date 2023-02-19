import styles from "./Dialog.module.css";
import ReactDOM from "react-dom";
import { Card } from "../Card";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";

const DialogWindow = (props) => {
  return (
    <div className={styles.backdrop}>
      <Card className={`${styles.dialog} ${props.className}`}>
        {props.children}
        <Link
          to={props.closeLink}
          className={styles["close-button"]}
        >
          <Button>Close</Button>
        </Link>
      </Card>
    </div>
  );
};

export const Dialog = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  const windowPortal = ReactDOM.createPortal(
    <DialogWindow
      closeLink={props.closeLink}
      className={props.className}
    >
      {props.children}
    </DialogWindow>,
    document.getElementById("dialog-root")
  );

  return isOpen && windowPortal;
};
