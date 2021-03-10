import React from "react";
import { OverviewText } from "./OverviewText";
import { overviewData } from "../data/data";
import OverviewContact from "./OverviewContact";
import { StepTitle } from "./StepTitle";

const Overview = ({
  setPageNumber,
  name,
  email,
  phone,
  comment,
  vehicle,
  checkedItems,
  subtotal,
  services,
  discountRate,
  validCouponEntered,
}) => {
  const showButton = (id) => {
    return (
      <button
        className="ui tiny yellow button overview-button"
        onClick={() => setPageNumber(id)}
      >
        <i className="edit icon" />
        EDIT
      </button>
    );
  };

  const renderServices = () => {
    return Object.entries(checkedItems).map(([key, value]) => {
      return value === true ? (
        <React.Fragment key={key}>
          <div className="item">{key}</div>
          {services.map((service, index) =>
            key === service.name ? (
              <div className="item" key={index}>
                €{service.price}
              </div>
            ) : null
          )}
        </React.Fragment>
      ) : null;
    });
  };

  const renderSubtotal = () => {
    return (
      <div className="amount">
        {validCouponEntered ? (
          <span style={{ fontSize: "15px" }}>
            Discount (30%): €{"  "}-{discountRate.toFixed(2)}
            <br />
          </span>
        ) : null}
        <span
          style={{
            fontWeight: "bold",
            textAlign: "stretch",
          }}
        >
          TOTAL: €
          {validCouponEntered
            ? (subtotal - discountRate).toFixed(2)
            : subtotal.toFixed(2)}{" "}
        </span>
      </div>
    );
  };

  const renderContent = (id) => {
    // eslint-disable-next-line default-case
    switch (id) {
      case 0:
        return <p>{vehicle}</p>;
      case 1:
        return (
          <>
            <div className="overview-services">{renderServices()}</div>
            {renderSubtotal()}
          </>
        );
      case 2:
        return null;
    }
  };

  const OverviewBox = (overviewData) => {
    const { id, title } = overviewData;
    return (
      <div className="ui vertical segment overview-box-container">
        <h3>
          <span style={{ marginRight: "10px", verticalAlign: "text-bottom" }}>
            {title}
          </span>
          {"  "}

          <span
            style={{
              verticalAlign: "text-top",
              marginLeft: "1rem",
            }}
          >
            {showButton(id)}
          </span>
        </h3>
        <div style={{ marginTop: "1rem" }}>{renderContent(id)}</div>
      </div>
    );
  };

  return (
    <>
      <StepTitle subtitle="Step 4 - Overview" />
      <div className="overview-container">
        {/* <OverviewText /> */}
        <div className="overview">
          {overviewData.map(({ id, title }) => {
            return <OverviewBox id={id} title={title} key={id} />;
          })}
        </div>
        <OverviewContact
          name={name}
          email={email}
          phone={phone}
          comment={comment}
        />
      </div>
    </>
  );
};

export default Overview;
