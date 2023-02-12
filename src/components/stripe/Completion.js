import React from "react";

// import { withRouter } from 'react-router-dom'
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import StatusMessages, { useMessages } from './StatusMessages'

// import './App.css';

const Completion = () => {








    return (



        <div className="confirmation" style={{ display:"block" }}>


        <a style={{ textDecoration: "underline" }} href="/">home</a>
        <h1 style={{ textAlign:"center" }}>Confirmation</h1>

        <form id="payment-form" >
            <h2 style={{ textAlign:"center", marginTop: "3rem" }} htmlFor="name">
                Payment was successful!!!
            </h2>

            <div id="error-message" role="alert"></div>

        </form>

        {/* <div id="messages" role="alert"></div> */}


        </div>


    





    )
}

export default Completion;