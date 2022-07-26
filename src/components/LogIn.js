import React, { useEffect, useState } from "react";
import "./login.css";
// import users from "../users";

const LogIn = (props) => {
  // useStates
  const [logInInfo, setLogInInfo] = useState({ username: "", password: "" });
  const [usernameIsValid, setUsernameIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormisValid] = useState(false);

  //useEffect
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Validations is happenning ");
      setFormisValid(
        logInInfo.username.trim().length > 6 &&
          logInInfo.password.trim().length > 6
      );
    }, 500);
    // Cleanup function
    return () => {
      console.log("cleanup now happenning ");
      clearTimeout(identifier);
    };
  }, [logInInfo.username, logInInfo.password]);

  // Actions/Functions
  const OnChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormisValid(false);

    setLogInInfo((prevdata) => {
      return { ...prevdata, [name]: value };
    });
    if (name === "username") {
      setUsernameIsValid(logInInfo[name].trim().length > 6);
    } else if (name === "password") {
      setPasswordIsValid(logInInfo[name].trim().length > 6);
    }
  };
  const validateUsernameHandler = () => {
    setUsernameIsValid(logInInfo.username.trim().length > 6);
  };
  const validatePasswordHandler = () => {
    setPasswordIsValid(logInInfo.password.trim().length > 6);
  };
  const logInHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      props.loginAction(logInInfo);

      setLogInInfo({ username: "", password: "" });
    }
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
              className={`input-field ${
                usernameIsValid === false ? "input-invalid" : ""
              }`}
              type="text"
              name="username"
              onChange={OnChangeHandler}
              onBlur={validateUsernameHandler}
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
              onBlur={validatePasswordHandler}
              value={logInInfo.password}
              className={`input-field ${
                passwordIsValid === false ? "input-invalid" : ""
              }`}
            ></input>

            <span></span>
            <label>Password</label>
          </div>
          {/* {formIsValid && (
            <span className="error" style={{ color: "red" }}>
              Please enter a valid username and password
            </span>
          )} */}
          <button
            className={`login-btn `}
            type="submit"
            value="Login"
            // disabled={!formIsValid}
          >
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
