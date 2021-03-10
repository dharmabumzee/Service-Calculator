import React from "react";

export const StepTitle = ({ subtitle, className }) => {
  return (
    <>
      <h3 className={`step-subtitle ${className}`}>{subtitle}</h3>
    </>
  );
};
