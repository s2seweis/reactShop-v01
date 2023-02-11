import { ArrowRightOutlined, ShopOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { BasketItem } from 'components/basket';
import { CHECKOUT_STEP_2, CHECKOUT_STEP_3 } from 'constants/routes';
import { displayMoney } from 'helpers/utils';
import { useDocumentTitle, useScrollTop } from 'hooks';
import PropType from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StepTracker } from '../components';
import withCheckout from '../hoc/withCheckout';

import { setOrderDetails } from 'redux/actions/checkoutActions';

// Test Start: 1 - Stripe

import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../../../components/stripe/CheckoutForm";

import { loadStripe } from "@stripe/stripe-js";

// Test End: 1 - Stripe






const Order = ({ basket, payment, shipping, subtotal, Total }) => {
  useDocumentTitle('Stripe Intergration | Step 4');


  // Test Start:1 - Stripe


  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/api/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          items: { id: "xl-tshirt" },
          price: { id: "11000" },
          customer: { id: "swt" }
        }
      ),
      // body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);


  // Test End:1 - Stripe





  const dispatch = useDispatch();
  const history = useHistory();


  const onClickNext = (form) => {
    dispatch(setOrderDetails({
      basket: basket,
      payment: payment,
      shipping: shipping,
      subtotal: subtotal,
      dateAdded: new Date().getTime(),

    }));
  };






  return (
    <div className="checkout">
      <StepTracker current={4} />
      <div className="checkout-step-1">
        <h3 className="text-center">Order Summary</h3>
        <span className="d-block text-center">Almost Complete. </span>
        <br />

        <br />
        <div className="checkout-shipping-action">

          <button
            className="button button-muted"
            onClick={() => history.push(CHECKOUT_STEP_3)}
            type="button"
          >
            <ArrowLeftOutlined />
            &nbsp;
            Go Back
          </button>

          <button
            className="button"
            onClick={onClickNext}
            type="submit"
          >
            Place Order
            &nbsp;
            <ArrowRightOutlined />
          </button>


        </div>



      </div>


      <div className='stripe-test1'>


        <h1
        style={{ textAlign:"center", marginTop:"50px"}}
        >React Stripe and the Payment Element, Test:1</h1>
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        )}



      </div>


    </div>
  );
};



export default withCheckout(Order);
