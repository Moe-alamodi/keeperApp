import React from "react";
import "./login.css";
import users from "../users";

const LogIn = (props) => {
  return (
    <div className="login-card">
      <div className="login">
        <h1>Hello</h1>
        <form>
          <input placeholder="Username" required></input>
          <input placeholder="Enter your pin" required></input>
          <button onClick={props.loginAction}>Login</button>
        </form>
      </div>
    </div>
  );
};
export default LogIn;
