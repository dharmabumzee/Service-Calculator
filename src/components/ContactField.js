import React from "react";

export const ContactField = ({
  title,
  placeholder,
  tag,
  required,
  onChange,
  value,
  name,
}) => {
  const typeOfInputField =
    tag === "input" ? (
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
    ) : (
      <textarea
        spellCheck="false"
        value={value}
        onChange={onChange}
        name={name}
      >
        {placeholder}
      </textarea>
    );

  const isRequired = required ? "required" : "";

  return (
    <>
      <div className={`${isRequired} field`} onChange={onChange}>
        <label>{title}</label>
        {typeOfInputField}
      </div>
    </>
  );
};

export default ContactField;
