const express = require("express");
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
// #####
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

  // const { items, price } = req.body;

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

// app.listen(5252, () =>
//   console.log(`Node server listening at http://localhost:5252`)
// );

app.listen(5252, () =>
  console.log(`Node server listening at http://localhost:5252`)
);
