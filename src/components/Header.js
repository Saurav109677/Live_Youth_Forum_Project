import React from "react";
import ReactDOM from "react-dom";
import { Link, Redirect } from "react-router-dom";

export default (props) => {
  const logout = () => {
    sessionStorage.removeItem("loginStatus");
    // props.history.push("/dashboard");
    // <Redirect to="/" />;
    window.location.reload();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <b>Preaching Module</b>

        <a className="nav-link">
          <Link to="/dashboard">Home</Link>
        </a>

        <a className="nav-link">
          <Link to="/sessions">Sessions</Link>
        </a>

        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a className="nav-link">{/* <Link to="/add">Add User</Link> */}</a>
          </li>
        </ul>
        <a style={{ cursor: "pointer" }}>
          <Link to="/filter">
            <b>Search</b>
          </Link>
        </a>
        <span>...</span>
        <a style={{ cursor: "pointer" }} onClick={logout}>
          <b>Logout</b>
        </a>
      </nav>
    </div>
  );
};
