import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";
import {} from "./Login.css";
// import Cookies from "universal-cookie";

export default (props) => {
  const [pass, setPass] = useState();
  const [incorrect, setIncorrect] = useState(false);
  // const cookies = new Cookies();
  // const { cookies } = props;
  // console.log("ppp",props.cookies);
  const onFormSubmit = (e) => {
    // debugger;
    e.preventDefault();
    //console.log(pass);
    if (pass === "Nityananda@108") {
      sessionStorage.setItem("loginStatus", true);
      // props.cookies.set("loginStatus", true, { path: "" });
      // console.log(props.cookies);
      // props.setCookies("xyz", "ooo");
      // console.log(props.getCookies("xyz"));
      props.setLoginStatus(true);
      props.history.push("/dashboard");
    } else {
      // console.log("password not match");
      setPass("");
      setIncorrect(true);
    }
  };
  return (
    <>
      <div class="sidenav">
        <div class="login-main-text">
          <h2>Preaching Module</h2>
          <p>Haridwar VOICE</p>
        </div>
      </div>

      <div class="main">
        <div class="col-md-6 col-sm-12">
          <div class="login-form">
            <form onSubmit={onFormSubmit}>
              <div class="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="admin"
                  disabled
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  id="adminPassword"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <small style={{ color: "red" }} hidden={!incorrect}>
                  <b>Password Incorrect!</b>
                </small>
              </div>
              <button type="submit" class="btn btn-black">
                Login
              </button>
              {/* <button type="submit" class="btn btn-secondary">
                Register
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
