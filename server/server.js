// const express = require("express");
// const { weekdays } = require("moment");
// const app = express();
// const { resolve } = require("path");



// // Replace if using a different env file or config
// const env = require("dotenv").config({ path: "./.env" });

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2022-08-01",
// });

// app.use(express.static(process.env.STATIC_DIR));



// // ##### here is maybe the error for the verification, has to be .raw({type:""})
// app.use(express.json());
// // #####



// app.get("/", (req, res) => {
//   // const path = resolve(process.env.STATIC_DIR + "/index.html");
//   const path = resolve(process.env.STATIC_DIR + "../index.html");
//   res.sendFile(path);
// });

// app.get("/api/config", (req, res) => {
//   res.send({
//     publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
//   });
// });

// app.post("/api/create-payment-intent", async (req, res) => {

//   // Test:2 Create Customer

//   const customer = await stripe.customers.create({
//     metadata: {
//       userId: req.body.userId2,
//       subtotal: req.body.subtotal,
//       profileId: req.body.profileId,

//       idList: JSON.stringify(req.body.idList),

//       // ########### - Test: 1
//       productData: JSON.stringify(req.body.productData),
//       // ###########

//       // shipping: JSON.stringify(req.body.shipping),

//       // not working too many characters
//       // basket: JSON.stringify(req.body.basket)


//     }
//   });

//   console.log(customer);

//   // const line_items = req.body.cartItems.map((item) => {
//   //   return {
//   //     price_data: {
//   //       currency: "usd",
//   //       product_data: {
//   //         name: item.name,
//   //         images: [item.image],
//   //         description: item.desc,
//   //         metadata: {
//   //           id: item.id,
//   //         },
//   //       },
//   //       unit_amount: item.price * 100,
//   //     },
//   //     quantity: item.cartQuantity,
//   //   };
//   // });



//   // line_items is for checkout session not support via payment intent
//   const line_items = req.body.basket?.map((product) => {
//     return {
//       items: {
//         name: product.name,
//         size: product.selectedSizeNew,
//         price: product.selectedPrice,
//         extra_ingredients: product.toppings,
//       }
//     };
//   });

//   // console.log(line_items)



//   const { items, price } = req.body;




//   const calculateOrderAmount = (items) => {
//     // Replace this constant with a calculation of the order's amount
//     // Calculate the order total on the server to prevent
//     // people from directly manipulating the amount on the client
//     return 1400;
//   };

//   console.log(calculateOrderAmount);


//   const paymentIntent = await stripe.paymentIntents.create({
//     // amount: price.id,
//     amount: calculateOrderAmount(items),
//     currency: "eur",
//     automatic_payment_methods: {
//       enabled: true,
//     },

//     // line_items,
//     customer: customer.id,
//     metadata: customer.metadata,


//   });

//   console.log(paymentIntent)



//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });



// });

// // ###### - Test: Create Order Start

// const createOrder = async (customer, data) => {

//   const Items = JSON.parse(customer.metadata.productData);
//   console.log(Items)

//   const products = Items

//   console.log(products)

//   const newOrder = new Order({
//     userId: customer.metadata.userId,
//     customerId: data.customer,
//     paymentIntentId: data.payment_intent,
//     products,
//     subtotal: data.metadata.subtotal,
//     userId: data.metaData.userId,
//     payment_status: data.payment_status,
//   });

//   console.log(newOrder)

//   try {
//     const savedOrder = await newOrder.save();
//     console.log("Processed Order:", savedOrder);
//   } catch (err) {
//     console.log(err);
//   }
// };

// console.log(createOrder)

// // ###### - Test: Create Order End










// // Test:2 Start - Webhook 


// let endpointSecret;

// // not working at the moment, because a prob with the verification

// // endpointSecret = "whsec_ca8c87e7b073c1eb7eb22e196666cb0fcb2ce97ff7f96370508d6dcda8bc286b";

// app.post('/api/webhook', express.raw({ type: 'application/json' }), (req, res) => {


//   // for verification that the event calls or the webhook comes from stripe
//   // #########################################################################


//   const payload = req.body;


//   const sig = req.headers['stripe-signature'];

//   const endpointSecret = "whsec_ca8c87e7b073c1eb7eb22e196666cb0fcb2ce97ff7f96370508d6dcda8bc286b"


//   let data;
//   leteventType;



//   if (endpointSecret) {

//     let event;


//     // this weekdays, because webhook verification still not working, there is a issue

//     try {
//       event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
//       console.log("Webhook verified!")
//     } catch (err) {
//       console.log(`Webhook Error: ${err.message}`)
//       res.status(400).send(`Webhook Error: ${err.message}`);
//       return;
//     }

//     data = event.data.object;
//     eventType = event.type;

//   } else {

//     data = req.body.data.object;
//     eventType = req.body.type;

//   }


//   // #########################################################################

//   // Handle the event

//   if (eventType === "payment_intent.succeeded") {
//     // if (eventType === "checkout.session.completed") {

//     stripe.customers.retrieve(data.customer).then(
//       (customer) => {

//         console.log(customer);
//         console.log("data:", data);

//         createOrder(customer, data)

//       }).catch(err => console.log(err.message));


//   }




//   // switch (event.type) {
//   //   case 'payment_intent.succeeded':
//   //     const paymentIntentSucceeded = event.data.object;
//   //     // Then define and call a function to handle the event payment_intent.succeeded
//   //     break;
//   //   // ... handle other event types
//   //   default:
//   //     console.log(`Unhandled event type ${event.type}`);
//   // }

//   // Return a 200 res to acknowledge receipt of the event
//   res.send().end();
//   // res.send();
// });



// // Test:2 End - Webhook 

// // #############################












// // app.listen(5252, () =>
// //   console.log(`Node server listening at http://localhost:5252`)
// // );





// app.listen(4242, () =>
//   console.log(`Node server listening at http://localhost:4242`)
// );




const express = require('express');
const app = express();
const { resolve } = require('path');
// Copy the .env.example in the root into a .env file in this folder
require('dotenv').config({ path: './.env' });

// Ensure environment variables are set.
checkEnv();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
  appInfo: { // For sample support and debugging, not required for production:
    name: "stripe-samples/accept-a-payment/prebuilt-checkout-page",
    version: "0.0.1",
    url: "https://github.com/stripe-samples"
  }
});


app.use(express.static(process.env.STATIC_DIR));
app.use(express.urlencoded());




// ##### here is maybe the error for the verification, has to be .raw({type:""})
app.use(express.json());
// #####

// app.use(express.static(process.env.STATIC_DIR));
// app.use(express.urlencoded());
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

app.get('/', (req, res) => {
  const path = resolve(process.env.STATIC_DIR + '/index.html');
  res.sendFile(path);
});

// Fetch the Checkout Session to display the JSON result on the success page
app.get('/api/checkout-session', async (req, res) => {
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  res.send(session);
});

try {

  app.post('/api/create-checkout-session', async (req, res) => {

    const domainURL = process.env.DOMAIN;


    const customer = await stripe.customers.create({
      metadata: {
        userId: req.body.userId,
        itemsID: JSON.stringify(req.body.itemsID),
      },
    });

    console.log(customer)


    // Create new Checkout Session for the order
    // Other optional params include:
    // For full details see https://stripe.com/docs/api/checkout/sessions/create




    // const basketItems = req.body.basket

    // console.log(basketItems)



    // const basketItems1 = JSON.stringify(req.body.basket)

    // console.log(basketItems1)





    // const line_items1 = req.body.line_items2

    // console.log(line_items1)


    // // const userId = req.body.userId

    // // console.log(userId)





    // const userId = JSON.stringify(req.body.userId)

    // console.log(userId)


    // ########



    // const line_items1 = req.body.line_items1

    // console.log(line_items1)





    // const line_items1 = JSON.stringify(req.body.line_items1)

    // console.log(line_items1)



    // ##########






    // const line_items10 = basketItems?.map((item) => {
    //   return {
    //     price_data: {
    //       currency: "usd",
    //       product_data: {
    //         name: item.name,
    //         images: item.image,
    //         description: item.desc,
    //         metadata: {
    //           id: item.id,
    //         },
    //       },
    //       unit_amount: item.price * 100,
    //     },
    //     quantity: item.cartQuantity,
    //   };
    // });

    // console.log(line_items10)










    const line_items = req.body.basket?.map((item) => {
      return {

        // need to remove price_data
        // price_data: {
        currency: "usd",
        name: item.name,
        // product_data: {
        //   name: item.name,
        //   images: item.image,
        //   description: item.desc,
        //   metadata: {
        //     id: item.id,
        //   },
        // },
        amount: item.price * 100,
        // unit_amount: item.price * 100,

        // },
        quantity: item.quantity,
      };
    });

    console.log(line_items)








    // try {
    //   event = stripe.webhooks.constructEvent(
    //     req.rawBody,
    //     signature,
    //     process.env.STRIPE_WEBHOOK_SECRET
    //   );
    // } catch (err) {
    //   console.log(`⚠️  Webhook signature verification failed.`);
    //   return res.sendStatus(400);


    try {


      const session = await stripe.checkout.sessions.create({
        mode: 'payment',

        // line_items: [{
        //   price: process.env.PRICE,
        //   quantity: 1,
        // }],


        line_items
        // line_items: 
        // line_items: line_items
        // customer: customer.id





        // [

        //   {

        //     amount: 10000,
        //     // price: process.env.PRICE,
        //     quantity: 1,
        //     currency: "usd",
        //     // unit_amount: item.price * 100,
        //     name: "shoe1"
        //   },
        //   {

        //     amount: 11000,
        //     // price: process.env.PRICE,
        //     quantity: 1,
        //     currency: "usd",
        //     // unit_amount: item.price * 100,
        //     name: "shoe5"




        //   }

        // ]




        ,




        // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
        success_url: `${domainURL}/success-stripe?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${domainURL}/canceld-stripe`,
        // automatic_tax: { enabled: true }






      });

      return res.redirect(303, session.url);


    } catch (err) {
      console.log(err)
    }


    // console.log(session)

  });

} catch (err) {
  console.log(err)
}

// Webhook handler for asynchronous events.
app.post('/webhook', async (req, res) => {
  let event;

  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
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
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `.env`,
    // retrieve the event data directly from the request body.
    event = req.body;
  }

  if (event.type === 'checkout.session.completed') {
    console.log(`🔔  Payment received!`);

    // Note: If you need access to the line items, for instance to
    // automate fullfillment based on the the ID of the Price, you'll
    // need to refetch the Checkout Session here, and expand the line items:
    //
    // const session = await stripe.checkout.sessions.retrieve(
    //   'cs_test_KdjLtDPfAjT1gq374DMZ3rHmZ9OoSlGRhyz8yTypH76KpN4JXkQpD2G0',
    //   {
    //     expand: ['line_items'],
    //   }
    // );
    //
    // const lineItems = session.line_items;
  }

  res.sendStatus(200);
});

app.listen(4242, () => console.log(`Node server listening on port ${4242}!`));


function checkEnv() {
  const price = process.env.PRICE;
  if (price === "price_12345" || !price) {
    console.log("You must set a Price ID in the environment variables. Please see the README.");
    process.exit(0);
  }
}












