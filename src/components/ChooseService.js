import React, { useState, useEffect } from "react";
import { Services } from "./Services";
import { StepTitle } from "./StepTitle";

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
  const discountCode = "SERVICE2021";

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
    if (coupon === discountCode) {
      setValidCouponEntered(true);
      setDiscount(discountRate);
    }
  };

  const couponErrorMessage = () => {
    return (
      <p
        className="animate__animated animate__fadeIn"
        style={{
          color: "#B03060",
          marginTop: "10px",
        }}
      >
        Invalid discount code
      </p>
    );
  };

  const handleOnFocus = () => {
    setCouponVerified(false);
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
            placeholder="Enter discount code"
            onChange={handleOnChange}
            onFocus={handleOnFocus}
          />
          <button className="ui button" onClick={verifyCoupon}>
            Apply
          </button>
        </div>
        {couponVerified && !validCouponEntered ? couponErrorMessage() : null}
      </>
    );
  };

  const handleCouponVerified = () => {
    return (
      <div style={{ marginTop: "0px", lineHeight: "2rem" }}>
        <p
          style={{ color: "#50b04d" }}
          className="animate__animated animate__fadeInDown"
        >
          Your discount code was redeemed successfully!
        </p>

        <div style={{ color: "#8a91b4", fontSize: "16px" }}>
          SUBTOTAL:{" "}
          <span style={{ marginLeft: "10px" }}>€{subtotal.toFixed(2)}</span>
          <br />
          <span style={{ fontSize: "18px", marginLeft: "45px" }}>
            Discount (30%):{" "}
            <span style={{ marginLeft: "10px" }}>- €{calculateDiscount()}</span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <StepTitle subtitle="Step 2 - Choose a service (Multi-select)" />
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
              Discount code
            </span>
          )}
        </span>

        <br />

        <span style={{ fontSize: "24px", fontWeight: "bold" }}>
          TOTAL: €
          {validCouponEntered
            ? (subtotal - calculateDiscount()).toFixed(2)
            : subtotal.toFixed(2)}{" "}
        </span>
      </div>
    </>
  );
};

export default ChooseService;
