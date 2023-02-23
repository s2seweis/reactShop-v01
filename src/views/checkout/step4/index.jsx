import { ArrowRightOutlined, ShopOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { BasketItem } from 'components/basket';
import { CHECKOUT_STEP_2, CHECKOUT_STEP_3 } from 'constants/routes';
import { displayMoney } from 'helpers/utils';
import { useDocumentTitle, useScrollTop } from 'hooks';
import PropType from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StepTracker } from '../components';
import withCheckout from '../hoc/withCheckout';

import { setOrderDetails } from 'redux/actions/checkoutActions';

// Test Start: 1 - Stripe

import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../../../components/stripe/CheckoutForm";

import { loadStripe } from "@stripe/stripe-js";
import Checkout from 'components/stripe-checkout/Checkout';
import PayButton from 'components/stripe-checkout/PayButton';



// Test End: 1 - Stripe






const Order = ({ basket, payment, shipping, subtotal, Total }) => {
  useDocumentTitle('Stripe Intergration | Step 4');



  // ############################################## - get the auth ID, product ID

  // Test Start:1 - Stripe

  const { auth } = useSelector((state) => ({
    auth: state.auth,
  }));


  const productId = basket.map((product) => product.id)

  const basketItems = basket.map((product) => product)
  console.log(basketItems)
  console.log(basket)
  console.log(subtotal)
  console.log(auth.id)



  // ###### - Test: 1 - Meta Data too small for it, makes only sense if passing down only the product.id and later fetching the product via the ID
  const lineItems = basket?.map((product) => {
    return {
      items: {
        name: product.name,
        size: product.selectedSizeNew,
        price: product.selectedPrice,
        extra_ingredients: product.toppings,

        // brand: product.brand,
        // availableColors: product.availableColors,
        // description: product.description,
        // id: product.id,
        // image: product.image,
        // imageCollection: product.imageCollection
      }
    };
  });

  console.log(lineItems)

  // ###### - Test: 1



  // console.log(auth.id);
  // console.log(productId);
  // console.log(subtotal);
  // console.log(shipping);

  // Test Start:1 - Stripe

  // ##############################################



  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");



  // useEffect(() => {
  //   fetch("/api/config").then(async (r) => {
  //     const { publishableKey } = await r.json();
  //     setStripePromise(loadStripe(publishableKey));
  //   });
  // }, []);



  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/api/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(
  //       {
  //         items: { id: "xl-tshirt" },
  //         // shipping: shipping,
  //         subtotal: subtotal,
  //         idList: productId,
  //         profileId: auth.id,

  //         // ###### - Test: 1
  //         productData: line_items,
  //         basket: basket,
  //         // ###### - Test: 1




  //         // #################### - Comment:     

  //         // better to pass down the basket items then the basket completly, basket not fits not into the metadata, only 500 characters, thats the way!!!

  //         // need maping over the basket and populate the single basketitems as metadata to stripe 

  //         // #################### - https://www.youtube.com/watch?v=_TVrn-pyTo8 - 19:07        

  //         // #################### - passing down only the productId so far, subTotal, authId, delivery Informations !!!




  //         // The order needs the status of the payment: pending or paid





  //         userId2: "123",

  //       }
  //     ),
  //     // body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);



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



        <div className="checkout-items"
        >
          {basket.map((product) => (
            <BasketItem
              basket={basket}
              dispatch={dispatch}
              key={product.id}
              product={product}
            />
          ))}
        </div>



        <h1
          style={{ textAlign: "center" }}
        >{displayMoney(subtotal)}

          {/* {displayMoney(subtotal + (isInternational ? 50 : 0))} */}

        </h1>




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


      {/* <div className='stripe-test1'
        style={{ display: "flex" }}

      >



        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        )}



      </div> */}


      <Checkout basket={basket} />


      {/* <PayButton /> */}


    </div>
  );
};



export default withCheckout(Order);
