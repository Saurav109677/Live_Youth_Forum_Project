import React from "react";
import axios from "axios";

export default (id, updates, setData, data, setInDBProgress) => {
  try {
    setInDBProgress(1);
    axios
      .patch("https://kpcb9.sse.codesandbox.io/edit/" + id, updates)
      .then((res) => {
        // console.log("edited successfuly");
        const updatedData = data.map((element) => {
          if (element._id === id) {
            console.log("enter");
            return {
              ...element,
              ...updates
            };
          } else return element;
        });

        setData(updatedData);
        setInDBProgress(0);
      });
  } catch (e) {
    console.log("error");
  }
};
