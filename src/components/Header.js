import React from "react";
import { GiAutoRepair } from "react-icons/gi";

const styles = {
  marginLeft: "20px",
  marginTop: "auto",
  marginBottom: "auto",
  marginRight: "0px",
  // color: "#0E7172",
  color: "#083d77",
  fontWeight: "900",
};

export const containerStyles = {
  display: "block",
  maxWidth: "100%",
  textAlign: "center",
  color: "#083d77",
};

const Header = () => {
  return (
    <div className="ui left aligned segment">
      <div className="ui header" style={{ display: "flex" }}>
        <GiAutoRepair style={{ fontSize: "3.5rem", color: "#da4167" }} />
        <div style={styles}>
          <p style={{ marginBottom: "0px" }}>Car Repair</p>
          <p>Service Calculator</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
