const express = require('express');
const app = express();
const { resolve } = require('path');

var bodyParser = require('body-parser')
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


// app.use(express.urlencoded());
// ### - Test
app.use(bodyParser.urlencoded({ extended: false }))
// ###



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
app.get('/checkout-session', async (req, res) => {
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  res.send(session);
});



app.post('/create-checkout-session', async (req, res) => {

  const domainURL = process.env.DOMAIN;


  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
      itemsID: JSON.stringify(req.body.itemsID),
    },
  });

  console.log("line:2", customer)
  console.log("line:3", customer.metadata.itemsID)


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










  const line_items1 = req.body.basket?.map((item) => {
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

  console.log("line:1", line_items1)






const line_items = line_items1
console.log( "line:10", line_items)





  const session = await stripe.checkout.sessions.create({
    mode: 'payment',

    line_items: 
    
    [{
      price: process.env.PRICE,
      quantity: 1,
    }]


    // line_items
    // line_items
    // customer: customer.id
    
    // line_items: 





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
  console.log("line:4", session.line_items)
  console.log("line:4.1", session.mode)


  return res.redirect(303, session.url);




  // console.log(session)

});



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
