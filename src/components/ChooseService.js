import React, { useState, useEffect } from "react";
import { Services } from "./Services";

const ChooseService = ({
  checkedItems,
  setCheckedItems,
  setIsButtonDisabled,
  subtotal,
  setSubtotal,
  services,
  discountRate,
  validCouponEntered,
  setValidCouponEntered,
  setDiscount,
  coupon,
  setCoupon,
  couponVerified,
  setCouponVerified,
}) => {
  const [couponClicked, setCouponClicked] = useState(false);

  const Checkbox = ({
    type = "checkbox",
    name,
    price,
    checked = false,
    onChange,
  }) => {
    return (
      <input
        id="service"
        type={type}
        name={name}
        price={price}
        checked={checked}
        onChange={onChange}
        className="checkbox"
      />
    );
  };

  const handleChange = (e) => {
    setCheckedItems({
      ...checkedItems,

      [e.target.name]: e.target.checked,
    });

    e.target.checked
      ? setSubtotal(subtotal + Number(e.target.getAttribute("price")))
      : setSubtotal(subtotal - Number(e.target.getAttribute("price")));
  };

  const handleClick = () => {
    setCouponClicked(!false);
  };

  const handleOnChange = (e) => {
    setCoupon(e.target.value);
  };

  const verifyCoupon = () => {
    setCouponVerified(true);
    if (coupon === "Tokić123") {
      setValidCouponEntered(true);
      setDiscount(discountRate);
    }
  };

  const couponErrorMessage = () => {
    return (
      <p style={{ color: "#B03060", marginTop: "10px" }}>
        Niste unijeli važeći kod
      </p>
    );
  };

  const calculateDiscount = () => {
    return ((subtotal * 30) / 100).toFixed(2);
  };

  const handleCouponClicked = () => {
    return (
      <>
        <div className="ui mini action input">
          <input
            type="text"
            placeholder="Unesite kod..."
            onChange={handleOnChange}
          />
          <button className="ui button" onClick={verifyCoupon}>
            Primjeni
          </button>
        </div>
        {couponVerified && !validCouponEntered ? couponErrorMessage() : null}
      </>
    );
  };

  const handleCouponVerified = () => {
    return (
      <div style={{ marginTop: "0px", lineHeight: "2rem" }}>
        <p style={{ color: "#50b04d" }}>
          Hvala vam, unijeli ste ispravan kod kupona
        </p>

        <div style={{ color: "#000000", fontSize: "16px" }}>
          OSNOVICA:{" "}
          <span style={{ marginLeft: "10px" }}>{subtotal.toFixed(2)} kn</span>
          <br />
          <span style={{ fontSize: "18px", marginLeft: "45px" }}>
            Popust (30%):{" "}
            <span style={{ marginLeft: "10px" }}>
              -{calculateDiscount()} kn
            </span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <h3>Korak 2. Odaberite jednu ili više usluga za koje ste</h3>
      {useEffect(() => {
        Object.keys(checkedItems).length === 0
          ? setIsButtonDisabled(false)
          : setIsButtonDisabled(true);
      }, [checkedItems, setIsButtonDisabled])}

      <Services
        services={services}
        Checkbox={Checkbox}
        handleChange={handleChange}
        checkedItems={checkedItems}
      />
      <div className="total" style={{ marginTop: "50px" }}>
        <span className="coupon" onClick={handleClick}>
          {couponClicked && !validCouponEntered ? (
            handleCouponClicked()
          ) : validCouponEntered ? (
            handleCouponVerified()
          ) : (
            <span
              style={{
                textDecoration: "underline",
                fontSize: "14px",
                cursor: "pointer",
                marginRight: "125px",
              }}
            >
              Imam kupon
            </span>
          )}
        </span>

        <br />

        <span style={{ fontSize: "24px", fontWeight: "bold" }}>
          UKUPNO:{" "}
          {validCouponEntered
            ? (subtotal - calculateDiscount()).toFixed(2)
            : subtotal.toFixed(2)}{" "}
          KN
        </span>
      </div>
    </>
  );
};

export default ChooseService;
