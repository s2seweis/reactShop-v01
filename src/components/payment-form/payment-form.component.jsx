import React from 'react';


import { CardElement } from '@stripe/react-stripe-js'

import Button from '../CustomButton/custom-button'

const PaymentForm = () => {

  return (

    <div>

      <CardElement />

      <Button>Pay Now</Button>

    </div>

  )

}


export default PaymentForm;