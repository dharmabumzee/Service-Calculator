import React, { useState } from "react";

import Header from "./components/Header";
import Modal from "./components/Modal";
import ModalHeader from "./components/ModalHeader";
import { Button } from "./components/Button";

import ChooseVehicle from "./components/ChooseVehicle";
import ChooseService from "./components/ChooseService";
import Contact from "./components/Contact";
import Success from "./components/Success";
import Overview from "./components/Overview";

import { services } from "./data/data";

import "./App.css";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const [vehicle, setVehicle] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const [checkedItems, setCheckedItems] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  const [vehicleChecked, setVehicleChecked] = useState(0);

  const [validCouponEntered, setValidCouponEntered] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState(0);
  const [couponVerified, setCouponVerified] = useState(false);

  const [couponClicked, setCouponClicked] = useState(false);

  let discountRate = (subtotal * 30) / 100;
  let total = subtotal - discountRate;

  const finalDataForJSON = {
    Car: vehicle,
    Order: { ...checkedItems },
    Contact: {
      name,
      email,
      phone,
      comment,
    },
    Price: {
      Subtotal: subtotal,
      couponVerified,
      Discount: discountRate,
      Total: total,
    },
  };

  const resetAllState = () => {
    resetModal();
    resetContactForm();
    resetVehicleAndServices();
    resetCouponsAndSubtotal();
  };

  const resetContactForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setComment("");
  };

  const resetVehicleAndServices = () => {
    setVehicle(null);
    setVehicleChecked(null);
    setCheckedItems([]);
    setCouponClicked(false);
  };

  const resetCouponsAndSubtotal = () => {
    setValidCouponEntered(false);
    setDiscount(0);
    setSubtotal(0);
    setCoupon("");
    setCouponVerified(false);
  };

  const resetModal = () => {
    setOpenModal(false);
    setPageNumber(0);
  };

  // handling if 'next' button is active
  const isButtonEnabled = () => {
    return (
      (pageNumber === 0 && !vehicle) ||
      (pageNumber === 1 && Object.keys(checkedItems).length === 0) ||
      (pageNumber === 1 &&
        Object.keys(checkedItems).length > 0 &&
        isButtonAvailable()) ||
      (pageNumber === 2 && (name === "" || email === "" || phone === ""))
    );
  };

  const isButtonAvailable = () => {
    let isChecked = [];

    Object.entries(checkedItems).map(([key, value]) => {
      return value === true ? isChecked.push(value) : true;
    });
    return isChecked.length < 1;
  };

  const renderButtons = () => {
    return (
      <>
        {pageNumber > 0 ? (
          <button
            className="ui button"
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Back
          </button>
        ) : null}

        <button
          className="ui button pagenumber-button"
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={isButtonEnabled()}
        >
          {pageNumber === 3 ? "Send" : "Next"}
        </button>
      </>
    );
  };

  const renderActions = (pageNumber) => {
    return pageNumber < 4 ? renderButtons() : null;
  };

  const renderContent = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return (
          <ChooseService
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
            setIsButtonDisabled={setIsButtonDisabled}
            subtotal={subtotal}
            setSubtotal={setSubtotal}
            services={services}
            discountRate={discountRate}
            validCouponEntered={validCouponEntered}
            setValidCouponEntered={setValidCouponEntered}
            setDiscount={setDiscount}
            discount={discount}
            coupon={coupon}
            setCoupon={setCoupon}
            couponVerified={couponVerified}
            setCouponVerified={setCouponVerified}
            pageNumber={pageNumber}
            couponClicked={couponClicked}
            setCouponClicked={setCouponClicked}
          />
        );
      case 2:
        return (
          <Contact
            name={name}
            email={email}
            phone={phone}
            comment={comment}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setComment={setComment}
          />
        );
      case 3:
        return (
          <Overview
            setPageNumber={setPageNumber}
            name={name}
            email={email}
            phone={phone}
            comment={comment}
            vehicle={vehicle}
            checkedItems={checkedItems}
            subtotal={subtotal}
            services={services}
            discountRate={discountRate}
            validCouponEntered={validCouponEntered}
            pageNumber={pageNumber}
          />
        );
      case 4:
        return (
          <Success resetAllState={resetAllState} data={finalDataForJSON} />
        );
      default:
        return (
          <ChooseVehicle
            vehicle={vehicle}
            setVehicle={setVehicle}
            setIsButtonDisabled={setIsButtonDisabled}
            vehicleChecked={vehicleChecked}
            setVehicleChecked={setVehicleChecked}
            subtotal={subtotal}
          />
        );
    }
  };

  const handleClick = () => {
    setOpenModal(true);
  };

  const launchModal = () => {
    return (
      <Modal
        title={
          <ModalHeader pageNumber={pageNumber} resetAllState={resetAllState} />
        }
        content={renderContent(pageNumber, setPageNumber)}
        actions={renderActions(pageNumber, setPageNumber)}
        pageNumber={pageNumber}
      />
    );
  };

  return (
    <>
      <Header />
      <div className="App ui center aligned">
        <Button
          handleClick={handleClick}
          title={"Open Service Configurator"}
          className={"ui huge primary button modal-button"}
          id="modal-button"
        />
        {openModal ? launchModal() : null}
      </div>
    </>
  );
};

export default App;
