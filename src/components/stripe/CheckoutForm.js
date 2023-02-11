import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";


// Test:1 ###### (LinkAuthenticationElement)
import { useStripe, useElements, LinkAuthenticationElement } from "@stripe/react-stripe-js";
// Test:1 ###### (LinkAuthenticationElement)

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
    <form id="payment-form" onSubmit={handleSubmit}>
      <h1>Test:1</h1>

      {/* Test:1 ###### */}
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.target.value)}/>
      {/* Test:1 ###### */}

      <PaymentElement id="payment-element" />

      <button disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
