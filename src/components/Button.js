import React from "react";

export const Button = ({ handleClick, title, className, id }) => {
  return (
    <button className={className} onClick={handleClick} id={id}>
      {title}
    </button>
  );
};
