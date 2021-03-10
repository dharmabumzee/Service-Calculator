import React from "react";
import { vehicles } from "../data/data";
import { StepTitle } from "./StepTitle";

import "./Buttons.scss";

const vehicleStyle = {
  marginLeft: "5px",
  cursor: "pointer",
};

const ChooseVehicle = ({
  setVehicle,
  setIsButtonDisabled,
  vehicleChecked,
  setVehicleChecked,
}) => {
  const handleOnChange = (e) => {
    setVehicle(e.target.value);
    setVehicleChecked(e.target.id);
    setIsButtonDisabled(false);
  };

  const renderVehicles = () => {
    return vehicles.map(({ id, value }) => (
      <div key={id} className="checkbox r1 ">
        <label className="checkbox vehicle-value">
          <input
            type="radio"
            name="vehicle"
            value={value}
            id={id}
            checked={vehicleChecked == id}
            onChange={handleOnChange}
          />
          <span style={vehicleStyle} className="choose-vehicle">
            {value}
          </span>
        </label>
      </div>
    ));
  };

  return (
    <div>
      <StepTitle subtitle="Step 1 - Choose a car brand (Single-select)" />
      <div className="content-vehicle">{renderVehicles()}</div>
    </div>
  );
};

export default ChooseVehicle;
