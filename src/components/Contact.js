import React, { useState } from "react";
import ContactField from "./ContactField";
import _ from "lodash";
import { fields } from "../data/data";
import { StepTitle } from "./StepTitle";

const Contact = ({
  name,
  email,
  phone,
  comment,
  setName,
  setEmail,
  setPhone,
  setComment,
}) => {
  const [changes, setChanges] = useState({
    name,
    email,
    phone,
    comment,
  });

  const handleOnChange = (e) => {
    const newChanges = _.cloneDeep(changes);

    const {
      target: { name, value },
    } = e;

    newChanges[name] = value;
    setChanges(newChanges);
    setName(newChanges.name);
    setEmail(newChanges.email);
    setPhone(newChanges.phone);
    setComment(newChanges.comment);
  };

  const handleValue = (id) => {
    switch (id) {
      case 1:
        return name;
      case 2:
        return email;
      case 3:
        return phone;
      case 4:
        return comment;
      default:
        return;
    }
  };

  return (
    <div className="contact">
      <StepTitle
        subtitle="Step 3 - Contact Form"
        className="removeMarginBottom"
      />
      <div className="ui form">
        {fields.map(({ id, title, placeholder, tag, required, type }) => {
          return (
            <ContactField
              id={id}
              title={title}
              placeholder={placeholder}
              tag={tag}
              required={required}
              key={id}
              name={type}
              onChange={handleOnChange}
              value={handleValue(id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
