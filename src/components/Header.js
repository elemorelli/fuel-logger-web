import React from "react";
import { Link } from "react-router-dom";
import UserProfileSnippet from "./UserProfileSnippet";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="content-container">
        <div className={styles.header_content}>
          <Link className={styles.title} to="/dashboard">
            <h1>Fuel Logger</h1>
          </Link>
          <UserProfileSnippet />
        </div>
      </div>
    </header>
  );
};
export default Header;
