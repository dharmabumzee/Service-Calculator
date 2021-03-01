import React from "react";

const ModalHeader = ({ resetAllState, pageNumber }) => {
  const button = (
    <button
      className="right floated compact circular button-custom"
      onClick={resetAllState}
    >
      <i className="close icon button-custom"></i>
    </button>
  );

  const showButton = pageNumber < 4 ? button : null;

  return (
    <>
      {showButton}
      <div className="ui basic segment custom-segment modal-header">
        <div>
          <h2>Service Configurator</h2>
        </div>
      </div>
    </>
  );
};

export default ModalHeader;
