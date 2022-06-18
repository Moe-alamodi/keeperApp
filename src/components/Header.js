import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <h1>Keeper</h1>
      <div></div>
      <button onClick={props.loggedOut}>logout</button>
    </header>
  );
};
export default Header;
