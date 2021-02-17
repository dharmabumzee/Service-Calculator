import React from "react";
import tokic from "../images/tokic.png";
import { GiAutoRepair } from "react-icons/gi";

const Header = () => {
  return (
    <div className="ui left aligned segment">
      <div className="ui header" style={{ display: "flex" }}>
        <GiAutoRepair style={{ fontSize: "3.5rem" }} />
        <div
          style={{
            marginLeft: "20px",
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "0px",
          }}
        >
          <p style={{ marginBottom: "0px" }}>Car Repair</p>
          <p>Service Calculator</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
