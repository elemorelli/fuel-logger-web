import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { history } from "../routers/AppRouter";
import { clearToken } from "../lib/auth";
import { post } from "../lib/fetch";
import api from "../api"

import notFoundImage from "url:../images/image-not-found.svg";
import styles from "./UserProfileSnippet.module.scss";

const UserProfileSnippet = () => {
  const user = useSelector((state) => state.userProfile);
  const [avatarSource, setAvatarSource] = useState(api.userAvatar(user._id));
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

  const onImageNotFound = () => {
    setAvatarSource(notFoundImage);
  }

  const onEditProfile = async () => {
    toggleMenu(false);
    history.push("/edit/profile");
  };

  const onLogout = async () => {
    toggleMenu(false);
    post(api.logout());
    clearToken();
    history.push("/");
  };

  return (
    <div className={styles.snippet}>
      <span className={styles.username}>{user.name}</span>

      <div className={styles.menu}>
        <button type="button" className={styles.menu_toggle} onClick={() => toggleMenu(!menuToggled)}>
          <picture>
            <source srcSet={avatarSource} type="image/webp" />
            <img
              height="60"
              width="60"
              onError={onImageNotFound}
              alt="user profile avatar"
              src={`${avatarSource}?format=jpeg`}
            />
          </picture>
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
