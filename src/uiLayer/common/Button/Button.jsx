import styles from "./Button.module.css";

export const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${styles.button} ${props.className}`}
    >
      {props.children}
    </button>
  );
};
