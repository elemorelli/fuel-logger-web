import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => (
  <>
    <Header />
    <div className={styles.not_found_container}>
      <h1 className={styles.not_found_message}>404</h1>
      <h3 className={styles.not_found_message}>Something went wrong ¯\_(ツ)_/¯ </h3>
      <Link className={styles.not_found_link} to="/dashboard">Return to dashboard</Link>
    </div>
  </>
);

export default NotFoundPage;
