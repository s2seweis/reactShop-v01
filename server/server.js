const express = require("express");
const { weekdays } = require("moment");
const app = express();
const { resolve } = require("path");



// const { resolve } = require("../../testShop-CRUD-Salinaka");

// const { resolve } = require("../index.html");



// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

app.use(express.static(process.env.STATIC_DIR));



// ##### here is maybe the rror for the verification, has to be .raw({type:""})
app.use(express.json());
// #####




app.get("/", (req, res) => {
  // const path = resolve(process.env.STATIC_DIR + "/index.html");
  const path = resolve(process.env.STATIC_DIR + "../index.html");
  res.sendFile(path);
});

app.get("/api/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/api/create-payment-intent", async (req, res) => {

  // Test:2 Create Customer

  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId2,
      
      payment: JSON.stringify(req.body.payment),
      shipping: JSON.stringify(req.body.shipping),
      basket: JSON.stringify(req.body.basket),
      basket1: JSON.stringify(req.body.basket1),

      // not working too many characters
      // basket: JSON.stringify(req.body.basket)


    }
  });

  console.log(customer);

  const line_items = req.body?.basket?.map((item) => {
    return {


      price_data: {
        currency: "usd",
        amount: "300",
        
        product_data: {


          name: item.name,
          description: item.desc,

          metadata: {
            id: item.id
          },

          
        },

      },


      // price_data: {
      //   currency: "usd",
      //   amount: "300",
      //   name: item.name,
      //   description: item.desc,
      //   id: item.id,
      //   price: item.price,

      //   // https://www.youtube.com/watch?v=_TVrn-pyTo8, 17:33
      //   // its too nested - need to adjust index.js , dummy data is not correct stored
      //   product_data: {
      //     test1: item.desc,

      //     metadata: {
      //       test2: item.id
      //     },
      //   },

      // },

    };


  });

  // console.log(line_items)
  

  const { items, price } = req.body;

  // console.log(price.id);



  const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };

  console.log(calculateOrderAmount);


  const paymentIntent = await stripe.paymentIntents.create({
    // amount: price.id,
    amount: calculateOrderAmount(items),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },

  });



  res.send({
    clientSecret: paymentIntent.client_secret,
  });



});



// Test:2 Start - Webhook 


let endpointSecret;

// not working at the moment, because a prob with the verification

// endpointSecret = "whsec_ca8c87e7b073c1eb7eb22e196666cb0fcb2ce97ff7f96370508d6dcda8bc286b";

app.post('/api/webhook', express.raw({ type: 'application/json' }), (request, response) => {


  // for verification that the event calls or the webhook comes from stripe
  // #########################################################################
  const sig = request.headers['stripe-signature'];


  let data;
  leteventType;



  if (endpointSecret) {

    let event;


    // this weekdays, because webhook verification still not working, there is a issue

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      console.log("Webhook verified!")
    } catch (err) {
      console.log(`Webhook Error: ${err.message}`)
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    data = event.data.object;
    eventType = event.type;

  } else {

    data = req.body.data.object;
    eventType = req.body.type;

  }


  // #########################################################################

  // Handle the event

  if (eventType === "checkout.session.completed") {

  }



  // switch (event.type) {
  //   case 'payment_intent.succeeded':
  //     const paymentIntentSucceeded = event.data.object;
  //     // Then define and call a function to handle the event payment_intent.succeeded
  //     break;
  //   // ... handle other event types
  //   default:
  //     console.log(`Unhandled event type ${event.type}`);
  // }

  // Return a 200 response to acknowledge receipt of the event
  response.send().end();
  // response.send();
});



// Test:2 Start - Webhook 

// app.listen(5252, () =>
//   console.log(`Node server listening at http://localhost:5252`)
// );





app.listen(4242, () =>
  console.log(`Node server listening at http://localhost:4242`)
);
