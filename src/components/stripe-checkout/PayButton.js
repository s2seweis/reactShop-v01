
import React from 'react';


import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../stripe-checkout/api";

const PayButton = ({ cartItems }) => {
  const user = useSelector((state) => state.auth);
  console.log(user.id)

  const handleCheckout = () => {



    axios
      .post(`${url}/create-checkout-session`, {
        cartItems,
        userId: user._id,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};

export default PayButton;
