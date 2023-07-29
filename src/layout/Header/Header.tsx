import React, { FC } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/icon.png";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <h3>Your little notes</h3>
      </div>
      <p>"Goal setting is the secret to a compelling future"</p>
    </header>
  );
};

export default Header;
