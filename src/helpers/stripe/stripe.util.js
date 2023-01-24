import { loadStripe } from '@stripe/stripe-js'




// working
// export const stripePromise = loadStripe("pk_test_51MSB2wIlCEHks7DgasuuHAllQvZd4jicmn6wWE2y7PaMEKfZmA8EHRMYL0w7nwiQ3XX45OKlICGcX4VYbENIpHCp00hdOnSYPY");



// test
export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);