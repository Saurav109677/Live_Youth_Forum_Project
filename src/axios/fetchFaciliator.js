import axios from "axios";
import React from "react";

export default () => {
  try {
    axios.get("https://kpcb9.sse.codesandbox.io/facilitator/").then((res) => {
      // const arr = res.data.map((d) => d);
      // console.log("ARray type", arr);
      // const toObj = Object.entries(res.data);
      return res.data;

      // setData(Object.entries(res.data));
      // setData(Object.values(res.data));
      // console.log("REs data:", res.data);
    });
  } catch (e) {
    return "Error";
  }
};
