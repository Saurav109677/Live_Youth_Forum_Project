import axios from "axios";
import React from "react";

export default (id, setFacilitator, facilitator, setInDBProgress) => {
  // console.log("https://kpcb9.sse.codesandbox.io/remove/" + id);
  try {
    setInDBProgress(1);
    axios
      .delete("https://kpcb9.sse.codesandbox.io/facilitator/remove/" + id)
      .then((d) => {
        setFacilitator(
          facilitator.filter((element) => {
            return element._id !== id;
          })
        );

        setInDBProgress(0);
      });
  } catch (e) {
    console.log(e);
  }
};
