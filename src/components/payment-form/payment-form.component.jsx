import React from 'react';

// import {} from '../../../netflify/functions/create-payment-intent'


import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import Button from '../CustomButton/custom-button'

import { PaymentFormContainer, FormContainer } from './payment-form.styles'
import { ConsoleSqlOutlined } from '@ant-design/icons';


const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();


if(!stripe || !elements) {
  return;
}


const response = await fetch('/.netflify/functions/create-payment-intent', {
// const response = await fetch('../../../netflify/functions/create-payment-intent.js', {

method: 'post',

headers: {

  'Content-Type': 'application/json'

},

body: JSON.stringify( { amount: 1000} )

}).then(res => res.json());


console.log(response);

  };

  return (

    <PaymentFormContainer>
      <FormContainer onSubmit= {paymentHandler} >

        <h2>Credit Card Payment:</h2>

        <CardElement />

        <Button>Pay Now</Button>

      </FormContainer>
    </PaymentFormContainer>

  )

}


export default PaymentForm;