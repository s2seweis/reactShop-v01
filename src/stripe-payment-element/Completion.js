import React from "react";

// import { withRouter } from 'react-router-dom'
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import StatusMessages, { useMessages } from './StatusMessages'

// import './App.css';

// ### - Test: place order after payment inten was created


import { useEffect, useState } from "react";


import {
    CardElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js'


// ### 


import firebase from 'services/firebase';





  




const Completion = (props) => {

    // ###
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [saveCard, setSaveCard] = useState(false)
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    // ###




    // ###

    useEffect(() => {

        if (!stripe) {
            return;
        }
        // Retrieve the "payment_intent_client_secret" query parameter appended to
        // your return_url by Stripe.js
        const clientSecret = new URLSearchParams(window.location.search).get(
            'payment_intent_client_secret'
        );

        // Retrieve the PaymentIntent
        if (clientSecret) {
            setProcessing(true)
            stripe
                .retrievePaymentIntent(clientSecret)
                .then(({ paymentIntent }) => {
                    // Inspect the PaymentIntent `status` to indicate the status of the payment
                    // to your customer.
                    //
                    // Some payment methods will [immediately succeed or fail][0] upon
                    // confirmation, while others will first enter a `processing` state.
                    //
                    // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
                    // alert(paymentIntent.status);
                    console.log(paymentIntent, "CHEKC T?E PAYMENT INTENT RECIEVED...")
                    switch (paymentIntent.status) {
                        case 'succeeded':
                            saveOrder(paymentIntent, props['items']);
                            break;
                        case 'processing':
                            toastr.info("Payment processing...", "We'll update you when payment is received.");
                            window.history.pushState({}, '', '/order');
                            window.location.reload();
                            break;

                        case 'requires_payment_method':
                            // Redirect your user back to your payment page to attempt collecting
                            // payment again
                            toastr.error('Payment failed.', 'Please try another payment method.');
                            break;

                        default:
                            toastr.error('', 'Something went wrong.');
                            break;
                    }
                });
        }

    }, [stripe]);

    // ###

    const createOrder = async (paymentIntent ) => {
        console.log("line:6",);
      
      
      
        const newOrder2 = {
          amount: "50",
          id: "1234",
          currency: "usd",
          status: "pending",
          customerId: "567",
          name:"John Doe",
          status : paymentIntent.status,
      
          // saves the fields from the stripe address form ?
      
        }
        console.log("line:7", newOrder2)
      
      
        // const address =;
      
        // console.log( "line:150", address);
      
      
      
        const newOrder = newOrder2;
      
      
        // const newOrder1 = new Order({
      
        //     address,
        //     total: "1000"
        
      
        //   });
      
        const key = "1542476sdfsd52sdf5ds"
        const key1 = (firebase.generateKey);
        console.log(key1)




        console.log("line:8", newOrder)
      
        try {
          firebase.addOrder1(newOrder)
          console.log("Processed Order:", newOrder);
        } catch (err) {
          console.log("line:9", err);
        }
      };

    // ###

    const saveOrder = async (paymentIntent, orderDetails) => {
        if (paymentIntent['status'] === "succeeded" || paymentIntent['status'] === "pending") 
        
        try {
            // CREATE ORDER
            createOrder(paymentIntent);
            // console.log("line:15",)
          } catch (err) {
            console.log(typeof createOrder);
            console.log(err);
          }
        
        setProcessing(false)
    }

    // ###





    return (

        <>

            <a href="/">home</a>
            <h1 style={{ textAlign: "center" }}>Confirmation123</h1>

            <form id="payment-form" >
                <label style={{ textAlign: "center" }} htmlFor="name">
                    Payment was successful!!!
                </label>

                <div id="error-message" role="alert"></div>

            </form>

            {/* <div id="messages" role="alert"></div> */}




        </>





    )
}

export default Completion;