import styles from "./Footer.module.css";

export const Footer = (props) => {
  return (
    <footer className={`${styles.footer}`}>
      <ul className={`${styles.links}`}>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
      <ul className={`${styles.links}`}>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
    </footer>
  );
};
