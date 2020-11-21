import React from "react";
import { history } from "../routers/AppRouter";
import { post } from "../lib/fetch";
import { clearToken } from "../lib/auth";

const Header = () => {
  const onLogout = async () => {
    post("http://localhost:3000/users/logout");
    clearToken();
    history.push("/");
  };

  return (
    <>
      <header className="header">Wow! Sucha a header!</header>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};
export default Header;
