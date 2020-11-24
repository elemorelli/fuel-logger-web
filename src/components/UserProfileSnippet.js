import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { history } from "../routers/AppRouter";
import { post } from "../lib/fetch";
import { clearToken } from "../lib/auth";

import loaderImage from "url:../images/loader.gif";

const UserProfileSnippet = () => {
  const user = useSelector((state) => state.userProfile);

  const onLogout = async () => {
    post("http://localhost:3000/users/logout");
    clearToken();
    history.push("/");
  };

  return (
    <div>
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
      <Link to="/">Edit Profile</Link>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
export default UserProfileSnippet;
