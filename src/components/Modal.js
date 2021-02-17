import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ title, content, actions, pageNumber }) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer large modals visible active scrolling content">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard medium modal visible active"
      >
        <div className="header header-modal">{title}</div>
        <div className="content content-modal">{content}</div>
        {pageNumber < 4 ? (
          <div className="actions actions-modal">{actions}</div>
        ) : null}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
