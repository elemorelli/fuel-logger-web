import React from "react";
import loaderImage from "url:../images/loader.gif";
import styles from "./LoadingPage.module.scss";

const LoadingPage = () => (
  <div className={styles.loader_container}>
    <img className={styles.loader} src={loaderImage}></img>
  </div>
);

export default LoadingPage;
