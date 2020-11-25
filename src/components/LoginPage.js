import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { history } from "../routers/AppRouter";
import { post } from "../lib/fetch";
import { setToken } from "../lib/auth";
import { populateUserProfile } from "../actions/userProfile";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const onLogin = async (event) => {
    event.preventDefault();
    setMessage();

    try {
      const userData = await post("http://localhost:3000/users/login", { email, password }, false);
      dispatch(populateUserProfile(userData.user));
      setToken(userData.token);
      history.push("/dashboard");
    } catch (error) {
      setMessage(error.response);
    }
  };

  return (
    <div className={styles.box_layout}>
      <div className={styles.box}>
        <h1 className={styles.title}>Fuel Logger</h1>
        <form className={styles.login_form} onSubmit={onLogin}>
          <input
            type="text"
            placeholder="Email"
            autoFocus
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="button" type="submit" disabled={!email || !password}>
            Login
          </button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default LoginPage;
