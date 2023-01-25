import React from 'react';



import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import Button from '../CustomButton/custom-button'

import { PaymentFormContainer, FormContainer } from './payment-form.styles'
import { CompassOutlined, ConsoleSqlOutlined } from '@ant-design/icons';


const PaymentForm = (subtotal, basket, shipping) => {
  const stripe = useStripe();
  const elements = useElements();
  // console.log(subtotal)
  console.log(subtotal);
  console.log(subtotal.shipping.fullname);
  console.log(subtotal.subtotal);
  console.log(shipping?.shipping);
  console.log(basket);
 

  const amount = subtotal.subtotal;
  const customer = subtotal.shipping.fullname;

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
        alert('Payment Successful');
      }
    }


  };

  return (

    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler} >

        <h2>Credit Card Payment:</h2>

        <CardElement />

        <Button>Pay Now</Button>

      </FormContainer>
    </PaymentFormContainer>

  )

}


export default PaymentForm;