import React from "react";
import axios from "axios";

export default (id, updates, setSessions, sessions, setInDBProgress) => {
  try {
    setInDBProgress(1);
    axios
      .patch("https://kpcb9.sse.codesandbox.io/session/edit/" + id, updates)
      .then((res) => {
        // console.log("edited successfuly");
        const updatedData = sessions.map((element) => {
          if (element._id === id) {
            console.log("enter");
            return {
              ...element,
              ...updates
            };
          } else return element;
        });

        setSessions(updatedData);
        setInDBProgress(0);
      });
  } catch (e) {
    console.log("error");
  }
};
