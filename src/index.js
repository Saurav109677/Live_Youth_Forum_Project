import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import UnderMaintainence from "./components/UnderMaintainence";
import { Switch } from "react-router-dom";
import SwitchOver from "./SwitchOver";
import { CookiesProvider } from "react-cookie";
// import getDataFromDB from './axios/fetchData'

// getDataFromDB()

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
// ReactDOM.render(
//   <CookiesProvider>
//     <SwitchOver />
//   </CookiesProvider>,
//   rootElement
// );
