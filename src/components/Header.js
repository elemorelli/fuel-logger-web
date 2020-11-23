import React from "react";
import UserProfileSnippet from "./UserProfileSnippet";

const Header = () => {
  return (
    <header className="header">
      <h1>FuelLogger</h1>
      <UserProfileSnippet />
    </header>
  );
};
export default Header;
