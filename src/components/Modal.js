import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ title, content, actions, pageNumber }) => {
  return ReactDOM.createPortal(
    <div className="visible ui dimmer modals active scrolling content modal-custom">
      <div
        onClick={(e) => e.stopPropagation()}
        className="visible ui standard longer medium modal active App-content"
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
