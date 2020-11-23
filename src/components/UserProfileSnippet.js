import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";

import { history } from "../routers/AppRouter";
import { get, post } from "../lib/fetch";
import { clearToken } from "../lib/auth";

import UserContext from "../context/user-context";
import userReducer from "../reducers/userReducer";

import loaderImage from "url:../images/loader.gif";

const UserProfileSnippet = () => {
  const [user, userDispatch] = useReducer(userReducer, []);

  useEffect(async () => {
    const user = await get("http://localhost:3000/users/me");
    userDispatch({ type: "POPULATE_USER", user });
  }, []);

  const onLogout = async () => {
    post("http://localhost:3000/users/logout");
    clearToken();
    history.push("/");
  };

  return (
    <UserContext.Provider value={{ user, userDispatch }}>
      <div>{user.name}</div>
      {user._id ? (
        <img
          height="100"
          width="100"
          alt="user profile avatar"
          src={`http://localhost:3000/users/${user._id}/avatar`}
        ></img>
      ) : (
        <img height="100" width="100" alt="loading user avatar" src={loaderImage}></img>
      )}
      <Link to="/user/edit">Edit user</Link>
      <button onClick={onLogout}>Logout</button>
    </UserContext.Provider>
  );
};
export default UserProfileSnippet;
