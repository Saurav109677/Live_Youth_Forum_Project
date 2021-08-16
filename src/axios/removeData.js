import axios from "axios";
import React from "react";

export default (id, setData, data, setInDBProgress) => {
  // console.log("https://kpcb9.sse.codesandbox.io/remove/" + id);
  try {
    setInDBProgress(1);
    axios.delete("https://kpcb9.sse.codesandbox.io/remove/" + id).then((d) => {
      setData(
        data.filter((element) => {
          return element._id !== id;
        })
      );

      setInDBProgress(0);
    });
  } catch (e) {
    console.log(e);
  }
};
