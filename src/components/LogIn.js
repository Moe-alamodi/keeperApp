import React, { useState } from "react";
import "./login.css";
import users from "../users";

const LogIn = (props) => {
  //   const [isMousedOver, setIsMousedOver] = useState(false);
  //   const mouseOverHandler = () => {
  //     setIsMousedOver(true);
  //   };
  //   const mouseOutHandler = () => {
  //     setIsMousedOver(false);
  // onClick={props.loginAction}

  return (
    <div className="login-card">
      <div className="center">
        <h1>Login</h1>
        <form>
          <div class="txt_field">
            <input type="text" required></input>
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input type="password" required></input>
            <span></span>
            <label>Password</label>
          </div>
          <div class="pass">Forgot Password?</div>
          <input
            onClick={props.loginAction}
            type="submit"
            value="Login"
          ></input>
          <div class="signup_link">
            Not a member? <a href="#">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LogIn;
