// require("dotenv").config();

// test

// const stripe = require("stripe")("sk_test_51MSB2wIlCEHks7DgwfqyPzQNTkKjQiu40vmGeMLba5IJwiX3GclG65xYKU2FEcFAoyJjCO6cQyLQWs9mtERKbriz00i2JtPPK0")
const stripe = "sk_test_51MSB2wIlCEHks7DgwfqyPzQNTkKjQiu40vmGeMLba5IJwiX3GclG65xYKU2FEcFAoyJjCO6cQyLQWs9mtERKbriz00i2JtPPK0"
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// export async function handler(event) {

  export async function   handler(event) {
// export async function handler(event) {

  try {

    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({

      amount,
      currency: "usd",
      payment_method_types: ["card"]

    });

    return {

      statusCode: 200,
      body: JSON.stringify({ paymentIntent })

    }

  } catch (error) {

    console.log({ error });

    return {

      status: 400,
      body: JSON.stringify( { error } )

    }


  }



}