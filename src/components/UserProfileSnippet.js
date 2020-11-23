import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { history } from "../routers/AppRouter";
import { get, post } from "../lib/fetch";
import { clearToken } from "../lib/auth";

import userProfileReducer from "../reducers/userProfile";

import loaderImage from "url:../images/loader.gif";

const UserProfileSnippet = () => {
  const user = useSelector((state) => state.userProfile);

  console.log({user})
  const dispatch = useDispatch();

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
      <Link to="/user/edit">Edit user</Link>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
export default UserProfileSnippet;
