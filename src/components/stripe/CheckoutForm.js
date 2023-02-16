import { PaymentElement } from "@stripe/react-stripe-js";
// import { useState } from "react";

import React, { useState } from 'react';



// Test:1 ###### (LinkAuthenticationElement)
import { useStripe, useElements, LinkAuthenticationElement } from "@stripe/react-stripe-js";
// Test:1 ###### (LinkAuthenticationElement)

import { ArrowRightOutlined, ShopOutlined, ArrowLeftOutlined } from '@ant-design/icons';


export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  // Test:1 ######
  const [email, setEmail] = useState('');
  // Test:1 ######


  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}
    style={{ width:"600px", margin: "auto", marginTop: "70px" }}
    >
      <h1>Test:1</h1>

      {/* Test:1 ###### */}
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.target?.value)} />
        {/* add a question mark to target !!! */}
      {/* Test:1 ###### */}

      <PaymentElement id="payment-element" />

      {/* <button disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button> */}


      <button
        style={{ background: "#f2f2f2", color: "#7d7d7d", border: "1px solid #e1e1e1", marginTop: "30px" }}
        disabled={isProcessing || !stripe || !elements} id="submit"
        className="button"
      // onClick={onClickNext}
      // type="submit"

      >
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
        &nbsp;
        {/* <ArrowRightOutlined /> */}
      </button>



      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
