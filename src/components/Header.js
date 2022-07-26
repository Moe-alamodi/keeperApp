import React from "react";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";

import LogoutIcon from "@mui/icons-material/Logout";
import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <a href="/">
        <StickyNote2Icon />
        Keeper
      </a>
      <button onClick={props.loggedOut}>
        <LogoutIcon />
      </button>
    </header>
  );
};
export default Header;
