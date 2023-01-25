import React from 'react';



import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import Button from '../CustomButton/custom-button'

import { PaymentFormContainer, FormContainer } from './payment-form.styles'
import { CompassOutlined, ConsoleSqlOutlined } from '@ant-design/icons';

import { useDispatch } from 'react-redux';

import { setOrderDetails } from 'redux/actions/checkoutActions';




const PaymentForm = ( shipping, subtotal, payment, basket ) => {
  const stripe = useStripe();
  const elements = useElements();
  console.log(shipping.subtotal);
  console.log(shipping.shipping.fullname);
  console.log(shipping.basket)
  console.log(shipping)

  const dispatch = useDispatch();


 

 

  const amount = shipping.subtotal;
  const customer = shipping.shipping.fullname;

console.log(amount)

  const paymentHandler = async (e) => {
    e.preventDefault();


    if (!stripe || !elements) {
      return;
    }


    const response = await fetch('/.netlify/functions/create-payment-intent', {
      // const response = await fetch('../../../netflify/functions/create-payment-intent', {

      method: 'post',

      headers: {

        'Content-Type': 'application/json'

      },

      body: JSON.stringify({ amount: amount * 100 }),

    }).then(res => res.json());


    // console.log(response);


    const { paymentIntent: { client_secret } } = response;

    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: customer
        }
      }
    });

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        // alert('Payment Successful');



        onClickNext();
      }
    }


  };



  const onClickNext = (form) => {
    dispatch(setOrderDetails({
      // basket: basket,
      // payment: payment,
      shipping: shipping,
      // subtotal: subtotal,
      // dateAdded: new Date().getTime(),
      // Total: Total

    }));
    // history.push(CHECKOUT_STEP_2);
  };

  return (

    <PaymentFormContainer   >
      <FormContainer  onSubmit={paymentHandler} >

        <h2>Credit Card Payment:</h2>

        <CardElement  />

        <Button style={{ margin: 'auto',  marginTop: '50px' }} >Pay Now</Button>

      </FormContainer>
    </PaymentFormContainer>

  )

}


export default PaymentForm;