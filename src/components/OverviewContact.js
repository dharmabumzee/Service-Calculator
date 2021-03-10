import React from "react";

export const OverviewContact = ({ name, email, phone, comment }) => {
  return (
    <div className="ui vertical segment overview-contact">
      <div className="item item-1">Name:</div>
      <div className="item item-name">{name}</div>

      <div className="item item-2">Email:</div>
      <div className="item item-email">{email}</div>

      <div className="item item-3">Contact Number:</div>
      <div className="item item-phone"> {phone}</div>

      <div className="item item-4">Comment: </div>
      <div className="item item-comment">{comment}</div>
    </div>
  );
};

export default OverviewContact;
