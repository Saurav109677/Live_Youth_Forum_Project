import React from "react";
import axios from "axios";

export default (
  id,
  updates,
  sessionToMember,
  setSessionsToMember,
  setInDBProgress
) => {
  debugger;
  try {
    setInDBProgress(1);
    axios
      .patch(
        "https://kpcb9.sse.codesandbox.io/sessionToMember/edit/" + id,
        updates
      )
      .then((res) => {
        // console.log("edited successfuly");
        const updatedData = sessionToMember.map((element) => {
          if (element._id === id) {
            // console.log("enter");
            return {
              ...element,
              ...updates
            };
          } else return element;
        });

        //debugger;
        setSessionsToMember(updatedData);
        setInDBProgress(0);
        //return "sendMeNext";
      });
  } catch (e) {
    console.log("error");
  }
};
