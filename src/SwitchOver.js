import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import App from "./App";
import UnderMaintainence from "./components/UnderMaintainence";
import { withCookies } from "react-cookie";
import ErrorPage from "./components/404Error";

const SwitchOver = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/xx" exact component={() => <UnderMaintainence />} />
          <Route path="/" component={() => <App cookies={props.cookies} />} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default withCookies(SwitchOver);
