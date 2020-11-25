import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { history } from "../routers/AppRouter";
import { post } from "../lib/fetch";
import { clearToken } from "../lib/auth";

import styles from "./UserProfileSnippet.module.scss";

const UserProfileSnippet = () => {
  const user = useSelector((state) => state.userProfile);
  const [menuToggled, toggleMenu] = useState(false);
  const menuContainer = useRef(null);

  const handleClickOutside = (event) => {
    if (menuContainer.current && !menuContainer.current.contains(event.target)) {
      toggleMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onEditProfile = async () => {
    // toggleMenu(!menuToggled);
    history.push("/edit/profile");
  };

  const onLogout = async () => {
    // toggleMenu(!menuToggled);
    post("http://localhost:3000/users/logout");
    clearToken();
    history.push("/");
  };

  return (
    <div className={styles.snippet}>
      <span className={styles.username}>{user.name}</span>

      <div className={styles.menu}>
        <button type="button" className={styles.menu_toggle} onClick={() => toggleMenu(!menuToggled)}>
          <img
            height="60"
            width="60"
            alt="user profile avatar"
            src={`http://localhost:3000/users/${user._id}/avatar`}
          />
        </button>
      </div>

      {menuToggled && (
        <div className={styles.dropdown_container} ref={menuContainer}>
          <ul className={styles.dropdown}>
            <li onClick={onEditProfile}>Edit profile</li>
            <li onClick={onLogout}>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default UserProfileSnippet;
