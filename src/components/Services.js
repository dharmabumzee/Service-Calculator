import React from "react";

export const Services = ({
  services,
  Checkbox,
  handleChange,
  checkedItems,
}) => {
  const styles = {
    marginLeft: "5px",
    cursor: "pointer",
  };

  const renderServices = () => {
    return services.map((service) => (
      <div key={service.id} className="service-checkbox">
        <label key={service.key}>
          <Checkbox
            name={service.name}
            checked={checkedItems[service.name]}
            onChange={handleChange}
            price={Number(service.price)}
          />
          <span style={styles}>
            {service.name} - €{Math.trunc(service.price)}
          </span>
        </label>
      </div>
    ));
  };

  return (
    <div className="content-services render-checkbox">{renderServices()}</div>
  );
};
