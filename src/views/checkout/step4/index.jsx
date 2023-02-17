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

  // console.log(payment)
  // console.log(shipping)
  console.log(basket);

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
          shipping: shipping,
          // basket: basket,

// better to pass down the basket items then the basket completly, basket not fits not into the metadata
// Or passing down instead the card just the staus of the payment like: done or pending, and fetching this state from the database and populate or update with it the order, not that good

// storing in cart only the product ids, price for each item, comment, quantity instead the complete data 

// handle add to basket in ingredientSaga.js only adding the smallest amount of data to the basket!!!

          basket: [
            {
              "name": "basket",
              "mode": "REPEATED",
              "type": "RECORD",
              "description": "basket",
              "fields": [
                {
                  "name": "availableColors",
                  "mode": "REPEATED",
                  "type": "STRING",
                  "description": "availableColors",
                },
               
                {
                  "name": "keywords",
                  "mode": "REPEATED",
                  "type": "STRING",
                  "description": "keywords",
                },
                {
                  "name": "maxQuantity",
                  "mode": "NULLABLE",
                  "type": "INTEGER",
                  "description": "maxQuantity",
                },
                {
                  "name": "description",
                  "mode": "NULLABLE",
                  "type": "STRING",
                  "description": "description",
                },
                {
                  "name": "dateAdded",
                  "mode": "NULLABLE",
                  
                },
              ]
            }
          ],
          basket1: [
            {
              "name": "basket",
              "mode": "REPEATED",
              "type": "RECORD",
              "description": "basket",
              "fields": [
                {
                  "name": "availableColors",
                  "mode": "REPEATED",
                  "type": "STRING",
                  "description": "availableColors",
                },
               
                {
                  "name": "keywords",
                  "mode": "REPEATED",
                  "type": "STRING",
                  "description": "keywords",
                },
                {
                  "name": "maxQuantity",
                  "mode": "NULLABLE",
                  "type": "INTEGER",
                  "description": "maxQuantity",
                },
                {
                  "name": "description",
                  "mode": "NULLABLE",
                  "type": "STRING",
                  "description": "description",
                },
                {
                  "name": "dateAdded",
                  "mode": "NULLABLE",
                  
                },
              ]
            }
          ],

          // basket: [



          //   {

          //     id: 1,
          //     name: "iPhone 12 Pro",
          //     brand: "Apple",
          //     desc: "6.1-inch display",
          //     price: 999,
          //     keywords: [{ test1: "test1" }, { test2: "test2" }, { test3: "test3" }],
          //     sizes: {

          //       test1: "test1",

          //       test2: [

          //         { test1: "1" }, { test2: "2" }, {test3: {test4:"4", test5:"5"}}

          //       ]

          //     }


          //   },

          //   {
          //     id: 2,
          //     name: "iPhone 12",
          //     brand: "Apple",
          //     desc: "5.4-inch mini display",
          //     price: 699
          //   },
          //   {
          //     id: 3,
          //     name: "iPhone 15",
          //     brand: "Apple",
          //     desc: "7.4-inch mini display",
          //     price: 999
          //   }


          // ],

          payment: {

            expiry: "04/24",
            name: "Doe",
            type: "card"


          }


          ,

          // price: { id: "11000" },
          userId1: { id: "123" },
          userId2: "123",
          // cart: basket,
          preName: "Weissenborn",
          // customer: { id: "swt" }
        }
      ),
      // body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  // console.log(basket)


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


      <div className='stripe-test1'
        style={{ display: "flex" }}

      >


        {/* <h1
        style={{ textAlign:"center", marginTop:"50px"}}
        >React Stripe and the Payment Element, Test:1</h1> */}
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
