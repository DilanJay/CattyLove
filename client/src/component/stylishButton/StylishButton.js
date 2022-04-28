import React from "react";
import "./StylishButton.css";
function StylishButton(props) {
  return (
    <button
      className="btncl fourth"
      style={{ display: "inline-block !important" }}
    >
      {props.btnName}
    </button>
  );
}

export default StylishButton;
