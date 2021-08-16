import axios from "axios";
import React from "react";

export default (newData, setFacilitator, facilitator, setInDBProgress) => {
  try {
    setInDBProgress(1);
    axios
      .post("https://kpcb9.sse.codesandbox.io/facilitator/add", newData)
      .then((res) => {
        console.log("added successfuly");
        setFacilitator([...facilitator, res.data]);
        console.log("added to state", facilitator);
        setInDBProgress(0);
        // history.push("/details");
      });
  } catch (e) {
    return "Error";
  }
};
