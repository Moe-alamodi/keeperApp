import React, { useState } from "react";
import "./login.css";
// import users from "../users";

const LogIn = (props) => {
  const [logInInfo, setLogInInfo] = useState({ username: "", password: "" });
  const [disable, setDisable] = useState(false);
  window.addEventListener("load", () => {
    setDisable(false);
  });
  const logInHandler = (event) => {
    event.preventDefault();
    if (
      logInInfo.username.trim().length !== 0 &&
      logInInfo.password.trim().length !== 0
    ) {
      setDisable(false);
      props.loginAction();
      setLogInInfo({ username: "", password: "" });
    } else {
      setDisable(true);
    }
  };
  const OnChangeHandler = (event) => {
    const { name, value } = event.target;
    setDisable(false);

    setLogInInfo((prevdata) => {
      return { ...prevdata, [name]: value };
    });
  };
  return (
    <div className="login-card">
      <img
        src={require("./keeper-logo.png")}
        alt="logo
    "
      ></img>
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={logInHandler}>
          <div class="txt_field">
            <input
              type="text"
              name="username"
              onChange={OnChangeHandler}
              value={logInInfo.username}
            ></input>
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input
              type="password"
              name="password"
              onChange={OnChangeHandler}
              value={logInInfo.password}
            ></input>
            <span></span>
            <label>Password</label>
          </div>
          {disable && (
            <span className="error" style={{ color: "red" }}>
              Please enter username and password
            </span>
          )}
          <button className="login-btn" type="submit" value="Login">
            Login
          </button>
          {/* <div class="signup_link">
            Not a member? <a href="/">Signup</a>
          </div> */}
        </form>
      </div>
    </div>
  );
};
export default LogIn;
