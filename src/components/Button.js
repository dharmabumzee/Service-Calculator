import React from "react";

export const Button = ({ handleClick, title, className }) => {
  return (
    <button className={className} onClick={handleClick}>
      {title}
    </button>
  );
};
