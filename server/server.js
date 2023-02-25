
// ### - Test: Firebase Integration



const firebase = require('firebase');

const firebaseConfig = {

  apiKey: "AIzaSyAaKF4Wm_ErNVELPv7brkM_3BSCbALsjbs",
  authDomain: "e-commerce-ac0a1.firebaseapp.com",
  databaseURL: "https://e-commerce-ac0a1-default-rtdb.firebaseio.com",
  projectId: "e-commerce-ac0a1",
  storageBucket: "e-commerce-ac0a1.appspot.com",
  messagingSenderId: "915830104140",
  appId: "1:915830104140:web:11d9ec76d5ef33d8ed14e9",
  measurementId: "G-5712EB3L5H"

};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

// const db = firebase.firestore();


// const data = req.body;
// await firestore.collection('orders').doc().set(data);


// ###









const express = require("express");
const app = express();
const { resolve } = require("path");




// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });




const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

app.use(express.static(process.env.STATIC_DIR));
// #####
// app.use(express.json());
app.use(
  express.json({
    // We need the raw body to verify webhook signatures.
    // Let's compute it only when hitting the Stripe webhook endpoint.
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }
    },
  })
);
// #####




app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/api/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

// ### so far okay

app.post("/api/create-payment-intent", async (req, res) => {

  // ###
  const { items, price, shipping } = req.body;
  // ###

  console.log("line:1", price.id);
  console.log("line:2", items);
  console.log("line:4", shipping);






  const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };



  console.log("line:3", calculateOrderAmount);


  const paymentIntent = await stripe.paymentIntents.create({
    amount: price.id,
    // amount: calculateOrderAmount(items),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },

  });



  res.send({
    clientSecret: paymentIntent.client_secret,
  });







});


// ### Test: Create Order

const createOrder = async (shipping) => {
  console.log(shipping);
  const address = shipping;



  const newOrder = new Order({

    // address,
    total: "1000"


  });


  console.log("line:120", newOrder)

  try {
    const savedOrder = await firestore.collection('orders1').doc().set(newOrder);
    console.log("Processed Order:", savedOrder);
  } catch (err) {
    console.log(err);
  }
};

// ###


app.post('/webhook', async (req, res) => {
  let data, eventType;

  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // we can retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }

  if (eventType === 'payment_intent.succeeded') {


    // ### - Test: Create Order



    // // CREATE ORDER

    // // ### working
    // const shipping = req.body;
    // console.log( "line:10", shipping);

    // // ###
    // await firestore.collection('orders1').doc().set(shipping);

    // // ###





    try {
      // CREATE ORDER
      createOrder(shipping, data);
    } catch (err) {
      console.log(typeof createOrder);
      console.log(err);
    }







    // Funds have been captured
    // Fulfill any orders, e-mail receipts, etc
    // To cancel the payment after capture you will need to issue a Refund (https://stripe.com/docs/api/refunds)
    console.log('💰 Payment captured!');
  } else if (eventType === 'payment_intent.payment_failed') {
    console.log('❌ Payment failed.');
  }
  res.sendStatus(200);
});

app.listen(4242, () =>
  console.log(`Node server listening at http://localhost:4242`)
);

