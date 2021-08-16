import axios from "axios";
import React from "react";

export default (
  newData,
  sessionToMember,
  setSessionsToMember,
  setInDBProgress
) => {
  try {
    setInDBProgress(1);
    axios
      .post("https://kpcb9.sse.codesandbox.io/sessionToMember/add", newData)
      .then((res) => {
        console.log("added successfuly", res);
        setSessionsToMember([...sessionToMember, res.data]);
        //console.log("added to state", data);
        setInDBProgress(0);
        // history.push("/details");
      });
  } catch (e) {
    return "Error";
  }
};
