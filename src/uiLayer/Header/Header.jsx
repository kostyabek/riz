import React, { useContext } from "react";
import styles from "./Header.module.css";
import { CartButton } from "./cart";
import { useSelector } from "react-redux";
import { Button } from "../common";
import { Link } from "react-router-dom";
import { HomePages } from "../utils";
import { AuthContext } from "../../dataLayer";

export const Header = () => {
  const { isAuthenticated, setAuthenticationStatus } = useContext(AuthContext);
  const cartItemIds = useSelector((store) => store.cartItemIds);

  return (
    <header className={styles.header}>
      <Link
        to={HomePages.Home}
        className={styles["logo-link"]}
      >
        <h1 className={styles["logo-text"]}>WebsiteLogo</h1>
      </Link>
      <nav>
        <ul className={styles["navigation-links"]}>
          <li>SECTION 1</li>
          <li>SECTION 2</li>
          <li>SECTION 3</li>
        </ul>
      </nav>
      <div className={styles["button-container"]}>
        <CartButton cartItemsQty={cartItemIds.length} />
        <Button
          className={styles["auth-button"]}
          onClick={() => setAuthenticationStatus(!isAuthenticated)}
        >
          {isAuthenticated ? "LOGOUT" : "LOG-IN"}
        </Button>
      </div>
    </header>
  );
};
