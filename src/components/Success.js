import React from "react";
import ReactJson from "react-json-view";

import { successData } from "../data/data";

const Success = ({ resetAllState, data }) => {
  console.log(data);
  const { successSubtitle, successMessage, successButton } = successData;

  return (
    <div className="ui center aligned basic segment">
      <h3>
        {successSubtitle}{" "}
        <i className="check circle outline icon icon-style"></i>
      </h3>
      <div style={{ margin: ".5rem" }}>
        <ReactJson src={data} />
      </div>
      <p className="success-content">{successMessage}</p>
      <button className="ui button" onClick={resetAllState}>
        {successButton}
      </button>
    </div>
  );
};

export default Success;
