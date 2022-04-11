import React from "react";
import ReactPayPal from "../PaypalBtn";
import "./userDetails.css";
import { PayPalButton } from "react-paypal-button-v2";
import { useEffect, useState, useContext } from "react";
import CartContext from "../../context/cart-context";
import axios from "axios";

const UserDetails = () => {
  // add btn for editing and toggleform
  const cartCtx = useContext(CartContext);
  const userShippingDetails = JSON.parse(
    localStorage.getItem("shippingDetails")
  );
  console.log(userShippingDetails);
  const totalPlusTax = cartCtx.totalAmount + (cartCtx.totalAmount * 8.8) / 100;
  const priceRounded = Math.round((totalPlusTax + Number.EPSILON) * 100) / 100;
  const shippingPrice =
    userShippingDetails.shipping == 10
      ? 10
      : userShippingDetails.shipping == 20
      ? 20
      : 0;
  const totalRoundedPrice = priceRounded + +shippingPrice;
  const orderSummery = JSON.parse(localStorage.getItem("cartState"));

  const [sdkReady, setSdkReady] = useState(false);
  useEffect(() => {
    const addPayPalScript = async () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=AQAFDBnSRJ4OB9fcHbHkBX3DfOTLkLbYC2zmaH76CUkRh8Ag4J5qVCJGlVVwR6Nc-YqTPH2xsoCl1yr0`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!window.paypal) {
      addPayPalScript();
    } else {
      setSdkReady(true);
    }
  }, []);

  const successPaymentHandler = async () => {
    const URL =
      "http://woodsy-backend.eba-uej58ayn.us-west-2.elasticbeanstalk.com/api/create_order";
    const { data } = await axios.post(URL, {
      order: orderSummery,
      shipping: userShippingDetails,
    });
  };

  return (
    <div>
      <div className="user-details-container">
        <div className="contact-wrap">
          <h4 className="form-title">Contact Details</h4>
          <p className="user-phone">{userShippingDetails.phone}</p>
          <p className="user-email">{userShippingDetails.email}</p>
        </div>
        <div className="add-wrap">
          <h4 className="form-title">Shipping Details</h4>
          <p className="user-name">
            {userShippingDetails.firstname} {userShippingDetails.lastname}
          </p>
          <p className="address1">{userShippingDetails.add1}</p>
          <p className="address2">{userShippingDetails.add2}</p>
          <p className="city-state-zip">
            {userShippingDetails.city}, {userShippingDetails.state},{" "}
            {userShippingDetails.zip}
          </p>
        </div>
        <div className="ship-type-wrap">
          <h4 className="form-title">Shipping Type</h4>
          <p className="user-ship">
            {userShippingDetails.shipping == 0
              ? "Normal Shipping (4-5 days)"
              : userShippingDetails.shipping == 10
              ? "Fast Shipping (2-3 days)"
              : "Super Fast Shipping (1 day)"}
          </p>
        </div>
      </div>
      <div className="paypal-wrap">
        <PayPalButton
          amount={totalRoundedPrice}
          onSuccess={successPaymentHandler}
        ></PayPalButton>
      </div>
      {/* <button onClick={successPaymentHandler}>Click me!!</button> */}
    </div>
  );
};

export default UserDetails;
