import React from "react";
import { GiAutoRepair } from "react-icons/gi";

const headerStyles = {
  marginLeft: "10px",
  marginTop: "auto",
  marginBottom: "auto",
  marginRight: "0px",
  color: "#083d77",
  fontWeight: "700",
  fontFamily: "Oswald, sans-serif",
};

const iconStyles = {
  fontSize: "3.5rem",
  color: "#da4167",
};

const Header = () => {
  return (
    <div className="ui left aligned segment header-segment">
      <div className="ui header" style={{ display: "flex" }}>
        <GiAutoRepair style={iconStyles} />
        <div style={headerStyles}>
          <p style={{ marginBottom: "0px" }}>Car Repair</p>
          <p>Service Calculator</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
