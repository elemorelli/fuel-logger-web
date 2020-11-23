import React, { useState } from "react";
import { history } from "../routers/AppRouter";
import { post } from "../lib/fetch";
import { setToken } from "../lib/auth";
import { populateUserProfile } from "../actions/userProfile";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onLogin = async (event) => {
    event.preventDefault();
    setMessage();

    try {
      const userData = await post("http://localhost:3000/users/login", { email, password }, false);
      store.dispatch(populateUserProfile(userData));
      setToken(userData.token);
      history.push("/dashboard");
    } catch (error) {
      setMessage(error.response);
    }
  };

  return (
    <div>
      <form onSubmit={onLogin}>
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
        <button type="submit" disabled={!email || !password}>
          Login
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default LoginPage;
