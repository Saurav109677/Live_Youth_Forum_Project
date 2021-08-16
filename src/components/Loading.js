import React from "react";

export default () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        class="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
      <b> Loading ...</b>
    </div>
  );
};
