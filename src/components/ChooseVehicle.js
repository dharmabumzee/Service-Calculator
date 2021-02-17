import React from "react";
import { vehicles } from "../data/data";

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

  return (
    <div>
      <h3>Korak 1. Odaberite proizvođača vašeg vozila</h3>
      <div className="content-vehicle">
        {vehicles.map(({ id, value }) => {
          return (
            <div key={id} className="ui radio checkbox">
              <input
                type="radio"
                name="vehicle"
                value={value}
                id={id}
                checked={vehicleChecked == id}
                onChange={handleOnChange}
              />
              <label>{value}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseVehicle;
