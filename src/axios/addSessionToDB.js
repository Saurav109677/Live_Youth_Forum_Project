import axios from "axios";
import React from "react";

export default (newData, setSessions, sessions, setInDBProgress) => {
  try {
    setInDBProgress(1);
    axios
      .post("https://kpcb9.sse.codesandbox.io/session/add", newData)
      .then((res) => {
        //console.log("added successfuly");
        setSessions([...sessions, res.data]);
        //console.log("added to state", facilitator);
        setInDBProgress(0);
        // history.push("/details");
      });
  } catch (e) {
    return "Error";
  }
};
